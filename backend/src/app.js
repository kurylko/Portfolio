import express from "express";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore/lite";
import { database } from "./firebase.js";
import cors from "cors";


import dotenv from "dotenv";
dotenv.config();

const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5000", 10);

const app = express();

const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
  allow: true
}

app.use(cors(corsOptions));
app.use(express.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.listen(EXPRESS_PORT, () => {
  console.log("Express listening on port", EXPRESS_PORT);
});


app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// GET PROJECTS
const getAllProjects = async (req, res) => {
  const projectCol = collection(database, "projects");
  const projectsSnapshot = await getDocs(projectCol);
  const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
  res.json(projectsList);
};

app.get("/projects", getAllProjects);


const getProjectById = async (
  req,
  res
) => {
  getDoc(doc(database, `projects/${req.params.itemId}`))
    .then((snapshot) => {
      snapshot.exists() ? res.json(snapshot.data()) : res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

app.get("/projects/:itemId", getProjectById);

// POST MESSAGE 

const validateContact = (req, res, next) => {
  const { email, name, message } = req.body;
  const errors = [];

  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  if (!message) {
    errors.push({ field: "message", message: "Please type your message" });
  }
  if (!name) {
    errors.push({ field: "name", message: "Please type your name" });
  }
  if (!email) {
    errors.push({ field: "name", message: "Please type your e-mail" });
  }
  if (!emailRegex.test(email)) {
    errors.push({ field: 'email', message: 'Invalid email' });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};


const createContact = async (
  req,
  res
) => {
  const contactsCol = collection(database, "contacts");
  addDoc(contactsCol, req.body).then((doc) => {
    res.status(201).send(doc.id);
  })
    .catch((err) => {
      console.error(err, "Error: message can't be sent");
      res.sendStatus(500);
    });
};

app.post("/contacts", validateContact, createContact);



const getAllContacts = async (req, res) => {
  const contactsCol = collection(database, "contacts");
  const contactsSnapshot = await getDocs(contactsCol);
  const contactsList = contactsSnapshot.docs.map((doc) => doc.data());
  res.json(contactsList);
};

app.get("/contacts", getAllContacts);