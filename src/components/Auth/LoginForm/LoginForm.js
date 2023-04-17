import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Icon, Button } from "@rneui/themed";
import { styles } from './LoginForm.styles';


export function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    const onShowHidePassword = () => setShowPassword((prevState) => !prevState)

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
                secureTextEntry={ showPassword ? false : true }
                rightIcon={
                    <Icon 
                        type="material-community" 
                        name={ showPassword ? "eye-off-outline" : "eye-outline" } 
                        iconStyle={styles.icon} 
                        onPress={onShowHidePassword}
                    />
                }
            />
            <Button title={"Iniciar sesión"} containerStyle={styles.btnContainer} buttonStyle={styles.btn} />
        </View>
    )
}