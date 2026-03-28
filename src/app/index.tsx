import { Text, StyleSheet, View, Button, Platform, Alert } from 'react-native';

export default function index() {

    function alertPress(message: string){
      if (Platform.OS === "web"){
        window.alert(message)
      } else {
        Alert.alert(message);
      }
    }
  return (
    <View style={styles.container}>

      <Text style={styles.text_1}>
        Meu nome é Rafael Lucas
      </Text>
      <Text style={styles.text_2}>
        frase motivacional ou qualquer coisa para estilizar de uma forma diferente 
      </Text>
      <Button 
        title='APERTE' 
        onPress={() => alertPress('Voce apertou o botao')}
        color="#841584"
        styles={styles.botao}
       />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text_1: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  text_2: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20

  },
  botao: {
    color: "#9B111E",


  }
});
