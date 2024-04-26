import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;

        createUser(email, pass)
            .then(result => {
                console.log(result);
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt }
                //api re call
                fetch('http://localhost:5000/users', {
                    method: 'post',
                    headers: {
                        'content-type': 'Application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            })
            .catch(error => console.log(error.message))
    }


    return (
        <div>
            <h2>please sign up</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">signup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleSignUp}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;