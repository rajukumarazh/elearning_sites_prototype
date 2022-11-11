import React from 'react';
import CourseCard from '../CourseCard';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import NewAccord from '../../NewAccord';
import NewAccordion from '../NewAccordion';
function Dashboard() {
	return (
		<div>
			{/* <Navbar /> */}
			<SearchBar />
			<CourseCard />
			<NewAccordion />
		</div>
	);
}

export default Dashboard;
