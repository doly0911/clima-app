import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './Components/Formulario';


export default function App() {
  const [ busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  //Cuando inicie la app no consulta nada -- false--
  const [consultar, guardarConsultar] = useState(false)

  useEffect(() => {
    if(consultar){
      console.log('Consultando la api')
    }

  }, [consultar]) 

  return (
    <View style={styles.app}>
      <View style={styles.contenido}> 
         <Formulario 
          busqueda = {busqueda}
          guardarBusqueda = {guardarBusqueda}
          guardarConsultar = {guardarConsultar}
         />
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