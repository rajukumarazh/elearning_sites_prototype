import React from 'react';
import { useState } from 'react';
function NavbarS() {
	const [isShow, setIsShow] = useState(false);
	console.log('lkkkkk', isShow);
	return (
		<div>
			<div
				className="w-60 h-full shadow-md bg-white px-1 absolute"
				id="sidenavExample"
			>
				<ul className="relative">
					<li className="relative" id="sidenavEx1">
						<a
							className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
							data-mdb-ripple="true"
							data-mdb-ripple-color="dark"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSidenavEx1"
							aria-expanded="true"
							aria-controls="collapseSidenavEx1"
							onClick={() => setIsShow(!isShow)}
						>
							<span>Chapter 1</span>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								className="w-3 h-3 ml-auto"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									fill="currentColor"
									d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
								></path>
							</svg>
						</a>
						<ul
							className="relative accordion-collapse collapse"
							id="collapseSidenavEx1"
							aria-labelledby="sidenavEx1"
							data-bs-parent="#sidenavExample"
						>
							{isShow == true && (
								<li className="relative">
									<a
										href="#!"
										className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
										data-mdb-ripple="true"
										data-mdb-ripple-color="dark"
									>
										Topic 1
									</a>
									<li className="relative">
										<a
											href="#!"
											className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
											data-mdb-ripple="true"
											data-mdb-ripple-color="dark"
										>
											Topic 2
										</a>
									</li>
									<li className="relative">
										<a
											href="#!"
											className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
											data-mdb-ripple="true"
											data-mdb-ripple-color="dark"
										></a>
									</li>
								</li>
							)}
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavbarS;
