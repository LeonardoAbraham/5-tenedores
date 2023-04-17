import React from 'react';
import { View, Text } from 'react-native';
import { Input, Icon, Button } from "@rneui/themed";
import { styles } from './LoginForm.styles';


export function LoginForm() {
    return (
        <View style={styles.content}>
            <Input 
                placeholder='Correo electronico' 
                containerStyle={styles.input} 
                rightIcon= {
                    <Icon type="material-community" name="at" iconStyle={styles.icon} />
                }
            />
            <Input 
                placeholder='Contraseña' 
                containerStyle={styles.input} 
                secureTextEntry={true}
                rightIcon={
                    <Icon type="material-community" name="eye-outline" iconStyle={styles.icon} />
                }
            />
            <Button title={"Iniciar sesión"} containerStyle={styles.btnContainer} buttonStyle={styles.btn} />
        </View>
    )
}