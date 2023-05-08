import React from "react";


const BlogContext = React.createContext();
function BlogProvider (props){
    const [indiceCSS,setIndiceCSS] = React.useState([
        'Aling-items',
        'Justify-content',
        'Flex-direction',
        'Flex-wrap',
    ]);

    const justifyContent = ['flex-start', 'center' , 'flex-end','space-between','space-around','space-evenly'];
    const justifyContentDescripcion = "Permite alinear las etiquetas de forma horizontal.";
    const [useJustifyContent,setUseJustifyContent] = React.useState('flex-start');

    const alingItems = ['flex-start', 'center' , 'flex-end','stretch'];
    const alingItemsDescripcion = "Permite alinear las etiquetas de forma vertical.";
    const [useAlingItems,setUseAlingItems] = React.useState('flex-start');

    const flexDirection = ['row', 'column'];
    const flexDirectionDescripcion = "Permite cambiar la direccion en la que se alinearán los elementos.";
    const [useFlexDirection,setUseFlexDirection] = React.useState('row');

    const flexWrap = ['nowrap','wrap', 'wrap-reverse'];
    const flexWrapDescripcion = "Mueve los elementos hacia arriba/abajo cuando no hay suficiente espacion en el contenedor flex.";
    const [useFlexWrap,setUseFlexWrap] = React.useState('nowrap');

    
    

    return(
        <BlogContext.Provider value={
            {
                indiceCSS,
                setIndiceCSS,

                //Lista de las valores de JUSTIFY-CONTENT
                justifyContent,
                //Descripcion de la propiedad
                justifyContentDescripcion,
                //Estado actual de JUSTIFY-CONTENT
                useJustifyContent,
                //Para cambier el estado de JUSTIFY-CONTENT
                setUseJustifyContent,

                //Lista de las valores de ALING-ITEMS
                alingItems,
                //Descripcion de la propiedad
                alingItemsDescripcion,
                //Estado actual de ALING-ITEMS
                useAlingItems,
                //Para cambier el estado de ALING-ITEMS
                setUseAlingItems,
                

                //Lista de las valores de FLEX-DIRECTION
                flexDirection,
                //Descripcion de la propiedad
                flexDirectionDescripcion,
                //Estado actual de FLEX-DIRECTION
                useFlexDirection,
                //Para cambier el estado de FLEX-DIRECTION
                setUseFlexDirection,

                //Lista de las valores de FLEX-WRAP
                flexWrap,
                //Descripcion de la propiedad
                flexWrapDescripcion,
                //Estado actual de FLEX-WRAP
                useFlexWrap,
                //Para cambier el estado de FLEX-WRAP
                setUseFlexWrap

            }
        }>
            {props.children}
        </BlogContext.Provider>
    )
}

export { BlogContext,BlogProvider }