import './App.css';
import Main from './layouts/Main';
import { useFetch } from './hooks/useFetch';
import axios from 'axios';


function App() {
  const url = `http://localhost:5006/projects`;

  const { response, error, loading } = useFetch(url);
  console.log(response);
  

  async function getData() {
    try {
      const response = await axios.get("http://localhost:5006/projects");
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  };

  console.log(getData());

  return (
      <Main></Main>
  )
}

export default App
