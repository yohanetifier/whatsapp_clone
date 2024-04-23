import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaPhoneAlt } from 'react-icons/fa';

interface Props {}

const SignIn = (props: Props) => {
	return (
		<div className="bg-white rounded-lg w-[25%] h-[50%] flex-col justify-center items-center border-2 border-red-300">
			<div className="w-[50%] border-2 border-black">
				<Image
					src="/logo.svg"
					alt="logo"
					width={0}
					height={0}
					className="w-[100%] h-[100%]"
				/>
			</div>
			<div className="flex-col justify-center items-center">
				<h1 className="font-bold text-[30px]">Sign in</h1>
				<p className="text-gray-400">Welcome to Sign In with phone</p>
				<Button className="bg-green-500 gap-3 rounded-none">
					<FaPhoneAlt />
					Sign In with phone
				</Button>
			</div>
		</div>
	);
};

export default SignIn;
