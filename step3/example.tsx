import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { SAPOButton } from '@sapomemey/react-native-ui-components';

// Image assets
const img6 = "http://localhost:3845/assets/6822a6d8cfdcaf17add7ccb161b9885c45bc5129.png";
const img = "http://localhost:3845/assets/2f7af92a290b833d2dc02c2deffbd3cfb362cb8e.svg";
const img1 = "http://localhost:3845/assets/f7362d49a3a3be2994a501c3031ce41d8e27f562.svg";
const img2 = "http://localhost:3845/assets/63432e748f0b4fa36accd0ad7f9adc059c7dfff2.svg";
const img3 = "http://localhost:3845/assets/bd5331f57d93f8deca5209834c4c4af7e05afa33.svg";
const img4 = "http://localhost:3845/assets/b4290c38b04fe97149e200f7ad77c5fcc5f089d5.svg";
const img5 = "http://localhost:3845/assets/ca5c995063d117899120d09f48565cb96d1f4af1.svg";

const { width } = Dimensions.get('window');

function StatusBariOs({ mode = "dark" }) {
  const isLight = mode === "light";
  return (
    <View style={[styles.statusBar, isLight ? styles.statusBarLight : styles.statusBarDark]}>
      <View style={styles.statusBarContent}>
        <View style={styles.timeContainer}>
          <Text style={[styles.timeText, isLight ? styles.timeTextLight : styles.timeTextDark]}>
            9:41
          </Text>
        </View>
        <View style={styles.dynamicIslandSpacer} />
        <View style={styles.levelsContainer}>
          <View style={styles.iconCellular}>
            <Image source={{ uri: isLight ? img : img3 }} style={styles.iconImage} resizeMode="contain" />
          </View>
          <View style={styles.iconWifi}>
            <Image source={{ uri: isLight ? img1 : img4 }} style={styles.iconImage} resizeMode="contain" />
          </View>
          <View style={styles.iconBattery}>
            <Image source={{ uri: isLight ? img2 : img5 }} style={styles.iconImage} resizeMode="contain" />
          </View>
        </View>
      </View>
    </View>
  );
}

function HomeIndicator() {
  return (
    <View style={styles.homeIndicatorContainer}>
      <View style={styles.homeIndicatorBar} />
    </View>
  );
}

export default function ErrorPages() {
  return (
    <View style={styles.root}>
      <StatusBariOs mode="light" />
      <View style={styles.middle}>
        <View style={styles.illustrationSlot}>
          <Image source={{ uri: img6 }} style={styles.illustrationImage} resizeMode="cover" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Transferencias no disponibles temporalmente
          </Text>
          <Text style={styles.body}>
            Estamos trabajando para solucionarlo a la brevedad posible.
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <SAPOButton.Primary
          label="Entiendo"
          size="medium"
          placement="base"
          onPress={() => console.log("Primary button pressed")}
        />
        <HomeIndicator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f1f4f8',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  statusBar: {
    width: 360,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 21,
  },
  statusBarLight: {
    backgroundColor: 'transparent',
  },
  statusBarDark: {
    backgroundColor: 'transparent',
  },
  statusBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
  timeContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 6,
    justifyContent: 'center',
  },
  timeText: {
    fontFamily: 'SF Pro Semibold',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
  },
  timeTextLight: {
    color: '#000',
  },
  timeTextDark: {
    color: '#fff',
  },
  dynamicIslandSpacer: {
    width: 124,
    height: 10,
  },
  levelsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 6,
    paddingRight: 16,
    gap: 7,
  },
  iconCellular: {
    width: 19.2,
    height: 12.226,
    marginRight: 7,
  },
  iconWifi: {
    width: 17.142,
    height: 12.328,
    marginRight: 7,
  },
  iconBattery: {
    width: 27.328,
    height: 13,
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
  middle: {
    width: 328,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  illustrationSlot: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationImage: {
    width: 120,
    height: 120,
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 8,
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'Flexo-Regular',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    color: '#071525',
    width: '100%',
    textAlign: 'center',
  },
  body: {
    fontFamily: 'Source Sans 3',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#66717e',
    width: '100%',
    textAlign: 'center',
  },
  bottom: {
    width: 360,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    gap: 16,
  },
  homeIndicatorContainer: {
    height: 34,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  homeIndicatorBar: {
    width: 144,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#000',
    marginBottom: 8,
  },
});
