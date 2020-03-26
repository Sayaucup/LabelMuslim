import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class Radio extends Component {
  state = {
    value: '',
  };

  render() {
    const {options} = this.props;
    const {value} = this.state;

    return (
      <View>
        {options.map(item => {
          return (
            <View key={item.key} style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  this.setState({
                    value: item.key,
                  });
                }}>
                {value === item.key && <View style={styles.checkedCircle} />}
              </TouchableOpacity>
              <Text style={{left: 5, color: '#000', fontSize: 17}}>
                {item.text}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 12,
    height: 12,
    borderRadius: 7,
    backgroundColor: '#4A86E8',
  },
});
