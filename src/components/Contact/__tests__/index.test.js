import React from 'react';
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('contacth1')).toHaveTextContent('Contact me')
    })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('buttonid')).toHaveTextContent('Submit')
    })
})

