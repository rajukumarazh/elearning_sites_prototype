import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
function SignUpForm() {
	const [signUpdetails, setSignUpDetails] = useState({
		firstname: '',
		lastname: '',
		username: '',
		email: '',
		password: '',
	});
	const [registered, setRegistred] = useState(false);
	console.log('registered', registered);
	const notifyDefault = () =>
		toast('Account Created Successfully', { autoClose: 2000 });
	if (registered == true) {
		notifyDefault();
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		var formdata = new FormData();
		formdata.append('firstname', `${signUpdetails.firstname}`);
		formdata.append('lastname', `${signUpdetails.lastname}`);
		formdata.append('username', `${signUpdetails.username}`);
		formdata.append('email', `${signUpdetails.email}`);
		formdata.append('password', `${signUpdetails.password}`);
		console.log('form data', formdata);
		var requestOptions = {
			method: 'POST',
			body: formdata,
			redirect: 'follow',
		};
		fetch(
			'http://elearningstack.com/ilearn24x7/webservice/rest/server.php?wstoken=ae7f70c9af9acc2fae488c7c6ea34007&wsfunction=auth_email_signup_user&moodlewsrestformat=json',
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				result.success == true && setRegistred(true);
				console.log('data', result);
			})
			.catch((error) => console.log('error', error));
	};
	console.log('userdata', signUpdetails);
	return (
		<div
			className="bg-grey-lighter min-h-screen flex justify-center"
			style={{
				backgroundImage: `url(${'/login-bg.png'})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div>
				<div className="container max-w-sm mx-auto  px-2 mt-4">
					<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
						<h1 className=" text-3xl text-center ">Sign up</h1>

						<input
							onChange={(e) =>
								setSignUpDetails({
									...signUpdetails,
									firstname: e.target.value,
								})
							}
							type="text"
							className="block border border-grey-light w-full p-2 rounded mb-4"
							name=" First Name"
							placeholder="First Name"
						/>

						<input
							onChange={(e) =>
								setSignUpDetails({
									...signUpdetails,
									lastname: e.target.value,
								})
							}
							type="text"
							className="block border border-grey-light w-full p-2 rounded mb-4"
							name="Last Name"
							placeholder="Last Name"
						/>
						<input
							onChange={(e) =>
								setSignUpDetails({
									...signUpdetails,
									username: e.target.value,
								})
							}
							type="text"
							className="block border border-grey-light w-full p-2 rounded mb-4"
							placeholder="User Name"
						/>
						<input
							onChange={(e) =>
								setSignUpDetails({
									...signUpdetails,
									email: e.target.value,
								})
							}
							type="email"
							className="block border border-grey-light w-full p-2 rounded mb-4"
							name="email"
							placeholder="Email"
						/>

						<input
							onChange={(e) =>
								setSignUpDetails({
									...signUpdetails,
									password: e.target.value,
								})
							}
							type="password"
							className="block border border-grey-light w-full p-2 rounded mb-4"
							name="password"
							placeholder="Password"
						/>
						{/* <span className="text-red-400">
							*** Note: &nbsp;password contains atleast one alphanumeric <br />
							and one Capital and one small letter of alphabet and also a digit
						</span> */}
						<p>Format:&nbsp;&nbsp;Ra@123456</p>

						<button
							onClick={handleSubmit}
							type="submit"
							className="w-full text-center py-2 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
						>
							Create Account
						</button>

						<div className="text-center text-sm text-grey-dark mt-4">
							By signing up, you agree to the
							<a
								className="no-underline border-b border-grey-dark text-grey-dark"
								href="#"
							>
								Terms of Service
							</a>{' '}
							and
							<a
								className="no-underline border-b border-grey-dark text-grey-dark"
								href="#"
							>
								Privacy Policy
							</a>
						</div>
						<div className="text-grey-dark ">
							Already have an account?
							<a
								className="no-underline border-b border-blue text-blue"
								href="/login"
							>
								Log in
							</a>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default SignUpForm;
