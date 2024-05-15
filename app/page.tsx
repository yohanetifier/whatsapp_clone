import React from 'react';
import SignIn from '@/components/SignIn/SignIn';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Home() {
	const user = await currentUser();
	if (!user) {
		redirect('/sign-in');
	}
	return (
		<div className="border-2 border-red-500 bg-gray-100 w-full h-[100vh] flex justify-center items-center ">
			<SignIn />
		</div>
	);
}
