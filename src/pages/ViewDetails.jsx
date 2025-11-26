import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import sImg from "../assets/Star.png";
const ViewDetails = () => {
    const [games, setGames] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setGames(data))
            .catch(err => console.error(err));
    }, []);

    const gameDetails = games.find(g => g.id === id);

    return (
        <div className="flex justify-center p-10 pb-25">
            <title>Game Details</title>
            {gameDetails ? (
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden ">
                    <img
                        src={gameDetails.coverPhoto}
                        alt={gameDetails.title}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-2">{gameDetails.title}</h1>
                        <p className="text-gray-700 mb-4">{gameDetails.description}</p>
                        <div className="mb-4 text-gray-800 space-y-2">
                            <div className="flex justify-between text-sm text-gray-800">
                                <h4 className="text-xl">
                                    <span className="font-semibold">Category: </span>
                                    <span className="text-lg">{gameDetails.category}</span>
                                </h4>
                                <h4 className="flex items-center gap-1 text-xl">
                                    <span className="font-semibold">Ratings: </span>
                                    <img src={sImg} alt="star" className="w-4 h-4" />
                                    <span className="text-lg">{gameDetails.ratings}</span>
                                </h4>
                            </div>

                            <h4 className="text-xl">
                                <span className="font-semibold">Developer:</span> <span className="text-lg">{gameDetails.developer}</span>
                            </h4>
                        </div>


                        <a
                            href={gameDetails.downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Download Game
                        </a>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-screen">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}
        </div>
    );
};

export default ViewDetails;
