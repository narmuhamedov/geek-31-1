import React from 'react';

const Pagination = ({handlePrev, page, handleNext}) => {
    return (
        <div>
            <button onClick={handlePrev}>Prev</button>
            <p>{page}</p>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Pagination;