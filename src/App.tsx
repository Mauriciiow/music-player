import React, {useRef, useState} from 'react';
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

const App = () => {

  let [initial, setInitial] = useState(0)
  const finalTime = 5
  let [progress, setProgress] = useState(0)
  let [remainingTime, setRemainingTime] = useState(finalTime)
  let intervalRef = useRef<number | null>(null) 
  const [pressed, setPressed] = useState(false)
  
 const play = ()=>{
  setPressed(true)
  intervalRef.current = setInterval(()=>{
    initial = initial + 1
    progress = (initial / finalTime) * 100
    remainingTime = finalTime - initial
    setInitial(initial)
    setProgress(progress)
    setRemainingTime(remainingTime)
 
    if (initial === finalTime) {  
      clearInterval(intervalRef.current as number)
      intervalRef.current = null;
    }
  }, 1000)
 }

 const pause = ()=>{
  setPressed(false)
  clearInterval(intervalRef.current as number)
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
        <TouchableOpacity>
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
        <TouchableOpacity>
         <Icon name='forward' size={25} color="white"/>
        </TouchableOpacity>
        </View>
        <View style={styles.progressBar}>
          <ProgressBar progress={progress}/>
        </View>   
      <View style={styles.minutes}>
        <Text style={styles.textMinutes}>{initial}</Text>
        <Text style={styles.textMinutes}>{remainingTime}</Text>
      </View>
      </View>
    </SafeAreaView>
  );
};


export default App;
