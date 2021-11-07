import React from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";


const Calender = props => {

    return (
        <div>
            <PageTitleBar title='Calender' match={props.match} />

        </div>
    );
}

export default Calender;