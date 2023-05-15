import React from "react";
import './BlogNav.css'
import { BlogContext } from "../BlogContext";
function BlogNav(){
    const {useAbrirIndice,setAbrirIndice} = React.useContext(BlogContext);
    const indiceEstado = ()=>{
        setAbrirIndice(!useAbrirIndice);
    }
    return <>
        <nav className="BlogNav-contenedor">
            <ul>
                <input 
                    type="button"
                    className="BlogNav-contenedor__menu"
                    onClick={indiceEstado}
                />
                <li className="BlogNav-contenedor__elemento">
                    JS
                </li>
                <li className="BlogNav-contenedor__elemento">
                    
                    HTML
                </li>
                <li className="BlogNav-contenedor__elemento">
                    CSS   
                </li>
            </ul>
        </nav>
    </>
}

export { BlogNav };