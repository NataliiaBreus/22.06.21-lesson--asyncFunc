import React, { useReducer } from 'react';
import style from './SignUpForm.module.scss';
import FormInput from './FormInput';
import * as constants from '../../constants';
import { SIGN_IN_SCHEMA } from 'utils/validationSchemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './SignUpForm.module.scss';
import FormInput from './FormInput';
import constants from '../../../constants';


const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

function SignUpForm () {
  return (
    <Formik initialValues = {initialValues} validationSchemas={SIGN_IN_SCHEMA}>
    {formikProps => {
      console.log(formikProps);
      return(
        <Form>
        <Field name = 'firstName' />
        <ErrorMessage name = 'firstName' component = 'span' />
        <Field name = 'lastName' />
        <ErrorMessage name = 'lastName' component = 'span' />
        <Field name='email' />
        <ErrorMessage name='email' component='span' />
        <Field type='password' name='password' />
        <ErrorMessage name='password' component='span' />
        <Field type='submit' value='Submit' />
        </Form>
      );
    }}
    </Formik>

  );
}

/*
function SignUpForm (props) {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const submitHandler = event => {
    const { registerUser } = props;
    event.preventDefault();
    registerUser({ ...state });
  };

  const handleChange = ({ target: { name, value } }) => {
    dispatch({ name, value });
  };
  const { firstname, lastname, email, password } = state;
  return (
    <form className={style.container} onSubmit={submitHandler}>
      <FormInput
        name='firstname'
        value={firstname}
        onChange={handleChange}
        validationRegex={constants.REGEX_NAME}
        placeholder='Введите имя'
      />
      <FormInput
        name='lastname'
        value={lastname}
        validationRegex={constants.REGEX_NAME}
        onChange={handleChange}
        placeholder='Введите фамилию'
      />
      <FormInput
        name='email'
        value={email}
        validationRegex={constants.REGEX_EMAIL}
        onChange={handleChange}
        placeholder='Введите email'
        type='email'
      />
      <FormInput
        name='password'
        value={password}
        validationRegex={constants.REGEX_PASSWORD}
        onChange={handleChange}
        placeholder='Введите пароль'
        type='password'
      />
      <input className={style.input} type='submit' />
    </form>
  );
}

/*
class SignUpForm extends Component {
  constructor (props) {
    super(props);
    this.state = { ...intialValues };
  }

  submitHandler = event => {
    const { registerUser } = this.props;
    event.preventDefault();
    registerUser({ ...this.state });
    this.setState({ ...intialValues });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render () {
    const { firstname, lastname, email, password } = this.state;
    return (
      <form className={style.container} onSubmit={this.submitHandler}>
        <FormInput
          name='firstname'
          value={firstname}
          onChange={this.handleChange}
          validationRegex={constants.REGEX_NAME}
          placeholder='Введите имя'
        />
        <FormInput
          name='lastname'
          value={lastname}
          validationRegex={constants.REGEX_NAME}
          onChange={this.handleChange}
          placeholder='Введите фамилию'
        />
        <FormInput
          name='email'
          value={email}
          validationRegex={constants.REGEX_EMAIL}
          onChange={this.handleChange}
          placeholder='Введите email'
          type='email'
        />
        <FormInput
          name='password'
          value={password}
          validationRegex={constants.REGEX_PASSWORD}
          onChange={this.handleChange}
          placeholder='Введите пароль'
          type='password'
        />
        <input className={style.input} type='submit' />
      </form>
    );
  }
}
*/
export default SignUpForm;

