import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const querySnapshot = await getDocs(collection(db, "projects"));
            const items = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
            setData(items);
            setLoading(false);
        }
        fetchData();
    }, []);
    console.log('data from Firebase', data, loading);

    return {data, loading};
}

export default useFetchData;