import React from 'react';
import {TituloTopo, Topo, Manga, GrupoManga} from './styles';
import Constants from 'expo-constants';
import {View} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

export default function Discover (){
    return (
        <View>
        <Topo  style={{marginTop: Constants.statusBarHeight}}>
            <TituloTopo>MangaPedreiro</TituloTopo>
            <Icon name={"search"} size={25} color={'#808080'} style={{marginRight:20,marginLeft:'55%',
                                                                    marginTop:15, textAlign:"right"}}/>
        </Topo>
        <GrupoManga>
            {/* Substitui manga por imagem e adiciona titulo-autor em baixo, depois faz a api colocar
            esses dados */}
            <Manga></Manga>
            <Manga></Manga>
            <Manga></Manga>
            <Manga></Manga>
        </GrupoManga>
        </View>
    )
}