import React, { Fragment } from 'react';
import PageTitleBar from "../../../../lib/vendor/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "../../../../lib/vendor/RctCollapsibleCard/RctCollapsibleCard";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Transcript = props => {

	const Courses = [
        {
            courseNo: "SWE-301",
            courseName: "Software Engineering Ecnomics",
            courseTeacher: "Miss Priha Bhatti",
            creditHours: "3 + 1",
            gpa: "3.2",
        },
        {
            courseNo: "SWE-302",
            courseName: "Introduction to Software Engineering",
            courseTeacher: "Sir Khalid Mehboob",
            creditHours: "3 + 1",
            gpa: "3.3",
        },
        {
            courseNo: "SWE-303",
            courseName: "Big Data Analytics",
            courseTeacher: "Miss Mahvesh Lodhi",
            creditHours: "3 + 1",
            gpa: "3.1",
        },
        {
            courseNo: "SWE-304",
            courseName: "Software Requirement Engineering",
            courseTeacher: "Sir Saood Zia",
            creditHours: "3 + 1",
            gpa: "4.0",
        },

    ]
        
    const columns = ['Serial No.', 'CourseNo.', 'Course Name', 'Course Teacher', 'Credit Hours', 'GPA'];

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
												<TableCell> {index + 1} </TableCell>
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

			<PageTitleBar title='Transcript' match={props.match} />
			<RctCollapsibleCard fullBlock>
                <button className={'text-center btn btn-send btn-block mb-3'}>
                    Download Transcript Now
                    </button>
				<Tabs>
					<TabList>
						<Tab>All Courses</Tab>
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
};
export default Transcript;