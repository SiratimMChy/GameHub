import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Profile = () => {
    const { setUser, user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenform = () => {
        setIsOpen(!isOpen);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        }).then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl })
        }).catch((error) => {
            console.log(error);

        });
    }



    return (
        <div className="flex justify-center items-center pb-20 m-10">
            <div className="card w-1/2 bg-base-100 shadow-xl p-8">

                <div className="flex flex-col items-center mb-6">
                    <div className="avatar">
                        <div className="w-28 rounded-full">
                            <img src={user?.photoURL} alt="User" />
                        </div>
                    </div>

                    <p className="text-xl font-semibold mt-3">{user?.displayName}</p>
                    <p className="text-gray-500">{user?.email}</p>
                </div>

                <button onClick={handleOpenform} className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold w-50 mt-6 mx-auto">
                    Edit Profile
                </button>



                {
                    isOpen && (
                        <form onSubmit={handleUpdate} className="flex flex-col">

                            <label className="label text-black text-sm font-semibold">Name</label>
                            <input
                                defaultValue={user?.displayName}
                                name="name"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Enter Your Name"

                            />

                            <label className="label text-black text-sm font-semibold mt-4">Photo URL</label>
                            <input
                                defaultValue={user?.photoURL}
                                name="photoUrl"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Update Your Photo URL"
                            />

                            <button
                                className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold w-50 mt-6 mx-auto"
                                type="submit"
                            >
                                Update
                            </button>
                        </form>
                    )}

            </div>
        </div>
    );
};

export default Profile;
