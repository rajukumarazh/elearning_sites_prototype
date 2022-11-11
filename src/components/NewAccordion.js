import React from 'react';
import { FaAngleRight } from 'react-icons/fa'; //react-icon
import Collapsible from 'react-collapsible';

function NewAccordion() {
	return (
		<div className=" md:p-2">
			<div className="md:mt-3 md:mb-3">
				{/* <h1 className="h-10 bg-red-500 text-white font bold  rounded-md w-full md:w-3/4 p-1">
					Demo Course
				</h1> */}
				<h5 className="bg-red-500 text-white font bold  rounded-md w-full md:w-3/4 p-1 h-10">
					{' '}
					Demo Course
				</h5>
			</div>
			<div className="  md:flex flex-row    md:gap-10  w-full md:w-3/4 h-12  ">
				<div className=" md:w-1/2 md:max-h-12 " key={1}>
					<Collapsible
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
							This is the first item's accordion body. It is shown by default,
							until the collapse plugin adds the appropriate classes that we use
							to style each element
						</p>
					</Collapsible>
					<Collapsible
						// trigger=" AGILE PM "

						trigger={[
							'AGILE PM',
							<FaAngleRight
								size={25}
								className="absolute right-1 bottom-3 text-white lesson-arow"
							/>,
						]}
						className="md:mt-2 mt-1"
					>
						<p className="font-semibold" key={2}>
							This is the second item's accordion body. It is hidden by default,
							until the collapse plugin adds the appropriate classes that we use
							to style each element.
						</p>
					</Collapsible>
					<Collapsible
						trigger={[
							'AMK INTERNATIONAL PTY LT',
							<FaAngleRight
								size={25}
								className="absolute right-1 bottom-3 text-white lesson-arow"
							/>,
						]}
						className="md:mt-2 mt-1 "
						key={3}
					>
						<p className=" font-semibold">
							This is the third item's accordion body. It is hidden by default,
							until the collapse plugin adds the appropriate classes that we use
							to style each element.
						</p>
					</Collapsible>
				</div>
				<div className=" md:w-1/2">
					<Collapsible
						trigger={[
							'ADDING VALUE CONSULTING AB',
							<FaAngleRight
								size={25}
								className="absolute right-1 bottom-3 text-white lesson-arow"
							/>,
						]}
						className="md:mt-2 mt-1"
					>
						<p className="font-semibold" key={4}>
							This is the first item's accordion body. It is shown by default,
							until the collapse plugin adds the appropriate classes that we use
							to style each element
						</p>
					</Collapsible>
					<Collapsible
						trigger={[
							'AGILE PM',
							<FaAngleRight
								size={25}
								className="absolute right-1 bottom-3 text-white lesson-arow"
							/>,
						]}
						className="md:mt-2 mt-1 "
					>
						<p className="text-red font-semibold " key={5}>
							This is the second item's accordion body. It is hidden by default,
							until the collapse plugin adds the appropriate classes that we use
							to style each element.
						</p>
					</Collapsible>
					<Collapsible
						trigger={[
							'AMK INTERNATIONAL PTY LTD',
							<FaAngleRight
								size={25}
								className="absolute right-1 bottom-3 text-white lesson-arow"
							/>,
						]}
						className="md:mt-2 mt-1"
					>
						<p className="font-semibold" key={6}>
							This is the third item's accordion body. It is hidden by default,
							until the collapse plugin adds the appropriate classes that we use
							to style each element.
						</p>
					</Collapsible>
				</div>
			</div>
		</div>
	);
}

export default NewAccordion;
