import React, { useEffect, useState } from 'react';
import sImg from "../assets/Star.png";
import { Link } from 'react-router';
import { motion as Motion } from "motion/react"
const AllGames = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                const sorted = data.sort((a, b) => b.ratings - a.ratings);
                setGames(sorted);
            })
            .catch(err => console.log(err));
    }, []);
    const numberFormat = (n) =>
        new Intl.NumberFormat("en", {
            notation: "compact",
            maximumFractionDigits: 1,
        }).format(n);
    return (

        <div className='m-4 pb-25 px-35'>
            <title>AllGames</title>
            <div>
                <h3 className='text-center text-3xl font-bold pb-5'>All Games</h3>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 justify-items-center'>
                {
                    games.map(Game =>
                        <Motion.div initial={{ scale: 0 }} animate={{
                            scale: 1,
                            transition: { duration: 2 }
                        }} key={Game.id} className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={Game?.coverPhoto}
                                    alt="Shoes"
                                    loading="lazy" />
                            </figure>
                            <div className="card-body mt-2">
                                <h2 className="card-title mb-2">{Game?.title}</h2>
                                <div className="flex justify-between">
                                    <div className="flex gap-1">
                                        <img src={sImg} alt="" className="w-7 h-7" />
                                        <h2 className="font-bold text-2xl">{numberFormat(Game?.ratings)}</h2>
                                    </div>
                                    <Link to={`/details/${Game?.id}`} className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg">View Details</Link>
                                </div>
                            </div>
                        </Motion.div>
                    )
                }

            </div>

        </div>
    );
};

export default AllGames;