import './App.css';
import Main from './layouts/Main';
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import {api} from './consts';

function App() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    async function getData() {
        try {
            const response = await axios.get(`${api}/projects`);
            const allProjects = response.data;
           setLoading(false);
            setProjects(allProjects);
        }
        catch (error) {
            console.log("err", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData()
    }, [])


    return (
        <Main projects={projects}
              loading={loading}
        ></Main>
    )
}

export default App
