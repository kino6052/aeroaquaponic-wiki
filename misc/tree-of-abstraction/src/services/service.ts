import { BehaviorSubject } from "rxjs";
import { Id, IInput, initialState, INode, IState, ITree } from "../bridge";

export const act = (state: IState) => ([type, id, value]: IInput): IState => {
  if (type === "change" && id === Id.AddItemInput) {
    return {
      ...state,
      addItemInput: value,
    };
  } else if (type === "click" && id === Id.AddItemButton) {
    const newNode: INode = {
      children: [] as string[],
      id: `${Id.Item}-${state.currentId}`,
      isCollapsed: false,
      parent: state.selectedNode,
      title: state.addItemInput,
    };
    const parent = state.treeNodes[state.selectedNode];
    const newParent =
      (parent && {
        ...parent,
        children: [...parent.children, newNode.id],
      }) ||
      {};
    const treeNodes = {
      ...state.treeNodes,
      ...{ [newParent.id]: newParent },
      ...{ [newNode.id]: newNode },
    };
    const process = (id: string = ""): ITree =>
      treeNodes[id]?.children.reduce(
        (acc, child) => ({ ...acc, [child]: process(child) }),
        {}
      ) || {};
    const tree = Object.values(treeNodes)
      .filter(({ parent }) => parent === "")
      .reduce((acc, node) => {
        return { ...acc, [node.id]: process(node.id) };
      }, {});
    return {
      ...state,
      currentId: state.currentId + 1,
      treeNodes,
      tree,
    };
  } else if (type === "click" && id.includes(Id.Item)) {
    return {
      ...state,
      selectedNode: id,
    };
  }
  return state;
};

export const sequence = (inputs: IInput[]): IState =>
  inputs.reduce((acc, input) => act(acc)(input), initialState);
