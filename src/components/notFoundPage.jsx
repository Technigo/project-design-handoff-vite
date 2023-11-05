import React from 'react';

export const NotFoundPage = () => {
    return (
        <React.Fragment>
            <div className="notFound-page-wrapper">
                <div className='notFound-dsc-holder'>
                <h1 className="notFound-page-title">Page Not Found</h1>
                <p className="notFound-page-subtitle">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                </div>
            </div>
        </React.Fragment>
    )
}