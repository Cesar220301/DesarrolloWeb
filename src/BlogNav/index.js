import React from "react";
import './BlogNav.css'
function BlogNav(){
    return <>
        <nav className="BlogNav-contenedor">
            <ul>
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