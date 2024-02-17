import { useState } from "react";
import '../styles/archive.css'
export default function Archive() {

    const retreivedCatList = JSON.parse(localStorage.getItem('nicecats')) || [];
    const [localCatsList, setLocalCatList] = useState([...retreivedCatList]);

    const removeCat = (index) => {
        const newList = [...localCatsList];
        newList.splice(index, 1);
        setLocalCatList(newList);
        localStorage.setItem('nicecats', JSON.stringify(newList));
    }

    return (
        <center className='saved-cats'>
            {localCatsList.length > 0 ? (
                <>
                    {localCatsList.map((cat, index) => {
                        return (
                            <div key={index} className='saved-cat'>
                                <center><img src={cat} alt='saved cat' /></center>
                                <section className='saved-controls'>
                                    <button onClick={() => { removeCat(index); }}>🚫</button>
                                    <span> ID: {index} </span>
                                </section>
                            </div>
                        )
                    })}

                    <button onClick={() => localStorage.clear()} className='clearAllCats'> 🚮 </button>
                </>
            ) : (
                <h1>
                    <center>No Saved Cats! 😿</center>
                </h1>
            )}
        </center>
    );
}