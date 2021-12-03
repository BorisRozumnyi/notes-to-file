import { useContext, useEffect } from 'react';
import { getNotes } from '../state/actions';
import { Context } from '../state';
import { List } from '../components/List';

export const Home = () => {
  const [
    {
      notes: { list },
    },
    dispatch,
  ] = useContext(Context);

  useEffect(() => {
    getNotes(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <h2>Note List</h2>
      <List list={list} />
    </div>
  );
};
