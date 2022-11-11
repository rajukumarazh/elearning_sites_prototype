import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import Collapsible from 'react-collapsible';
import { useState } from 'react';
function SingleCourseCard(props) {
	const [course, setCourse] = useState([]);
	console.log('props', props);
	const dt = useLocation();
	console.log('dt', dt?.state?.test);
	let currentId = dt?.state?.test.id;
	useEffect(() => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			`http://elearningstack.com/ilearn24x7/webservice/rest/server.php?moodlewsrestformat=json&wstoken=7dad9510b7c97672b5b6209e39c7060a&wsfunction=core_course_get_contents&courseid=${currentId}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setCourse(result))
			.catch((error) => console.log('error', error));
	});
	console.log('course', course);
	return (
		<div className="flex p-10">
			<div className="w-4/5 mt-5">
				<div className="bg-red-500  rounded-md">
					<h5 className="text-white font-bold px-1 py-2">
						{' '}
						{/* DEMO - ITIL® 4 Specialist: High Velocity IT (HVIT) (English) */}
						{dt?.state?.test.displayname}
						{}
					</h5>
				</div>
				{/* <button className="bg-gray-500 text-white px-2 py-2 font-medium">
					View All
				</button>
				<button className="bg-gray-500 text-white px-2 py-2 font-medium ml-5">
					Cloase All
				</button> */}
				{course ? (
					course.exception == undefined ? (
						course.map((current) => {
							return (
								<Collapsible
									className="mt-12"
									trigger={[
										`${current.name}`,
										<FaAngleRight
											size={25}
											className="absolute right-1 bottom-3 text-white lesson-arow "
										/>,
									]}
									// trigger="ADDING VALUE CONSULTING AB"
									// className="md:mt-2 mt-1 bg-emerald-500"
								>
									<p className="font-semibold" key={1}>
										{current.summary.replace(/(<([^>]+)>)/gi, '')}
										<br />
										Inside you will find:
										<li>1</li>
										<li>2</li>
										<li>3</li>
									</p>
									<p>
										In the "Lesson Material" folders of each lesson, you can
										dowload PDf documents containing slides and the audio
										transcriptions.
									</p>
									<p className="font-bold">
										We remind that all the contents that are on the LMS platform
										must remain property of iCONS Innovative Consulting or of
										other declared legitimate owners. The User agrees not to
										infringe any intellectual property rights of the content of
										the Platform (Courses included) and of the Platform itself
										and to accept and respect the property of such rights and
										all the regulations that protect them. It is forbidden to
										copy, reproduce, republish, break apart, dis-compile,
										download, send, distribute, transmit, or make available to
										the public any material or content or portion, file or
										information on the Platform. You are allowed to copy and
										print material from the Platform only for personal use.
									</p>
									<p className="text-red-400 font-bold">
										The content of this lesson is not included in the DEMO.
									</p>
								</Collapsible>
							);
						})
					) : (
						<p className="text-red-500 text-lg font-semibold text-center">
							Details Not Found
						</p>
					)
				) : (
					''
				)}
				{/* <Collapsible
					className="mt-4"
					trigger={[
						'ADDING VALUE CONSULTING AB',
						<FaAngleRight
							size={25}
							className="absolute right-1 bottom-3 text-white lesson-arow "
						/>,
					]}
					// trigger="ADDING VALUE CONSULTING AB"
					// className="md:mt-2 mt-1 bg-emerald-500"
				>
					<p className="font-semibold" key={1}>
						In this section, you can download the Student Reference Manual of
						ITIL4 Specialist - High Velocity IT (HVIT). This manual will be
						useful during the course.
						<br />
						Inside you will find:
						<li>1</li>
						<li>2</li>
						<li>3</li>
					</p>
					<p>
						In the "Lesson Material" folders of each lesson, you can dowload PDf
						documents containing slides and the audio transcriptions.
					</p>
					<p className="font-bold">
						We remind that all the contents that are on the LMS platform must
						remain property of iCONS Innovative Consulting or of other declared
						legitimate owners. The User agrees not to infringe any intellectual
						property rights of the content of the Platform (Courses included)
						and of the Platform itself and to accept and respect the property of
						such rights and all the regulations that protect them. It is
						forbidden to copy, reproduce, republish, break apart, dis-compile,
						download, send, distribute, transmit, or make available to the
						public any material or content or portion, file or information on
						the Platform. You are allowed to copy and print material from the
						Platform only for personal use.
					</p>
					<p className="text-red-400 font-bold">
						The content of this lesson is not included in the DEMO.
					</p>
				</Collapsible> */}
				{/* <Collapsible
					className="mt-4"
					trigger={[
						'ADDING VALUE CONSULTING AB',
						<FaAngleRight
							size={25}
							className="absolute right-1 bottom-3 text-white lesson-arow "
						/>,
					]}
					// trigger="ADDING VALUE CONSULTING AB"
					// className="md:mt-2 mt-1 bg-emerald-500"
				>
					<p className="font-semibold" key={1}>
						In this section, you can download the Student Reference Manual of
						ITIL4 Specialist - High Velocity IT (HVIT). This manual will be
						useful during the course.
						<br />
						Inside you will find:
						<li>1</li>
						<li>2</li>
						<li>3</li>
					</p>
					<p>
						In the "Lesson Material" folders of each lesson, you can dowload PDf
						documents containing slides and the audio transcriptions.
					</p>
					<p className="font-bold">
						We remind that all the contents that are on the LMS platform must
						remain property of iCONS Innovative Consulting or of other declared
						legitimate owners. The User agrees not to infringe any intellectual
						property rights of the content of the Platform (Courses included)
						and of the Platform itself and to accept and respect the property of
						such rights and all the regulations that protect them. It is
						forbidden to copy, reproduce, republish, break apart, dis-compile,
						download, send, distribute, transmit, or  make available to the
						public any material or content or portion, file or information on
						the Platform. You are allowed to copy and print material from the
						Platform only for personal use.
					</p>
					<p className="text-red-400 font-bold">
						The content of this lesson is not included in the DEMO.
					</p>
				</Collapsible> */}
				{/* <Collapsible
					className="mt-4"
					trigger={[
						'ADDING VALUE CONSULTING AB',
						<FaAngleRight
							size={25}
							className="absolute right-1 bottom-3 text-white lesson-arow "
						/>,
					]}
					// trigger="ADDING VALUE CONSULTING AB"
					// className="md:mt-2 mt-1 bg-emerald-500"
				>
					<p className="font-semibold" key={1}>
						In this section, you can download the Student Reference Manual of
						ITIL4 Specialist - High Velocity IT (HVIT). This manual will be
						useful during the course.
						<br />
						Inside you will find:
						<li>1</li>
						<li>2</li>
						<li>3</li>
					</p>
					<p>
						In the "Lesson Material" folders of each lesson, you can dowload PDf
						documents containing slides and the audio transcriptions.
					</p>
					<p className="font-bold">
						We remind that all the contents that are on the LMS platform must
						remain property of iCONS Innovative Consulting or of other declared
						legitimate owners. The User agrees not to infringe any intellectual
						property rights of the content of the Platform (Courses included)
						and of the Platform itself and to accept and respect the property of
						such rights and all the regulations that protect them. It is
						forbidden to copy, reproduce, republish, break apart, dis-compile,
						download, send, distribute, transmit, or make available to the
						public any material or content or portion, file or information on
						the Platform. You are allowed to copy and print material from the
						Platform only for personal use.
					</p>
					<p className="text-red-400 font-bold">
						The content of this lesson is not included in the DEMO.
					</p>
				</Collapsible> */}
			</div>
			<div className="w-1/5 ml-4">Right Side bar here</div>
		</div>
	);
}

export default SingleCourseCard;
