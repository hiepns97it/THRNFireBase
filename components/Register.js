import React, { Component } from 'react';
import { 
    SafeAreaView,
    TextInput,
    StyleSheet, 
    View,
    Text, 
    TouchableOpacity,
    Alert
} from 'react-native';
import {firebaseApp} from './FireBaseConfig.js';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            passwork: ''
        }
    }

    Dangky() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.passwork)
        .then((userCredential) => {
            // Signed in 
            //var user = userCredential.user;
            console.log(user);
            // ...
            
            this.setState({
                email : '',
                passwork: ''
            })
            this.props.navigation.push('Login')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
                <TextInput
                    style={styles.input}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    keyboardType = "email-address"
                    placeholder = "Nhập thông tin email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(passwork) => this.setState({passwork})}
                    value={this.state.passwork}
                    placeholder="Nhập thông tin mật khẩu"
                    secureTextEntry= {true}
                />
                
                <View style={{flexDirection: "row", paddingTop: 10}}>
                    <TouchableOpacity style={styles.login}
                    onPress={() => this.Dangky()}>
                        <Text style={styles.textLoginRegister}>Đồng ý đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      width: 400,
      margin: 12,
      borderWidth: 1,
    },
    
    login: {
        backgroundColor: "green",
        padding: 5
    },

    register: {
        backgroundColor: "red",
        padding: 5
    },

    textLoginRegister: {
        color: "#fff"
    }
  });
  
