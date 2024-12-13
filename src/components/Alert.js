import React from 'react';

export const Alert = (props) => {
    return (
        <div>
            {props.message && (
                <div className="alert alert-primary" role="alert">
                    {props.message}
                </div>
            )}
        </div>
    );
};
