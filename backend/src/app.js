import express from "express";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { database } from "./firebase.js";
import cors from "cors";


import dotenv from "dotenv";
dotenv.config();

const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5005", 10);

const app = express();

app.use(express.json());
app.use(cors());

app.listen(EXPRESS_PORT, () => {
  console.log("Express listening on port", EXPRESS_PORT);
});


app.get("/", (req, res) => {
  res.send("Hello from Express!");
});


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
