import React, { useState, Fragment } from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "../../../../lib/vendor/RctCollapsibleCard/RctCollapsibleCard";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Students = (props) => {

    const column = ["Card No.", "Name", "Email", "Department", "Year of Joining"]

    const AllTeachers = [
        {
            cardNo: "1234",
            name: "Mahvesh Arsalan Lodhi",
            email: "mahvesh@ssuet.com",
            Depart: "software engineering",
            YearJoin: 2012,
        },
        {
            cardNo: "1234",
            name: "Mahvesh Arsalan Lodhi",
            email: "mahvesh@ssuet.com",
            Depart: "software engineering",
            YearJoin: 2012,
        },
        {
            cardNo: "1234",
            name: "Mahvesh Arsalan Lodhi",
            email: "mahvesh@ssuet.com",
            Depart: "software engineering",
            YearJoin: 2012,
        },
        {
            cardNo: "1234",
            name: "Mahvesh Arsalan Lodhi",
            email: "mahvesh@ssuet.com",
            Depart: "software engineering",
            YearJoin: 2012,
        },
    ]

    const getTeacherTable = (teachers) => (
            <Table>
                <TableHead>
                    <TableRow hover>
                        {
                            column.map((col, index) => (
                                <TableCell key={index}>{col}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Fragment>
                        {
                            teachers.map((teacher, index) => {
                                return (
                                    (
                                        <TableRow hover key={index}>
                                            <TableCell> {teacher.cardNo} </TableCell>
                                            <TableCell> {teacher.name} </TableCell>
                                            <TableCell> {teacher.email} </TableCell>
                                            <TableCell> {teacher.Depart} </TableCell>
                                            <TableCell> {teacher.YearJoin} </TableCell>
                                        </TableRow>
                                    )
                                )
                            })
                        }
                    </Fragment>
                </TableBody>
            </Table>
    )

    return (
        <div>
            <PageTitleBar title='Teachers' match={props.match} />
            <RctCollapsibleCard fullBlock>
                <div className="mb-3 ">
                    <form>
                        <input type="text" placeholder="Search By Name" className={"mr-2"}  />
                        <button className={'text-center'}> Search </button>
                    </form>

                </div>
                <Tabs>
                    <TabList>
                        <Tab>All Teachers</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="table-responsive">
                            {
                                getTeacherTable(AllTeachers)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </RctCollapsibleCard>
        </div>
    );
}
export default Students;
