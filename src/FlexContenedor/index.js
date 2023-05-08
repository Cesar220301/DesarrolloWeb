import React from 'react';
import "./FlexContenedor.css"
import { FlexContenedorPropiedad } from "../FlexContenedorPropiedad";
import { BlogContext} from "../BlogContext";
function FlexContenedor(){
    const {
        useAlingItems , setUseAlingItems , alingItems, alingItemsDescripcion,
        useJustifyContent , setUseJustifyContent , justifyContent, justifyContentDescripcion,
        useFlexDirection , setUseFlexDirection , flexDirection, flexDirectionDescripcion,
        useFlexWrap , setUseFlexWrap , flexWrap, flexWrapDescripcion
    } = React.useContext(BlogContext);
    const propiedades = [
        {
            "propiedad": "Aling-items",
            "descripcion" : alingItemsDescripcion,
            "valor": useAlingItems,
            "cambiarValor": setUseAlingItems,
            "listaValores": alingItems
        },
        {
            "propiedad": "Justify-content",
            "descripcion" : justifyContentDescripcion,
            "valor": useJustifyContent,
            "cambiarValor": setUseJustifyContent,
            "listaValores": justifyContent
        },
        {
            "propiedad": "Flex-direction",
            "descripcion" : flexDirectionDescripcion,
            "valor": useFlexDirection,
            "cambiarValor": setUseFlexDirection,
            "listaValores": flexDirection
        },
        {
            "propiedad": "Flex-wrap",
            "descripcion" : flexWrapDescripcion,
            "valor": useFlexWrap,
            "cambiarValor": setUseFlexWrap,
            "listaValores": flexWrap
        }
    ];
    return <main className="FlexContenedor">
        {
            propiedades.map(p=>(
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