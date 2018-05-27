import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.638782,
          longitude: 115.217562
        },
        title: 'Hotel NIKKI',
        subtitle: 'Berlokasi Jl. Gatot Subroto IV / 18 Denpasar'
      },
      {
        key:2,
        latlng: {
          latitude:-8.7627558525,
          longitude:  115.175307965
        },
        title: 'Horison Jimbaran Hotel',
        subtitle: 'Berlokasi di Jl. Raya Uluwatu Jimbaran Bali'
      },
      {
        key:3,
        latlng: {
          latitude: -8.7286383333333,
          longitude: 115.165995
        },
        title: 'Solaris Hotel Kuta',
        subtitle: 'Jl. Jenggala, Wana Segara, Kuta, Kabupaten Badung, Bali'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.154599,
          longitude: 115.037306
        },
        title: 'Melka Excelsior Hotel',
        subtitle: 'Jl. Raya Kalibukbuk, Lovina, Bali'
      },
      {
        key:5,
        latlng: {
          latitude:-8.5357344709608,
          longitude: 115.11292123751
        },
        title: 'Hotel Vista Tabanan',
        subtitle: 'Jl. Pulau Batam 31 Tabanan Bali'
      },
      
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Hotel di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>Dedi Rahman@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
