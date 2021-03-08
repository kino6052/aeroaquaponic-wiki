import { intersection, union, without } from "lodash";
import {
  Id,
  IInput,
  initialState,
  INode,
  IState,
  RedoStack,
  RootId,
  UndoStack,
} from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";

const getDescendants = (id: string, state: IState): string[] => {
  const node = state.treeNodes[id];
  if (!node) return [];
  return node.children.reduce((acc, id) => {
    return [...acc, id, ...getDescendants(id, state)] as string[];
  }, [] as string[]);
};

const getParents = (id: string, state: IState): string[] => {
  const node = state.treeNodes[id];
  if (!node) return [];
  return [...getParents(node.parent, state), id];
};

const updateHighligted = (state: IState) => {
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const value = state.itemSearchInput;
    const isHighlighted =
      !!value && node.title.toLowerCase().includes(value.toLowerCase());
    return {
      ...node,
      isHighlighted,
    };
  });
  return newTreeNodes;
};

const updateTreeNodes = (state: IState, cb: (node: INode) => INode) =>
  Object.values(state.treeNodes)
    .map(cb)
    .reduce(
      (acc, node) => ({ ...acc, [node.id]: node }),
      {} as typeof state.treeNodes
    );

const changeAddItemInput = (state: IState, [, , value]: IEvent): IState => {
  return {
    ...state,
    addItemInput: value,
  };
};

const clickAddItemInput = (state: IState, event: IEvent): IState => {
  UndoStack.push(state);
  const selectedId = state.selectedNode || RootId;
  const newNode: INode = {
    children: [] as string[],
    id: `${Id.Item}-${Utils.generateId()}`,
    isCollapsed: false,
    parent: selectedId,
    title: state.addItemInput,
    isHighlighted: false,
    indent: state.treeNodes[selectedId].indent + 1,
  };
  const parent = state.treeNodes[selectedId];
  const newParent = {
    [parent.id]: {
      ...parent,
      children: [...parent.children, newNode.id],
    },
  };
  const treeNodes = {
    ...state.treeNodes,
    ...newParent,
    ...{ [newNode.id]: newNode },
  };
  return {
    ...state,
    treeNodes,
  };
};

const clickRemoveItemButton = (state: IState, [, id]: IEvent): IState => {
  UndoStack.push(state);
  const processedId = id.replace(`${Id.RemoveItemButton}-`, "");
  const itemId = `${Id.Item}-${processedId}`;
  const parentId = state.treeNodes[itemId]?.parent;
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const isFound = node.id === itemId && node.id !== RootId;
    const isParent = node.id === parentId;
    if (isParent)
      return {
        ...node,
        children: node.children.filter((id) => id !== itemId),
      };
    if (isFound)
      return {
        ...node,
        parent: "",
      };
    return node;
  });
  return {
    ...state,
    treeNodes: newTreeNodes,
  };
};

const clickItem = (state: IState, [, id]: IEvent): IState => {
  return {
    ...state,
    selectedNode: id,
  };
};

const changeSearchInput = (state: IState, [, , value]: IEvent): IState => {
  return {
    ...state,
    itemSearchInput: value,
  };
};

const process = (state: IState): IState => {
  const currentTree = [RootId, ...getDescendants(RootId, state)];
  const highlighted = Object.values(state.treeNodes)
    .filter(({ isHighlighted }) => isHighlighted)
    .map(({ id }) => id);
  const highlightedParents = highlighted.reduce(
    (acc, id) => {
      return [...acc, ...getParents(id, state)];
    },
    [...highlighted] as string[]
  );
  const selectedParents = getParents(state.selectedNode, state);
  const collapsed = Object.values(state.treeNodes)
    .filter(({ isCollapsed }) => isCollapsed)
    .map(({ id }) => id);
  const collapsedDescendants = collapsed.reduce((acc, id) => {
    return [...acc, ...getDescendants(id, state)];
  }, [] as string[]);
  if (!state.itemSearchInput) {
    const toExclude = without(
      collapsedDescendants,
      ...highlightedParents,
      ...selectedParents
    );
    const tree = without(currentTree, ...toExclude);
    return { ...state, tree };
  } else {
    return {
      ...state,
      tree: intersection(
        currentTree,
        union(highlightedParents, selectedParents)
      ),
    };
  }
};

const collapseItem = (state: IState, [, id]: IEvent): IState => {
  const processedId = id.replace(`${Id.CollapseItemButton}-`, "");
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const processedNodeId = node.id.replace(`${Id.Item}-`, "");
    const isFound = processedNodeId === processedId;
    if (!isFound) return node;
    const isCollapsed = !node.isCollapsed;
    return {
      ...node,
      isCollapsed,
    };
  });
  return {
    ...state,
    treeNodes: newTreeNodes,
  };
};

export const act = (state: IState) => ([type, id, value]: IEvent): IState => {
  const redoResult =
    type === "change" &&
    id === Id.Redo &&
    UndoStack.push(state) &&
    RedoStack.pop();
  const undoResult =
    type === "change" &&
    id === Id.Undo &&
    RedoStack.push(state) &&
    UndoStack.pop();
  const changeAddItemInputResult =
    type === "change" &&
    id === Id.AddItemInput &&
    changeAddItemInput(state, [type, id, value]);
  const clickAddItemInputResult =
    type === "click" &&
    id === Id.AddItemButton &&
    clickAddItemInput(state, [type, id, value]);
  const clickItemResult =
    type === "click" &&
    id.includes(Id.Item) &&
    clickItem(state, [type, id, value]);
  const changeSearchInputResult =
    type === "change" &&
    Id.SearchItemsInput &&
    changeSearchInput(state, [type, id, value]);
  const collapseItemResult =
    type === "click" &&
    id.includes(Id.CollapseItemButton) &&
    collapseItem(state, [type, id, value]);
  const clickRemoveItemButtonResult =
    type === "click" &&
    id.includes(Id.RemoveItemButton) &&
    clickRemoveItemButton(state, [type, id, value]);
  const eventProcessingResult =
    undoResult ||
    redoResult ||
    changeAddItemInputResult ||
    clickAddItemInputResult ||
    clickItemResult ||
    changeSearchInputResult ||
    collapseItemResult ||
    clickRemoveItemButtonResult ||
    state;
  return process({
    ...eventProcessingResult,
    treeNodes: updateHighligted(eventProcessingResult),
  });
};

export const sequence = (inputs: IInput[]): IState =>
  inputs.reduce((acc, input) => act(acc)(input), initialState);
