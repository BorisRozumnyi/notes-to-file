import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { frontend, NAME_FOR_REPLACEMENT } from '../urls';
import { getNotes } from '../state/actions';
import { Context } from '../state';

export const Home = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getNotes(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <h2>Note List</h2>
      {state.notes.list.length > 0 && (
        <ul>
          {state.notes.list.map((note) => (
            <li key={note}>
              <Link to={frontend.note.replace(NAME_FOR_REPLACEMENT, note)}>{note}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
