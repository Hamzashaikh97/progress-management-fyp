import React, { useState, Fragment } from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "../../../../lib/vendor/RctCollapsibleCard/RctCollapsibleCard";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ManageLocation = (props) => {

    const column = ["Roll No.", "Name", "Batch", "CGPA", "Reward Points", "Location"]

    const AllStudents = [
        {
            rollNo: "2018-SE-092",
            name: "Hamza Ahmed Mughal",
            batch: 2018,
            CGPA: 3.1,
            Points: 120,
            location: "location"
        },
        {
            rollNo: "2018-SE-079",
            name: "Hafiz Hamza Shaikh",
            batch: 2018,
            CGPA: 3.4,
            Points: 140,
            location: "location"
        },
        {
            rollNo: "2018-SE-069",
            name: "Yaseen Saleem",
            batch: 2018,
            CGPA: 3.5,
            Points: 160,
            location: "location"

        },
        {
            rollNo: "2018-SE-082",
            name: "Shayan Lodhi",
            batch: 2018,
            CGPA: 3.4,
            Points: 120,
            location: "location"

        }
    ]

    const getStudentTable = (students) => {

        let studentData;

        studentData = (
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
                            students.map((student, index) => {
                                return (
                                    (
                                        <TableRow hover key={index}>
                                            <TableCell> {student.rollNo} </TableCell>
                                            <TableCell> {student.name} </TableCell>
                                            <TableCell> {student.batch} </TableCell>
                                            <TableCell> {student.CGPA} </TableCell>
                                            <TableCell> {student.Points} </TableCell>
                                            <TableCell> {student.location} </TableCell>
                                        </TableRow>
                                    )
                                )
                            })
                        }
                    </Fragment>
                </TableBody>
            </Table>
        )
        return studentData;
    }

    return (
        <div>
            <PageTitleBar title='Students location' match={props.match} />
            <RctCollapsibleCard fullBlock>
                <div className="mb-3 ">
                    <form>
                        <input type="text" placeholder="Search By Roll No" className={"mr-2"}  />
                        <button className="text-center"> Search </button>
                    </form>

                </div>
                <Tabs>
                    <TabList>
                        <Tab>All Students</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="table-responsive">
                            {
                                getStudentTable(AllStudents)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </RctCollapsibleCard>
        </div>
    );
}
export default ManageLocation;
