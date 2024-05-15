import { SignIn } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

export default function Page() {
	const { userId } = auth();
	if (userId) {
		console.log('userId', userId);
	}
	return (
		<div className="flex justify-center items-center h-[100vh]">
			<SignIn path="/sign-in" />
		</div>
	);
}
