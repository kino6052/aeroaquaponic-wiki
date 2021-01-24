import * as React from "react";
import { InitSubject } from "./init.service";
import { IInput, Service, SubmitId } from "./service";
import { StateService } from "./state.refactored.service";
import "./styles.css";
import { useSharedState } from "./utils";
import './field01.refactored.service';
import './field02.refactored.service';
import './field03.refactored.service';

const EventWrapper: React.FC = (props) => {
  const children = props.children;
  const childrenWithProps = React.Children.map<
    React.ReactNode,
    React.ReactNode
  >(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          Service.EventSubject.next(["click", child.props.id, ""]);
        },
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          Service.EventSubject.next([
            "change",
            child.props.id,
            e?.target?.value
          ]);
        },
        onFocus: (e: React.FocusEvent) => {
          e.preventDefault();
          Service.EventSubject.next(["focus", child.props.id, ""]);
        }
      });
    }
    return child;
  });
  return <>{childrenWithProps}</>;
};

const Form = (props: { inputs: IInput[] }) => {
  const { inputs } = props;
  React.useEffect(() => {
    InitSubject.next();
  }, []);
  return (
    <form>
      {inputs.map((input) => (
        <div key={input.id} style={{ flexDirection: "column" }}>
          <div>
            <EventWrapper>
              <input
                disabled={input.isDisabled}
                id={input.id}
                value={input.value}
              />
            </EventWrapper>
            <EventWrapper>
              <button id={`${input.id}-button`}>Validate</button>
            </EventWrapper>
          </div>
          {input.error && <p style={{ color: "red" }}>{input.error}</p>}
        </div>
      ))}
      <EventWrapper>
        <button id={SubmitId}>Submit</button>
      </EventWrapper>
    </form>
  );
};

export default function App() {
  const [state] = useSharedState(StateService.getInstance().StateSubject);
  return (
    <div className="App">
      <Form inputs={state} />
    </div>
  );
}
