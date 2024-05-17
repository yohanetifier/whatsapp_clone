import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import PanelLeft from '@/components/PanelLeft/PanelLeft';
import AlignWrapper from '@/components/AlignWrapper/AlignWrapper';

export default async function Home() {
	const user = await currentUser();
	if (!user) {
		redirect('/sign-in');
	}
	return (
		<div className=" bg-gray-100 w-full h-[100vh] flex justify-center">
			<AlignWrapper>
				<PanelLeft />
			</AlignWrapper>
		</div>
	);
}
