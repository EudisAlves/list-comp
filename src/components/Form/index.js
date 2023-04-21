import React from "react";
import  { Text, TextInput, View, Button} from "react-native";

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex: 1.70"
                keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                placeholder="Ex: 66.250"
                keyboardType="numeric"
                />
                <Button title="Calcule o IMC"/>
            </View>

            <View>
                <ResulteImc mensageResultesImc={mensageImc} ResulteImc={IMC} />
            </View>

            <View></View>
        </View>
    );
}