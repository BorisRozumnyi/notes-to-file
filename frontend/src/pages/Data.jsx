import React, {
  useContext,
  useState,
} from 'react';
import { Context } from '../state';
// import { fieldError } from '../utils';
import { InputOutline } from '../components';
import { postData } from '../state/actions';

export const Data = () => {
  const [, dispatch] =
    useContext(Context);

  // const errors =
  //   state.registration.errors?.errors ||
  //   [];

  const [form, setForm] = useState({
    fileName: '',
    text: '',
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
        label="fileName"
        value={form.fileName}
        setValue={handleChange}
        // error={fieldError(
        //   'fileName',
        //   errors
        // )}
      />
      <InputOutline
        label="text"
        value={form.text}
        setValue={handleChange}
        // error={fieldError(
        //   'text',
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
