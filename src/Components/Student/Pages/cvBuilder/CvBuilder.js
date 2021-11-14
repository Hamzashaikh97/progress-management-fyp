import React from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";


const CvBuilder = props => {

    return (
        <div>
            <PageTitleBar title='CvBuilder' match={props.match} />
            <div>
                <h3> Personal Details </h3>
                <div className="d-flex flex-wrap mb-5">
                    <input className="form-control mr-2 w-25" placeholder="enter your first name" value="hamza" />
                    <input className="form-control mr-2 w-25" placeholder="enter your middle name" value="ahmed" />
                    <input className="form-control mr-2 w-25" placeholder="enter your last name" value="mughal" />
                    <input className="form-control mr-2 w-25" placeholder="enter your email address" />
                    <input className="form-control mr-2 w-25" placeholder="enter your linkedln link" />
                    <input className="form-control mr-2 w-25" placeholder="enter your github link" />
                </div>

                <h3> Educational Details </h3>
                <div>
                    <h5> School Details </h5>
                    <div className="d-flex flex-wrap mb-5">
                        <input className="form-control mr-2 w-25" placeholder="enter your School Name" value="Metropolis Academy" />
                        <input className="form-control mr-2 w-25" placeholder="enter your Field" value="computer science" />
                        <input className="form-control mr-2 w-25" placeholder="year of passing" value="2015" />
                    </div>
                    <h5> College Details </h5>
                    <div className="d-flex flex-wrap mb-5">
                        <input className="form-control mr-2 w-25" placeholder="enter your college Name" value="govt collage gulistan-e-jauhar" />
                        <input className="form-control mr-2 w-25" placeholder="enter your Field" value="pre engineering" />
                        <input className="form-control mr-2 w-25" placeholder="year of joining" value="2015" />
                        <input className="form-control mr-2 w-25" placeholder="year of passing" value="2017" />
                    </div>
                    <h5> university details </h5>
                    <div className="d-flex flex-wrap mb-5">
                        <input className="form-control mr-2 w-25" placeholder="enter your university name" value="sir syed university of engineering and technology" />
                        <input className="form-control mr-2 w-25" placeholder="enter your Field" value="software engineering" />
                        <input className="form-control mr-2 w-25" placeholder="year of joining" value="2018" />
                        <input className="form-control mr-2 w-25" placeholder="year of passing" value="2022" />
                    </div>
                </div>
            </div>
            <p>notes * rest of details will automatically get from pages.</p>
            <button className={'text-center btn btn-send btn-block mb-3'}>Download CV</button>
        </div>
    );
}

export default CvBuilder;