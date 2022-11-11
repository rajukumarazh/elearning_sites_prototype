import React from 'react';
import IconList from './IconList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SearchBar() {
	// const filters = {
	// 	color: 'green',
	// 	name: 'x',
	// 	category: 'shirt',
	// };

	// let filteredData;
	// let products = [
	// 	{ id: 1, name: 'x', color: 'blue', price: 1, category: 'shirt' },
	// 	{ id: 2, name: 'y', color: 'green', price: 12, category: 'pant' },
	// 	{ id: 4, name: 'x', color: 'green', price: 123, category: 'shirt' },
	// 	{ id: 5, name: 'x', color: 'green', price: 124, category: 'shirt' },
	// 	{ id: 6, name: 'b', color: 'black', price: 123, category: 'pant' },
	// ];
	// filteredData = products
	// 	.sort((a, b) => b.price - a.price)
	// 	.filter((e) => (e.color == filters.color ? filters.color : ''))
	// 	.filter((res) => res.name == 'x' || res.name !== '');
	// console.log('dkkk', filteredData);

	return (
		<div
			style={{
				backgroundImage: `url(${'./top-banner.png'})`,
				backgroundPosition: 'center',
				height: '350px',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
			className=" relative p-2"
		>
			<div className="font-sans text-black min-h-screen  flex items-center justify-center ">
				<div className="border rounded overflow-hidden flex absolute bottom-40">
					<input type="text" className="px-4 py-2" placeholder="Search..." />
					<button className="flex items-center justify-center px-4 border-l bg-red-600">
						<svg
							className="h-4 w-4 text-grey-dark "
							fill="currentColor"
							// xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
