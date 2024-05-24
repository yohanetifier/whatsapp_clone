import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactOptions from './ContactOptions';

describe('ContactOptions', () => {
	it('should render 4 icons  ', () => {
		const { asFragment } = render(<ContactOptions />);
		expect(asFragment()).toMatchSnapshot();
	});
});
