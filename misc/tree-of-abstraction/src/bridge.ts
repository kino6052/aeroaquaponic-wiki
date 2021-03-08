import { BehaviorSubject } from "rxjs";
import { act } from "./services/service";
import { EventSubject } from "./utils/EventWrapper";

export type InputType = "change" | "click" | "focus";

export enum Id {
  AddItemButton = "add-item-button",
  AddItemInput = "add-item-input",
  SaveItemButton = "save-item-button",
  Item = "item-element",
  SearchItemsInput = "search-items-input",
  CollapseItemButton = "collapse-button",
  RemoveItemButton = "remove-item-button",
  EditItemButton = "edit-item-button",
  Keyboard = "keyboard",
}

export const RootId = `${Id.Item}-root`;

export type IInput = [InputType, string, string];

export interface INode {
  id: string;
  title: string;
  isCollapsed: boolean;
  children: string[];
  parent: string;
  isHighlighted: boolean;
  indent: number;
}

export type ITree = string[];

export type IState = {
  treeNodes: { [id: string]: INode };
  tree: ITree;
  selectedNode: string;
  addItemInput: string;
  itemSearchInput: string;
  shouldShowControls: boolean;
};

const RootNode = {
  id: RootId,
  children: [],
  isCollapsed: false,
  isHighlighted: false,
  parent: "",
  title: "ROOT",
  indent: 0,
};

export const initialState: IState = {
  treeNodes: {
    [RootId]: RootNode,
  },
  tree: [RootId],
  selectedNode: "",
  itemSearchInput: "",
  addItemInput: "",
  shouldShowControls: false,
};

export const UndoStack: IState[] = [];
export const RedoStack: IState[] = [];

EventSubject.subscribe((event) => {
  const prevState = StateSubject.getValue();
  const newState = act(prevState)(event);
  StateSubject.next(newState);
});

export const StateSubject = new BehaviorSubject<IState>(initialState);

document.addEventListener("keypress", (e) => {
  if (e.code === "KeyZ" && e.ctrlKey)
    EventSubject.next(["change", Id.Keyboard, "ctrl+z"]);
});

document.addEventListener("keypress", (e) => {
  if (e.code === "KeyY" && e.ctrlKey)
    EventSubject.next(["change", Id.Keyboard, "ctrl+y"]);
});

document.addEventListener("keydown", (e) => {
  EventSubject.next(["keydown", Id.Keyboard, e.code]);
});

document.addEventListener("keyup", (e) => {
  EventSubject.next(["keyup", Id.Keyboard, e.code]);
});
