import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import TopBar from './TopBar';

describe('TopBar', () => {
	beforeEach(() => {
		render(<TopBar />);
	});
	it('should render the contactCard', () => {
		expect(screen.getByTestId('contactCard')).toBeInTheDocument();
	});
	it('should render contactOptions', () => {
		expect(screen.getByTestId('contactOptions')).toBeInTheDocument();
	});
});
