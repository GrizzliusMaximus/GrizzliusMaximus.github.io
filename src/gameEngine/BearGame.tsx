import { useState } from 'react'
import Bear from './Bear'
import { CounterHandler } from './CounterContext'
import './bearGame.css'

export default function BearGame() {
   const [ objCount, setObjCount ] = useState<typeof Bear[]>([]);

   return (
    <div style={{padding:'1vh'}}>
      <CounterHandler>
        { objCount.map((Obj, i) => <Obj key={i} />) }
      </CounterHandler>
      <button
        className="counter"
        onClick={() => setObjCount(x => [...x, Bear])}
      >
        Bear count is {objCount.length}
      </button>
    </div>
   )
}