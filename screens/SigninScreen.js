import { Button, Image, Pressable, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

export default function SignInScreen({ promptAsync }) {
  return (
    <SafeAreaView 
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(251, 126, 156, 1)', 'transparent']}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Image resizeMode="cover" source={require('../images/SKlogo.webp')} style={{width:"146px", height:"127px"}}/>
      <Text style={{ fontSize: 224, textAlign: "center", fontWeight: "bold", color: "#FFFFFF", letterSpacing: 2, top: -50 }}>SK</Text>
      <Text style={{ fontSize: 76, textAlign: "center", fontWeight: "bold", color: "#FFFFFF", letterSpacing: 3, top: -100 }}>GUARD</Text>
      <Pressable
        style={{
          backgroundColor: "#4285F4",
          width: "40%",
          padding: 10,
          borderRadius: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginTop: 10,
          marginBottom: 10,
          top: -60,
        }}
        onPress={() => promptAsync()}
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "bold", color: "#FFFFFF" }}>
          Sign In
        </Text>
      </Pressable>
      <Text style={{ opacity: 0.5, top: -60 }}>Use email ending with sk.ac.th</Text>
    </SafeAreaView>
  );
}