import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { AiFillWechat } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function IconList() {
	return (
		<div className="grid grid-cols-2 gap-10 p-4 ">
			<Link to="/profile">
				<FaUserCircle className="cursor-pointer hover:bg-red-500" size={45} />
			</Link>
			<Link to="/message">
				<BsFillChatDotsFill
					className=" cursor-pointer hover:bg-red-500"
					size={45}
				/>
			</Link>
			<Link to="/">
				{' '}
				<AiFillWechat className=" cursor-pointer" size={45} />
			</Link>
			<Link to="/">
				<BsFillQuestionCircleFill className=" cursor-pointer" size={45} />
			</Link>
		</div>
	);
}

export default IconList;
