import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignInScreen from "./screens/SigninScreen";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: 
      "1016911918067-8m6q91d6rc2ilpo33ria4sd2qgnidac2.apps.googleusercontent.com",
    iosClientId: 
      "1016911918067-t6e884oik15sem35cgqq8bi3k3hdtcr7.apps.googleusercontent.com",
    webClientId: 
      "1016911918067-oko7eoj1g3jq5ub1s8kbmqpdkpa9rh4g.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
    }
    // handleSignInWithGoogle();
  }, [response]);

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if(response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  // return (
  //   <View style={styles.container}>
  //     <Text>{JSON.stringify(userInfo, null, 2)}</Text>
  //     <Text>Sign in with your Google</Text>
  //     <Button title="Sign in with Google" onPress={() => prompAsync()}/>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return <SignInScreen promptAsync={promptAsync} />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
