import React, {useEffect, useState} from "react";
import { StyleSheet, Alert, View } from 'react-native';
import Formulario from './Components/Formulario';


export default function App() {
  //hook para guardar datos de entrada
  const [ busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  //Cuando inicie la app no consulte nada -- false--
  const [consultar, guardarConsultar] = useState(false)
  const [res, guardarResultado] = useState({})
  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultarClima = async () => {
      if(consultar){
        const appId= 'c62d1b64c7ff8a5b19a105e5293c498f'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
      
        try {
          const respuesta = await fetch(url)
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);
  
        } catch (error) {
          mostrarALerta();      
        }
      }  
    }
    consultarClima();
  }, [consultar]); 

  const mostrarALerta = () => {
    Alert.alert(
      'Error',
      'No hay resultados, intenta con otra ciudad o país',
      [{ text: 'Ok'}]
    )
  }  

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