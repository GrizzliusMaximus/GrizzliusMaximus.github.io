import { useEffect, useState } from 'react'
import cassieVid from '../assets/vtubershowcaseFULLx.mp4'
import cassieFull from '../assets/cassiewallpaper.mp4'

function FadeinVideo({src, index, animationIndex, incrementAnimation}
    :{ src: string, index: number, animationIndex: number, incrementAnimation: () => void })  {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      if (!loaded || index !== animationIndex) return;
      incrementAnimation();
    },[loaded, index, animationIndex]);

    return (
      <video 
        className={`fade-in-video ${loaded && index <= animationIndex ? 'loaded' : ''}`}
        onLoadedData={() => setLoaded(true)}
        autoPlay muted loop style={{width:'30%'}} 
      >
        <source src={src} type='video/mp4' />
      </video>
    )
  }

export default function DigitalArtPage() {
  const [animationIndex, setAnimationIndex] = useState(0);

  const incrementAnimation = (timeout: number) => {
    setTimeout(() => {
      setAnimationIndex(prev => prev + 1);
    }, timeout);
  }
  
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <FadeinVideo src={cassieFull} index={0} animationIndex={animationIndex} incrementAnimation={() => incrementAnimation(500)} />
      <div style={{display:'flex', alignItems:'center'}}>
        <h2>More Info Coming Soon...</h2>
      </div>
      <FadeinVideo src={cassieVid} index={1} animationIndex={animationIndex} incrementAnimation={() => null} />
    </div>
  )
}