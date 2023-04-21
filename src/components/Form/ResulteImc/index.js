import React from "react";
import  { View, Text } from "react-native";

export default function ResulteImc(props) {
    return (
        <View>
            <Text>{props.resulteImc}</Text>
            <Text>{props.menssageResulteImc}</Text>
        </View>
    );
}