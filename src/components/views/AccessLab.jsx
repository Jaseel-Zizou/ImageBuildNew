import React, { Component } from 'react';
import FrameComp from './Frame.tsx'
export class InventoryList extends Component {
  state = {
    isTrue: false
  }

  dummyFun = async () => {
    await this.setState({
      isTrue: true
    })
  }

  render() {
    return (
      <div >
        <FrameComp dummyFun={this.dummyFun} />
      </div>
    );
  }
}

export default InventoryList;