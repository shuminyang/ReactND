import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

class CardIndividual extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.navigation.state.params.title}
        </Text>
        <Text>
          {this.props.navigation.state.params.subTitle}
        </Text>
      </View>
    )
  }
}

export default CardIndividual