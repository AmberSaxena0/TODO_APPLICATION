import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
//
// export default App = () => <Demo />;

export default App = () => {
  const [changeText, setChangeText] = useState(null);
  const [inputValue, setInputVAlue] = useState([]);
  const [datadelete, setdatadelete] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [changeDataIndex, setChangeDataIndex] = useState();
  const [displayTask, setDisplayTask] = useState();
  const [UpdateValueText, setUpdateValueText] = useState();

  console.log(changeText);
  console.log('------>>>>', inputValue);
  console.log('==========>>>>>>>>>>>', changeDataIndex);

  // useEffect(() => {}, [datadelete]);

  const deleteTask = index => {
    setdatadelete(inputValue?.splice(index, 1));
  };
  const editData = (data, index) => {
    setDisplayTask(data);
  };
  const changeData = () => {
    inputValue[changeDataIndex] = UpdateValueText;
  };
  const ValidateCheck = () => {
    if (changeText) {
      setInputVAlue(arr => [...arr, changeText]), setChangeText('');
    } else {
      alert('Enter Valid Task');
    }
  };
  const ItemRender = (data, index) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderWidth: 0.5,
            paddingVertical: 10,
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: 'black'}}>{data}</Text>
        </View>
        <View
          style={{
            margin: 10,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => [
              setModalVisible(true),
              editData(data, index),
              setChangeDataIndex(index),
            ]}>
            <Image
              source={{
                uri: 'https://www.clipartmax.com/png/middle/121-1213715_paper-and-pencil-clipart-black-white-templates-corner-pencil-logo-black-and.png',
              }}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <TouchableOpacity onPress={() => deleteTask(index)}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png',
              }}
              style={{height: 30, width: 30, tintColor: 'blue'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 20,
          paddingVertical: 20,
        }}>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Enter Task"
            placeholderTextColor={'black'}
            style={{fontSize: 20, marginRight: 10}}
            onChangeText={value => setChangeText(value)}
            value={changeText}
          />
        </View>
        <TouchableOpacity
          style={{
            textAlign: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: 'pink',
            borderRadius: 100,
          }}
          onPress={() => ValidateCheck()}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Add Task
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: 10,
          height: '84%',
        }}>
        <FlatList
          data={inputValue}
          renderItem={({item, index}) => ItemRender(item, index)}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderRadius: 20,
                height: '80%',
                width: '90%',
                backgroundColor: 'pink',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 40,
                      color: 'black',
                      marginTop: 5,
                      marginBottom: 30,
                    }}>
                    Change Task
                  </Text>
                  <Text
                    style={{
                      fontSize: 25,
                      color: 'black',
                      marginTop: 5,
                      marginLeft: 20,
                      marginBottom: 40,
                      marginTop: 20,
                    }}>
                    Task : {displayTask}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/37/37752.png',
                      }}
                      style={{height: 30, width: 30, margin: 10}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <TextInput
                  placeholder="Enter Task"
                  placeholderTextColor={'black'}
                  style={{
                    fontSize: 20,
                    margin: 20,
                  }}
                  onChangeText={value => setUpdateValueText(value)}
                  value={UpdateValueText}
                />
                <TouchableOpacity
                  onPress={() => {
                    changeData(),
                      setUpdateValueText(''),
                      setModalVisible(!modalVisible);
                  }}
                  style={{
                    marginTop: 100,
                    alignSelf: 'center',
                    borderRadius: 20,
                    borderWidth: 2,
                  }}>
                  <Text style={{fontSize: 25, margin: 20, color: 'black'}}>
                    Change Current Task
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
