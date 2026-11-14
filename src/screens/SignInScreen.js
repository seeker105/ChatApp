import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet
} from 'react-native';

export default function SignInScreen() {
    let email;
    let password;

    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>ChatApp</Text>
            <Text style={styles.loginHeader}>Log in</Text>
            <Text style={styles.instructionText}>Enter your email and password to continue</Text>
            <TextInput style={styles.inputField} 
                       placeholder='Email address' 
                       value={email}/>
            <TextInput style={styles.inputField} 
                       placeholder='Password' 
                       value={password}/>
            <Pressable style={styles.loginButton}>
                <Text style={styles.loginText}>Log in</Text>
            </Pressable>
            <Text style={styles.signUpDescription}>Don't have an account?</Text>
            <Pressable style={styles.signUpPressable}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    logoText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '600',
        marginTop: '40%'
    },
    loginHeader: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: '20%'
    },
    instructionText: {
        fontSize: 16,
        marginTop: '5%',
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
        marginTop: '3%',
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
    signUpDescription: {
        color: '#FF9500',
        marginTop: '5%',
        fontSize: 14
    },
    signUpText: {
        color: '#FF9500',
        marginTop: '5%',
        fontSize: 14,
        textDecorationLine: 'underline'
    },
    signUpPressable: {
        height: '4%',
        width: '30%',
        alignItems: 'center',
    },
});
