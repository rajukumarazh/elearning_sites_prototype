import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LogIN() {
	const notifyDefault = () => toast('Successfully logout', { autoClose: 2000 });

	const history = useNavigate();
	const [logInDetails, setLogInDetails] = useState({
		username: '',
		password: '',
	});

	const [resp, setResp] = useState();
	console.log('resp', resp);
	const handleSubmit = async (e) => {
		e.preventDefault();
		var formdata = new FormData();
		formdata.append('username', `${logInDetails.username}`);
		formdata.append('password', `${logInDetails.password}`);
		console.log('form data', formdata);
		var myHeaders = new Headers();
		myHeaders.append(
			'Cookie',
			'MoodleSession=4159819759faeb140d19cf62dc8e66c2'
		);
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'follow',
		};
		fetch(
			'http://elearningstack.com/ilearn24x7/local/customregister/login_user.php?action=login&service=moodle_mobile_app',
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setResp(() => result.userid))
			.then((c) => console.log('res', c));
		// .catch((error) => console.log('error', error));
	};
	console.log('logInDetails', logInDetails);
	if (resp !== undefined) {
		window.location.assign('/');
	}

	useEffect(() => {
		sessionStorage.setItem('auth', resp);
	}, [resp]);
	// if (resp == null) {
	// 	// notifyDefault();
	// 	alert('Logout Successfull ');
	// }
	console.log('session', sessionStorage.getItem('auth'));
	if (sessionStorage.getItem('auth') == undefined) {
		notifyDefault();
	}

	return (
		<div
			style={{
				backgroundImage: `url(${'/login-bg.png'})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
			className=" min-h-screen flex flex-col "
		>
			<div className="container  h-md mx-auto flex-1 flex flex-col items-center justify-center px-2 opacity-55 rounded-full">
				<div className=" px-6 py-8 rounded shadow-lg md:max-w-lg text-black bg-gray-200">
					<h1 className="mb-8 text-3xl text-center font-bold">Log In</h1>

					<div className=" relative mb-4">
						<FaUserCircle className=" absolute left-1 top-3" />
						<input
							onChange={(e) =>
								setLogInDetails({ ...logInDetails, username: e.target.value })
							}
							type="text"
							className="block border border-grey-light w-full px-4 py-2    rounded  bg-white "
							placeholder="Username..."
						/>
					</div>
					<div className=" relative">
						<FaLock className="absolute left-1 top-3" />
						<input
							onChange={(e) =>
								setLogInDetails({ ...logInDetails, password: e.target.value })
							}
							type="password"
							className="block border border-grey-light w-full px-4 py-2  rounded mb-4  bg-white"
							name="password"
							placeholder="Password...."
						/>
					</div>
					<div className="flex justify-between">
						<a href="/signup" className="">
							Not a user ? Register Here
						</a>
						<a href="" className="">
							Forgot Password
						</a>
					</div>

					<div className=" inline-block mt-5">
						<div className="">
							<label className=" items-center">
								<input type="checkbox" className="p-2" />

								<span className="ml-2">
									I declare to have read and accepted the use privacy policy
									available
								</span>
							</label>
							<label className="inline-block items-center">
								<input type="checkbox" />
								<span className="ml-2 overflow-hidden">
									I declare to have read and accepted the use terms and
									conditions available at this address
								</span>
							</label>
						</div>
					</div>
					<button
						type="submit"
						onClick={handleSubmit}
						className="w-full text-center py-2 rounded bg-red-500 hover:bg-red-400 focus:outline-none my-1 mt-2 font-semibold"
					>
						LOGIN
					</button>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default LogIN;
