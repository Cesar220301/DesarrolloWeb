import React from "react";
import './FlexDescripcion.css'
function FlexDescripcion(props){
    return <p className="FlexDescripcion">
        {props.children}
    </p>
}

export {FlexDescripcion};