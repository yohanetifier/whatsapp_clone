import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactCard from './ContactCard';

describe('ContactCard', () => {
	it('should render without crash', () => {
		render(
			<ContactCard
				contactLastMessage="Hello"
				contactName="John Doe"
				contactPictureSrc="/avatar.jpg"
				contactPictureAlt="photo de profil"
				contactTime="12:00"
				numberOfUnreadMessages={1}
			/>
		);
		const img = document.querySelector('img');
		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute(
			'alt',
			'photo de profil'
		);
		expect(img?.src).toMatch('avatar.jpg');
		expect(
			screen.getByRole('heading', { name: /John Doe/i })
		).toBeInTheDocument();
		expect(screen.getByText('12:00')).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});
});
