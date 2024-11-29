import lightMode from "../../assets/website/light-mode-button.png";
import darkMode from "../../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";

const DarkMode = () => {
const [theme, setTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme") :"light")

const element=document.documentElement;
console.log(element);


useEffect(()=>{
    if(theme==="dark"){
        element.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }else{
        element.classList.remove("dark")
        localStorage.setItem("theme", "light")
    }
},[theme])
  return (
    <div className="relative">
      <img
      onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}
        src={lightMode}
        alt=""
        className={`w-12 cursor-pointer drop-shadow-lg transition-all duration-200 absolute right-0 z-10 ${theme==="dark" ? "opacity-0" :"opacity-100"}`}
      />
      <img
      onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}
        src={darkMode}
        alt=""
        className="w-12 cursor-pointer drop-shadow-lg transition-all duration-200"
      />
    </div>
  );
};

export default DarkMode;
