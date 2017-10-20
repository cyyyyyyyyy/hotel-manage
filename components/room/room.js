/**
 * 房态组件
 */
import { Component } from 'react';
import { View, Text } from 'react-native';

export default class RoomStatus extends Component {
  componentWillMount() {
    this.setState({ ...this.state, ...this.proops });
  }

  state = {
    status: 'MM',
    roomNum: '0000',
    roomType: '标准房间',
    roomGuest: 'XXX',
    isClock: false,
    isWillLeave: false
  }

  componentWillReceiveProps() {
    this.setState({ ...this.state, ...this.proops });
  }

  render() {
    return (
      <View>
        <Text>{this.state.status}</Text>
        <Text>{this.state.roomNum}</Text>
        <Text>{this.state.roomType}</Text>
        <Text>{this.state.roomGuest}</Text>
      </View>
    );
  }
}
