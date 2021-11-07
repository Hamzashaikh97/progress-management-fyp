import React from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";


const Location = props => {

    return (
        <div>
            <PageTitleBar title='Location' match={props.match} />

        </div>
    );
}

export default Location;