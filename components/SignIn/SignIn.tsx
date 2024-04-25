import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaPhoneAlt } from 'react-icons/fa';

interface Props {}

const SignIn = (props: Props) => {
	return (
		<div className="bg-white rounded-lg w-[25%] h-[50%] flex justify-center ">
			<div className=" h-full w-[70%]">
				<div className="w-[100%] h-[50%]  flex justify-center">
					<Image
						src="/logo.svg"
						alt="logo"
						width={0}
						height={0}
						className="w-[100%] h-[100%]"
					/>
				</div>
				<div className=" flex-col items-center gap-2 text-center">
					<h1 className="text-center font-bold text-[30px] mt-4 ">
						Sign in
					</h1>
					<p className=" text-gray-400 mt-4">
						Welcome to Sign In with phone
					</p>
					<Button className="w-full rounded-sm bg-green-500 gap-3  mt-4">
						<FaPhoneAlt />
						Sign In with phone
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
