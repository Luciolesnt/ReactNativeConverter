import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';

import { format } from 'date-fns';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';
import { Button } from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';

// gives out the width and height of the device
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.02,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screen.width * 0.37,
    height: screen.height * 0.37,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.23,
    height: screen.width * 0.23,
  },
  textHeader: {
    color: colors.white,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,

  },
  text: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 14,
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  }
});

export default ({ navigation }) => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = '0.8345';
  const date = new Date();

  const [scrollEnabled, setScrollEnabled] = useState(false);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
          
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/background.png')} style={styles.logoBackground} resizeMode="contain" />
            <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>

          <ConversionInput 
            text={baseCurrency}
            value="1234"
            onButtonPress={() => navigation.push("CurrencyList", { title: 'Base Currency' })}
            onChangeText={text => console.log("text", text)}
            keyboardType="numeric"
          />
          <ConversionInput 
            text={quoteCurrency}
            value="1234"
            onButtonPress={() => navigation.push("CurrencyList", { title: 'Quote Currency' })}
            editable={false}
          />

          <Text style={styles.text}>
            {`1 ${baseCurrency} ${conversionRate} ${quoteCurrency} as of ${format(date, 'MMMM do, yyyy')}.`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert("todo!")} />
          <KeyboardSpacer onToggle={(keyboardIsVisible) => setScrollEnabled(keyboardIsVisible)} />
        </View>
      </ScrollView>
    </View>
  );
};