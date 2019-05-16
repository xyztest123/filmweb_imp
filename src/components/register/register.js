import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import './register.scss';
import { registerUser } from '../../actions/users';
import Loader from '../loader/loader';
import { Redirect } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Wpisz więcej niż 2 znaki')
        .max(32, 'Twoje imię i nazwisko jest za długie')
        .required('Podaj imię i nazwisko'),
    email: Yup.string()
        .required('Podaj adres e-mail')
        .email('Podany adres e-mail jest nieprawidłowy'),
    password: Yup.string().required('Podaj hasło')
        .min(4, 'Hasło musi być dłuższe niż 4 znaki'),
    repeatPassword: Yup.string()
        .required('Powtórz hasło')
        .oneOf(
            [Yup.ref('password'), null],
            "Podane hasła są różne"
        )
})

class Register extends Component {
    state = {}
    render() {
        if (this.props.isLogin) {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <div className="register">
                    <h1>Rejestracja</h1>
                    <Loader isLoading={this.props.isLoading} />
                    {(this.props.statusCode === 200
                        && !this.props.isLoading
                        && this.props.message.length) &&
                        <div>
                            {this.props.message}
                        </div>
                    }
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            repeatPassword: ''
                        }}
                        validationSchema={RegisterSchema}
                        onSubmit={(values) => {
                            this.props.dispatch(registerUser(values));
                        }}
                    >

                        {({ errors, touched }) => (
                            <Form>

                                <div className="row">
                                    <label>Imię i nazwisko</label>
                                    <Field name="name" type="text" />
                                    {(errors.name && touched.name) &&
                                        <div className="input-error">
                                            {errors.name}
                                        </div>
                                    }
                                </div>


                                <div className="row">
                                    <label>E-mail</label>
                                    <Field name="email" type="text" />
                                    {(errors.email && touched.email) &&
                                        <div className="input-error">
                                            {errors.email}
                                        </div>
                                    }
                                </div>

                                <div className="row">
                                    <label>Hasło</label>
                                    <Field name="password" type="password" />
                                    {(errors.password && touched.password) &&
                                        <div className="input-error">
                                            {errors.password}
                                        </div>
                                    }
                                </div>

                                <div className="row">
                                    <label>Powtórz hasło</label>
                                    <Field name="repeatPassword" type="password" />
                                    {(errors.repeatPassword && touched.repeatPassword) &&
                                        <div className="input-error">
                                            {errors.repeatPassword}
                                        </div>
                                    }
                                </div>

                                <div className="row">
                                    <button type="submit">Zarejestruj</button>
                                </div>

                            </Form>
                        )}

                    </Formik>


                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        isLoading: state.users.isLoading,
        statusCode: state.users.statusCode,
        message: state.users.message,
    }
}

export default connect(mapStateToProps, null)(Register);