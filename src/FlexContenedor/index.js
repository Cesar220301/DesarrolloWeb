import React from 'react';
import "./FlexContenedor.css"
import { FlexContenedorPropiedad } from "../FlexContenedorPropiedad";
import { BlogContext} from "../BlogContext";
function FlexContenedor(){
    const { propiedades , temaActivo } = React.useContext(BlogContext);
   
    return <main className="FlexContenedor">
        {
            propiedades[temaActivo].map(p=>(
                <FlexContenedorPropiedad 
                    key={p.propiedad}
                    propiedad={p.propiedad}
                    descripcion={p.descripcion} 
                    valor={p.valor} 
                    cambiarValor={p.cambiarValor}
                    listaValores={p.listaValores} 
                />
            ))
            
        }
        
    </main>
}

export {FlexContenedor};