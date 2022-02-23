import react from "react";
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default function Formulario() {
    return (
      
      <View style={styles.formulario}>

        <View>
          <TextInput
          style={styles.input}
          placeholder="Ciudad"
          placeholderTextColor="#666"/>
        </View>

        <View>
          <Picker style={styles.picker}>
            <Picker.Item label="---Seleccione un país---" value=""/>
            <Picker.Item label="Estados Unidos" value="US"/>
            <Picker.Item label="México" value="MX"/>
            <Picker.Item label="Argentina" value="AR"/>
            <Picker.Item label="Colombia" value="CO"/>
            <Picker.Item label="Perú" value="PE"/>
          </Picker>
        </View>
        
        <TouchableWithoutFeedback>
          <View style={styles.btnBuscar}>
            <Text style={styles.txtBuscar}>
              Buscar Clima
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    formulario: {
      marginTop: 100
    },
    input: {
      padding: 10,
      height:50,
      backgroundColor: '#fff',
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center'
    },
    picker: {
      height: 120, 
      backgroundColor: '#fff'
    },
    btnBuscar:{
      marginTop: 50,
      backgroundColor: '#000',
      padding: 10,
      justifyContent: 'center'      
    },
    txtBuscar:{
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 18

    }
  });
  