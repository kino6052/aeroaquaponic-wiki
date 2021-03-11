import React from "react";
import { Id, IState } from "../bridge";
import { EventWrapper } from "../utils/EventWrapper";

export const Container = (props: { state: IState }) => (
  <>
    <EventWrapper id={Id.SearchItemsInput}>
      <input
        autoFocus
        placeholder="Search"
        value={props.state.itemSearchInput}
      />
    </EventWrapper>
    <br />
    <ul>
      {props.state.tree.map((id) => {
        const node = props.state.treeNodes[id];
        return (
          <li
            key={id}
            style={{
              marginLeft: node.indent * 32,
              backgroundColor:
                (node.isHighlighted && "yellow") ||
                (node.id === props.state.selectedNode && "lightgrey") ||
                "unset",
            }}
          >
            <EventWrapper
              key={id}
              id={`${Id.Item}-${id.replace(`${Id.Item}-`, "")}`}
            >
              {!node.isEditable && <span>{node.title}</span>}
              {node.isEditable && <input autoFocus value={node.title} />}
            </EventWrapper>{" "}
            <span>{node.isCollapsed ? "(...)" : ""}</span>
            {/* {true && (
              <>
                <span> </span>
                <EventWrapper
                  id={`${Id.CollapseItemButton}-${id.replace(
                    `${Id.Item}-`,
                    ""
                  )}`}
                >
                  <button>{node.isCollapsed ? "Open" : "Close"}</button>
                </EventWrapper>
                <EventWrapper
                  id={`${Id.EditItemButton}-${id.replace(`${Id.Item}-`, "")}`}
                >
                  <button>Edit</button>
                </EventWrapper>
                <EventWrapper
                  id={`${Id.RemoveItemButton}-${id.replace(`${Id.Item}-`, "")}`}
                >
                  <button>Delete</button>
                </EventWrapper>
              </>
            )} */}
          </li>
        );
      })}
    </ul>
  </>
);
