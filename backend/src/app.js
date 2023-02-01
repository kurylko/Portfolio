import express from "express";
import { database } from "./firebase";
import { RequestHandler } from "express";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";


import dotenv from "dotenv";
dotenv.config();

const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5005", 10);

const app = express();

const port = process.env.EXPRESS_PORT;

app.use(express.json());

app.listen(EXPRESS_PORT, () => {
  console.log("Express listening on port", EXPRESS_PORT);
});


app.get("/", (req, res) => {
  res.send("Hello from Express!");
});


const getAllProjects = async (req, res) => {
  const projectCol = collection(database, "projects");
  const projectsSnapshot = await getDocs(eventsCol);
  const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
  res.json(projectsList);
};

app.get("/projects", getAllProjects);

