import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import auth from '../firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
const Login = () => {

    const { setUser, handleSignupWithGoogle } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const SignInWithGoogle = () => {
        handleSignupWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='items-center justify-center pb-10'>
            <title>Login</title>
            <div className="flex items-center justify-center p-25">
                <form onSubmit={handleSubmit} className="fieldset  bg-linear-to-r from-blue-50 to-blue-100 border-base-300 rounded-box w-sm border p-4 px-8">
                    <fieldset className="fieldset">
                        <label className="label text-black text-sm font-semibold">Email</label>
                        <input name='email' type="email" className="input validator" placeholder="Enter Your Email" required />
                        <p className="validator-hint hidden">Required</p>
                    </fieldset>

                    <label className="fieldset">
                        <span className="label text-black text-sm font-semibold">Password</span>
                        <input name='password' type="password" className="input validator" placeholder="Enter Your Password" required />
                        <span className="validator-hint hidden">Required</span>
                    </label>

                    <div><a className="link link-hover text-sm">Forgot password?</a></div>


                    <button onClick={SignInWithGoogle} className="btn"><FcGoogle className="text-2xl" /></button>

                    <div className="flex gap-1 text-sm ">
                        <span className='text-black'>Don't have an account?</span><Link className='text-blue-600 link-hover' to="/signup">Register</Link>
                    </div>

                    <button className="btn  bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold mt-4" type="submit">Login</button>
                </form>
            </div>

        </div>
    );
};

export default Login;