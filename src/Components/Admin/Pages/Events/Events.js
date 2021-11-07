import React, { Fragment, useState } from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";
import { Col, Modal, Row } from "react-bootstrap";
import { Form, FormGroup, Input } from "reactstrap";


const Events = props => {

    const [show, setShow] = useState(false);

    const ModalOpenHandler = () => {
        setShow(!show);
    }

    const onFormSubmit = () => {

    }

    const handleClose = () => setShow(false);

    const modal = (
        <Modal show={show} size={'lg'} className="StaffEditCard">
            <Modal.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <h2 style={{ fontWeight: "bold" }}> Add Events </h2>
                    <p style={{ cursor: "pointer", fontSize: "20px" }} onClick={handleClose} title="Close Staff">X</p>
                </div>
                <Form onSubmit={onFormSubmit}>

                    <h3 style={{ fontWeight: "bold" }}> Title </h3>
                    <Input
                        type="text"
                        required
                        placeholder="Event Name"
                    />
                    <Input
                        type="text"
                        required
                        placeholder="Event Venue"
                    />
                    <Input
                        type="text"
                        required
                        placeholder="Event Date"
                    />
                    <Input
                        type="text"
                        required
                        placeholder="Event Points"
                    />


                    <div className={'text-center'}>
                        <button type={'submit'} className={' mt-2 px-5 btn btn-send btn-block'}>Add</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )

    return (
        <>
            <div>
                {modal}
                <PageTitleBar title='Events' match={props.match} />
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
export default Events;