import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { getNote } from '../state/actions/getNote';
import { Context } from '../state';

export const Note = () => {
  const [, dispatch] = useContext(Context);
  let params = useParams();

  useEffect(() => {
    getNote(dispatch, params.name);
  }, [params, dispatch]);

  return <h1>{params.name}</h1>;
};
