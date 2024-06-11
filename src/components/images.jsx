import { RiLink } from "react-icons/ri";
import { IoPricetagsSharp } from "react-icons/io5";
import { useState, useEffect, useRef, useLayoutEffect} from "react";
import Axios from 'axios';
import { data } from "autoprefixer";

// Take user input from tab bar and input it into this URL, Search will reload page. 
export default function Images({index, durration}){ 

    const isImage =  /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(index);
    const isVideo =  /\.(mp4|webm|ogg|mov)$/i.test(index)

    // Map each element of links
    return(
    <section className="images-container">
            
            <li className="image-list-container"> 
                <div className="image-full-container">
                    {isImage && <img className='image' src={index}/>}
                    {isVideo && <video className="image" controls="controls" src={index}/>}                                  
                    <div className="image-bottom"> 
                        <h1 className="m-2"> {durration} </h1>
                        <div className="image-buttons"> 
                            <button> <RiLink /> </button>
                            <button> <IoPricetagsSharp /> </button>
                        </div>
                    </div>
                </div>
            </li>
    </section>
);
}