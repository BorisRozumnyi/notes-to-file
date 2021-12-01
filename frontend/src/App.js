import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    fetch('/data/reade', config)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.message) {
            throw result;
          }
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};
