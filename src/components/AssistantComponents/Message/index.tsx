import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

const styles = StyleSheet.create({
  message: {
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    marginBottom: 8,
    borderRadius: 16,
  },
});

export default Message;
