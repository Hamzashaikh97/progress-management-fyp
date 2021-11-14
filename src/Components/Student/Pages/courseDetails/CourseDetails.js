import React, { Fragment, useState, useEffect } from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "../../../../lib/vendor/RctCollapsibleCard/RctCollapsibleCard";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CourseDetails = props => {

	const Courses = [
        {
            courseNo: "SWE-301",
            courseName: "Software Engineering Ecnomics",
            courseTeacher: "Miss Priha Bhatti",
            creditHours: "3 + 1",
            gpa: "-",
            points: "23"
        }
    ]
        
    const columns = ['CourseNo.', 'Course Name', 'Course Teacher', 'Credit Hours', 'GPA', 'Points'];

	const getCoursesTable = (courses) => {
		let vendorTable = (
			<div className={'mt-5'}>
				Loading...
			</div>
		);

		if (courses && courses.length === 0) {
			vendorTable = <p style={{ fontWeight: "bold" }} className={'text-center'}>No Courses Found</p>
		}

		if (courses && courses.length > 0) {
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
								courses.map((course, index) => {

									return (
										(
											<TableRow hover key={index}>

												<TableCell> {course.courseNo} </TableCell>
												<TableCell> {course.courseName} </TableCell>
												<TableCell> {course.courseTeacher} </TableCell>
												<TableCell> {course.creditHours} </TableCell>
												<TableCell> {course.gpa}</TableCell>
												<TableCell> {course.points}</TableCell>
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

			<PageTitleBar title='Courses Details' match={props.match} />
			<RctCollapsibleCard heading="Courses list" fullBlock>
				<Tabs>
					<TabList>
						<Tab>1st semester</Tab>
						<Tab>2nd semester</Tab>
						<Tab>3rd semester</Tab>
						<Tab>4rd semester</Tab>
						<Tab>5th semester</Tab>
						<Tab>6th semester</Tab>
						<Tab>7th semester</Tab>
						<Tab>8th semester</Tab>
					</TabList>
					<TabPanel>
						<div className="table-responsive">
							{
								getCoursesTable(Courses)
							}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="table-responsive">
							{
								getCoursesTable(Courses)
							}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="table-responsive">
							{
								getCoursesTable(Courses)
							}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="table-responsive">
							{
								getCoursesTable(Courses)
							}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="table-responsive">
							{
								getCoursesTable(Courses)
							}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="table-responsive">
							{
								getCoursesTable(Courses)
							}
						</div>
					</TabPanel>
                    <TabPanel>
						<div className="table-responsive">
							{
								getCoursesTable(Courses)
							}
						</div>
					</TabPanel>
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
};
export default CourseDetails;