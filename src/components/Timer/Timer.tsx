import React,{ useState ,useEffect} from "react";

export interface TimerDetails{
   startDate?:Date;
   endDate:Date;
}

const Timer=(props:TimerDetails)=>{
  const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const target = new Date(props.endDate);
          const interval = setInterval(() => {
          var now;
          if(!props.startDate)
          {
             now=new Date();
          }
          else{
            now=new Date(props.startDate);
          }
          const difference = target.getTime() - now.getTime();
          const d = Math.floor(difference / (1000 * 60 * 60 * 24));
          setDays(d);
    
          const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          setHours(h);
    
          const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          setMinutes(m);
    
          const s = Math.floor((difference % (1000 * 60)) / 1000);
          setSeconds(s);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
  return(
    <div>
              <div>{days}</div>
              <div>Days</div>
              <div>{hours}</div>
              <div>Hours</div>
              <div>{minutes}</div>
              <div>Minutes</div>
              <div>{seconds}</div>
              <div>Seconds</div>
        </div>
  )
}

export default Timer;