import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header",
    () => {
        it('should render same text passed into title prop',
            () =>
                {
                    render(<Header title="todo" />);
                    const h1Element = screen.getByText(/todo/i);
                    expect(h1Element).toBeInTheDocument();
                }
        );
    }
);