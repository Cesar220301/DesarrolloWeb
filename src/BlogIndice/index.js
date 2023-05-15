import React from "react";
import { BlogContext } from "../BlogContext";
import './BlogIndice.css';
function BlogIndice({temaActivo , setTemaActivo}){
    const {indiceCSS, useAbrirIndice} = React.useContext(BlogContext);
    function cambiarTema (tema) {
        setTemaActivo(tema);
    };
    return <aside className={(useAbrirIndice ? "mostrarIndice ": "ocultarIndice ")+"indice"}>
        {

            indiceCSS.map(
                (e) =>(
                    // Key nos va a permitir iterar
                    // <a key={e} href={'#'+e}>{e}</a>
                    <div key={e} onClick={() =>cambiarTema(e)} className={temaActivo===e? "temaActivo indice__contenedor-titulo": "indice__contenedor-titulo"}>
                        <a href={"#tema-"+e}>
                            {e}
                        </a>
                        <div className="before"></div>
                    </div>
                    
                )
            )
        }
    </aside>
}

export {BlogIndice};