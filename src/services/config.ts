export const convertTime = (time: number)=>{
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
   
   const minutesConverted = minutes.toString().padStart(2, '0')
   const secondsConverted = seconds.toString().padStart(2, '0');
   return `${minutesConverted}:${secondsConverted}`
   }