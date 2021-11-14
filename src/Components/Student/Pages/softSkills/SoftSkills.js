import React, { Fragment, useState } from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";
import { Col, Modal, Row } from "react-bootstrap";

const SoftSkills = props => {

    const [show, setShow] = useState(false);

    const ModalOpenHandler = () => {
        setShow(!show);
    }

    const handleClose = () => setShow(false);

    const modal = (
        <Modal show={show} size={'lg'} className="StaffEditCard">
            <Modal.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <h2 style={{ fontWeight: "bold" }}> Add Soft Skills </h2>
                    <p style={{ cursor: "pointer", fontSize: "20px" }} onClick={handleClose} title="Close Staff">X</p>
                </div>
                <form>
                    <input placeholder="Enter Skill name" className="form-control" />
                </form>
            </Modal.Body>
        </Modal>
    )

    return (
        <>
            <div>
                {modal}
                <PageTitleBar title='Soft Skills' match={props.match} />
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
export default SoftSkills;