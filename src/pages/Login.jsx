import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router';
import auth from '../firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
const Login = () => {

    const { setUser, handleSignupWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.state ? location.state : '/';
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                toast.success('Login successful!');
                navigate(path);
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
                toast.success('Google login successful!');
                navigate(path);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const hanldeforget = (e) => {
        e.preventDefault();
        const emailInput = e.target.form.email.value;
        if (!emailInput) {
            toast.error('Please enter your email first');
            return;
        }
        navigate(`/forgetpassword/${emailInput}`);
    }


    return (
        <div className='items-center justify-center pb-10'>
            <title>Login</title>
            <div className="flex items-center justify-center p-25">
                <form onSubmit={handleSubmit} className="fieldset  bg-linear-to-r from-blue-50 to-blue-100 border-base-300 rounded-box w-sm border p-4 px-8">
                    <fieldset className="fieldset">
                        <label className="label text-black text-sm font-semibold">Email</label>
                        <input name='email' type="email" className="input validator" placeholder="Enter Your Email" />
                        <p className="validator-hint hidden">Required</p>
                    </fieldset>

                    <label className="fieldset">
                        <span className="label text-black text-sm font-semibold">Password</span>
                        <input name='password' type="password" className="input validator" placeholder="Enter Your Password" />
                        <span className="validator-hint hidden">Required</span>
                    </label>

                    <div><button type="button" onClick={hanldeforget} className="link link-hover text-sm">Forgot password?</button></div>


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