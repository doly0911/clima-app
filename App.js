import react from "react";
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './Components/Formulario';


export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.contenido}> 
         <Formulario/>
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#3E5F8A',
    justifyContent: 'center'
  },

  contenido: {
    marginHorizontal: '5%'
  }
  
});