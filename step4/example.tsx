
// React Native

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SAPOTopNavigation, SAPOButton, SAPOAmount, SAPOHorizontalLine } from '@SAPO/react-native-ui-components';

// Image assets
const imgVector = "http://localhost:3845/assets/79bdd4e6d11459395069921b7be2a6a7309525e5.svg";
const imgVector1 = "http://localhost:3845/assets/0c74d013edb9337ee7ef749427e592159df74351.svg";
const imgVector2 = "http://localhost:3845/assets/57cfcf5ef7d16215a7c412ada7509212dc759fbf.svg";
const imgVector3 = "http://localhost:3845/assets/4b67607f4b1e528092d65cef005d93b8b7ea290e.svg";
const imgVector4 = "http://localhost:3845/assets/7ddae5bffdefb5f7bd2f0a64ced916d8271b969e.svg";
const img = "http://localhost:3845/assets/938360c4a591eb2c7deb2b6fed264e1b9c49d3cf.svg";
const imgGradientLayer03 = "http://localhost:3845/assets/78e21115af3044f8e23d7d537e21bc28fc50734b.svg";
const imgFade = "http://localhost:3845/assets/673c8d101437580ae7dc5dff070657972a3b5a3b.svg";

// Icon components
function CheckCircle() {
  return (
    <View style={styles.iconContainer}>
      <Image source={{ uri: imgVector }} style={styles.iconImage} />
    </View>
  );
}
function PaperPlaneRight() {
  return (
    <View style={styles.iconContainer}>
      <Image source={{ uri: imgVector1 }} style={styles.iconImage} />
    </View>
  );
}
function Wallet() {
  return (
    <View style={styles.iconContainer}>
      <Image source={{ uri: imgVector2 }} style={styles.iconImage} />
    </View>
  );
}
function MoneySolesExchange() {
  return (
    <View style={styles.iconContainer}>
      <Image source={{ uri: imgVector3 }} style={styles.iconImage} />
    </View>
  );
}
function MoneySolesCircle() {
  return (
    <View style={styles.iconContainer}>
      <Image source={{ uri: imgVector4 }} style={styles.iconImage} />
    </View>
  );
}
function StatusPageStatus() {
  return (
    <View style={styles.statusAvatar}>
      <View style={styles.statusIconWrapper}>
        <Image source={{ uri: img }} style={styles.statusIcon} />
      </View>
    </View>
  );
}
function WallpaperWallpaperHalfRetailLight() {
  return (
    <View style={styles.wallpaperContainer}>
      <Image source={{ uri: imgGradientLayer03 }} style={styles.wallpaperGradient} />
      <Image source={{ uri: imgFade }} style={styles.wallpaperFade} />
    </View>
  );
}
function HomeIndicator() {
  return (
    <View style={styles.homeIndicatorWrapper}>
      <View style={styles.homeIndicator} />
    </View>
  );
}

