import React from 'react';
import { useState } from 'react';
import Accord from './Accord';
function NewAccord() {
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
			content: `Lorem ipsum, dolor sit eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
		},
	];
	return (
		<div className="grid grid-cols-2">
			<div className="grid grid-cols-1 row-3">
				{accordionData.map((ee) => {
					return (
						<div className="">
							<Accord data={ee} />
						</div>
					);
				})}
			</div>
			<div className="grid grid-cols-1 row-3">
				{accordionData.map((ee) => {
					return (
						<div className="">
							<Accord data={ee} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default NewAccord;
