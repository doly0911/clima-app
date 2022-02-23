import react from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Formulario() {
    return (
      <View style={styles.container}>
        <Text>Formularioooo</Text>    
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  