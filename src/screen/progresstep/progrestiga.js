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

const ID = [
  {
    tipeId: 'KTP',
  },
  {
    tipeId: 'SIM',
  },
  {
    tipeId: 'PASPORT',
  },
];
const Agama = [
  {
    agama: 'ISLAM',
  },
  {
    agama: 'KRISTEN',
  },
  {
    agama: 'YAHUDI',
  },
  {
    agama: 'HINDU',
  },
  {
    agama: 'BUDDHA',
  },
];

class progrestiga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalID: false,
      tipeId: '',
      modalAgama: false,
      agama: '',
    };
  }

  Tipee = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          left: 15,
        }}>
        <TouchableOpacity
          onPress={() => this.setState({tipeId: item.tipeId, modalID: false})}>
          <Text style={{fontFamily: 'nunito.regular', fontSize: 20}}>
            {item.tipeId}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  Agamaa = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          left: 15,
        }}>
        <TouchableOpacity
          onPress={() => this.setState({agama: item.agama, modalAgama: false})}>
          <Text style={{fontFamily: 'nunito.regular', fontSize: 20}}>
            {item.agama}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Modal transparent visible={this.state.modalID}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: '30%',
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
                TIPE ID
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
                  data={ID}
                  renderItem={this.Tipee}
                  keyExtractor={item => item.toString()}
                />
              </View>
            </View>
          </View>
        </Modal>
        <Modal transparent visible={this.state.modalAgama}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: '43%',
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
                AGAMA
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
                  data={Agama}
                  renderItem={this.Agamaa}
                  keyExtractor={item => item.toString()}
                />
              </View>
            </View>
          </View>
        </Modal>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 17,
                color: '#171717',
                fontFamily: 'nunito.semibold',
              }}>
              Nama Pengusaha
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: 'red',
                left: 5,
                fontFamily: 'nunito.semibold',
              }}>
              *
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : Your Name"
              style={{
                paddingRight: 10,
                paddingLeft: 10,
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', height: 60, marginTop: 5}}>
          <View
            style={{
              width: '35%',
              borderBottomWidth: 1,
              borderColor: 'gray',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#171717',
                  fontFamily: 'nunito.semibold',
                }}>
                Tipe ID
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: 'red',
                  left: 5,
                  fontFamily: 'nunito.semibold',
                }}>
                *
              </Text>
            </View>
            <TouchableOpacity onPress={() => this.setState({modalID: true})}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  left: -10,
                }}>
                <TextInput
                  editable={false}
                  defaultValue={this.state.tipeId}
                  placeholder="Pilih Satu"
                  style={{
                    color: '#000',
                    fontSize: 17,
                  }}
                />
                <Icon name="arrow-down" size={13} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '10%',
            }}
          />
          <View
            style={{
              width: '60%',
              borderBottomWidth: 1,
              borderColor: 'gray',
            }}>
            <Text
              style={{
                fontSize: 17,
                color: '#171717',
                fontFamily: 'nunito.semibold',
              }}>
              ID
            </Text>
            <TextInput
              placeholder="Masukan ID"
              style={{
                fontFamily: 'nunito.semibold',
                color: '#000',
                fontSize: 17,
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
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 17,
                color: '#171717',
                fontFamily: 'nunito.semibold',
              }}>
              Agama Pengusaha
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: 'red',
                left: 5,
                fontFamily: 'nunito.semibold',
              }}>
              *
            </Text>
          </View>
          <TouchableOpacity onPress={() => this.setState({modalAgama: true})}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                editable={false}
                defaultValue={this.state.agama}
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
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 17,
                color: '#171717',
                fontFamily: 'nunito.semibold',
              }}>
              No HP Pengusaha
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: 'red',
                left: 5,
                fontFamily: 'nunito.semibold',
              }}>
              *
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : 0123456789"
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              keyboardType="number-pad"
            />
          </View>
        </View>
        <View
          style={{
            marginVertical: 25,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.bold',
              textAlign: 'center',
            }}>
            Bawahan untuk berkomunikasi dengan OBM
          </Text>
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
            Nama Lengkap
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : Your Name"
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
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Jabatan
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : Pegawai"
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
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            No HP
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : 0123456789"
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
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Email
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : satudua3@gmail.com"
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default progrestiga;
