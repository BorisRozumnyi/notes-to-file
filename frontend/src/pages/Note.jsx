import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getNote } from '../state/actions/getNote';
import { Context } from '../state';
import { InputOutline } from '../components/Input';

export const Note = () => {
  const [state, dispatch] = useContext(Context);

  const {
    note: { text, name, loading },
  } = state;

  const params = useParams();

  useEffect(() => {
    getNote(dispatch, params.name);
  }, [params, dispatch]);

  useEffect(() => {
    console.log(text, loading);
    if (text && !loading) setLoacalText(text);
  }, [text, name, loading]);

  const [textLocal, setLoacalText] = useState(text);

  const handleChange = (event) => {
    setLoacalText(event.target.value);
  };

  if (loading) return '...loading';

  return (
    <>
      <h1>{name}</h1>
      <InputOutline isTextarea label="text" value={textLocal} setValue={handleChange} />
    </>
  );
};
