import '../App.css';
import iconsjavascript from '../assets/iconsjavascript.png';
import iconstypescript from '../assets/iconstypescript.png';
import {PROGRAMMING_LANGUAGES} from "../consts.js";
import css from '../assets/icons/css.png';
import html from '../assets/icons/html.png';
import api from '../assets/icons/api.png';
import code from '../assets/icons/code.png';
import express from '../assets/icons/express-js.png';
import firebase from '../assets/icons/firebase-logo.png';
import materialui from '../assets/icons/material-ui.png';
import mysql from '../assets/icons/mysql.png';
import nextjs from '../assets/icons/next-js-logo.png';
import node from '../assets/icons/node-logo.png';
import react from '../assets/icons/react.png';
import sass from '../assets/icons/sass.png';
import tailwind from '../assets/icons/tailwind-logo.png';
import vite from '../assets/icons/vite-logo.png';
import jscolor from '../assets/js-color.svg';
import tscolor from '../assets/ts-color.svg';

function Stack() {

    const iconsArray = [css, html, react, nextjs, api, materialui, sass, tailwind, vite, node, express, mysql, firebase];

    return (
        <div className='stack'>
            MY STACK
            <div className='stack-container'>
                <div className='languages'>
                    <h1> {PROGRAMMING_LANGUAGES}</h1>
                    <div className='js-ts-icons'>
                        <img className='js-ts-icon' src={jscolor} alt={jscolor}/>
                        <img className='js-ts-icon' src={tscolor} alt={tscolor}/>
                    </div>
                </div>
                <div className='stack-list'>
                    {iconsArray.map((icon) =>
                        <div className='stack-item'>
                            <img className='stack-icon' src={icon} alt={icon}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Stack