import React from "react";
import './FlexContenedorPropiedad.css'
import {FlexTitulo} from "../FlexTitulo"
import {FlexDescripcion} from "../FlexDescripcion"
import {FlexEjemplo} from "../FlexEjemplo"
import {FlexElemento} from "../FlexElemento"
function FlexContenedorPropiedad({propiedad,valor,listaValores,cambiarValor, descripcion}){
    return <section className="FlexContenedor_Propiedad" id={propiedad}>
        <FlexTitulo 
            listaValores={listaValores}
            cambiarValor={cambiarValor}
        >
            {propiedad}:
        </FlexTitulo>
        <FlexDescripcion>{descripcion}</FlexDescripcion>
        <FlexEjemplo estilo={valor} propiedad={propiedad}>
            <FlexElemento />
            <FlexElemento />
            <FlexElemento />
        </FlexEjemplo>
    </section>
}
export {FlexContenedorPropiedad};