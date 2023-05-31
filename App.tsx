/*
    github.com/im-ramon

    Você também não encontrará nada aqui
    You won't find anything here either
    Aquí tampoco encontrarás nada
*/

import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import background from './assets/background.jpg';
export default function App() {
    const [text, setText] = useState('Você foi avisado!');

    const textList: string[] = [
        "Você foi avisado",
        "Este aplicativo não realiza nenhuma função",
        "Nada acontece quando você usa este aplicativo",
        "Não há nenhuma atividade executada por este aplicativo",
        "Este aplicativo é completamente inútil",
        "Não há utilidade neste aplicativo",
        "Este aplicativo não serve para nada",
        "Nenhuma tarefa é realizada por este aplicativo",
        "Não há ações executadas por este aplicativo",
        "Este aplicativo não tem nenhum propósito",
        "Nada é feito por este aplicativo",
        "Este aplicativo não serve para nada",
        "Não há utilidade neste aplicativo",
        "Nada acontece quando se usa este aplicativo",
        "Este aplicativo é completamente inútil",
        "Não há funcionalidade neste aplicativo",
        "Não há ações executadas por este aplicativo",
        "Este aplicativo não realiza nenhuma tarefa",
        "Nada é realizado quando se utiliza este aplicativo",
        "Não há propósito neste aplicativo",
        "Este aplicativo não tem nenhum efeito",
        "Não há resultado ao usar este aplicativo",
        "Este aplicativo não cumpre sua finalidade",
        "Não há benefícios ao utilizar este aplicativo",
        "Este aplicativo não oferece nenhuma função útil",
        "Não há motivo para usar este aplicativo",
        "Comprou porque quis",
        "Não adianta insitir, não sem nada aqui!",
        "Este aplicativo não fazer nada",
        "Este aplicativo não realiza nenhuma ação",
        "Este aplicativo não serve para nada",
        "Este aplicativo não cumpre sua função",
        "Este aplicativo é inútil",
        "Não há utilidade neste aplicativo",
        "Este aplicativo não executa nenhuma tarefa",
        "Não há nada que este aplicativo faça",
        "Este aplicativo não oferece nenhum recurso",
        "Este aplicativo é vazio em termos de funcionalidade",
        "Nada acontece quando você usa este aplicativo",
        "Este aplicativo não tem qualquer utilidade",
        "Não há nada de interessante neste aplicativo",
        "Este aplicativo não apresenta nenhum resultado",
        "Este aplicativo não possui funcionalidades úteis",
        "Não há motivos para usar este aplicativo",
        "Este aplicativo não tem valor",
        "Este aplicativo não desempenha nenhuma função",
        "Não espere nada de especial deste aplicativo",
        "Este aplicativo não serve para nada útil",
        "Este aplicativo não traz benefícios",
        "Não há razão para utilizar este aplicativo",
        "Este aplicativo não tem impacto",
        "Este aplicativo não é capaz de fazer nada",
        "Este aplicativo não tem nenhum efeito",
        "Não há resultados positivos com este aplicativo",
        "Este aplicativo não oferece nenhuma vantagem",
        "Não há nada interessante neste aplicativo",
        "Este aplicativo não tem nenhuma finalidade",
        "Não há utilidade em usar este aplicativo",
        "Este aplicativo não possui recursos úteis",
        "Este aplicativo não fazer nada",
        "Este aplicativo não realiza nenhuma ação",
        "Este aplicativo não serve para nada",
        "Este aplicativo não cumpre sua função",
        "Este aplicativo é inútil",
        "Não há utilidade neste aplicativo",
        "Este aplicativo não executa nenhuma tarefa",
        "Não há nada que este aplicativo faça",
        "Este aplicativo não oferece nenhum recurso",
        "Este aplicativo é vazio em termos de funcionalidade",
        "Nada acontece quando você usa este aplicativo",
        "Este aplicativo não tem qualquer utilidade",
        "Não há nada de interessante neste aplicativo",
        "Este aplicativo não apresenta nenhum resultado",
        "Este aplicativo não possui funcionalidades úteis",
        "Não há motivos para usar este aplicativo",
        "Este aplicativo não tem valor",
        "Este aplicativo não desempenha nenhuma função",
        "Não espere nada de especial deste aplicativo",
        "Este aplicativo não serve para nada útil",
        "Este aplicativo não traz benefícios",
        "Não há razão para utilizar este aplicativo",
        "Este aplicativo não tem impacto",
        "Este aplicativo não é capaz de fazer nada",
        "Este aplicativo não tem nenhum efeito",
        "Não há resultados positivos com este aplicativo",
        "Este aplicativo não oferece nenhuma vantagem",
        "Não há nada interessante neste aplicativo",
        "Este aplicativo não tem nenhuma finalidade",
        "Não há utilidade em usar este aplicativo",
        "Este aplicativo não possui recursos úteis",
        "Este aplicativo não possui qualquer benefício",
        "Não há valor em utilizar este aplicativo",
        "Este aplicativo não traz resultados",
        "Não há funcionalidades valiosas neste aplicativo",
        "Este aplicativo não oferece nenhuma utilidade",
        "Não há benefícios em utilizar este aplicativo",
        "Este aplicativo não produz nenhum efeito",
        "Este aplicativo não serve para nada importante",
        "Não espere grandes resultados com este aplicativo",
        "Este aplicativo não tem nenhuma utilidade prática",
        "Não há vantagens em usar este aplicativo",
        "Este aplicativo não traz nenhuma melhoria",
        "Este aplicativo não tem qualquer impacto",
        "Não há benefícios perceptíveis com este aplicativo",
        "Este aplicativo não tem nenhum propósito",
        "Não há valor agregado neste aplicativo",
        "Este aplicativo não oferece nada de útil",
        "Não há benefícios em utilizar este aplicativo",
        "Este aplicativo não apresenta resultados satisfatórios",
        "Não há funcionalidades significativas neste aplicativo",
        "Este aplicativo não traz nenhuma contribuição",
        "Não espere qualquer retorno deste aplicativo",
        "Este aplicativo não tem utilidade prática",
        "Não há melhorias com o uso deste aplicativo",
        "Este aplicativo não agrega nenhuma vantagem",
        "Não há recursos interessantes neste aplicativo",
        "Este aplicativo não tem nenhum valor perceptível",
    ];

    function changeText(): void {
        Vibration.vibrate(40)
        setText(textList[Math.floor(Math.random() * textList.length)])
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <StatusBar style="light" />
                <TouchableOpacity style={styles.button1} onPress={changeText} >
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => { Linking.openURL('https://github.com/im-ramon') }}>
                    <AntDesign name="github" size={20} color="white" />
                    <Text style={styles.textLink}> /im-ramon</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button1: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2: {
        width: '100%',
        height: 48,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        opacity: .25,
        marginBottom: 16,
    },
    text: {
        color: 'white',
        fontSize: 14
    },
    textLink: {
        color: 'white',
        fontSize: 16
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});
