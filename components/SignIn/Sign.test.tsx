import '@testing-library/jest-dom/';
import { render } from '@testing-library/react';
import SignIn from './SignIn';
it('should render a container with a logo, a title, a subtitle and a button', () => {
	const { getByText, getByAltText } = render(<SignIn />);

	expect(getByAltText('logo')).toBeInTheDocument();
	expect(getByText('Sign in')).toBeInTheDocument();
	expect(getByText('Welcome to Sign In with phone')).toBeInTheDocument();
	expect(getByText('Sign In with phone')).toBeInTheDocument();
});
