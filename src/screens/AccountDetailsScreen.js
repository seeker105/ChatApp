import { useContext, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet
} from 'react-native';
import { AppContext } from '../contexts/AppContext';
import { createUserAccount } from '../database/Firebase';
import { ACCOUNT_DETAILS_SCREEN, SET_ERROR_MESSAGE, SET_SCREEN } from '../utilities/Constants';

export default function AccountDetailsScreen() {
    const { appState, dispatch, setLoading } = useContext(AppContext);

    let errorMessage;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [screenName, setScreenName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerification, setPasswordVerification] = useState("");

    function validateInput() {
        errorMessage = null;
        const emailRegex = /^[a-zA-Z0-9._-]+@my\.lsuneworleans\.edu$/
        if (!firstName) {
            errorMessage = "Missing First Name";
        }
        else if (!lastName) {
            errorMessage = "Missing Last Name";
        }
        else if (!screenName) {
            errorMessage = "Missing ScreenName";
        }
        else if (!email) {
            errorMessage = "Missing Email";
        }
        else if (!password) {
            errorMessage = "Missing Password";
        }
        else if (!passwordVerification) {
            errorMessage = "Missing Password Verification";
        }
        else if (password != passwordVerification) {
            errorMessage = "Passwords do not match";
        }
        else if (!emailRegex.test(email)) {
            errorMessage = "Please enter a valid UNO email";
        }

        return !errorMessage;
    }

    async function storeStudent() {
        if (validateInput()) {
            try {
                setLoading(true);
        
                let student = {
                    firstName: firstName,
                    lastName: lastName,
                    screenName: screenName,
                    email: email,
                    password: password
                };
                
                console.log("before create user account");
                console.log(student);
                let response = await createUserAccount(student);
                console.log(JSON.stringify(response, null, 2));
                if (response) {
                    dispatch({
                        type: SET_SCREEN,
                        payload: ACCOUNT_DETAILS_SCREEN
                    })
                }
    
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
        else {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: errorMessage
            });
        }


    }

    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>ChatApp</Text>
            <Text style={styles.header}>Create an account</Text>
            <Text style={styles.instructionText}>Enter your details to create an account</Text>
            <TextInput style={styles.inputField} 
                       placeholder='First Name' 
                       onChangeText={(input) => setFirstName(input)}
                       value={firstName}/>
            <TextInput style={styles.inputField} 
                       placeholder='Last Name' 
                       onChangeText={(input) => setLastName(input)}
                       value={lastName}/>
            <TextInput style={styles.inputField} 
                       placeholder='Screen Name' 
                       onChangeText={(input) => setScreenName(input)}
                       value={screenName}/>
            <TextInput style={styles.inputField} 
                       placeholder='Email' 
                       onChangeText={(input) => setEmail(input)}
                       value={email}/>
            <TextInput style={styles.inputField} 
                       placeholder='Password' 
                       onChangeText={(input) => setPassword(input)}
                       value={password}/>
            <TextInput style={styles.inputField} 
                       placeholder='Password Verification' 
                       onChangeText={(input) => setPasswordVerification(input)}
                       value={passwordVerification}/>
            <Pressable onPress={storeStudent}
                        style={({pressed}) => [styles.loginButton, pressed && styles.ripple]}
                        android_ripple={styles.ripple}>
                <Text style={styles.loginText}>Sign Up</Text>
            </Pressable>
            { appState.errorMessage ? <Text style={styles.errorText}>{appState.errorMessage}</Text> : <></> }
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    logoText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '600',
        marginTop: '20%'
    },
    header: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: '10%'
    },
    instructionText: {
        fontSize: 16,
        marginTop: '5%',
    },
    errorText: {
        fontSize: 16,
        marginTop: '5%',
        color: 'red'
    },
    loginText: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    loginButton: {
        height: '5%',
        width: '90%',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 14,
        padding: 8,
        marginTop: '10%',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputField: {
        height: '5%',
        width: '90%',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 14,
        padding: 8,
        marginTop: '3%'
    },
});
