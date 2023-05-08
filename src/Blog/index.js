import React from "react";
import {BlogNav} from '../BlogNav'
import {BlogContenido} from '../BlogContenido'
import {BlogIndice} from '../BlogIndice'
import './Blog.css';
const Blog = () => {
    return <React.Fragment>
        <BlogNav />
        <div className="Blog__contenedor">
            <BlogIndice />
            <BlogContenido />
        </div>
    </React.Fragment>
}

export { Blog };