import React, { useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import cards_data from '../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

function TitleCards({ title, category }) {
    const [apidate, setApidate] = useState([]);
    const cardsRef = useRef(null);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/ json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2RhNWMzMGJiYjcyM2MyOTUwN2Y1YjNjMGUxZDc4YiIsIm5iZiI6MTczMjUyNjUyMy4xNDIwMjI4LCJzdWIiOiI2NzQxNmZlZDYzNzBlY2FkM2ZmZmM1MDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tI4PKJQRSdEsN1MLY1cT4f6EYUPpO4SN2Cqhl0WuQ8o'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApidate(res.results))
            .catch(err => console.error(err));
    }, []);

    const scrollLeft = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollBy({
                left: -500, // chapga o'tish
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollBy({
                left: 500, // o'ngga o'tish
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="p-4">
            <h1 className="mb-4 text-2xl font-bold capitalize">{title ? title : "Popular on Netflix"}</h1>
            <div className="flex items-center gap-4">
                <button
                    onClick={scrollLeft}
                    className="flex items-center px-5 py-2 mt-2 mb-4 text-white transition bg-blue-500 border rounded-md hover:bg-blue-600"
                >
                    <FiArrowLeft className="mr-2" /> Left
                </button>
                <button
                    onClick={scrollRight}
                    className="flex items-center px-5 py-2 mt-2 mb-4 text-white transition bg-blue-500 border rounded-md hover:bg-blue-600"
                >
                    Right <FiArrowRight className="ml-2" />
                </button>
            </div>
            <div className="overflow-x-auto">
                <div
                    className="flex gap-6 overflow-x-scroll scrollbar-hide" // Maxsus scroll uchun class qo'shildi
                    ref={cardsRef}
                >
                    {apidate.map((card) => (
                        <Link to={`/player/${card.id}`}
                            key={card.id}
                            className="flex-none w-64 overflow-hidden transition-transform duration-300 ease-out transform rounded shadow-lg hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                                alt={card.name}
                                className="object-cover w-full h-48 cursor-pointer"
                            />
                            <p className="mt-2 text-lg font-medium text-center cursor-pointer">
                                {card.original_title}
                            </p>
                        </Link >
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TitleCards;




//  crool siz holati
// import React from 'react';
// import cards_data from '../assets/cards/Cards_data';

// function TitleCards() {
//     return (
//         <div className="p-4">
//             <h1 className="mb-4 text-2xl font-bold capitalize">Popular on Netflix</h1>
//             <div className="grid gap-6 grid-cols md:grid-cols-2 lg:grid-cols-3">
//                 {cards_data.map((card) => (
//                     <div
//                         key={card.id}
//                         className="overflow-hidden transition-transform duration-300 ease-out transform rounded shadow-lg hover:scale-105 hover:shadow-xl"
//                     >
//                         <img
//                             src={card.image}
//                             alt={card.name}
//                             className="object-cover w-full h-48"
//                         />
//                         <p className="mt-2 text-lg font-medium text-center">{card.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default TitleCards;
