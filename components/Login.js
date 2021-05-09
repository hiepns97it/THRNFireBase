import React, { Component } from 'react';
import { 
    SafeAreaView,
    TextInput,
    StyleSheet, 
    View,
    Text, 
    TouchableOpacity
} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            passwork: ''
        }
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
                    <TouchableOpacity style={styles.login}>
                        <Text style={styles.textLoginRegister}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.register}
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.textLoginRegister}>Đăng ký</Text>
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
  
