import React from 'react';
import { Form, FormGroup, Input } from "reactstrap";


const Setting = () => {

	const onFormSubmit = () => {

	}

	return (
		<div className="container" >

			<Form onSubmit={onFormSubmit}>

				<h3 style={{ fontWeight: "bold" }}> Change Password </h3>
				<Input
					type="password"
					required
					placeholder="Enter Current Password"
				/>
				<Input
					type="text"
					required
					placeholder="Enter New Password"
				/>
				<Input
					type="text"
					required
					placeholder="Confirm New Password"
				/>

				<div className={'text-center'}>
					<button type={'submit'} className={' mt-2 px-5 btn btn-send btn-block'}>Change</button>
				</div>
			</Form>

		</div>
	);
};

export default Setting;
