import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import RadioForm from 'react-native-simple-radio-button';
import Radio from '../../Radio';

import {RadioButton} from 'react-native-paper';

const Badanhukumusaha = [
  {
    value: 'PT',
  },
  {
    value: 'CV',
  },
  {
    value: 'UD',
  },
  {
    value: 'Koperasi',
  },
  {
    value: 'Tidak berbadan usaha',
  },
  {
    value: 'Lain - Lain',
  },
];
const Skalausaha = [
  {
    value: 'Mikro',
  },
  {
    value: 'Kecil',
  },
  {
    value: 'Menengah',
  },
  {
    value: 'Besar',
  },
];
const Ijin = [
  {
    key: '1',
    text: 'Ada',
  },
  {
    key: '2',
    text: 'Tidak ada',
  },
];
const Jarak = [
  {
    key: '1',
    text: 'Iya',
  },
  {
    key: '2',
    text: 'Tidak',
  },
];

class progresempat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalbadanhukum: false,
      hukumusaha: '',
      modalskalausaha: false,
      skalausaha: '',
      checked: '',
    };
  }
  Badanhukum = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          left: 15,
        }}>
        <TouchableOpacity
          onPress={() =>
            this.setState({hukumusaha: item.value, modalbadanhukum: false})
          }>
          <Text style={{fontFamily: 'nunito.regular', fontSize: 20}}>
            {item.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  Skala = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          left: 15,
        }}>
        <TouchableOpacity
          onPress={() =>
            this.setState({skalausaha: item.value, modalskalausaha: false})
          }>
          <Text style={{fontFamily: 'nunito.regular', fontSize: 20}}>
            {item.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Modal transparent visible={this.state.modalbadanhukum}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: '52%',
                width: '60%',
                backgroundColor: '#fff',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  top: 15,
                  fontSize: 18,
                  alignSelf: 'center',
                  fontFamily: 'nunito.black',
                }}>
                BADAN HUKUM USAHA
              </Text>
              <View
                style={{
                  height: 2,
                  backgroundColor: '#f2f2f2',
                  top: 25,
                  marginHorizontal: 10,
                }}
              />
              <View style={{top: 20}}>
                <FlatList
                  data={Badanhukumusaha}
                  renderItem={this.Badanhukum}
                  keyExtractor={item => item.toString()}
                />
              </View>
            </View>
          </View>
        </Modal>
        <Modal transparent visible={this.state.modalskalausaha}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: '37%',
                width: '60%',
                backgroundColor: '#fff',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  top: 15,
                  fontSize: 18,
                  alignSelf: 'center',
                  fontFamily: 'nunito.black',
                }}>
                MODAL SKALA USAHA
              </Text>
              <View
                style={{
                  height: 2,
                  backgroundColor: '#f2f2f2',
                  top: 25,
                  marginHorizontal: 10,
                }}
              />
              <View style={{top: 20}}>
                <FlatList
                  data={Skalausaha}
                  renderItem={this.Skala}
                  keyExtractor={item => item.toString()}
                />
              </View>
            </View>
          </View>
        </Modal>
        <View
          style={{
            height: 60,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: 'gray',
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Badan hukum usaha
          </Text>
          <TouchableOpacity
            onPress={() => this.setState({modalbadanhukum: true})}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                editable={false}
                defaultValue={this.state.hukumusaha}
                placeholder="Pilih satu"
                style={{color: '#000', fontSize: 17}}
              />
              <Icon name="arrow-down" size={13} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Usaha didirikan / dioperasikan pada tahun
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : 2020"
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 60,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Skala usaha
          </Text>
          <TouchableOpacity
            onPress={() => this.setState({modalskalausaha: true})}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                editable={false}
                defaultValue={this.state.skalausaha}
                placeholder="Pilih satu"
                style={{color: '#000', fontSize: 17}}
              />
              <Icon name="arrow-down" size={13} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Ijin - Ijin yang dimiliki :
          </Text>
          <View style={{marginTop: 10}}>
            <Radio options={Ijin} />
          </View>
        </View>
        <View style={{height: 1, backgroundColor: 'gray'}} />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Sertifikasi yang dimiliki :
          </Text>
          <View style={{marginTop: 10}}>
            <Radio options={Ijin} />
          </View>
        </View>
        <View style={{height: 1, backgroundColor: 'gray'}} />
        <View
          style={{
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Jumlah pegawai
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : 100 Pegawai"
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
            />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Apakah ada ruangan untuk sholat ?
          </Text>
          <View style={{marginTop: 10}}>
            <Radio options={Ijin} />
          </View>
        </View>
        <View style={{height: 1, backgroundColor: 'gray'}} />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Apakah berdekatan dengan masjid / musholla dalam jarak kurang dari
            500 meter ?
          </Text>
          <View style={{marginTop: 10}}>
            <Radio options={Jarak} />
          </View>
        </View>
        <View style={{height: 1, backgroundColor: 'gray'}} />
      </ScrollView>
    );
  }
}

export default progresempat;
