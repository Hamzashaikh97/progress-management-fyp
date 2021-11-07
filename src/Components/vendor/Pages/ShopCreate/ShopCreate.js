import React, {useState} from 'react';
import {Card, Col, Form, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import Select from "react-select";
import ProgressBar from "../../../../lib/customer/ProgressBar/ProgressBar";
import axios from "axios";
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css'
import DropzoneComponent from 'react-dropzone-component';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';



const ShopCreate = props => {
	const [fileNames, setFileNames] = useState([]);
	const [description, setDescription] = useState('');
	const modules = {
		toolbar: [
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			[{ 'font': [] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
			['link', 'image'],
			['clean'],
			[{ 'align': [] }],
			['code-block']
		],
	};

	const formats = [
		'header',
		'font',
		'bold', 'italic', 'underline', 'strike', 'blockquote',
		'list', 'bullet', 'indent',
		'link', 'image', 'align',
		'code-block'
	];


	const djsConfig = {
		addRemoveLinks: true,
		acceptedFiles: "image/jpeg,image/png,image/gif",
		autoProcessQueue: false
	};



	const componentConfig = {
		iconFiletypes: ['.jpg', '.png', '.gif'],
		showFiletypeIcon: true,
		postUrl: 'no-url'
	};


	// // Simple callbacks work too, of course
	const imgArr = [];
	const callback = (files) => {
		imgArr.push(files);
		console.log(imgArr)
		setFileNames(imgArr);
	}

	const removedfile = file => {
		const selectedIndex = imgArr.findIndex((val, index) => {
			if (imgArr[index] === file){
				return index
			}
			return false
		})
		const newArr = imgArr.splice(selectedIndex, 1)
		setFileNames(newArr)
	};

	const eventHandlers = {
		addedfile: callback,
		removedfile: removedfile,
	}
	const { register, handleSubmit, control } = useForm();

	const [loader, setLoader] = useState(false);
	const token = localStorage.getItem('vendorToken');
	const onSubmit = data => {
		console.log(fileNames)
		setLoader(true);
		const formData = new FormData();

		formData.append('shopName', data.shopName);
		formData.append('shopType', data.shopType.value);
		formData.append('description', description);
		formData.append('address', data.address);
		formData.append('shopVisibility', data.shopVisibility);
		formData.append('schedule', JSON.stringify(data.schedule));
		formData.append('address', data.address);
		formData.append('shopImage', data.shopImage[0]);
		formData.append('shopBannerImage', data.shopBannerImage[0]);
		for (const key of Object.keys(fileNames)) {
			formData.append('gallery', fileNames[key]);
		}

		axios.post('/vendor/shop', formData, {headers: {"Authorization": `Bearer ${token}`}})
			.then((res) => {
				console.log(res.data);
				localStorage.setItem('isProfileSetup', res.data.profileSetup);
				window.location.href = '/vendor/dashboard/'
				setLoader(false)
			}).catch(() => {
			setLoader(false)
		})
	};





	const shopTypeOption = [
		{
			label: 'Aesthetic Doctor',
			value: 'Aesthetic Doctor'
		},
		{
			label: 'Barbers',
			value: 'Barbers'
		},
		{
			label: 'Beautician',
			value: 'Beautician'
		},
		{
			label: 'Smile Dentist',
			value: 'Smile Dentist'
		},
	]



	const editorChangeHandler = (val) => {
		setDescription(val);
	}


	// receives array of files that are done uploading when submit button is clicked
	return (
		<div id="settings" className={'p-5'}>
			<h3 className={'text-center'}>Create Your Shop</h3>
			<Row className={'justify-content-center'}>
				<Col md={8}>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Card>
							<Card.Body>
								<Form.Group>
									<Form.Label> Shop Name </Form.Label>
									<Form.Control type={'text'} required {...register("shopName")} />
								</Form.Group>
								<Form.Group className={'py-3'}>
									<Form.Label> Shop Type </Form.Label>
									<Controller
										name="shopType"
										control={control}
										render={({ field: { value, onChange, ref} }) => (


											<Select
												className="basic-single"
												classNamePrefix="select"
												value={value}
												defaultOptions
												required
												onChange={onChange}
												name="color"
												options={shopTypeOption}
											/>

										)}
									/>
								</Form.Group>
								<Form.Group className={'py-3'}>
									<Form.Label> Shop Description </Form.Label>
									<ReactQuill name="description" onChange={editorChangeHandler} value={description} modules={modules} formats={formats} placeholder="Leave Your Description" />
									{/*<Form.Control as="textarea" required placeholder="Leave Description Here"  {...register("description")}/>*/}
								</Form.Group>

								<Form.Group className={'py-3'}>
									<Form.Label> Shop Address </Form.Label>
									<Form.Control type={'text'} required  {...register("address")} />
								</Form.Group>
							</Card.Body>
						</Card>

						<Card className={'my-4'}>
							<Card.Body>
								<p className={'text-center'}>Opening Hour</p>
								<Form.Group className={'py-3'}>
									<Form.Label className={'d-block'}> Monday </Form.Label>
									<Form.Control type={'text'} required placeholder={'9:00 AM - 5:00 PM OR 9:00 AM - 11:00 AM & 2:00 PM - 5:00 PM'}  {...register("schedule.monday")} />

									<Form.Label className={'d-block'}> Tuesday </Form.Label>
									<Form.Control type={'text'} required placeholder={'9:00 AM - 5:00 PM OR 9:00 AM - 11:00 AM & 2:00 PM - 5:00 PM'}  {...register("schedule.tuesday")} />

									<Form.Label className={'d-block'}> Wednesday </Form.Label>
									<Form.Control type={'text'} required placeholder={'9:00 AM - 5:00 PM OR 9:00 AM - 11:00 AM & 2:00 PM - 5:00 PM'}  {...register("schedule.wednesday")} />

									<Form.Label className={'d-block'}> Thursday </Form.Label>
									<Form.Control type={'text'} required placeholder={'9:00 AM - 5:00 PM OR 9:00 AM - 11:00 AM & 2:00 PM - 5:00 PM'}  {...register("schedule.thursday")} />

									<Form.Label className={'d-block'}> Friday </Form.Label>
									<Form.Control type={'text'} required placeholder={'9:00 AM - 5:00 PM OR 9:00 AM - 11:00 AM & 2:00 PM - 5:00 PM'}  {...register("schedule.friday")} />

									<Form.Label className={'d-block'}> Saturday </Form.Label>
									<Form.Control type={'text'} required placeholder={'9:00 AM - 5:00 PM OR 9:00 AM - 11:00 AM & 2:00 PM - 5:00 PM'}  {...register("schedule.saturday")} />

									<Form.Label className={'d-block'}> Sunday </Form.Label>
									<Form.Control type={'text'} required placeholder={'9:00 AM - 5:00 PM OR 9:00 AM - 11:00 AM & 2:00 PM - 5:00 PM'}  {...register("schedule.sunday")} />
								</Form.Group>
							</Card.Body>
						</Card>

						<Card className={'my-4'}>
							<Card.Body>
								<p className={'text-center'}>Gallery</p>
								<Form.Group className={'py-3'}>
									<label htmlFor="exampleFormControlFile1">Shop Main Image</label>
									<input type="file"
									       required
									       accept=".png, .jpg, .jpeg"
									       className="form-control-file"
									       {...register('shopImage')} />
								</Form.Group>

								<Form.Group className={'py-3'}>
									<label htmlFor="exampleFormControlFile1">Shop Banner Image</label>
									<input type="file"
									       required
									       accept=".png, .jpg, .jpeg"
									       className="form-control-file"
									       {...register('shopBannerImage')} />
								</Form.Group>
								<DropzoneComponent
									config={componentConfig}
									eventHandlers={eventHandlers}
									djsConfig={djsConfig}
								/>

							</Card.Body>
						</Card>

						<div className={'text-center'}>
							{
								loader ? <ProgressBar /> : <button className={'save__btn px-4'} type={'submit'}>Save</button>
							}
						</div>

					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default ShopCreate;
