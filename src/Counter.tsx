import * as React from "react";
import * as RN from "react-native";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

export interface CounterProps {}

@observer
export class Counter extends React.Component<CounterProps> {
  @observable private _counter1: number; // Observer not triggered;
  @observable private _counter2: number = 1;

  constructor(props: CounterProps) {
    super(props);
    this._counter1 = 1;
  }

  render() {
    return (
      <RN.View style={_styles.container}>
        <RN.View>
          <RN.Text>Counter 1 - Not rerendering</RN.Text>
          <RN.Text>value = {this._counter1}</RN.Text>
          <RN.Button title="Add to counter 1" onPress={this._addToCounter1} />
        </RN.View>
        <RN.View>
          <RN.Text>Counter 2</RN.Text>
          <RN.Text>value = {this._counter2}</RN.Text>
          <RN.Button title="Add to counter 2" onPress={this._addToCounter2} />
        </RN.View>
      </RN.View>
    );
  }

  @action
  private _addToCounter1 = () => {
    this._counter1++;
  };

  @action
  private _addToCounter2 = () => {
    this._counter2++;
  };
}

const _styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
