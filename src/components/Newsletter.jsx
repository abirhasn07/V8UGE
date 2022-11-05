import React from 'react';
const bg = `https://ik.imagekit.io/abirhasan/v8uge_cloth_store/Banner/newsletter_atnLltTdi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667674225656`;
const Newsletter = () => {
	return (
		<div className="bg-newsletter h-[400px] bg-cover w-[88%] mx-auto my-12 rounded-md bg-no-repeat">
			<div
				className=" h-full
            flex items-start
            flex-col justify-center text-left w-[50%] ml-8"
			>
				<div>
					<h2 className="text-2xl font-bold capitalize text[#252525]">
						get tips from our experts
					</h2>
					<p className="text-sm lowercase opacity-75">
						subscribe our Newsletter For Stay updated
					</p>
				</div>
				<form className="mt-4 flex items-center">
					<input
						type="email"
						required
						className="outline-none pl-2 w-[60%] py-2 mr-2 rounded"
						placeholder="Enter Your Email"
					/>
					<input
						type="submit"
						value="subscribe"
						className="bg-black text-white px-4 py-2 rounded cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;
