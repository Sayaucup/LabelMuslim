import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Jenis = [
  {
    jenis: 'Bisnis Kosmetik',
  },
  {
    jenis: 'Jual Pulsa',
  },
  {
    jenis: 'Jualan Sprei',
  },
  {
    jenis: 'Bisnis Hijab',
  },
  {
    jenis: 'Bisnis Aksesoris',
  },
  {
    jenis: 'Menjual Aneka Camilan',
  },
];

class progressatu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalJenis: false,
      jenis: '',
    };
  }
  Jeniss = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          left: 15,
        }}>
        <TouchableOpacity
          onPress={() => this.setState({jenis: item.jenis, modalJenis: false})}>
          <Text style={{fontFamily: 'nunito.regular', fontSize: 20}}>
            {item.jenis}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <Modal transparent visible={this.state.modalJenis}>
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
                Jenis Usaha
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
                  data={Jenis}
                  renderItem={this.Jeniss}
                  keyExtractor={item => item.toString()}
                />
              </View>
            </View>
          </View>
        </Modal>
        <View>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Nama Usaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : Name Your Company"
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
              fontSize: 15,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Jenis Usaha
          </Text>
          <TouchableOpacity onPress={() => this.setState({modalJenis: true})}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                editable={false}
                defaultValue={this.state.jenis}
                placeholder="Pilih satu jenis usaha"
                style={{color: '#000', fontSize: 17}}
              />
              <Icon name="arrow-down" size={13} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <Text
            style={{
              fontFamily: 'nunito.semibold',
              fontSize: 17,
              color: '#171717',
            }}>
            Alamat Usaha
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
            Nama Jalan
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : "
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
            Komplek / Gedung
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : "
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
            Lantai
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : "
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
            Blok
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : "
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
            Desa
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : "
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
            Kecamatan
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : "
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
            Kabupaten
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : "
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
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#171717',
              fontFamily: 'nunito.semibold',
            }}>
            Provinsi
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder="Ext : "
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

export default progressatu;
