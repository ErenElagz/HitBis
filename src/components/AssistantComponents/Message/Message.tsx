import React from 'react';
import {View, Text} from 'react-native';
import styles from './Message.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../Button';

function Message(props: any) {
  const date = new Date();
  return (
    <View style={[styles.message, {backgroundColor: '#ffffff25'}]} key={props.message}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Icon name="account" size={20} color="#fff" />
          <Text style={{fontWeight: 500, color: '#fff'}}>Username</Text>
        </View>
        <Text style={{fontSize: 10, fontWeight: 600, color: '#fff'}}>
          {date.getHours()}:{date.getMinutes()}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          width: '100%',
          flex: 1,
          paddingLeft: 0,
          color: '#fff',
        }}>
        {props.message}
      </Text>
    </View>
  );
}

export default Message;
