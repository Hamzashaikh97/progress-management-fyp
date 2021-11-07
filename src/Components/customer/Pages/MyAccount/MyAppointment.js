import React, {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import "./Account.css";
import {Card, Col, Row} from "react-bootstrap";
import ProgressBar from "../../../../lib/customer/ProgressBar/ProgressBar";




const Appointment = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const token = localStorage.getItem('token');
    const [booking, setBooking] = useState(null);
    const [services, setService] = useState('');


    useEffect(() => {
        axios.get('/appointments', {headers: {"Authorization": `Bearer ${token}`}})
            .then((res) => {
                console.log(res.data)
                setBooking(res.data);
            })
    }, [])


    let appointment = (
        <div className={'progress__bar'}>
            <ProgressBar
                shopProgress="CategoryProgress"
                shopRing="CategoryRing"
            />
        </div>
    );

    if (booking && booking.length > 0) {

        appointment =  (
            <>
                <div className="row justify-content-center">
                    {
                        booking.map((appointment) => {
                            const date = new Date(appointment.date)

                            return (
                                <>
                                    <div className="col-sm-8 ">
                                        <Col className={'mt-3'} >
                                            <Card className={' shadow mb-2 rounded'}>
                                                <Card.Body className={' appoint-cart d-flex align-items-center justify-content-between'}>
                                                    <Row>
                                                        <Col md={4} className={'text-center'}>
                                                            <img alt={'shopImage'} src={appointment.shop.shopImage.avatar} className={'w-75 img-fluid'} />
                                                        </Col>
                                                        <Col md={8} className={'right__section p-4'}>
                                                            <div className={'d-flex align-items-center'}>
                                                                <div>
                                                                    <h5>{appointment.shop.shopName}</h5>
                                                                    <h6>Sector 11-A North Karachi</h6>
                                                                </div>
                                                                <h5 className={'ml-5'}>{appointment.slot}</h5>
                                                                <div className={'ml-5'}>
                                                                    <p>{ monthNames[date.getMonth()]} { date.getDate() }</p>
                                                                    <h5>{ dayOfWeek[date.getDay()] }</h5>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div>
                                                                    <p className={'mt-4'}><span className={'bold'}>Aed</span> { appointment.totalPrice}</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </>
        );
    }

    if (booking && booking.length === 0) {
        appointment = (
            <>
                <div>
                    <div className="container appointment">
                        <div className="pt-5">
                            <p className="card-text">My appointments</p>
                            <div className="card w-100">
                                <div className="card-body">
                                    <p className="card-text">You haven't made an appointment yet</p>
                                    {/*<a href="#" className="btn ">Make an Appointment</a>*/}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    return (
        <div className={'appointment__section'}>
            { appointment }
        </div>
    )

}


export default Appointment