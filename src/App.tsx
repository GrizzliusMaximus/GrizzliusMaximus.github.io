import { useState, useRef } from 'react'
import { CounterHandler, useCounterContext } from './gameEngine/CounterContext';
import runningBear from './assets/running_bear.svg'
import chico from './assets/chico.png'
import robojack from './assets/robojack.gif'

import './App.css'


const actionStateType = {
  idle: 0,
  moving: 1,
}

function Child({key = 0} : {key?: number}) {
  const counterContext = useCounterContext();
  const actionStateRef = useRef(actionStateType.moving);
  const xRef = useRef(Math.floor(Math.random()*window.innerWidth/5 - 10));
  const dirRef = useRef(Math.round(Math.random())*2-1);
  const prevWinWidthRef = useRef(window.innerWidth);
  var actionState = actionStateRef.current;
  var x = xRef.current;
  var dir = dirRef.current;
  var prevWinWidth = prevWinWidthRef.current;
  const { useFixedUpdate, useWindowSizeUpdate } = counterContext;
  useFixedUpdate(() => {
    actionState = actionStateRef.current;
    x = xRef.current;
    dir = dirRef.current;
    if (actionState === actionStateType.moving) {
      if (x + dir > window.innerWidth/5 - 10) {
        dir = -1;
      }
      if (x + dir < 0) {
        dir = 1;
      }
      x += dir;
      if (Math.random() < 0.1) actionState = actionStateType.idle;
    } else if (Math.random() < 0.1) {
        actionState = actionStateType.moving;
        dir = Math.round(Math.random())*2-1;
    }
    actionStateRef.current = actionState;
    xRef.current = x;
    dirRef.current = dir;
    
  });

  useWindowSizeUpdate(() => {
    prevWinWidth = prevWinWidthRef.current;
    xRef.current *= window.innerWidth/prevWinWidth;
    prevWinWidthRef.current = window.innerWidth;
  });

  return (
    <img src={runningBear} className="base"  height="36" alt="" key={key} style={{position:'fixed', left:x*5, bottom:0, transform: `scaleX(${dir})`}} />
  )
}

function App() {
  const [ objCount, setObjCount ] = useState<typeof Child[]>([]);
  return (
    <>
      <CounterHandler>
        { objCount.map((Obj, i) => <Obj key={i} />) }
      </CounterHandler>
      <section id="center">
        <div className="hero">
          <h1>- CHICO</h1><img src={runningBear} className="base"  height="150" alt="" /><h1>PEREZ -</h1>
        </div>
        <div>
          <h1>This page is still a work in progress</h1>
          <p>
            Big changes are coming soon!
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setObjCount(x => [...x, Child])}
        >
          Count is {objCount.length}
        </button>
      </section>
      <section id="center">
        <div className="ticks"></div>
        <img src={chico} className="base" width="100%" alt="" />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <a href="https://grizzliusmaximus.itch.io/neorobojack" target="_blank">
            <img src={robojack} className="base" width="100%" alt="" />
          </a>
        </div>
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Indie Game Developer</h2>
          <p>Self-taught</p>
        </div>  
      </section>
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Gamedev Tutorials</h2>
          <p>Lighting Tutorials and more</p>
        </div>  
        <div id="docs">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/8oy2R1OdXqQ?si=H8g_f23r4mL0WapT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </section>
      <section id="next-steps">
        <div id="docs">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/w7cnFiSgV-M?si=O5dUbfi8ORev9KQ7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Beartopia</h2>
          <p>Water Shaders, Infinite Generated Worlds, Full Optimization</p>
        </div>  
      </section>
      <section id="next-steps"></section>
        {/* <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>  
      </section> */}
      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Check Out My Other Creations</h2>
          <p>More amazing innovations awaits!</p>
          <ul>
            <li>
              <a href="https://github.com/GrizzliusMaximus" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            {/* <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li> */}
            <li>
              <a href="https://grizzliusmaximus.itch.io/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/itchio-textless-black.svg" width="18px" height="18px"></use>
                </svg>
                itch.io
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@GrizzliusMaximus" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="a88bjvujlz790fes3gwgj3xx1u1wva2k"><title id="a88bjvujlz790fes3gwgj3xx1u1wva2k">YouTube</title>
                  <path d="M15.6656 3.7488C15.4816 3.0608 14.9392 2.5184 14.2512 2.3344C13.0032 2 8 2 8 2C8 2 2.9968 2 1.7488 2.3344C1.0608 2.5184 0.5184 3.0608 0.3344 3.7488C-2.38419e-08 4.9968 0 8.4 0 8.4C0 8.4 -2.38419e-08 11.8032 0.3344 13.0512C0.5184 13.7392 1.0608 14.2816 1.7488 14.4656C2.9968 14.8 8 14.8 8 14.8C8 14.8 13.0032 14.8 14.2512 14.4656C14.94 14.2816 15.4816 13.7392 15.6656 13.0512C16 11.8032 16 8.4 16 8.4C16 8.4 16 4.9968 15.6656 3.7488ZM6.4 10.4784V6.3216C6.4 6.0136 6.7336 5.8216 7 5.9752L10.6 8.0536C10.8664 8.2072 10.8664 8.5928 10.6 8.7464L7 10.8248C6.7336 10.9792 6.4 10.7864 6.4 10.4784Z" fill="currentColor"></path>
                </svg>
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
