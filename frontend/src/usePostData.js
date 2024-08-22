import React, {useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';
import {db} from './firebase';

const usePostData = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const postData = async (collectionName, data) => {
        setLoading(true);
        setError(null);

        const colRef = collection(db, "contacts");

        addDoc(colRef, data)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((err) => {
                console.error("Error adding document: ", err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });

        setLoading(false);
    };

    return {loading, postData, error};
};

export default usePostData;

