import React, {useRef, useState, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Animated
} from 'react-native';

type ProgressProps = {
    progress: number;
}

const ProgressBar = ({progress}: ProgressProps) => {


 return (

   <View style={styles.container}>
     <View style={styles.progressBar}>
       <Animated.View style={[styles.absolute, {backgroundColor: "#C4C4CC", width: `${progress}%`}]}/>
     </View>
   </View>
   
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    progressBar: {
        height: 10,
        width: '100%',
        backgroundColor: 'rgba(217, 217, 217, 0.5)', 
        borderRadius: 5,
        flexDirection:"row"
     
      },
      absolute: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 5,

      }
   });


export default ProgressBar;
