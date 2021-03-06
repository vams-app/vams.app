import React, { useState, useEffect, } from 'react'
import { Form, FormControl, Container, Badge, Row, Col, ButtonGroup, Button, Modal, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCheckSquare, faInfo, faInfoCircle, faPencilAlt, faPlane, faPlaneDeparture, faSpellCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Input, Checkbox, ValidationErrors, } from '@Components/Form'
import Layouts from '@Layouts'
import UserForm from './Form'


export function ShowPage({ auth, menus, errors, appTitle, pageTitle, user, roles, ...props}) {
    const doEditUser = (data) => {
        console.log(data);
    }

    const doCancel = () => {
        console.log('doCancel');
    }



    return (
        <Layouts.Authenticated
            auth={auth}
            menus={menus}
            errors={errors}
            appTitle={appTitle}
            pageTitle={pageTitle}
        >
        {user &&
            <Form>
            <ValidationErrors errors={errors} />
            <Form.Group as={Row}>
                <Col>
                    <Form.Label htmlFor="first_name">First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="first_name"
                        value={user.first_name}
                        autoComplete="first_name"
                        placeholder="First Name"
                        disabled={true}
                    />
                    {errors && errors.first_name &&
                        <FormControl.Feedback type='invalid'>{errors.first_name}</FormControl.Feedback>
                    }
                </Col>
                <Col>
                    <Form.Label htmlFor="last_name">Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="last_name"
                        value={user.last_name}
                        autoComplete="last_name"
                        placeholder="Last Name"
                        disabled={true}
                    />
                    {errors && errors.last_name &&
                        <FormControl.Feedback type='invalid'>{errors.last_name}</FormControl.Feedback>
                    }
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col>
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={user.username}
                        autoComplete="username"
                        placeholder="Username"
                        disabled={true}
                    />
                    {errors && errors.username &&
                        <FormControl.Feedback type='invalid'>{errors.username}</FormControl.Feedback>
                    }
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col>
                    <Form.Label htmlFor="email">Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={user.email}
                        autoComplete="email"
                        placeholder="email Address"
                        disabled={true}
                    />
                    {errors && errors.email &&
                        <FormControl.Feedback type='invalid'>{errors.email}</FormControl.Feedback>
                    }
                </Col>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={user.password}
                    autoComplete="new-password"
                    placeholder="Type a secure password"
                    disabled={true}
                />
                {errors && errors.password &&
                    <FormControl.Feedback type='invalid'>{errors.password}</FormControl.Feedback>
                }
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="password_confirmation">Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password_confirmation"
                    value={user.password_confirmation}
                    placeholder="Type the same password again"
                    disabled={true}
                />
                {errors && errors.password_confirmation &&
                    <FormControl.Feedback type='invalid'>{errors.first_name}</FormControl.Feedback>
                }
            </Form.Group>
            <Form.Group>
                <Form.Label>Roles</Form.Label>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Role</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((r, k) => (<tr key={k}>
                            <td>{r.id}</td>
                            <td>{r.name}</td>
                            <td>
                                <Button size='sm' variant='danger' onClick={(e) => removeRoleFromUser(user.id, r.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>

            </Form.Group>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <div className="d-grid gap-2">
                <ButtonGroup>
                    <Button href={route('users.edit', { id: user.id })} variant='success' size='md'>Edit User</Button>
                    <Button href={route('users.index')} size='md' variant='secondary'>Go Back</Button>
                </ButtonGroup>
            </div>
        </Form>
        }
        </Layouts.Authenticated>
    );
}

export default ShowPage
