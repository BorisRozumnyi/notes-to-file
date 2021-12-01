import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { frontend } from '../urls';
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
      <h2>
        Hello guest! Would you like to <Link to={frontend.data}>data?</Link>
      </h2>
      {state.data.notes.length > 0 && (
        <ul>
          {state.data.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
