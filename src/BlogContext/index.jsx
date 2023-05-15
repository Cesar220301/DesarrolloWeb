import React from "react";


const BlogContext = React.createContext();
function BlogProvider (props){
    const [indiceCSS,setIndiceCSS] = React.useState([
        'Flex Contenedor',
        'Flex Elementos'
    ]);

    // Contenido | FLEX CONTENEDOR
    const [useAbrirIndice,setAbrirIndice] = React.useState(true);
    const [temaActivo,setTemaActivo] = React.useState('Flex Contenedor');

    const display = ['flex','block','inline'];
    const displayDescripcion = "Permite cambiar el comportamiento de una etiqueta, las siguientes propiedades deben contener la propiedad display: flex.";
    const [useDisplay,setUseDisplay] = React.useState('flex');

    const justifyContent = ['flex-start', 'center' , 'flex-end','space-between','space-around','space-evenly'];
    const justifyContentDescripcion = "Permite alinear las etiquetas de forma horizontal.";
    const [useJustifyContent,setUseJustifyContent] = React.useState('flex-start');

    const alingItems = ['flex-start', 'center' , 'flex-end','stretch'];
    const alingItemsDescripcion = "Permite alinear las etiquetas de forma vertical.";
    const [useAlingItems,setUseAlingItems] = React.useState('flex-start');

    const alingContent = ['flex-start', 'center' , 'flex-end','stretch','space-between','space-around'];
    const alingContentDescripcion = "Permite alinear el contenido de forma vertical.";
    const [useAlingContent,setUseAlingContent] = React.useState('flex-start');

    const flexDirection = ['row','row-reverse', 'column','column-reverse'];
    const flexDirectionDescripcion = "Permite cambiar la dirección en la que se alinearán los elementos.";
    const [useFlexDirection,setUseFlexDirection] = React.useState('row');

    const flexWrap = ['nowrap','wrap', 'wrap-reverse'];
    const flexWrapDescripcion = "Mueve los elementos hacia arriba/abajo cuando no hay suficiente espacio en el contenedor flex.";
    const [useFlexWrap,setUseFlexWrap] = React.useState('nowrap');

    

    // Contenido | FLEX ELEMENTOS
    const [useAlignSelf,setUseAlignSelf] = React.useState('flex-start');
    const alignSelf = ['flex-start', 'center' , 'flex-end'];
    const alignSelfDescripcion = "Alinea de forma vertical un elemento que este dentro de un contenedor con display: flex (flex-item).";

    const [useFlexGrow,setUseFlexGrow] = React.useState('0');
    const flexGrow = ['0', '1' , 'ejemplo'];
    const flexGrowDescripcion = "Asigna el tamaño sobrante del contenedor a un flex-item, a esta propiedad se le puede asignar cualquier número entero positivo.";

    const [useFlexShrink,setUseFlexShrink] = React.useState('0');
    const flexShrink = ['0','1', '2' , '3'];
    const flexShrinkDescripcion = "Permite a un flex-item ceder o no el ancho para que otros flex-item puedan adaptarse al contenedor. Toma los mismos valores que la propiedad anterior.";

    const [useFlexBasis,setUseFlexBasis] = React.useState('100px');
    const flexBasis = ['100px', '200px' , '300px'];
    const flexBasisDescripcion = "Permite establecer un ancho inicial a un flex-item lo que quiere decir que el ancho no es fijo.";


    // Contenido a enviar
    const propiedades = {
        "Flex Contenedor": [
            {
                "propiedad": "Display",
                "descripcion" : displayDescripcion,
                "valor": useDisplay,
                "cambiarValor": setUseDisplay,
                "listaValores": display
            },
            {
                "propiedad": "Aling-items",
                "descripcion" : alingItemsDescripcion,
                "valor": useAlingItems,
                "cambiarValor": setUseAlingItems,
                "listaValores": alingItems
            },
            {
                "propiedad": "Aling-content",
                "descripcion" : alingContentDescripcion,
                "valor": useAlingContent,
                "cambiarValor": setUseAlingContent,
                "listaValores": alingContent
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
        ],
        "Flex Elementos":[
            {
                "propiedad": "Align-self",
                "descripcion" : alignSelfDescripcion,
                "valor": useAlignSelf,
                "cambiarValor": setUseAlignSelf,
                "listaValores": alignSelf
            },
            {
                "propiedad": "Flex-grow",
                "descripcion" : flexGrowDescripcion,
                "valor": useFlexGrow,
                "cambiarValor": setUseFlexGrow,
                "listaValores": flexGrow
            },
            {
                "propiedad": "Flex-shrink",
                "descripcion" : flexShrinkDescripcion,
                "valor": useFlexShrink,
                "cambiarValor": setUseFlexShrink,
                "listaValores": flexShrink
            },
            {
                "propiedad": "Flex-basis",
                "descripcion" : flexBasisDescripcion,
                "valor": useFlexBasis,
                "cambiarValor": setUseFlexBasis,
                "listaValores": flexBasis
            },
        ]
    };
    

    return(
        <BlogContext.Provider value={
            {
                
                temaActivo,
                setTemaActivo,
                
                indiceCSS,
                setIndiceCSS,

                // Nos va a permitir mostra el indice o no
                useAbrirIndice,setAbrirIndice,

                propiedades

            }
        }>
            {props.children}
        </BlogContext.Provider>
    )
}

export { BlogContext,BlogProvider }