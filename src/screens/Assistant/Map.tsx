// React
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
// Styles
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../styles/Fonts';
// Libraries

export default function MapScreen() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    padding: 16,
    gap: 8,
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
  },
  searchBar: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 16,
    borderTopWidth: 1,
    borderColor: Colors.borderColor,
  },
  input: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    color: '#fff',
  },
  message: {
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    marginBottom: 8,
    borderRadius: 16,
  },
});
