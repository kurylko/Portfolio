import './App.css';
import Main from './layouts/Main';
import useFetchData from "./useFetchData.js";

function App() {

    const {data: projectsData, loading: projectsLoading} = useFetchData();

    return (
        <Main projects={projectsData}
              loading={projectsLoading}
        ></Main>
    )
}

export default App
