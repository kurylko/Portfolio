import '../App.css';
import { DESC_2 } from '../consts.js';
import entity from '../assets/icons/entity.jpg';
import kendo from '../assets/icons/kendo.png';
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
import tsicon from '../assets/icons/typescript-100.png';
import dart from '../assets/icons/dart-2.png';
import flutter from '../assets/icons/flutter-100.png';
import postgresql from '../assets/icons/postgresql-100.png';
import redux from '../assets/icons/redux.png';
import csharp from '../assets/icons/c-sharp.jpg';
import neticon from '../assets/icons/neticon.png';
import signalr from '../assets/icons/signalr.png';
import aspnet from '../assets/icons/aspnet.svg';
import docker from '../assets/icons/docker.png';
import reactflow from '../assets/icons/reactflow.png';
import cypress from '../assets/icons/cypress.png';
import tanstack from '../assets/icons/tanstack.svg';
import aspire from '../assets/icons/aspire.jpg';



function Stack() {
  // const iconsArray = [tsicon, react, nextjs, api, materialui, sass, tailwind, vite, node, express, mysql, postgresql,firebase, redux, dart, flutter, csharp, neticon, signalr, aspnet, docker, reactflow];
  const iconsArray = [
    // ================= FRONTEND =================
    { icon: tsicon, label: 'TypeScript' },
    { icon: react, label: 'React' },
    { icon: nextjs, label: 'Next.js' },
    { icon: redux, label: 'Redux' },
    { icon: vite, label: 'Vite' },
    { icon: tanstack, label: 'Tanstack Query' },
    { icon: materialui, label: 'Material UI' },
    { icon: tailwind, label: 'Tailwind' },
    { icon: kendo, label: 'Telerik Kendo' },
    { icon: sass, label: 'Sass' },
    { icon: reactflow, label: 'React Flow' },

    // ================= BACKEND =================
    { icon: node, label: 'Node.js' },
    { icon: express, label: 'Express' },
    { icon: api, label: 'API/Swagger' },
    { icon: aspnet, label: 'ASP.NET' },
    { icon: csharp, label: 'C#' },
    { icon: neticon, label: '.NET' },
    { icon: signalr, label: 'SignalR' },
    { icon: entity, label: 'Entity Framework' },

    // ================= DATABASE =================
    { icon: mysql, label: 'MySQL' },
    { icon: postgresql, label: 'PostgreSQL' },
    { icon: firebase, label: 'Firebase' },

    // ================= MOBILE =================
    { icon: dart, label: 'Dart' },
    { icon: flutter, label: 'Flutter' },

    // ================= DEVOPS =================
    { icon: docker, label: 'Docker' },
    { icon: aspire, label: '.NET Aspire' },

    // ================= OTHER =================
    { icon: cypress, label: 'Cypress' },
  ];

  return (
    <div className="stack">
      MY STACK
      <div className="stack-container">
        <h1 className="desc-2 heading-small">{DESC_2}</h1>
        <div className="stack-list">
          {iconsArray.map((item, index) => (
            <div className="stack-item" key={index}>
              <img className="stack-icon" src={item.icon} alt={item.icon} />
                <span className="stack-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
