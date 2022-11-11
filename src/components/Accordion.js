import React, { useState } from 'react';

const Accordion = (accordData) => {
	console.log('id', accordData);
	const [isActive, setIsActive] = useState(false);

	const accordionData = [
		{
			id: 1,
			title: 'Section 1',
			content: `Lorem ipsum dolor,hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et 
          voluptatem.`,
		},
		{
			id: 2,
			title: 'Section 2',
			content: `Lorem ipsum, dolor sit eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
		},
	];

	return (
		<div>
			<div className="">
				<div className=" mt-4" style={{ width: 500 }}>
					<div className="" onClick={() => setIsActive(!isActive)}>
						<div className="flex justify-between bg-gray-300  rounded-lg h-10">
							<div className=""> {accordData.accordData.title}</div>
							<div className="">
								{' '}
								{isActive == true ? (
									<svg
										data-accordion-icon=""
										className="w-6 h-6 rotate-180 shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								) : (
									<svg
										data-accordion-icon=""
										className="w-6 h-6 shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								)}
							</div>
						</div>
						{/* {console.log('data', accordData.accordData.content)} */}
						{isActive == true && (
							<div className="" id={accordData.accordData.id}>
								{accordData.accordData.content}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
