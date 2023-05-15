import React from "react";
import "./BlogContenido.css"
import { FlexContenedor } from "../FlexContenedor";
import { BlogContext} from '../BlogContext'
const BlogContenido = () => {
    const{ useAbrirIndice } = React.useContext(BlogContext);
    return <div className={useAbrirIndice? "BlogContenido-contenedor padding-left":"BlogContenido-contenedor"}>
        <FlexContenedor/>
    </div>
}

export { BlogContenido } 