import React from "react";
import './FlexEjemplo.css';
function FlexEjemplo({children , estilo ,propiedad }){
    return <div className={propiedad+"--"+estilo + " FlexEjemplo"}>
        {children}
    </div>
}

export {FlexEjemplo};