import './App.css';
import Main from './layouts/Main';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from './consts';

function App() {
  const [projects, setProjects] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(`http://${api}/projects`);
      const allProjects = response.data;
      setProjects(allProjects)
    }
    catch (error) {
      console.log("err", error);
    }

  };

  useEffect(() => {
    getData()
  }, [])



  return (
    <Main projects={projects}></Main>
  )
}

export default App
