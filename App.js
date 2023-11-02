
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Modal} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      gasolina: 0.0,
      alcool: 0.0,
      modalVisible: false,
      compensaGasolina: false,
    };

   this.calcularValor = this.calcularValor.bind(this);
   this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
    this.setState({ modalVisible: false })
  };

  calcularValor(){
    gasolina = this.state.gasolina 
    alcool = this.state.alcool 
    if( gasolina == 0 || alcool == 0){
      alert('Por favor preenchar os campos.')
      return;
    }

    valor = alcool / gasolina
    if( valor < 0.7){
      this.setState({ compensaGasolina: false })
    }else{
      this.setState({ compensaGasolina: true })
    }
    this.setState({ modalVisible: true })
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image style={styles.imageLogo} source={ require('./image/logo.png')} />
          <Text style={ styles.titulo }>Qual a melhor opção?</Text>
        </View>
        <View style={styles.formInput}>
          <Text style={styles.labelInput}>Álcool (preço por litro):</Text>
          <TextInput style={styles.textInput} 
                      placeholder= '0.0' 
                      inputMode= 'decimal'
                      onChangeText={(valor) => this.setState({alcool: valor})} />
          <Text style={styles.labelInput}>Gasolina (preço por litro):</Text>
          <TextInput style={styles.textInput} 
                      placeholder='0.0' 
                      inputMode= 'decimal'
                      onChangeText={(valor) => this.setState({gasolina: valor})} />
          <TouchableOpacity style={styles.buttonForm} onPress={this.calcularValor}>
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="slide"
               transparent={false}
               visible={this.state.modalVisible}>
          <View style={styles.containerLogoModal}>
            <Image style={styles.imageLogoModal} source={ require('./image/gas.png')} />
            <Text style={ styles.tituloModal }>Compensa usar { this.state.compensaGasolina ? 'Gasolina' : 'Álcool' }</Text>
            <Text style={styles.subTituloModal}>Com os preços:</Text>
            <Text style={styles.textoValor}>Álcool: R$ {this.state.alcool}</Text>
            <Text style={styles.textoValor}>Gasolina: R$ {this.state.gasolina}</Text>
            <TouchableOpacity style={styles.buttonFormRecalcular} onPress={this.closeModal}>
              <Text style={styles.textButtonRecalcular}>Calcular Novamente</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21242b',
    paddingTop: 70,
  },
  containerLogo:{
    alignItems: 'center',
    paddingBottom: 30
  },
  imageLogo:{
    width: 150,
    height: 150
  },
  titulo:{
    marginTop: 20,
    fontSize: 30,
    color:"#fff",
    fontWeight: 'bold'
  },
  formInput:{
    margin: 20
  },
  labelInput:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  textInput:{
    backgroundColor: '#fff',
    borderRadius: 4,
    fontSize: 25,
    paddingLeft: 20,
    marginBottom: 20
  },
  buttonForm:{
    marginTop: 5,
    fontSize: 50,
    backgroundColor: '#E3371E',
    borderRadius: 4,
  },
  textButton:{
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  buttonFormRecalcular:{
    borderColor: '#E3371E',
    backgroundColor: '#21242b',
    marginTop: 30,
    borderWidth: 1,
    width: 250

  },
  textButtonRecalcular:{
    color: '#E3371E',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold'
  },
  containerLogoModal:{
    flex: 1,
    backgroundColor: '#21242b',
    alignItems: 'center',
    padding: 50
  },
  tituloModal:{
    fontSize: 30,
    color: 'lightgreen',
    paddingTop: 25,
    fontWeight: 'bold'
  },
  subTituloModal:{
    color: '#fff', 
    fontSize: 25,
    paddingTop: 20,
    fontWeight: 'bold'
  },
  textoValor:{
    fontSize: 20,
    color: '#fff',
    paddingTop: 10
  }

});
