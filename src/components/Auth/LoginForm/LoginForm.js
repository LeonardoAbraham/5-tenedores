import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from 'formik';
import { initialValues, validationSchema } from "./LoginForm.data";
import { styles } from './LoginForm.styles';


export function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    const onShowHidePassword = () => setShowPassword((prevState) => !prevState)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log(formValue);
        }
    })

    return (
        <View style={styles.content}>
            <Input 
                placeholder='Correo electronico' 
                containerStyle={styles.input} 
                rightIcon= {
                    <Icon type="material-community" name="at" iconStyle={styles.icon} />
                }
                onChangeText={(text) => formik.setFieldValue("email", text)}
                errorMessage={formik.errors.email}
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
                onChangeText={(text) => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}
            />
            <Button 
                title={"Iniciar sesión"} 
                containerStyle={styles.btnContainer} 
                buttonStyle={styles.btn} 
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    )
}