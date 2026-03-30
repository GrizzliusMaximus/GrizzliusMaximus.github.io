import { useState, useRef } from 'react'
import lostMemories from './assets/lost_memories.mp3'
import goodDays from './assets/good_days.mp3'
import tensorTension from './assets/tensor_tension.mp3'
import puppyConnection from './assets/puppy_connection.mp3'
import beartopiaTitle from './assets/beartopia_title.png'
import platformTitle from './assets/platform_title.gif'
import lilnDinoTitle from './assets/lilndino_title.png'
import lostMemoriesTitle from './assets/lost_memories.png'


type Track = {
  title: string,
  src: string,
  cover?: string,
}

export default function MusicPage() {
  const [track, setTrack] = useState<Track>({ title:'', src:'', cover:'' });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const changeMusic = (newTrack: Track) => {
    if (!audioRef.current) return;
    audioRef.current.src = newTrack.src;
    setTrack(newTrack);
    audioRef.current.load();
    audioRef.current.play();
  }

  const musicList: Track[] = [
    {title: 'Good Days, 2015', src: goodDays, cover: beartopiaTitle},
    {title: 'Lost Memories, 2018', src: lostMemories, cover: lostMemoriesTitle},
    {title: 'Tensor Tension, 2020', src: tensorTension, cover: platformTitle},
    {title: 'Puppy Connection, 2026', src: puppyConnection, cover: lilnDinoTitle},
  ];

  
  return (
    <section className="simple-fade-in-item">
      <div style={{ display:'flex', justifyContent:'space-between'}}>
        <div style={{ padding:'16px', display:'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
          <h3>Track Selection</h3>
          {musicList.map((music) => (
            <div 
              key={music.title}
              style={{
                color: track.src === music.src ? 'black' : 'inherit',
                fontWeight: track.src === music.src ? '500' : 'inherit',
                cursor: 'pointer',
              }}
              onClick={() => changeMusic(music)}
            >
              {music.title} 
              {/* {track.src === music.src && '(Now Playing)'} */}
            </div>
          ))}
        </div>
        <div style={{display:'flex', width: '50%', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{
            maxHeight: '500px',
            maxWidth: '500px',
            height:'35vw',
            width:'35vw',
            overflow:'hidden',
            backgroundColor: 'black',
            borderRadius:10,
            boxShadow: '0px 2px 10px rgba(0,0,0,0.3)',
          }}>          
            {track.cover 
              ? <img src={track.cover} style={{height:'100%',width:'100%', objectFit:'contain'}}/> 
              : <iframe src="https://www.desmos.com/calculator/q9fsjk5lod?embed"style={{height:'100%',width:'100%', aspectRatio: 1, border: '1px solid #ccc'}} />
            }
          </div>
          <div>{track.title ? track.title : 'Select a Track'}</div>
        </div>
      </div>
      <audio controls ref={audioRef} />
    </section>
  );
}