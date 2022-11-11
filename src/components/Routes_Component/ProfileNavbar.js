import React from 'react';
import { BsChatLeftDots } from 'react-icons';
import { useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import {
	FaRegUserCircle,
	FaRocketchat,
	FaUserCircle,
	FaHome,
} from 'react-icons/fa';
function ProfileNavbar() {
	const [show, setShow] = useState(false);
	const [mobile, setMobile] = useState(false);
	return (
		<div>
			{/* <!-- This example requires Tailwind CSS v2.0+ --> */}
			<nav
				className="bg-white"
				style={{
					backgroundImage: `url(${'./top-banner.png'})`,
					backgroundPosition: 'center',
					height: '230px',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							{/* <!-- Mobile menu button--> */}
							<button
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
								onClick={() => setMobile(!mobile)}
							>
								<span className="sr-only">Open main menu</span>
								{/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}

								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								{/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex-1 flex items-center justify-center  sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								{/* <img
									className="block lg:hidden h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
									alt="Workflow"
								/>
								<img
									className="hidden lg:block h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
									alt="Workflow"
								/> */}
								<img src="/logo.png " className="h-14"></img>
							</div>
							<div className="hidden sm:block sm:ml-6">
								<div className="flex ">
									<FaHome size={25} className="text-black mt-2 ml-1" />
									{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
									<a
										href="/"
										className=" text-black px-3 py-2 rounded-md  font-medium"
										aria-current="page"
									>
										Home
									</a>
								</div>
							</div>
							<div className="ml-12">
								<ul className="  inline-flex ">
									<li>
										<a href="/">Home</a>
									</li>
									/
									<li>
										<a href="/settings">Setting</a>
									</li>
									/
									<li>
										<a href="/message">Message</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<button
								type="button"
								className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							>
								<span className="sr-only">View notifications</span>

								{/* <!-- Heroicon name: outline/bell --> */}
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</button>
							{/* Heroicon name: outline/bell */}
							{/* <button
								type="button"
								className="bg-gray-800 p-1 ml-5 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							>
								<span className="sr-only">View notifications</span>

								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</button> */}

							{/* <!-- Profile dropdown --> */}
							<div className="ml-3 relative hidden md:block">
								<div className="flex">
									<button
										type="button"
										className=" flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 "
										id="user-menu-button"
										aria-expanded="false"
										aria-haspopup="true"
										onClick={() => setShow(!show)}
									>
										{/* <img src="/profile.png" className="w-10 h-10 " /> */}
										<FaUserCircle size={30} className="text-black" />
										{/* <span className="sr-only">Open user menu</span> */}
										<span className="p-1"> Deepak kumar</span>
									</button>
								</div>

								{/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
								{show == true && (
									<div
										className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="user-menu-button"
										tabIndex="-1"
									>
										{/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
										<a
											href="/"
											className="block px-4 py-2 text-sm text-black font-semibold"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-2"
										>
											Dashboard
										</a>
										<a
											href="/profile"
											className="block px-4 py-2 text-sm text-black font-semibold"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-0"
										>
											Your Profile
										</a>
										<a
											href="/settings"
											className="block px-4 py-2 text-sm text-black font-semibold"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-1"
										>
											Settings
										</a>
										<a
											href="logout"
											className="block px-4 py-2 text-sm text-black font-semibold"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-2"
										>
											Sign out
										</a>
										<a
											href="/grades"
											className="block px-4 py-2 text-sm text-black font-semibold"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-2"
										>
											Grades
										</a>
										<a
											href="/message"
											className="block px-4 py-2 text-sm text-black font-semibold"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-2"
										>
											Message
										</a>
										<a
											href="/preferences"
											className="block px-4 py-2 text-sm text-black font-semibold"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-2"
										>
											Preferences
										</a>
										<a
											href="/logout"
											className="block px-4 py-2 text-sm text-black font-semibold"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-2"
										>
											Sign out
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{mobile == true && (
					<div className="sm:hidden" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<a
								href="/"
								className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
								aria-current="page"
							>
								Dashboard
							</a>

							<a
								href="/"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								HOme
							</a>

							<a
								href="/settings"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Setting
							</a>

							<a
								href="/about"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								About
							</a>
						</div>
					</div>
				)}
				<div className="bg-transparent flex w-full md:p-5  mt-5">
					<div className="flex gap-5 w-1/3">
						<div className="relative">
							<FaRegUserCircle size={50} className="md:ml-5  text-white" />
							<FaRocketchat
								className="absolute top-0 right-0 text-black"
								size={20}
							/>
						</div>
						<p className="text-md font-semibold mt-3"> Deepak Kumar</p>
					</div>

					<div className="flex justify-center w-1/3 gap-3 shadow-md ">
						<div className=" h-15   mt-3 font-semibold text-white">
							{/* <p className="text-center p-2"> RESET PAGE TO DEFAULT</p> */}
							<button class="md:w-full max-h-13 md:h-12 px-6 text-indigo-100 whitespace-nowrap  text-center font-semibol  transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline ">
								RESET PAGE TO DEFAULT
							</button>
						</div>
						<div className=" h-15  mt-3 d text-white ">
							<button class="w-full h-12 px-6 font-semibol  whitespace-nowrap text-indigo-100 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline ">
								CUSTOMISE THIS PAGE
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default ProfileNavbar;
