import React, { Fragment, useState } from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";
import { Col, Modal, Row } from "react-bootstrap";

const Reports = props => {

	const [show, setShow] = useState(false);
    
	const ModalOpenHandler = () => {
		setShow(!show);
	}

	const handleClose = () => setShow(false);

	const modal = (
		<Modal show={show} size={'lg'} className="StaffEditCard">
			<Modal.Body>
				<div className="d-flex justify-content-between align-items-center">
					<h2 style={{ fontWeight: "bold" }}> Generate Reports </h2>
					<p style={{ cursor: "pointer", fontSize: "20px" }} onClick={handleClose} title="Close Staff">X</p>
				</div>
				{/* <Form onSubmit={onFormSubmit}>
					<FormGroup>
						<h3 style={{ fontWeight: "bold" }}> Title </h3>
						<Input
							type="text"
							name="title"
							required
							placeholder="Title"
							value={formData.title}
							onChange={onChangeHandler}
						/>

					</FormGroup>
					<div className={'text-center'}>
						{
							!submitLoader ?
								<button type={'submit'} className={'px-5 btn btn-send btn-block'}>Add</button>
								: (<Loader style={'text-center'} />)
						}
					</div>
				</Form> */}
			</Modal.Body>
		</Modal>
	)

	return (
		<>
			<div>
				{modal}
				<PageTitleBar title='Generate Reports' match={props.match} />
				<Row className={'justify-content-end'}>
					<Col md={2} sm={12} lg={1} className="mr-1">
						<button className={'text-center btn btn-send btn-block'}
							onClick={ModalOpenHandler} > Add </button>
					</Col>
				</Row>
				<hr />
			</div>
		</>
	);
};
export default Reports;