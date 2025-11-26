import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Register = () => {
    const { registrationWithEmailAndPassword, setUser, user, handleSignupWithGoogle } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;


        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }
        if (!uppercase.test(password)) {
            toast.error('Password must contain at least one uppercase letter.');
            return;
        }
        if (!lowercase.test(password)) {
            toast.error('Password must contain at least one lowercase letter.');
            return;
        }


        registrationWithEmailAndPassword(email, password)
            .then((userCredential) => {

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    setUser(userCredential.user)
                    toast.success('Registration successful!');
                }).catch((error) => {
                    console.log(error);

                });

            })

            .catch(error => {
                toast.error(error.message);
                console.error(error);
            })

    }

    console.log(user);


    const SignUpWithGoogle = () => {
        handleSignupWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success('Google signup successful!');
            })
            .catch(error => {
                toast.error(error.message);
                console.error(error);
            });
    }

    return (
        <div className='items-center justify-center pb-5'>
            <title>Regisration</title>
            <div className="flex items-center justify-center p-25">
                <form onSubmit={handleSubmit} className="fieldset  bg-linear-to-r from-blue-50 to-blue-100 border-base-300 rounded-box w-sm border p-4 px-8">
                    <fieldset className="fieldset">
                        <label className="label text-black text-sm font-semibold">Name</label>
                        <input name='name' type="text" className="input validator" placeholder="Enter Your Name" required />

                        <label className="label text-black text-sm font-semibold">Email</label>
                        <input name='email' type="email" className="input validator" placeholder="Enter Your Email" required />

                        <label className="label text-black text-sm font-semibold">PhotoUrl</label>
                        <input name='photoUrl' type="link" className="input validator" placeholder="Enter Your PhotoUrl" required />


                        <span className="label text-black text-sm font-semibold">Password</span>
                        <input name='password' type="password" className="input validator" placeholder="Enter Your Password" required />

                    </fieldset>
                    <button onClick={SignUpWithGoogle} className="btn"><FcGoogle className="text-2xl" /></button>
                    <div className="flex gap-1 text-sm font-stretch-75%">
                        <span className='text-black'>Already have an account?</span><Link className='text-blue-600' to="/login">Login</Link>
                    </div>

                    <button className="btn  bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold mt-4" type="submit">Register</button>
                </form>
            </div>

        </div>
    );
};

export default Register;