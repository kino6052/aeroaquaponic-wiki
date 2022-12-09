import produce from "immer";
import { Id, IState, TEvent } from "../interfaces";

export const reduce = (event: TEvent, state: IState): IState => {
  return produce(state, (draft) => {
    if (event[0] === "select") {
      if (draft.next.includes(event[1] as Id)) {
        const id = event[1] as Id;
        draft.currentId && draft.history.push(draft.currentId);
        draft.currentId = id;
        draft.next = draft.data[id].children;
        return;
      }
      if (draft.history.includes(event[1] as Id)) {
        const id = event[1] as Id;
        draft.next = draft.data[id].children;
        const index = draft.history.findIndex((_id) => _id === id);
        draft.history = draft.history.slice(0, index);
        draft.currentId = id;
        return;
      }
      return;
    }
  });
};

export const compose = (state: IState) => (events: TEvent[]) =>
  events.reduce((_state, event) => reduce(event, _state), state);
