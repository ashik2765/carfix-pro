"use client"
import Image from 'next/image'
import Link from 'next/link';
import SocialLogin from '@/components/shared/SocialLogin';


export default function SignUpPage() {


    const handlesignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const newUser = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        };

        try {
            const res = await fetch("http://localhost:3000/signUp/api", {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.ok) {
                form.reset();
            } else {
                throw new Error("Signup failed. Please try again.");
            }
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <div className="container mx-auto">
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row gap-10">
                        <div className="text-center lg:text-left">
                            <Image src="/assets/images/login/login.svg" width={460} height={502} alt='Login Image' />
                        </div>
                        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                            <form onSubmit={handlesignUp} className="card-body">
                                <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        name="name"
                                        className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        name="email"
                                        className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        name="password"
                                        className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>

                            </form>
                            <div className='text-center'>
                                <p>Or Sign In with</p>
                                <SocialLogin></SocialLogin>
                                <p className="mt-5">Have an account? <Link href="/login"><span className='text-primary'>Sign In</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
