import React from "react";
import {BlogNav} from '../BlogNav'
import {BlogContenido} from '../BlogContenido'
import {BlogIndice} from '../BlogIndice'
import './Blog.css';
import { BlogContext} from "../BlogContext";
const Blog = () => {
    const {temaActivo , setTemaActivo} = React.useContext(BlogContext);
    return <React.Fragment>
        <BlogNav />
        <div className="Blog__contenedor">
            <BlogIndice 
                temaActivo = {temaActivo}
                setTemaActivo = {setTemaActivo}
            />
            <BlogContenido />
        </div>
    </React.Fragment>
}

export { Blog };