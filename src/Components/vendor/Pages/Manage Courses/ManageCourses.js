import React, { useState, Fragment } from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "../../../../lib/vendor/RctCollapsibleCard/RctCollapsibleCard";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ManageCourses = (props) => {

    const column = ["Course Number", "Course Name", "Batch", "Department", "Credit Hour"]

    const Courses = [
        {
            courseNo: "SWE-321",
            courseName: "Big Data",
            batch: 2018,
            department: "Software Engineering",
            creditHour: "3 + 1",
        },
    ]

    const getCoursesTable = (courses) => (

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
                            courses.map((course, index) => {
                                return (
                                    (
                                        <TableRow hover key={index}>
                                            <TableCell> {course.courseNo} </TableCell>
                                            <TableCell> {course.courseName} </TableCell>
                                            <TableCell> {course.batch} </TableCell>
                                            <TableCell> {course.department} </TableCell>
                                            <TableCell> {course.creditHour} </TableCell>
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
            <PageTitleBar title='Courses' match={props.match} />
            <RctCollapsibleCard fullBlock>
                <Tabs>
                    <TabList>
                        <Tab>Courses</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="table-responsive">
                            {
                                getCoursesTable(Courses)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </RctCollapsibleCard>
        </div>
    );
}
export default ManageCourses;
