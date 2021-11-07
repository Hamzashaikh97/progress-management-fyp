import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Carousel from 'react-bootstrap/Carousel';
// import logo from './images/logo.png';
// import slider5 from './images/slider5.jpg';
// import slider2 from './images/slider2.jpg';
// import slider4 from './images/slider4.jpg';
import slider4 from '../../../../assets/customer/img/slider4.jpg'
import slider2 from '../../../../assets/customer/img/slider2.jpg'
import slider5 from '../../../../assets/customer/img/slider5.jpg'
import logo from '../../../../assets/customer/img/pmp-logo.png'




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(140),
            height: theme.spacing(14),
        },
    },
}));



const Home = () => {
    const classes = useStyles();

    return (
        <>

            {/* Navbar */}
            <nav class="navbar navbar-expand-lg navbar-light bg-whote">
                <div class="container">
                    <Link className="login" to="/"><a class="navbar-brand" >
                        <img
                            src={logo}
                            width="100"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></a> </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="login" to="/Login"> <a class="nav-link" aria-current="page" >Login</a> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar */}

            {/* slider */}
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Welcome to SSUET</h1>

                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={slider2}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider4}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>



            {/* slider */}


        </>
    )
}

export default Home