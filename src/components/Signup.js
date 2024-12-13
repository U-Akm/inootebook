import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const json = await response.json();
        if (json.success) {
            localStorage.setItem('signupSuccess', 'You have successfully signed up! Welcome to the app.');
            localStorage.setItem('token', json.authtoken);
            history.push("/");
        } else {
            alert("Error in creating account. Please try again.");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-lg border-0 rounded-4 transition-all duration-300" style={{ width: "400px", padding: "30px", backgroundColor: "#ffffff" }}>
                <div className="card-body">
                    <h2 className="text-center mb-4 text-success">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={credentials.name}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={credentials.email}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={credentials.password}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100 transition-all duration-300 hover:bg-green-700">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
