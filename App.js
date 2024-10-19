import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View } from 'react-native';


export default function App() {

  const [text, setText] = useState('');

  const dodajText = (val) =>{
    setText(prevVal => prevVal + val)
  }

  const clearAll = () =>{
    setText('')
  }
    
  const wynik = (t) => {
    const res = eval(t);
    setText(res)
  }

  return (
  <View style={styles.container}>

    <View style={styles.textScreen}>
    <Text style={styles.obliczenia}>{text}</Text>
    </View>

    <View style={styles.buttons}>
    <TouchableOpacity onPress={() => clearAll()}>
    <Text style={styles.button}>AC</Text>
    </TouchableOpacity>
    <Text style={styles.buttonWide}></Text>
    
    <TouchableOpacity onPress={() => dodajText(' / ')}>
    <Text style={styles.operatory}>/</Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={() => dodajText('7')}>
    <Text style={styles.button}>7</Text>
    </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('8')}>
      <Text style={styles.button}>8</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('9')}>
      <Text style={styles.button}>9</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText(' * ')}>
      <Text style={styles.operatory}>X</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('4')}>
      <Text style={styles.button}>4</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('5')}>
      <Text style={styles.button}>5</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('6')}>
      <Text style={styles.button}>6</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText(' - ')}>
      <Text style={styles.operatory}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('1')}>
      <Text style={styles.button}>1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('2')}>
      <Text style={styles.button}>2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('3')}>
      <Text style={styles.button}>3</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => dodajText(' + ')}>
      <Text style={styles.operatory}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('0')}>
      <Text style={styles.buttonWide}>0</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dodajText('.')}>
      <Text style={styles.button}>.</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => wynik(text)}>
      <Text style={styles.operatory}>=</Text>
      </TouchableOpacity>
    </View>
    
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
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 5,
  },
  button:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 100,
    height: 90,
    color: 'white',
    fontSize: 30,
    backgroundColor: '#646464'
  },
  buttonWide:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 200,
    height: 90,
    color: 'white',
    fontSize: 30,
    backgroundColor: '#646464'
  },
  textScreen:{
    backgroundColor: '#505050',
    width: 400,
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  obliczenia:{
    color: 'white',
    fontSize: 60
  },
  operatory:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 100,
    height: 90,
    color: 'white',
    fontSize: 30,
    backgroundColor: '#c68308'
  }
  
});
