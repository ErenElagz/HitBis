// React
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// Styles
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomMapStyle} from '../../styles/MapStyle';
// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
// Components
import Button from '../../components/Button';
import PlacesList from '../../data/places';

export default function CreateRouteScreen() {
  const nav = useNavigation();
  const [route, setRoute] = React.useState('');
  const CreateRoute = (index: number) => {
    let newRoute = [...route];
    newRoute.push(PlacesList.locations[index]);
    setRoute(newRoute);
    console.log(newRoute);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 32,
          padding: 16,
          borderRadius: 16,
          zIndex: 1,
          backgroundColor: Colors.backgroundColorsSecondary,
        }}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image
            style={{width: 48, height: 48, borderRadius: 32}}
            source={require('../../assets/images/avatar.jpg')}
          />
          <View style={{flex: 1, marginLeft: 16}}>
            <Text
              style={{
                color: Colors.light,
                fontSize: 20,
                fontFamily: Fonts.main,
              }}>
              Hmm, Let's Go!!
            </Text>
            <Text
              style={{
                color: Colors.gray,
                fontSize: 14,
                fontFamily: Fonts.interRegular,
              }}>
              Choose place to create a route
            </Text>
          </View>
        </View>
        <Button
          type="secondary"
          title="Go"
          onPress={() => nav.goBack()}
          style={{flex: 0.3}}
        />
      </View>
      <View>
        <MapView
          customMapStyle={CustomMapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
          {route.map((place, index) => (
            <Marker
              key={index}
              coordinate={place.coordinates}
              title={place.name}
              description={place.description}
            />
          ))}
        </MapView>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, padding: 8}}>
        {PlacesList.locations.map((place, index) => (
          <TouchableOpacity key={index} onPress={() => CreateRoute(index)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 16,
                padding: 16,
                backgroundColor: Colors.backgroundColorsSecondary,
                marginTop: 12,
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: Colors.light,
                    fontSize: 18,
                    fontFamily: Fonts.main,
                  }}>
                  {place.name}
                </Text>
                <Text
                  style={{
                    color: Colors.gray,
                    fontSize: 12,
                    fontFamily: Fonts.interRegular,
                  }}>
                  {place.description}
                </Text>
              </View>
              <Icon name="chevron-right" size={24} color={Colors.light} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    color: Colors.light,
    fontSize: 20,
    fontFamily: Fonts.main,
  },
  map: {
    width: '100%',
    height: 300,
    marginTop: -16,
  },
});
