import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
	it('should render a input with the good type', () => {
		render(<Input type="text" />);
		expect(screen.getByRole('textbox').getAttribute('type')).toBe('text');
	});
	it('should render the good placeholder with the props', () => {
		render(<Input type="text" placeholder="Search" />);
		expect(screen.getByRole('textbox').getAttribute('placeholder')).toBe(
			'Search'
		);
	});
});
