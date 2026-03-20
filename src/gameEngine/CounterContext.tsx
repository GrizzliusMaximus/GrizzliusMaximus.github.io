import { createContext, useContext, useRef, useEffect, useState } from 'react'


type CounterContextType = {
  useFixedUpdate: (stepAction: () => void) => void,
  useWindowSizeUpdate: (stepAction: () => void) => void,
}
export const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function useCounterContext() {
  const counterContext = useContext(CounterContext);
  if (!counterContext) {
    throw new Error("CounterContext not provided");
  }
  return counterContext;
}

const fixedStepActions: (() => void)[] = [];
const WindowSizeActions: (() => void)[] = [];

function useFixedUpdate(stepAction: () => void) {
  const [, setStateCounter ] = useState(true);
  const ranOnce = useRef(false); //skips second render during dev mode
  if (ranOnce.current) return;
  ranOnce.current = true;
  fixedStepActions.push(() => {
    stepAction();
    setStateCounter(c => !c);
  });
}

function useWindowSizeUpdate(stepAction: () => void) {
  const ranOnce = useRef(false); //skips second render during dev mode
  if (ranOnce.current) return;
  ranOnce.current = true;
  WindowSizeActions.push(() => {
    stepAction();
  });
}


export function CounterHandler({children} : {children: React.ReactNode}) {
  useEffect(() => {
    const fixedUpdateInterval = setInterval(() =>{
      fixedStepActions.forEach(stepAction => stepAction());
    }, 100);

    window.addEventListener('resize', () => {
      WindowSizeActions.forEach(stepAction => stepAction());
    });
    return () => {
      clearInterval(fixedUpdateInterval);
    };
  }, []);
  
  return (<CounterContext.Provider value={{useFixedUpdate, useWindowSizeUpdate}}>{children}</CounterContext.Provider>);
}
