import {useState, useRef} from 'react'
import BgCard from './BgCard';
import DigitalArtPage from '../DigitalArtPage/DigitalArtPage';
import TraditionalArtPage from '../TraditionalArtPage/TraditionalArtPage';
import MusicPage from '../MusicPage';
import astro from '../assets/milkyWay/milkywaycard.png'
import cassie from '../assets/cassie.png'
import nayeon from '../assets/nayeon.png'
import gamedev from '../assets/gamedev.png'
import hardware from '../assets/hardware.png'
import music from '../assets/music.png'
import lil3d from '../assets/lil3d.png'
import singing from '../assets/singing.png'
import ai from '../assets/remote_ai.png'

import beartopiaDayCycle from '../assets/beartopiadaycycle.mp4'

import MilkyWay from '../MilkyWay'
import './Hobbies.css'



export default function Hobbies() {
  const [hobby, setHobby] = useState('');
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (hobby: string) => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setHobby(hobby);
  } 
  return (
    <div 
      style={{
        backgroundColor: 'rgba(209, 218, 229, 0.23)',
        padding: 10,
      }}
      ref={sectionRef}
    >
      <h3>- Everthing you See, Hear, and Interact with are 100% made by Chico Perez -</h3>
      <section id="hobbies">
        <BgCard src={astro} text='Astrophotography' onClick={() => handleClick('Astrophotography')}/>
        <BgCard src={cassie} text='Digital Art' onClick={() => handleClick('Digital Art')}/>
        <BgCard src={nayeon} text='Traditional Art' onClick={() => handleClick('Traditional Art')}/>
        <BgCard src={gamedev} text='Indie GameDev' onClick={() => handleClick('Indie GameDev')}/>
        <BgCard src={lil3d} text='3D modelling' onClick={() => handleClick('3D modelling')}/> 
        <BgCard src={music} text='Music Compositon'onClick={() => handleClick('Music Compositon')}/>
        <BgCard src={ai} text='Machine/Deep Learning' onClick={() => handleClick('Machine/Deep Learning')}/>
        <BgCard src={hardware} text='Computer Engineering' onClick={() => handleClick('Computer Engineering')}/>
        <BgCard src={singing} text='Other Hobbies' onClick={() => handleClick('Other Hobbies')}/>
      </section>
      <div>
        {hobby}
      </div>
      {hobby === 'Astrophotography' && <MilkyWay />}
      {hobby === 'Digital Art' && <DigitalArtPage />}
      {hobby === 'Traditional Art' && <TraditionalArtPage />}
      {hobby === 'Indie GameDev' && 
            <video autoPlay muted loop style={{maxHeight:'50vh', width:'100%'}} >
            <source src={beartopiaDayCycle} type='video/mp4' />
          </video>
      }
      {hobby === '3D modelling' && <iframe src="https://www.desmos.com/calculator/q9fsjk5lod?embed" width="40%" style={{aspectRatio: 1, border: '1px solid #ccc'}}></iframe>}
      {hobby === 'Music Compositon' && <MusicPage />}
      {hobby === 'Machine/Deep Learning' && <iframe src="https://www.desmos.com/calculator/q9fsjk5lod?embed" width="40%" style={{aspectRatio: 1, border: '1px solid #ccc'}}></iframe>}
      {hobby === 'Computer Engineering' && <iframe src="https://www.desmos.com/calculator/q9fsjk5lod?embed" width="40%" style={{aspectRatio: 1, border: '1px solid #ccc'}}></iframe>}
      {hobby === 'Other Hobbies' && <iframe src="https://www.desmos.com/calculator/q9fsjk5lod?embed" width="40%" style={{aspectRatio: 1, border: '1px solid #ccc'}}></iframe>}
      {hobby === '' && <iframe src="https://www.desmos.com/calculator/q9fsjk5lod?embed" width="40%" style={{aspectRatio: 1, border: '1px solid #ccc'}}></iframe>}
    </div>
  )
}