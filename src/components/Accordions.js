import React from 'react';
import Accordion from './Accordion';

const Accordions = () => {
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
		{
			id: 3,
			title: 'Section 3',
			content: `Sapiente expedita hic obcaecati,  rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
		},
		{
			id: 4,
			title: 'Section 1',
			content: `Lorem ipsum 
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
		},
		{
			id: 5,
			title: 'Section 2',
			content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit n
          Repudiandae, mollitia id reprehenderit a ab odit!`,
		},
		{
			id: 6,
			title: 'Section 3',
			content: `Sapiente expedita  necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
		},
	];
	return (
		<div className="w-3/4">
			<div className="">
				<h1 className=" font-bold bg-red-500 rounded-md h-10 sm:rounded-md">
					Demo Course
				</h1>
			</div>
			<div className="flex flex-wrap gap-3 sm:p-1">
				{accordionData.map((accordData) => (
					<Accordion accordData={accordData} />
				))}
			</div>
		</div>
	);
};

export default Accordions;
