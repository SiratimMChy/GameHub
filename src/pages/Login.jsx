import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='items-center justify-center pb-10'>
            <title>Login</title>
            <div className="flex items-center justify-center p-25">
                <form className="fieldset  bg-linear-to-r from-blue-50 to-blue-100 border-base-300 rounded-box w-sm border p-4 px-8">
                    <fieldset className="fieldset">
                        <label className="label text-black text-sm font-semibold">Email</label>
                        <input type="email" className="input validator" placeholder="Email" required />
                        <p className="validator-hint hidden">Required</p>
                    </fieldset>

                    <label className="fieldset">
                        <span className="label text-black text-sm font-semibold">Password</span>
                        <input type="password" className="input validator" placeholder="Password" required />
                        <span className="validator-hint hidden">Required</span>
                    </label>

                    <div className="flex gap-1 text-sm ">
                        <span className='text-black'>Don't have an account?</span><Link className='text-blue-600 link-hover' to="/signup">Register</Link>
                    </div>

                    <div><a className="link link-hover text-sm">Forgot password?</a></div>


                    <button className="btn  bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold mt-4" type="submit">Login</button>
                </form>
            </div>

        </div>
    );
};

export default Login;