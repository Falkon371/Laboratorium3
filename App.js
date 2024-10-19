import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View } from 'react-native';


export default function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('Pokaż')

  const toggleVisibilityText = () =>{
    setIsVisible(!isVisible);
    setText(prevText => prevText === 'Pokaż' ? 'Ukryj' : 'Pokaż');

  }

  return (
    
    

    <View style={styles.container}>

    <View style={styles.tekst}>
      <Text style={styles.zad2}>Zadanie 2</Text>
    </View>

    <TouchableOpacity style={styles.button} onPress={toggleVisibilityText} >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>

    {isVisible && (
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Nazywam się 
        <Text style={styles.boldText}> Konrad Falkowski</Text>
        </Text>
        
      </View>
    )}
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
  button:{
    width: 45,
    height: 20,
    borderWidth: 1,
    backgroundColor: '#c8c8c8',
    borderColor: 'black',
    marginBottom: 20,
    marginTop: 20
  },
  nameContainer:{
    width: 120,
  },
  zad2:{
    fontWeight: 'bold',
    fontSize: 20
  },
  boldText:{
    fontWeight: 'bold',
  }
  
});
