import React, { Component } from 'react';
import './login.scss';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import Loader from '../loader/loader';
import { login, clearLoginState } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Podaj adres e-mail')
        .email('Podany adres e-mail jest nieprawidłowy'),
    password: Yup.string().required('Podaj hasło')
        .min(4, 'Hasło musi być dłuższe niż 4 znaki')
})

class Login extends Component {
    componentWillUnmount = () => {
        this.props.dispatch(clearLoginState());
    }
    render() {
        if (this.props.isLogin) {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <div className="register">
                    <h1>Logowanie</h1>
                    <Loader isLoading={this.props.isLoading} />
                    {(this.props.statusCode === 200
                        && !this.props.isLoading
                        && this.props.message.length) &&
                        <div>
                            {this.props.message}
                        </div>
                    }
                    {(this.props.statusCode === 401
                        && !this.props.isLoading
                        && this.props.message.length) &&
                        <div>
                            {this.props.message}
                        </div>
                    }
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => {
                            this.props.dispatch(login(values))
                        }}
                    >

                        {({ errors, touched }) => (
                            <Form>


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
                                    <button type="submit">Zaloguj</button>
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
        isLoading: state.auth.isLoading,
        statusCode: state.auth.statusCode,
        message: state.auth.message
    }
}



export default connect(mapStateToProps, null)(Login);