import React from "react";
import { BlogContext } from "../BlogContext";
import './BlogIndice.css';
function BlogIndice(){
    const {indiceCSS} = React.useContext(BlogContext);
    return <aside className="indice">
        {

            indiceCSS.map(
                (e) =>(
                    // Key nos va a permitir iterar
                    // <a key={e} href={'#'+e}>{e}</a>
                    <a key={e} href="no">{e}</a>
                )
            )
        }
    </aside>
}

export {BlogIndice};