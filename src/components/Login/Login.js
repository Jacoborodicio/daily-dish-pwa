import {useDispatch, useSelector} from "react-redux";
import {login} from '../../features/user';
import Button from "../Buttons/Button";
import * as S from './Login.styled';
import {TextField} from "@mui/material";
import { Formik } from 'formik';
import axios from "axios";
import {api} from "../../helpers/constants";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useLocalStorage} from "../../hooks/useLocalStorage";
const Login = () => {
    const history = useHistory();
    const [auth, setAuth] = useLocalStorage('auth', {token: '', refresh_token: ''})
    const [loginError, setLoginError] = useState({});
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)

    return (
    <S.LoginPage>
        <S.LoginContainer>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const {data} = await axios.post(api.login, values);
                        console.log('%c response: ', 'color: orange; font-style: italic;', data)
                        dispatch(login(data))
                        const {token, refresh_token} = data;
                        setAuth({token, refresh_token});
                        setSubmitting(false)
                        history.push('/profile')
                    } catch (error) {
                        console.log('%c error: ', 'color: orange; font-style: italic;', error)
                        setLoginError({...loginError, errMsg: 'There was an error by login.'})
                        setSubmitting(false)
                    }
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <S.LoginForm onSubmit={handleSubmit}>
                        <TextField
                            type="email"
                            style={{width: '100%'}}
                            label={'Username'}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            required
                        />
                        {errors.email && touched.email && errors.email}
                        <TextField
                            style={{width: '100%'}}
                            type="password"
                            name="password"
                            label='Password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            required
                        />
                        {errors.password && touched.password && errors.password}
                        <Button style={{width: '50%'}} type='submit' disabled={isSubmitting}>LOGIN</Button>
                    </S.LoginForm>
                )}
            </Formik>

        </S.LoginContainer>
    </S.LoginPage>
)
}
export default Login;
