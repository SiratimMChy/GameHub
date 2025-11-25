import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
       <div className='items-center justify-center pb-5'>
        <title>Regisration</title>
            <div className="flex items-center justify-center p-25">
                <form className="fieldset  bg-linear-to-r from-blue-50 to-blue-100 border-base-300 rounded-box w-sm border p-4 px-8">
                    <fieldset className="fieldset">
                        <label className="label text-black text-sm font-semibold">Name</label>
                        <input type="email" className="input validator" placeholder="Enter Your Name" required />
                        <p className="validator-hint hidden">Required</p>

                        <label className="label text-black text-sm font-semibold">Email</label>
                        <input type="email" className="input validator" placeholder="Enter Your Email" required />
                        <p className="validator-hint hidden">Required</p>

                        <label className="label text-black text-sm font-semibold">PhotoUrl</label>
                        <input type="email" className="input validator" placeholder="Enter Your PhotoUrl" required />
                        <p className="validator-hint hidden">Required</p>

                        <span className="label text-black text-sm font-semibold">Password</span>
                        <input type="password" className="input validator" placeholder="Enter Your Password" required />
                        <span className="validator-hint hidden">Required</span>
                    </fieldset>

                    <div className="flex gap-1 text-sm font-stretch-75%">
                        <span className='text-black'>Already have an account?</span><Link className='text-blue-600' to="/login">Login</Link>
                    </div>

                    <button className="btn  bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold mt-4" type="submit">Login</button>
                </form>
            </div>

        </div>
    );
};

export default Register;