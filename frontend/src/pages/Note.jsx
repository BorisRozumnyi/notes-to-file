import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../state';
import { InputOutline } from '../components/Input';
import { putNote, getNote } from '../state/actions';

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
    if (text && !loading) setLoacalText(text);
  }, [text, name, loading]);

  const [textLocal, setLoacalText] = useState(text);

  const handleChange = (event) => {
    setLoacalText(event.target.value);
  };

  const handleSave = () => {
    putNote(dispatch, { name, text: textLocal });
  };

  if (loading) return '...loading';

  return (
    <>
      <h1>{name}</h1>
      <InputOutline isTextarea label="text" value={textLocal} setValue={handleChange} />
      <button onClick={handleSave}>save</button>
    </>
  );
};
