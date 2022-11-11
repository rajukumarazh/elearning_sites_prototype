import React, { useEffect, useState } from 'react';
import Accordions from './Accordions';
import IconList from './IconList';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import SingleCourseCard from './Routes_Component/SingleCourseCard';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
function CourseCard() {
	const [course, setCourse] = useState([]);
	const [show, setShow] = useState(false);
	let location = useLocation();
	const [viewAll, setViewAll] = useState(false);
	const [ModalData, setModalData] = useState({
		details: '',
		name: '',
	});

	<SingleCourseCard data={course} />;

	async function getCourse() {
		let data = await axios.get('/fetch_product').then((res) => res.data);
		console.log('data', data);
		return data;
	}

	// const getCourse = async () =>
	// 	fetch(
	// 		'http://elearningstack.com/ilearn24x7/webservice/rest/server.php?wstoken=ae7f70c9af9acc2fae488c7c6ea34007&wsfunction=core_course_get_courses&moodlewsrestformat=json'
	// 	).then((res) => console.log('resp', res.json));
	useEffect(() => {
		(async () => {
			const newData = await getCourse();

			newData.length > 0 && setCourse(newData);
		})();
	}, []);
	return (
		<div>
			<p className="text-lg font semibold">Available Course</p>
			<div className="flex">
				<div className="  w-full md:w-3/4  p-2 md:grid grid-cols-3 gap-4">
					{course.map((ee, i) => {
						let ar = ee.summary.toString();
						let ar3 = ar.replace(/(<([^>]+)>)/gi, '');
						let ar2 = ar.split(' ');
						let plainText = ar2[0].replace(/(<([^>]+)>)/gi, '');

						const modal_data = () => {
							setShow(true);
							setModalData({ details: ar3, name: ee.displayname });
						};

						if (viewAll ? i > 0 : i < 3) {
							return (
								<div className="   " key={i}>
									{show == true && (
										<Modal
											show={show}
											onHide={() => setShow(!show)}
											aria-labelledby="example-modal-sizes-title-lg"
											size="lg"
										>
											<Modal.Header closeButton>
												<h3>{ModalData.name}</h3>
											</Modal.Header>
											<Modal.Body>{ModalData.details}</Modal.Body>
											<Modal.Footer></Modal.Footer>
										</Modal>
									)}
									<div className="max-w-sm max-h-sm   rounded  shadow-lg relative pb-10">
										<img
											className="w-full"
											src="./course-img.png"
											alt="course_image"
										/>
										<div className="px-6 py-4 ">
											<div className="font-bold text-xl mb-2">
												{ee.shortname.split(' ' && '.')}
											</div>
											<div className="h-full md:h-auto">
												<p className="text-gray-700 text-base">
													{plainText}
													<button
														className="text-blue-400"
														onClick={modal_data}
													>
														read more
													</button>
												</p>
											</div>
											<button className=" left-0 right-0 absolute bottom-0 w-full h-10 px-6 text-indigo-100 transition-colors duration-150 bg-gray-600 rounded-lg focus:shadow-outline underline">
												<Link
													to={`/course?id:${ee.id}`}
													state={{ test: ee }}
													className="text-white"
												>
													See Full Details
												</Link>
											</button>
										</div>
									</div>
								</div>
							);
						}
					})}
				</div>

				<div className="w-1/4 hidden md:block">
					<div className=" flex justify-center gap-10 px-1 py-2 bg-gray-400 mt-2">
						<FaLink size={20} className="text-white" /> Quick Links
					</div>
					<div className="flex justify-center">
						<IconList />
					</div>
				</div>
			</div>
			<div className="relative  w-full md:w-3/4 mr-12 h-10">
				<button
					className="absolute right-0 bg-gray-500 text-white px-1 py-2 rounded-md  "
					onClick={() => setViewAll(!viewAll)}
				>
					View All
				</button>
			</div>
		</div>
	);
}

export default CourseCard;
