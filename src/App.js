import React from 'react';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import Accordion from './components/Accordion';
import CourseCard from './components/CourseCard';
import LogIN from './components/LogIN';
import SearchBar from './components/SearchBar';
import NavbarS from './components/NavbarS';
import Accordions from './components/Accordions';
import Navbar from './components/Navbar';
import NewAccord from './NewAccord';
import NewAccordion from './components/NewAccordion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Setting from './components/Routes_Component/Setting';
import Dashboard from './components/Routes_Component/Dashboard';
import Logout from './components/Routes_Component/Logout';
import Grades from './components/Routes_Component/Grades';
import Profile from './components/Routes_Component/Profile';
import Message from './components/Routes_Component/Message';
import Preference from './components/Routes_Component/Preference';
import SingleCourseCard from './components/Routes_Component/SingleCourseCard';
import ProfileNavbar from './components/Routes_Component/ProfileNavbar';
import SignUpForm from './components/Routes_Component/SignUpForm';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	let currentPage = window.location.pathname;
	const notifyDefault2 = () => toast('Successfully logIN', { autoClose: 2000 });
	console.log('currentPage', currentPage);
	let isAuthenticated = sessionStorage.getItem('auth');
	console.log('kkkfjkd', isAuthenticated);
	// sessionStorage.getItem('auth') !== '' ? notifyDefault2() : 'kdk';
console.log("new here")
	return (
		<div>
			{currentPage !== '/profile' &&
				currentPage !== '/logout' &&
				isAuthenticated !== null &&
				currentPage !== '/signup' && <Navbar />}

			<BrowserRouter>
				<Routes>
					<Route path="settings" element={<Setting />} />
					<Route
						path="/"
						element={
							isAuthenticated !== null ? (
								<Dashboard />
							) : (
								<Navigate to="logout" replace />
							)
						}
					/>
					<Route path="login" element={<LogIN />} />
					<Route path="logout" element={<LogIN />} />
					<Route path="grades" element={<Grades />} />
					<Route path="profile" element={<Profile />} />
					<Route path="preferences" element={<Preference />} />
					<Route path="message" element={<Message />} />
					<Route path="course" element={<SingleCourseCard />} />
					<Route path="signup" element={<SignUpForm />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</div>
	);
}

export default App;
