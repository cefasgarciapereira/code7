import { useState, useEffect, useRef } from 'react'

function useFetch(url) {
    const cache = useRef({});
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setLoading(true);
            if (cache.current[url]) {
                const data = cache.current[url];
                setData(data);
                setLoading(false);
            } else {
                const response = await fetch(url);
                const data = await response.json();
                cache.current[url] = data;
                setData(data);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { loading, data };
};

export default useFetch