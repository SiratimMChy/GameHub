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
                        <p className="text-gray-700 mb-4 text-justify-inter leading-relaxed text-balance">{gameDetails.description}</p>
                        <div className="mb-4 text-gray-800 space-y-2">
                            <div className="flex flex-row sm:flex-col justify-between text-sm text-gray-800">
                                <h5 className="flex gap-2 sm:gap-0.5 text-[16px]">
                                    <span className="font-semibold">Category: </span>
                                    <span className="text-sm mt-0.5">{gameDetails.category}</span>
                                </h5>
                                <h5 className="flex items-center gap-1 text-[16px]">
                                    <span className="font-semibold">Ratings: </span>
                                    <img src={sImg} alt="star" className="w-3 h-3" />
                                    <span className="text-sm mt-0.5">{gameDetails.ratings}</span>
                                </h5>
                            </div>

                            <h5 className="text-lg">
                                <span className="font-semibold">Developed by</span> <span className="text-sm">{gameDetails.developer}</span>
                            </h5>
                        </div>


                        <button
                            href={gameDetails.downloadLink}
                            className="block text-center  px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Download Game
                        </button>
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
