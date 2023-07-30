import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { changeToDark, changeToLight } from "../tools/tools";


interface GlobalContextType {
    activeOverlay: boolean,
    setActiveOverlay: Dispatch<SetStateAction<boolean | false>>
    formIsSubmitted: boolean | null,
    setFormIsSubmitted: Dispatch<SetStateAction<boolean | null>>,
    color?: string;
    setTheme?: ({}: any) => void;
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>
    
}
export const GlobalContext = createContext<GlobalContextType>({
    activeOverlay: false,
    setActiveOverlay: function (value: SetStateAction<boolean>): void {
        throw new Error("setActiveOverlay not implemented.");
    },
    setFormIsSubmitted: function (): void {
        throw new Error("setFormIsSubmitted function not implemented.");
    },
    formIsSubmitted: null,
    darkTheme: false,
    setDarkTheme: function (value: SetStateAction<boolean>): void {
        throw new Error("setBgWave not implemented.");
      },
});


interface Props {
    children: React.ReactNode,

}
export const GlobalContextProvider = ({children}: Props) => {
    const [activeOverlay, setActiveOverlay] = useState<boolean>(false)
    const [formIsSubmitted, setFormIsSubmitted] = useState<boolean | null>(null)
    const [color, setColor] = useState<string>('');
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const setTheme = (themeColor: string) => {
      localStorage.setItem(localStorageKeyName, themeColor);
      setColor(themeColor)

  }

  const localStorageKeyName: string = 'ibrahimaq-theme';
  // check if color is stored in localStorage
  useEffect(() => {
      const getItem = localStorage.getItem(localStorageKeyName);
      if (getItem) {
          const color = getItem;
          setTheme(color);
      } else {
          setTheme('indigo')
      
      }

  }, [])

  useEffect(() => {
      if (darkTheme) {
          changeToDark()
          return
      } 
      if (!darkTheme) {
          changeToLight()
          return
      }
  }, [darkTheme])


    return (
        <GlobalContext.Provider value={{activeOverlay, setActiveOverlay, formIsSubmitted, setFormIsSubmitted, color, setTheme, darkTheme, setDarkTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    return context
}