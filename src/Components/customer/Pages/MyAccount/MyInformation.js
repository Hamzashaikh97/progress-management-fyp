import React, { useState } from "react";
import {Button, Form} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-input-2'
import ProgressBar from "../../../../lib/customer/ProgressBar/ProgressBar";
import axios from "axios";



const Information = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const token = localStorage.getItem('token');

    const { register, handleSubmit, formState: { errors }, control } = useForm();

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
        if (data.newPassword !== data.confirmPassword) {
            setError('Password do not match')
        }
        axios.put('/user', data, {headers: {"Authorization": `Bearer ${token}`}})
            .then((res) => {
                setLoading(false)
                setError('');
                console.log(res.data);
            }).catch((err) => {
            setLoading(false)
            setError(err.response.data.message)
        })
    }

    let formButton = (
        <>
            <div className="text-center">
                <Button type={'submit'}  className="btn ">Edit</Button>
            </div>
        </>
    )

    if (loading) {
        formButton = <ProgressBar />
    }
    let errorMessage = null;

    if(error) {
        errorMessage = <p className={'text-danger font-weight-bold '}>{ error }</p>
    }

    return (

            <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="info row justify-content-center mt-5">
                <div className="col-lg-3">
                    <p>My Contact Details</p>
                    <small className="text-center">
                        {errorMessage}
                    </small>
                        <div className="input-group mb-2">
                            <Form.Control type={'text'} placeholder={'Email'} {...register('email')}  className={'detail__input__login_customer py-4'} />
                            <div className="input-group-append">
                                <i className="zmdi zmdi-email input-group-text input__prepend__login_customer" />
                            </div>
                        </div>
                    <small className="text-danger">
                        {errors.phoneNumber && errors.phoneNumber.message }
                    </small>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            className={'detail__input__login_customer py-4'}
                            render={({ field: { value, onChange, ref } }) => (
                                <PhoneInput
                                    country={'us'}
                                    className={'mb-1'}
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    <small className="text-danger">
                        {errors.phoneNumber && errors.phoneNumber.message }
                    </small>

                </div>
            </div>
            <div className="info row justify-content-center mt-5">
                <div className="col-lg-3">
                    <p>Password</p>
                            <div className="input-group mb-2">
                                <Form.Control type={'password'} placeholder={'Current Password'} {...register('oldPassword')} className={'detail__input__login_customer py-4'} />
                                <div className="input-group-append">
                                    <i className="zmdi zmdi-key input-group-text input__prepend__login_customer" />
                                </div>
                            </div>
                    <small className="text-danger">
                        {errors.phoneNumber && errors.phoneNumber.message }
                    </small>
                            <div className="input-group mb-2">
                                <Form.Control type={'password'} placeholder={'New Password'} {...register('newPassword')} className={'detail__input__login_customer py-4'} />
                                <div className="input-group-append">
                                    <i className="zmdi zmdi-key input-group-text input__prepend__login_customer" />
                                </div>
                            </div>
                    <small className="text-danger">
                        {errors.phoneNumber && errors.phoneNumber.message }
                    </small>
                            <div className="input-group mb-2">
                                <Form.Control type={'password'} placeholder={'Confirm Password'} {...register('confirmPassword')}  className={'detail__input__login_customer py-4'} />
                                <div className="input-group-append">
                                    <i className="zmdi zmdi-key input-group-text input__prepend__login_customer" />
                                </div>
                            </div>
                    <small className="text-danger">
                        {errors.phoneNumber && errors.phoneNumber.message }
                    </small>
                    {formButton}

                    </div>
                </div>
            </Form>

    )
}

export default Information