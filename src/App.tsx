import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,

} from 'react-native';
import ProgressBar from './components/ProgressBar';
import { styles } from './styles';
import Icon from "react-native-vector-icons/FontAwesome"
import { convertTime } from './services/config';

const App = () => {

  const initialTimeRef = useRef(0)
  const totalTimeRef = useRef(5)
  const progressRef = useRef(0)
  const remainingTimeRef = useRef(totalTimeRef.current)
  const intervalRef = useRef<number | null>(null) 
 
  
  const [pressed, setPressed] = useState(false)
  const [initialTime, setInitialTime] = useState(initialTimeRef.current)
  const [progress, setProgress] = useState(progressRef.current)
  const [remainingTime, setremainingTime] = useState(totalTimeRef.current)
  

  const play = ()=>{
    setPressed(true)
    if (remainingTimeRef.current === 0) {  
      initialTimeRef.current = 0
      progressRef.current = 0
      remainingTimeRef.current = totalTimeRef.current
    
    }
    intervalRef.current = setInterval(()=>{
      initialTimeRef.current = initialTimeRef.current+ 1
      setInitialTime(initialTimeRef.current)
      progressRef.current = (initialTimeRef.current / totalTimeRef.current) * 100
      setProgress(progressRef.current)
      remainingTimeRef.current = totalTimeRef.current - initialTimeRef.current
      setremainingTime(remainingTimeRef.current)
      
      if (remainingTimeRef.current === 0) {  
        clearInterval(intervalRef.current as number)
        setPressed(false)
      }
    }, 1000)
   }
 const pause = ()=>{
  setPressed(false)
  clearInterval(intervalRef.current as number)
 }

 const back = ()=>{
  initialTimeRef.current = 0
  setInitialTime(initialTimeRef.current)
  progressRef.current = 0
  setProgress( progressRef.current)
  remainingTimeRef.current = 0
  setremainingTime(remainingTimeRef.current)

 }

 const forward = ()=>{
    totalTimeRef.current = Math.floor(Math.random() * 120) + 120
    initialTimeRef.current = 0
    setInitialTime(initialTimeRef.current)
    remainingTimeRef.current = totalTimeRef.current
    setremainingTime(remainingTimeRef.current)
    
 }


 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.containerImage}>
          <Image source={require("../src/assets/image.jpg")} style={styles.image} />
        </View>
        <View style={styles.containerTexts}>
          <Text style={styles.text}>Player</Text>
          <Text style={styles.textOpacity}>Player</Text>
        </View>
        <View style={styles.containerPlayer}> 
        <TouchableOpacity onPress={back}>
          <Icon name='backward' size={25} color="white"/>
        </TouchableOpacity>
        {pressed ? (
             <TouchableOpacity onPress={pause}>
             <Icon name='pause' size={25} color="white"/>
           </TouchableOpacity>
        )
      :
      (
        <TouchableOpacity onPress={play}>
        <Icon name='play' size={25} color="white"/>
      </TouchableOpacity>
      )}
        <TouchableOpacity onPress={forward}>
         <Icon name='forward' size={25} color="white"/>
        </TouchableOpacity>
        </View>
        <View style={styles.progressBar}>
          <ProgressBar progress={progress}/>
        </View>   
      <View style={styles.minutes}>
        <Text style={styles.textMinutes}>{convertTime(initialTime)}</Text>
        <Text style={styles.textMinutes}>{convertTime(remainingTime)}</Text>
      </View>
      </View>
    </SafeAreaView>
  );
};


export default App;
