import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => setResponse(response))
            .catch((error) => setError(error, "Oops.. Error "))
            .finally(() => setLoading(false));
    }, []);

    return [response, error, loading];
};