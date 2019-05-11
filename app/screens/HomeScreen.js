import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text
} from 'react-native';

const itemType = {
  type: '', // jpg, rar, mp4
  owner: '',
  name: '',
  time: '',
  label: '',
  cost: '',
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        {
          type: 'jpg', // jpg, rar, mp4
          owner: 'kiyumi',
          name: 'KiYuMi',
          time: 'Jan 02',
          label: 'file',
          cost: 'Unlimited',
        }
      ]
    }
  }

  renderItem = (item) => {
    return (<Text>{item.name}</Text>)
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