export default function PageTemplateStatusPage() {
  return (
    <View style={styles.root}>
      <WallpaperWallpaperHalfRetailLight />
      <View style={styles.topNav}>
        <SAPOTopNavigation.Third title="Title">
          <SAPOTopNavigation.Title>Title</SAPOTopNavigation.Title>
          <SAPOTopNavigation.IconButton1 iconName="plus" />
          <SAPOTopNavigation.IconButton2 iconName="plus" />
        </SAPOTopNavigation.Third>
      </View>
      <View style={styles.content}>
        <View style={styles.topSection}>
          <StatusPageStatus />
          <View style={styles.section}>
            <View style={styles.titleBlock}>
              <Text style={styles.heading2}>¡Transferencia exitosa!</Text>
              <Text style={styles.body}>Martes, 30 de septiembre de 2025 - 10:09 a.m.</Text>
            </View>
            <View style={styles.actionsRow}>
              <SAPOButton.Secondary label="Descargar" size="small" placement="base" showIcon onPress={() => {}} />
              <SAPOButton.Secondary label="Compartir" size="small" placement="base" showIcon onPress={() => {}} />
            </View>
            <View style={styles.summarySection}>
              {/* Monto */}
              <View style={styles.listItem}>
                <MoneySolesCircle />
                <View style={styles.listItemContent}>
                  <Text style={styles.bodySmall}>Monto</Text>
                  <SAPOAmount value={100} theme={'light' as any} showFraction showSymbol accessibilityLabel="accessibilityLabel" crossedAccessibilityLabel="crossedAccessibilityLabel" />
                  <SAPOHorizontalLine.Thin />
                </View>
              </View>
              {/* Monto de cambio */}
              <View style={styles.listItem}>
                <MoneySolesExchange />
                <View style={styles.listItemContent}>
                  <Text style={styles.bodySmall}>Monto de cambio</Text>
                  <SAPOAmount value={355} theme={'light' as any} showFraction showSymbol accessibilityLabel="accessibilityLabel" crossedAccessibilityLabel="crossedAccessibilityLabel" />
                  <Text style={styles.bodySmallRate}>$1.00 = S/3.511</Text>
                  <SAPOHorizontalLine.Thin />
                </View>
              </View>
              {/* Desde */}
              <View style={styles.listItem}>
                <Wallet />
                <View style={styles.listItemContent}>
                  <Text style={styles.bodySmall}>Desde</Text>
                  <Text style={styles.body}>Cuenta de ahorro dólares ****7890</Text>
                  <SAPOHorizontalLine.Thin />
                </View>
              </View>
              {/* Enviar a */}
              <View style={styles.listItem}>
                <PaperPlaneRight />
                <View style={styles.listItemContent}>
                  <Text style={styles.bodySmall}>Enviar a</Text>
                  <Text style={styles.body}>Daniel Q.</Text>
                  <Text style={styles.bodySmall}>****4589</Text>
                  <SAPOHorizontalLine.Thin />
                </View>
              </View>
              {/* Número de operación */}
              <View style={styles.listItem}>
                <CheckCircle />
                <View style={styles.listItemContent}>
                  <Text style={styles.bodySmall}>Número de operación</Text>
                  <Text style={styles.body}>03109899</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.stickySurface}>
        <SAPOButton.Primary label="Realizar otra transferencia" size="medium" placement="base" onPress={() => {}} />
        <SAPOButton.Secondary label="Ir al inicio" size="medium" placement="base" onPress={() => {}} />
        <HomeIndicator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f1f4f8',
    borderRadius: 48,
    overflow: 'hidden',
    alignItems: 'center',
    paddingBottom: 36,
    paddingTop: 0,
    position: 'relative',
  },
  wallpaperContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 360,
    height: 800,
    overflow: 'hidden',
    backgroundColor: '#f1f4f8',
  },
  wallpaperGradient: {
    position: 'absolute',
    width: 360,
    height: 461,
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  wallpaperFade: {
    position: 'absolute',
    width: 757,
    height: 353,
    top: 313,
    left: '50%',
    marginLeft: -378.5,
    resizeMode: 'cover',
  },
  topNav: {
    width: '100%',
    zIndex: 10,
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 200,
  },
  topSection: {
    width: '100%',
    alignItems: 'center',
    zIndex: 2,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 24,
    minHeight: 360,
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: -36,
    gap: 16,
    zIndex: 1,
  },
  titleBlock: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    gap: 8,
  },
  heading2: {
    fontFamily: 'Flexo-Regular',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    color: '#071525',
    textAlign: 'center',
  },
  body: {
    fontFamily: 'Source Sans 3',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#66717e',
    textAlign: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  summarySection: {
    width: '100%',
    marginTop: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 16,
    width: '100%',
    backgroundColor: 'transparent',
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  listItemContent: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
    justifyContent: 'center',
    minHeight: 1,
    minWidth: 1,
  },
  bodySmall: {
    fontFamily: 'Source Sans 3',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: '#66717e',
  },
  bodySmallRate: {
    fontFamily: 'Source Sans 3',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: '#66717e',
    marginTop: 2,
  },
  statusAvatar: {
    backgroundColor: '#398439',
    borderRadius: 36,
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -36,
  },
  statusIconWrapper: {
    width: 42.667,
    height: 42.667,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusIcon: {
    width: 42.667,
    height: 42.667,
    resizeMode: 'contain',
  },
  stickySurface: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 360,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderStyle: 'solid',
    paddingTop: 16,
    paddingBottom: 0,
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 16,
  },
  homeIndicatorWrapper: {
    height: 34,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIndicator: {
    height: 5,
    width: 144,
    borderRadius: 100,
    backgroundColor: '#000',
    alignSelf: 'center',
  },
});
