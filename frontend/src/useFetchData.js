import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const useFetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const items = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
            setData(items);
        }
        fetchData();
    }, []);
    console.warn('data from Firebase', data);

    return data;
}

export default useFetchData;