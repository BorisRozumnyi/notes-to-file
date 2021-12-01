import React, {
  useContext,
  useState,
} from 'react';
import { Context } from '../state';
// import { fieldError } from '../utils';
import { InputOutline } from '../components';
import { postData } from '../state/actions';

export const Data = () => {
  const [state, dispatch] =
    useContext(Context);

  // const errors =
  //   state.registration.errors?.errors ||
  //   [];

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setForm({
      ...form,
      [name]: event.target.value,
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    postData(dispatch, form);
  };

  return (
    <form>
      <h1>Data</h1>
      <InputOutline
        label="username"
        value={form.username}
        setValue={handleChange}
        // error={fieldError(
        //   'username',
        //   errors
        // )}
      />
      <InputOutline
        label="password"
        type="password"
        value={form.password}
        setValue={handleChange}
        // error={fieldError(
        //   'password',
        //   errors
        // )}
      />
      <button
        onClick={handleRegistration}
      >
        Sign Up
      </button>
    </form>
  );
};
