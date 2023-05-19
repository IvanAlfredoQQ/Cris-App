import React, {useState} from "react"
import {Text, View, TouchableOpacity, TextInput} from "react-native"

export default function Porcentajes() {
    const [discount, setDiscount] = useState({
        price: 0,
        percent: 0,
        result: ''
    })
    const [addition, setAddition] = useState({
        price: 0,
        percent: 0,
        result: ''
    })

return(
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center', gap: 100}}>
        <View>
            <Text>Descuentos</Text>
            <View style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: 20}}>
                <TextInput placeholder="PRECIO" keyboardType='numeric' onChangeText={(text)=> setDiscount({...discount, price: text})}></TextInput>
                <Text>el descuento es de:</Text>
                <TextInput placeholder="%" keyboardType='numeric' onChangeText={(text)=> setDiscount({...discount, percent: text})}></TextInput>
            </View>
                <Text>Precio: {discount.price}</Text>
                <Text>Porcentaje: {discount.percent}</Text>
                <Text>Resultado: {(discount.price - (discount.price * discount.percent / 100))}</Text>
        </View>
        <View>
            <Text>Aumento</Text>
            <View style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: 20}}>
                <TextInput placeholder="PRECIO" keyboardType='numeric' onChangeText={(text)=> setAddition({...addition, price: text})}></TextInput>
                <Text>el aumento es de:</Text>
                <TextInput placeholder="%" keyboardType='numeric' onChangeText={(text)=> setAddition({...addition, percent: text})}></TextInput>
            </View>
                <Text>Precio: {addition.price}</Text>
                <Text>Porcentaje: {addition.percent}</Text>
                <Text>Resultado: {parseInt(addition.price + parseInt(addition.price * addition.percent / 100))}</Text>
        </View>
    </View>
)
}