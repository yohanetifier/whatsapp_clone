import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
	it('should render without crash', () => {
		render(
			<Avatar pictureSrc={'/avatar.jpg'} pictureAlt={'photo de profil'} />
		);
		const img = screen.getByRole('img');
		expect(img).toBeInTheDocument();
	});
});
