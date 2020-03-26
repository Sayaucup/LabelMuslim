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

class progresdua extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalID: false,
      tipeId: '',
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
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Modal transparent visible={this.state.modalID}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: '33%',
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
              <View style={{top: 30}}>
                <FlatList
                  data={ID}
                  renderItem={this.Tipee}
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
              Nomor Telepon Usaha
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
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
              keyboardType="number-pad"
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
            Alamat Email Usaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
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
            Web Usaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
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
            FB Usaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
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
            IG Usaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
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
            Youtube Usaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
            />
          </View>
        </View>
        <View
          style={{
            margin: 25,
            alignSelf: 'center',
            height: 3,
            backgroundColor: '#B3B3B3',
            width: '15%',
            borderRadius: 20,
          }}
        />
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
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', height: 60, marginTop: 10}}>
          <View
            style={{
              width: '35%',
              borderBottomWidth: 1,
              borderColor: 'gray',
            }}>
            <Text
              style={{
                fontSize: 17,
                color: '#171717',
                fontFamily: 'nunito.semibold',
              }}>
              Tipe ID
            </Text>
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
            marginTop: 20,
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
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
            />
          </View>
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
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
              keyboardType="number-pad"
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
            Email Pengusaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
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
            Web / Blog Pengusaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
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
            FB Pengusaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
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
            IG Pengusaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
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
            Youtube Pengusaha
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderColor: '#B3B3B3',
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'nunito.semibold',
                fontSize: 17,
                color: '#000',
              }}
              placeholder="Ext : "
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default progresdua;
