import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

export default function Form() {
  const [height, setheight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e a altura!");
  const [IMC, setImc] = useState(null);
  const [textButton, setTextButton] = useState("calcular!");

  function imcCalcular() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validadorImc() {
    if (weight != null && height != null) {
      imcCalcular();
      setheight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual:");
      setTextButton("Calcular Novamente!");
      return;
    }
    setImc(null);
    setTextButton("Calcular!");
    setMessageImc("preencha o peso e a altura!");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setheight}
          placeholder="Ex: 1.70"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 66.250"
          keyboardType="numeric"
        />
        <Button onPress={() => validadorImc()} title={textButton} />
      </View>

      <View>
        <ResulteImc mensageResultesImc={messageImc} ResulteImc={IMC} />
      </View>

      <View></View>
    </View>
  );
}
