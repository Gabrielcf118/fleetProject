import React, { useEffect, useState } from "react";
import { Container, Slogan, Title } from "./styles";
import Img from "../../assets/background.png";
import { Button } from "../../components/Button";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [_, response, googleSignIng] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ["profile", "email"],
  });

  function handleGoogleSignIn() {
    setIsAuthenticating(true);

    googleSignIng().then((response) => {
      console.log("Google Sign-In Response:", response);

      if (response?.type !== "success") {
        console.error("Google Sign-In Failed:", response);
        setIsAuthenticating(false);
      }
    });
  }

  useEffect(() => {
    if (response?.type === "success") {
      if (response.authentication?.idToken) {
        console.log(
          "TOKEN DE AUTENTICAÇÃO =>",
          response.authentication.idToken
        );
      }
    }
  }, [response]);

  return (
    <Container source={Img}>
      <Title>Fleet</Title>

      <Slogan>Gestão de uso de veiculos</Slogan>

      <Button
        onPress={handleGoogleSignIn}
        title="Entrar com o Google"
        isLoading={isAuthenticating}
      />
    </Container>
  );
}
