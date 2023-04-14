import React from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/themed';
import { styles } from './RegisterForm.styles';

export function RegisterForm() {
  return (
    <View style={styles.content}>
        <Input 
            placeholder='Correo electronico' 
            containerStyle={styles.input}
            rightIcon={
                <Icon 
                    type="material-community"
                    name="at"
                    iconStyle={styles.icon}
                />
            }
        />
        <Input 
            placeholder='Contraseña'
            containerStyle={styles.input}
            secureTextEntry={true}
            rightIcon={
                <Icon 
                    type='material-community'
                    name="eye-outline"
                    iconStyle={styles.icon}
                />
            }
        />
        <Input 
            placeholder='Repetir contraseña'
            containerStyle={styles.input}
            secureTextEntry={true}
            rightIcon={
                <Icon 
                    type='material-community'
                    name="eye-outline"
                    iconStyle={styles.icon}
                />
            }
        />
        <Button 
            title={"Unirse"} 
            containerStyle={styles.btnContainer} 
            buttonStyle={styles.btn}
        />
    </View>
  )
}