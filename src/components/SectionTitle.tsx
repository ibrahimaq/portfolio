import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
interface ISectionTitle {
  title: string;
}
const SectionTitle = ({title}: ISectionTitle) => {
  const {darkTheme} = useGlobalContext();

  return ( 
    <h2 className={`${darkTheme ? 'text-slate-200' : 'text-dark'}`}>{title}</h2>
   );
}
 
export default SectionTitle;