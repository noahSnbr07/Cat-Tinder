import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import '../styles/swiper.css';
export default function Swiper() {
    const apikey = import.meta.env.VITE_CAT_API_KEY;
    const [data, setData] = useState([]);
    const [catIndex, setCatIndex] = useState(0);

    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": apikey,
    });

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    const getCat = () => {
        fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1`, requestOptions)
            .then((res) => res.json())
            .then((jsonData) => {
                setData(prevData => [...prevData, jsonData[0].url]);
            })
            .catch((e) => { console.error(e); });
    }

    useEffect(() => {
        if (localStorage.getItem('nicecats') === null) { localStorage.setItem('nicecats', JSON.stringify([])); }
        for (let i = 0; i < 2; i++) {
            getCat();
        }
    }, []);

    const handleSelection = (choice) => {
        if (choice === 'up') {
            const oldListString = localStorage.getItem('nicecats');
            const oldList = oldListString ? JSON.parse(oldListString) : [];
            let newList = [...oldList];
            newList.push(data[catIndex]);
            localStorage.setItem('nicecats', JSON.stringify(newList));
            console.log(data)
        }
        setCatIndex(catIndex => catIndex += 1);
        getCat();
    }
    return (
        <>
            {data.length > 0 ? (
                <img loading='lazy' className='presentImage' src={data[catIndex]} />
            ) : (
                <PulseLoader color="var(--accent)" className='loader' />
            )}
            <div className='controlPanel'>
                <button onClick={() => { handleSelection('up') }}> 😻 </button>
                <button onClick={() => { handleSelection('down') }}> 👎🏼 </button>
            </div>
        </>
    );
}