
import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import GiveClassesBgImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavidateBack(){
        goBack();
    }
    return (
     <View style={styles.container}>
    <ImageBackground resizeMode='contain' 
    source={GiveClassesBgImage} style={styles.content}>
    <Text style={styles.title}>Quer ser um Proffy?</Text>
    <Text style={styles.description}>
        Para começar, você precisa se cadastrar como professor
        na nossa plataforma web.
    </Text>
    </ImageBackground>

<RectButton onPress={handleNavidateBack} style={styles.okButton}>
    <Text style={styles.okButtonText}>Tudo bem</Text>
</RectButton>

     </View>
    );
}

export default GiveClasses;