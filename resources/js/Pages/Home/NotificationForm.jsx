import React from 'react'
import { Formik, Form, Field, } from 'formik'
import { Inertia } from '@inertiajs/inertia'
import { Container, Row, Col, Button, ButtonGroup, } from 'react-bootstrap'
import classNames from 'classnames'
import * as Yup from 'yup'
import { Input, UsernameInput, } from '@Components/Form'
import { Api } from '@/Middleware'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
};

const Schema = Yup.object().shape({
    first_name: Yup.string().min(1, 'Too Short').max(100, 'Too long!').required('First Name is required'),
    last_name: Yup.string().min(1, 'Too Short').max(100, 'Too long!').required('Last Name is required'),
    email: Yup.string().email('A valid Email Address is required').required('Email Address is required'),
});

export default function NotificationForm() {
    const submit = (values, actions) => {
        console.log(actions);

        Inertia.post(route('enroll.notification'), values)

        actions.resetForm();
        actions.setSubmitting(false);

    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={Schema}
        >
            {({ errors, values, touched, isValidating, isSubmitting, dirty, isValid, ...formikProps }) => {

                let isDisabled = (!dirty || (dirty && !isValid));

                return (<Form>
                    <Row>
                        <Col md={6}>
                            <Field
                                name='first_name'
                                component={Input}
                                placeholder='First Name'
                                label='First Name'
                            />
                        </Col>
                        <Col md={6}>
                            <Field
                                name='last_name'
                                component={Input}
                                placeholder='Last Name'
                                label='Last Name'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Field
                                name='email'
                                component={Input}
                                placeholder='Email Address'
                                label='Email Address'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type='submit' block variant={(!isDisabled) ? 'primary' : 'secondary' } disabled={isDisabled}>
                                {(isSubmitting)
                                    ? (<FontAwesomeIcon icon={faSpinner} spin />)
                                    : 'Yes, Notify me!'
                                }
                            </Button>
                        </Col>
                    </Row>
                </Form>)
            }}
        </Formik>
    )
}