import { useRef } from 'react'
import { useCounterContext } from './CounterContext';


const actionStateType = {
  idle: 0,
  moving: 1,
}

export default function Bear({key = 0} : {key?: number}) {
  const counterContext = useCounterContext();
  const actionStateRef = useRef(actionStateType.moving);
  const xRef = useRef(Math.floor(Math.random()*window.innerWidth/5 - 10));
  const yRef = useRef(Math.floor(Math.random()*window.innerHeight/10));
  const dirRef = useRef(Math.round(Math.random())*2-1);
  const prevWinWidthRef = useRef(window.innerWidth);
  var actionState = actionStateRef.current;
  var x = xRef.current;
  var y = yRef.current;
  var dir = dirRef.current;
  var prevWinWidth = prevWinWidthRef.current;
  const { useFixedUpdate, useWindowSizeUpdate } = counterContext;
  useFixedUpdate(() => {
    actionState = actionStateRef.current;
    x = xRef.current;
    y = yRef.current;
    dir = dirRef.current;
    if (actionState === actionStateType.moving) {
      if (x + dir > window.innerWidth/5 - 10) {
        dir = -1;
      }
      if (x + dir < 0) {
        dir = 1;
      }
      x += dir;
      if (Math.random() < 0.02) actionState = actionStateType.idle;
    } else if (Math.random() < 0.1) {
        actionState = actionStateType.moving;
        dir = Math.round(Math.random())*2-1;
    }
    y = Math.max(0,y-4);
    actionStateRef.current = actionState;
    xRef.current = x;
    yRef.current = y;
    dirRef.current = dir;
    
  });

  useWindowSizeUpdate(() => {
    prevWinWidth = prevWinWidthRef.current;
    xRef.current *= window.innerWidth/prevWinWidth;
    prevWinWidthRef.current = window.innerWidth;
  });

  return (
    <div 
      key={key} 
      className={`bearsprite${actionState === actionStateType.idle? ' idle':''}`}
      style={{position:'fixed', left:x*5, bottom:y*5, transform: `scaleX(${dir})`}}
    />
  )
}