import React from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from '@rneui/themed';
import { useFormik } from "formik";
import { initialValues } from './RegisterForm.data';
import { styles } from './RegisterForm.styles';

export function RegisterForm() {
    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: (formValue) => {
            console.log("Formulario enviado");
            console.log(formValue);
        }
    });

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
                onChangeText={text => formik.setFieldValue("email", text)}
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
                onChangeText={text => formik.setFieldValue("password", text)}
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
                onChangeText={text => formik.setFieldValue("repeatPassword", text)}
            />
            <Button 
                title={"Unirse"} 
                containerStyle={styles.btnContainer} 
                buttonStyle={styles.btn}
                onPress={formik.handleSubmit}
            />
        </View>
    )
}