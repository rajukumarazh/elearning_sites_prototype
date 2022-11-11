import React, { useEffect, useState } from 'react';
import {
	FaUserAlt,
	FaRegEdit,
	FaRegSun,
	FaSignInAlt,
	FaProductHunt,
	FaPaste,
	FaMobileAlt,
	FaRegListAlt,
} from 'react-icons/fa';
import Navbar from '../Navbar';
import ProfileNavbar from './ProfileNavbar';
function Profile() {
	const [profileDetails, setProfileDetails] = useState({
		username: '',
	});
	const handleSubmit = async (e) => {
		var formdata = new FormData();
		formdata.append('username', 'mahtoamit');
		console.log('form data', formdata);
		var requestOptions = {
			method: 'POST',
			body: formdata,
			redirect: 'follow',
		};

		fetch(
			'http://elearningstack.com/ilearn24x7/webservice/rest/server.php?wstoken=ae7f70c9af9acc2fae488c7c6ea34007&wsfunction=core_user_get_users_by_field&moodlewsrestformat=json',
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('profiledata', result);
			})
			.catch((error) => console.log('error', error));
	};

	handleSubmit();

	return (
		<div>
			<ProfileNavbar />
			<div className="flex md:gap-15  md:p-5">
				<div className="w:screen md:w-3/4 flex gap-8">
					{/* First part of Div Start */}
					<div className="w-1/2 md:gap-5">
						<div className="shadow-md bg-gray-200  mb-2">
							<div className="h-7 bg-gray-600 ">
								<span className="text-lg  font-semibold text-white ml-1 flex relative">
									<FaUserAlt className="mt-1 mr-2" size={15} />{' '}
									<p>USER DETAILS</p>{' '}
									<FaRegEdit className="absolute right-0 top-1" size={15} />
								</span>
							</div>
							<div className="md:p-1">
								<div className=" flex-wrap md:flex">
									<label
										for="firstname"
										className="text-sm font font-semibold "
									>
										Email:
									</label>{' '}
									<p> deepak.kumar@palinfocom.com</p>
								</div>
								<div className=" flex">
									<label for="firstname" className="text-sm font font-semibold">
										Number Of Devices Allowed:
									</label>{' '}
									&nbsp;
									<p>3</p>
								</div>
								<p>
									Check Test user
									<br />
									Rich media status(do not delete or modify)
								</p>
							</div>
						</div>
						{/* second child Div */}
						<div className="shadow-md bg-gray-200  mb-2">
							<div className="h-7 bg-red-600 ">
								<span className="text-lg  font-semibold text-white ml-1 flex relative">
									<FaSignInAlt className="mt-1 mr-2" size={15} />{' '}
									<p>LOG IN ACTIVITY</p>{' '}
									{/* <FaSignInAlt className="absolute right-0 top-1" size={15} /> */}
								</span>
							</div>
							<div className="p-1">
								<div className=" flex ">
									<label
										for="firstname"
										className="text-sm font font-semibold "
									>
										First Access To site:
									</label>{' '}
									&nbsp;
									<p>XXXXXXX</p>
								</div>
								<div className=" flex">
									<label for="firstname" className="text-sm font font-semibold">
										Last Access to Site:
									</label>{' '}
									&nbsp;
									<p>XXXXXXXX</p>
								</div>
								<p>
									Last IP Addresss: XXXXX
									<br />
									Rich media status(do not delete or modify)
								</p>
							</div>
						</div>
						{/* Third Child Div */}
						<div className="shadow-md bg-gray-200  mb-2">
							<div className="h-7 bg-gray-600 ">
								<span className="text-lg  font-semibold text-white ml-1 flex relative">
									<FaPaste className="mt-1 mr-2" size={15} />{' '}
									<p>Course Details</p>{' '}
									{/* <FaRegEdit className="absolute right-0 top-1" size={15} /> */}
								</span>
							</div>
							<div className="p-1">
								<div className=" flex ">
									<label
										for="firstname"
										className="text-sm font font-semibold "
									>
										First Access To site:
									</label>{' '}
									&nbsp;
									<p>XXXXXXX</p>
								</div>
								<div className=" flex">
									<label for="firstname" className="text-sm font font-semibold">
										Last Access to Site:
									</label>{' '}
									&nbsp;
									<p>XXXXXXXX</p>
								</div>
								<p>
									Last IP Addresss: XXXXX
									<br />
									Rich media status(do not delete or modify)
								</p>
							</div>
						</div>
						{/* Forth Child Div */}
						<div className="shadow-md bg-gray-200 mb-2 ">
							<div className="h-7 bg-red-600 ">
								<span className="text-lg  font-semibold text-white ml-1 flex relative">
									<FaProductHunt className="mt-1 mr-2" size={15} />{' '}
									<p>PRIVACY POLICY</p>{' '}
									<FaRegEdit className="absolute right-0 top-1" size={15} />
								</span>
							</div>
							<div className="p-1">
								<div className=" flex ">
									<label
										for="firstname"
										className="text-sm font font-semibold "
									></label>{' '}
									&nbsp;
								</div>
								<div className=" flex">
									<label for="firstname" className="text-sm font font-semibold">
										Last Access to Site:
									</label>{' '}
									&nbsp;
								</div>
								<p>
									<br />
								</p>
							</div>
						</div>
					</div>
					{/* Second part of DIV */}
					<div className="w-1/2  flex flex-col md:gap-10 gap-1">
						<div className="shadow-md bg-gray-200 mb-2">
							<div className="h-7 bg-red-600 ">
								<span className="text-lg  font-semibold text-white ml-1 flex relative">
									<FaUserAlt className="mt-1 mr-2" size={15} /> <p>Reports</p>{' '}
									<FaRegEdit className="absolute right-0 top-1" size={15} />
								</span>
							</div>
							<div className="md:p-1 ">
								<div className=" flex-wrap md:flex">
									<label
										for="firstname"
										className="text-sm font font-semibold "
									>
										Email:
									</label>{' '}
									<p> deepak.kumar@palinfocom.com</p>
								</div>
								<div className=" flex">
									<label for="firstname" className="text-sm font font-semibold">
										Number Of Devices Allowed:
									</label>{' '}
									&nbsp;
									<p>3</p>
								</div>
								<p>
									Check Test user
									<br />
									Rich media status(do not delete or modify)
								</p>
							</div>
						</div>
						<div className="shadow-md bg-gray-200  mb-2">
							<div className="h-7 bg-gray-600 ">
								<span className="text-lg  font-semibold text-white ml-1 flex relative">
									<FaRegListAlt className="mt-1 mr-2" size={15} />{' '}
									<p>Miscellaneous</p>{' '}
									<FaRegEdit className="absolute right-0 top-1" size={15} />
								</span>
							</div>
							<div className="md:p-1">
								<div className=" flex-wrap md:flex ">
									<label
										for="firstname"
										className="text-sm font font-semibold "
									>
										Email:
									</label>{' '}
									<p> deepak.kumar@palinfocom.com</p>
								</div>
								<div className=" flex">
									<label for="firstname" className="text-sm font font-semibold">
										Number Of Devices Allowed:
									</label>{' '}
									<p>3</p>
								</div>
								<p>
									Check Test user
									<br />
									Rich media status(do not delete or modify)
								</p>
							</div>
						</div>
						<div className="shadow-md bg-gray-200 mb-2 ">
							<div className="h-7 bg-red-600 ">
								<span className="text-lg  font-semibold text-white ml-1 flex relative">
									<FaMobileAlt className="mt-1 mr-2" size={15} />{' '}
									<p>Mobile App</p>{' '}
									<FaRegEdit className="absolute right-0 top-1" size={15} />
								</span>
							</div>
							<div className="p-1">
								<div className=" flex-wrap md:flex">
									<label
										for="firstname"
										className="text-sm font font-semibold "
									>
										Email:
									</label>{' '}
									<p> deepak.kumar@palinfocom.com</p>
								</div>
								<div className=" flex">
									<label for="firstname" className="text-sm font font-semibold">
										Number Of Devices Allowed:
									</label>{' '}
									<p>3</p>
								</div>
								<p>
									Check Test user
									<br />
									Rich media status(do not delete or modify)
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" w-1/5 hidden md:block relative">
					<FaRegSun className="absolute right-0 text-red-600" size={25} />
				</div>
			</div>
		</div>
	);
}

export default Profile;
