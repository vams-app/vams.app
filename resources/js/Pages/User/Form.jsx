import React, { useEffect, } from 'react'
import { useForm } from '@inertiajs/inertia-react';
import { Row, Col, Button, Alert, Form, ButtonGroup, FormControl, } from 'react-bootstrap'
import { Input, Checkbox, ValidationErrors, } from '@Components/Form'

function UserForm({ user, roles, onSubmit, onCancel, ...props}) {
    const { data, setData, isDirty, hasErrors, post, processing, errors, reset, ...rest } = useForm({
        first_name: (user) ? user.first_name : '',
        last_name: (user) ? user.last_name : '',
        username: (user) ? user.username : '',
        email: (user) ? user.email : '',
        role: (user) ? user.roles : '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        const {
            name,
            type,
            checked,
            value,
        } = event.target;

        setData(name, (type === 'checkbox') ? checked : value);
    };

    const doSubmit = () => {
        onSubmit()
    }

    return (
        <div id='UserForm'>
            <Form onSubmit={doSubmit}>
                <ValidationErrors errors={errors} />
                <Form.Group as={Row}>
                    <Col>
                        <Form.Label htmlFor="first_name">First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="first_name"
                            value={data.first_name}
                            autoComplete="first_name"
                            placeholder="First Name"
                            required
                            onChange={onHandleChange}
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
                            value={data.last_name}
                            autoComplete="last_name"
                            placeholder="Last Name"
                            required
                            onChange={onHandleChange}
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
                            value={data.username}
                            autoComplete="username"
                            placeholder="Username"
                            required
                            onChange={onHandleChange}
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
                            value={data.email}
                            autoComplete="email"
                            placeholder="email Address"
                            required
                            onChange={onHandleChange}
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
                        value={data.password}
                        autoComplete="new-password"
                        placeholder="Type a secure password"
                        required
                        onChange={onHandleChange}
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
                        value={data.password_confirmation}
                        placeholder="Type the same password again"
                        required
                        onChange={onHandleChange}
                    />
                    {errors && errors.password_confirmation &&
                        <FormControl.Feedback type='invalid'>{errors.first_name}</FormControl.Feedback>
                    }
                </Form.Group>
                <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <select
                        id='role'
                        name='role'
                        className='form-control'
                        value={data.role}
                        onChange={onHandleChange}
                    >
                        {roles.map((r, k) => (<option key={k} value={r.id}>{`(${r.id}) ${r.name}`}</option>))}
                    </select>

                </Form.Group>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <div className="d-grid gap-2">
                    <ButtonGroup>
                        <Button type='submit' variant='success' size='md' disabled={(processing || (isDirty && hasErrors))}>Create User</Button>
                        <Button size='md' variant='secondary' onClick={onCancel}>Cancel</Button>
                    </ButtonGroup>
                </div>
            </Form>
        </div>
    )
}

export default UserForm
