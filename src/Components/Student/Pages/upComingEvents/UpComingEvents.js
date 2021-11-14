import React, { Fragment } from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "../../../../lib/vendor/RctCollapsibleCard/RctCollapsibleCard";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const UpComingEvents = props => {

    const events = [
        {
            eventName: "React Coding Competition",
            eventDate: "11/16/2021",
            eventTime: "4:00 PM",
            eventLocation: "Block F Auditorium",
        },

    ]

    const columns = ['Event Name', 'Event Date', 'Event Time', 'Event Location'];

    const getCoursesTable = (events) => {
        let vendorTable = (
            <div className={'mt-5'}>
                Loading...
            </div>
        );

        if (events && events.length === 0) {
            vendorTable = <p style={{ fontWeight: "bold" }} className={'text-center'}>No Courses Found</p>
        }

        if (events && events.length > 0) {
            vendorTable = (
                <Table>
                    <TableHead>
                        <TableRow hover>
                            {
                                columns.map((col, index) => (
                                    <TableCell key={index}>{col}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Fragment>
                            {
                                events.map((event, index) => {

                                    return (
                                        (
                                            <TableRow hover key={index}>
                                                <TableCell> {event.eventName} </TableCell>
                                                <TableCell> {event.eventDate} </TableCell>
                                                <TableCell> {event.eventTime} </TableCell>
                                                <TableCell> {event.eventLocation} </TableCell>
                                            </TableRow>
                                        )
                                    )
                                })
                            }
                        </Fragment>
                    </TableBody>
                </Table>
            )
        }
        return vendorTable;

    }

    return (
        <div>

            <PageTitleBar title='Up Coming Events' match={props.match} />
            <RctCollapsibleCard fullBlock>
                <div className="table-responsive">
                    {
                        getCoursesTable(events)
                    }
                </div>
            </RctCollapsibleCard>
        </div>
    );
};
export default UpComingEvents;