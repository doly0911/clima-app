import React, {useEffect, useState} from "react";
import { StyleSheet, Alert, View } from 'react-native';
import Formulario from './Components/Formulario';
import Clima from "./Components/Clima";


export default function App() {
  //hook para guardar datos de entrada
  const [ busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  //Cuando inicie la app no consulte nada -- false--
  const [consultar, guardarConsultar] = useState(false)

  const [resultado, guardarResultado] = useState({})
  const {ciudad, pais} = busqueda;
  const [bgcolor, guardarBgColor] = useState('#3E5F8A')

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

          //Modifica los colores de fondo segun la temperatura
          
          const kelvin= 273.15;
          const {main} = resultado;
          const actual = main.temp - kelvin;

          if(actual<10){
            guardarBgColor('rgb(105, 108,149)');
          } else if (actual >=  10 && actual <25){
            guardarBgColor('rgb(71, 149,212)');
          } else {
            guardarBgColor('rgb(178, 28, 61)');
          }
  
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

  const bgColorApp = {
    backgroundColor: bgcolor
  }

  return (
    <View style={[styles.app, bgColorApp]}>
      <View style={styles.contenido}> 
         <Clima
         resultado = {resultado} />
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
    justifyContent: 'center'    
  },

  contenido: {
    marginHorizontal: '2.5%'
  }
  
});