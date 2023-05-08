import React from "react";
import './FlexTitulo.css'
function FlexTitulo({ children , listaValores , cambiarValor}){
    function cambio(e){
        cambiarValor(e.target.value);
    }
    return <h2 className="FlexTitulo">
        {children}
        <select className="FlexTitulo__lista" onChange={cambio}>
            {
                listaValores.map(e =>(
                    <option key={e} value={e} className="lista__opcion">{e}</option>
                ))
            }
        </select>
    </h2>
}

export {FlexTitulo};