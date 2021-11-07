import React from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";


const CvBuilder = props => {

    return (
        <div>
            <PageTitleBar title='CvBuilder' match={props.match} />

        </div>
    );
}

export default CvBuilder;