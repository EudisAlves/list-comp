import React from "react";
import  { View, Text } from "react-native";

export default function ResulteImc(props) {
    return (
        <View>
            <Text>{props.menssageResulteImc}</Text>
            <Text>{props.resulteImc}</Text>
        </View>
    );
}