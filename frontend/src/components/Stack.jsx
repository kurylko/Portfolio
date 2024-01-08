import '../App.css';
import {DESC_2} from "../consts.js";
import css from '../assets/icons/css-100.png';
import html from '../assets/icons/html-100.png';
import api from '../assets/icons/api.png';
import express from '../assets/icons/express-100.png';
import firebase from '../assets/icons/firebase-96.png';
import materialui from '../assets/icons/material-ui.256.png';
import mysql from '../assets/icons/mysql-100.png';
import nextjs from '../assets/icons/next-js-logo.png';
import node from '../assets/icons/nodejs-96.png';
import react from '../assets/icons/react-128.png';
import sass from '../assets/icons/sass-100.png';
import tailwind from '../assets/icons/tailwind-logo.png';
import vite from '../assets/icons/vite-logo.png';
import jsicon from '../assets/icons/javascript-100.png';
import tsicon from '../assets/icons/typescript-100.png';
import dart from '../assets/icons/dart-2.png';
import flutter from '../assets/icons/flutter-100.png';
import postgresql from '../assets/icons/postgresql-100.png';

function Stack() {

    const iconsArray = [jsicon, tsicon, css, html, react, nextjs, api, materialui, sass, tailwind, vite, node, express, mysql, postgresql,firebase, dart, flutter];

    return (
        <div className='stack'>
            MY STACK
            <div className='stack-container'>
                <h1 className='desc-2 heading-small'>{DESC_2}</h1>
                <div className='stack-list'>
                    {iconsArray.map((icon, index)  =>
                        <div className='stack-item' key={index}>
                            <img className='stack-icon' src={icon} alt={icon}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Stack