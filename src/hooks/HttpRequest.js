// Imports
//////////

import { useState, useEffect } from 'react';
import Axios from "axios";


// Custom Hook for HTTP requests
export const useHttpRequest = (url, dependencies) => {
    // https://api.myjson.com/bins/183ywp

    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        console.log('doing http request');

        // Do the Ajax request & set the state
        Axios.get(url)
            .then(res => {
                setIsLoading(false);
                setFetchedData(res.data)
            }).catch(err => {
                console.log("there was an error: " + err);
            })
    }, dependencies);

    return [isLoading, fetchedData]
};