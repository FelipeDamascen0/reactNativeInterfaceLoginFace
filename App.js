import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputFa = (props) => {
  return(
          <TextInput style={styles.input}
          placeholder={props.inputFace}
          placeholderTextColor="#fff"
          />
  );
}

const Login = () => {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);
  return(
      <View style={styles.container}/*VIEW PAI*/>

          <View /* VIEW DA LOGO*/style={styles.logo}>
              <Icon 
                  name="facebook" 
                  size={50} 
                  color="#000" 
              />
          </View>

          <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
          }}>
              <InputFa inputFace="Telefone ou email"/>
              <View style={styles.inputArea}>
                  <TextInput style={styles.inputSenha}
                      secureTextEntry={hidePass}
                      value={input}
                      onChangeText={(textDigitado) => setInput(textDigitado)}
                      placeholder="Senha"
                      placeholderTextColor="#fff"
                  />
                  <TouchableOpacity 
                      style={styles.icon}
                      onPress={ () => setHidePass(!hidePass)}
                  >
                      <Icon name={hidePass ? 'eye-slash' : 'eye'} color="#fff" size={25}/>
                  </TouchableOpacity>
              </View>
          </View>

          <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
          }}>
              <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
              }}>
                  <TouchableOpacity>
                      <View style={{
                          alignItems: "center",
                          backgroundColor: "#1473FA",
                          padding: 10,
                          width:315,
                      }}>
                          <Text style={{
                              color:'#fff',
                              fontSize: 20,
                          }}>
                              Entrar
                          </Text>
                      </View>
                  </TouchableOpacity>

                  <Text style={{
                      textAlign: 'center',
                      fontSize: 20,
                      marginTop: 10,
                      color:'#1473FA'
                  }}>
                      Esqueceu a senha?
                  </Text>

                  <Text style={styles.text}>
                      ou
                  </Text>

                  <TouchableHighlight>
                      <View style={{
                          alignItems: "center",
                          backgroundColor: "#41C421",
                          padding: 10,
                          width:280,
                      }}>
                          <Text style={{
                              fontSize: 18,
                              fontWeight: 'bold',
                              color: '#fff',
                          }}>
                              Criar nova conta do Facebook
                          </Text>
                      </View>
                  </TouchableHighlight>
              </View>
          </View>
          
      </View>

  );
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#4F4F4F', 
      flex: 1,
  },
  logo:{
      height:250,
      backgroundColor: "#2f55a4",
      justifyContent: 'center',
      alignItems: 'center',
  },
  text:{
      borderBottomWidth: 1,
      borderBottomColor: '#000', 
      textAlign: 'center', 
      marginTop: 40,
      marginBottom: 70,
      width: 315
  },
  input:{
      padding: 10,
      fontSize: 20,
      color: '#fff',
      width: '90%',
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
      marginBottom: 15,
  },
  inputArea:{
      flexDirection: 'row',
      width: '90%',
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
  },
  inputSenha:{
      padding: 10,
      fontSize: 20,
      color: '#fff',
      width: '85%',
      marginBottom: 15,
      height: 50,
  },
  icon:{
      width: '8%',
      justifyContent:'center',
      alignItems: 'center',
      height: 50,
  },
})

export default Login;
