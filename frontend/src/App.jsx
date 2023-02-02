import './App.css';
import Main from './layouts/Main';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [projects, setProjects] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:5006/projects");
      const allProjects = response.data;
      console.log("resp:", response, "status:", response.status);
      setProjects(allProjects)
    }
    catch (error) {
      console.log("err", error);
    }

  };

  useEffect(() => {
    getData()
  }, [])

  console.log("RR",projects)

  return (
    <Main projects={projects}></Main> 
  )
}

export default App
