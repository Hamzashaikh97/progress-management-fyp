import React from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import "./subscription.css";



const subs = [
    {
        id: 1,
        name: "FREE",
        price: "$00.00",
        exp: "1 year Expiration Date",
        place: "50 Place Listing",
        feature: "50 Featured Listing",
        button: "Get Started"
    },
    {
        id: 2,
        name: "STANDARD",
        price: "$30.00",
        exp: "1 year Expiration Date",
        place: "1000 Place Listing",
        feature: "500 Featured Listings",
        button: "Get Started"
    },
]


let offers = (
    <div className={' subs__main text-center mt-5'}>
        <h2>Offers</h2>
        <h3>2 offers, for your simplicity:</h3>
    </div>
)

let card = (
    <div className="row justify-content-center align-items-center">
        {
            subs.map((card) => {
                return (
                    <div className="col-lg-3">
                        <Paper elevation={3} >
                            <Card className={' subs__card text-center mt-5 '} variant="outlined">
                                <div className={'my-5'}>
                                    <h3 className={'pt-5 pb-3'}>{card.name}</h3>
                                    <h1 className={'pb-5'}>{card.price}</h1>
                                    <p className={'pb-2'}>{card.exp}</p>
                                    <p className={'pb-2'}>{card.place}</p>
                                    <p className={'pb-5'}>{card.feature}</p>
                                    <button className={'btn subs__btn'}>{card.button}</button>
                                </div>
                            </Card>
                        </Paper>
                    </div>
                )
            })
        }

    </div>
)


const Subscription = () => {
    return (
        <>
            {
                offers
            }
            {
                card
            }
        </>
    )
}

export default Subscription


