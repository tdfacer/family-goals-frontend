import { FamilyGoals, KeyResult, OKR, OKRGroup } from './family-goals';
import React from 'react'

interface IProps {
  familyGoals?: OKRGroup[];
}

interface IState {
  familyGoals: OKRGroup[];
}

export default class FamilyGoalsComponent extends React.Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {familyGoals: []};
  }

  componentDidMount() {
    this.GetFamilyGoals();
  }

  GetFamilyGoals() {
    this.setState({ familyGoals: FamilyGoals });
  }

  getKeyResult(keyResult: KeyResult) {
    return (
      <div>
        <h2>{ keyResult.title }</h2>
        <h4>{ keyResult.description }</h4>
      </div>
    );
  }

  getOKR(okr: OKR) {
    const keyResults = okr.keyResults.map(this.getKeyResult);
    return (
      <div>
      {
        keyResults.map(x => x)
      }
      </div>
    );
  }

  render() {
    const items = this.state.familyGoals.map((item, i) => (
      <div>
        <h1>{ item.owner }</h1>
      {
        <div>{ item.OKRs.map(o => this.getOKR(o)) }</div>
      }
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ items }</div>
      </div>
    );
  }
}
