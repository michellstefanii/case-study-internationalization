import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import i18n from './i18n'

export default function App() {
  const [currentLocale, setCurrentLocale] = useState(i18n.locale);

  useEffect(() => {
    const updateLocale = () => {
      setCurrentLocale(i18n.locale);
    };

    i18n.onChange(updateLocale);

    return () => {
      if(i18n.offChange){
        i18n.offChange(updateLocale);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>{i18n.t('text')}</Text>
      <Button title="EN" onPress={() => i18n.setLocale('en')} />
      <Button title="PT" onPress={() => i18n.setLocale('pt')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },
});