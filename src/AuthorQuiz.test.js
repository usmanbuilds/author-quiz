import React from 'react';
import ReactDOM from 'react-dom';

import AuthorQuiz from './AuthorQuiz';

describe('When the AuthorQuiz composed is used', () => {
    it('should render successfully', () => {
        const div = document.createElement('div');

        ReactDOM.render(<AuthorQuiz />, div);
    });
});
