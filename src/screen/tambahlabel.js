import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';

import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Progressatu from './progresstep/progressatu';
import Progresdua from './progresstep/progresdua';
import Progrestiga from './progresstep/progrestiga';
import Progresempat from './progresstep/progresempat';

const ID = [
  {
    tipe: 'KTP',
  },
  {
    tipe: 'SIM',
  },
  {
    tipe: 'PASPORT',
  },
];

class tambahlabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalID: false,
      tipe: '',
    };
  }
  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
    },
  };

  toast = () => {
    ToastAndroid.showWithGravity(
      'Success',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
    this.props.navigation.navigate('Home');
  };

  render() {
    const progressStepsStyle = {
      activeStepIconBorderColor: '#4A86E8',
      borderWidth: 3,
      activeLabelColor: '#4A86E8',
      labelFontFamily: 'nunito.regular',
      activeStepNumColor: '#2E2E2E',
      activeStepIconColor: '#fff',
      disabledStepIconColor: '#B9B9B9',
      completedStepIconColor: '#fff',
      completedProgressBarColor: '#4A86E8',
      completedCheckColor: '#4A86E8',
      progressBarColor: '#B9B9B9',
    };

    const buttonTextStyle = {
      fontSize: 20,
      color: '#fff',
    };
    const buttonTextStyle2 = {
      backgroundColor: '#4A86E8',
      borderRadius: 8,
      paddingHorizontal: 70,
      paddingVertical: 10,
    };

    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              marginLeft: 10,
            }}
            onPress={() => this.props.navigation.navigate('Home')}
            underlayColor={'rgba(0,0,0,0.8)'}>
            <Icon name="arrow-left" size={25} color="#171717" />
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: '#171717',
                  fontFamily: 'nunito.bold',
                }}>
                Tambah Label
              </Text>
            </TouchableOpacity>
          </View>
        </View>
          <ProgressSteps {...progressStepsStyle}>
            <ProgressStep
              label="Data Usaha"
              nextBtnTextStyle={buttonTextStyle}
              nextBtnStyle={buttonTextStyle2}
              scrollViewProps={this.defaultScrollViewProps}>
              <Progressatu />
            </ProgressStep>
            <ProgressStep
              label="Two"
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={buttonTextStyle}
              nextBtnStyle={buttonTextStyle2}
              previousBtnStyle={buttonTextStyle2}
              previousBtnTextStyle={buttonTextStyle}>
              <Progresdua />
            </ProgressStep>
            <ProgressStep
              label="Theree"
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={buttonTextStyle}
              nextBtnStyle={buttonTextStyle2}
              previousBtnStyle={buttonTextStyle2}
              previousBtnTextStyle={buttonTextStyle}>
              <Progrestiga />
            </ProgressStep>
            <ProgressStep
              label="Four"
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={buttonTextStyle}
              nextBtnStyle={buttonTextStyle2}
              previousBtnStyle={buttonTextStyle2}
              previousBtnTextStyle={buttonTextStyle}>
              <Progresempat />
            </ProgressStep>
            <ProgressStep
              label="five"
              onSubmit={this.toast}
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={buttonTextStyle}
              nextBtnStyle={buttonTextStyle2}
              previousBtnStyle={buttonTextStyle2}
              previousBtnTextStyle={buttonTextStyle}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text>This is the content within step 5!</Text>
              </View>
            </ProgressStep>
          </ProgressSteps>
      </View>
    );
  }
}

export default tambahlabel;
