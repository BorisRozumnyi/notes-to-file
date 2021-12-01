import { api } from '../../urls';

export const postRegistration = (
  dispatch,
  data
) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type':
        'application/json',
      'Access-Control-Allow-Origin':
        '*',
    },
    body: JSON.stringify(data),
  };

  dispatch({
    type: 'POST_REGISTRATION_REQUEST',
  });

  fetch(api.registration, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (
          result.message ===
            'Пользователь с таким именем уже существует' ||
          result.message ===
            'Ошибка при регистрации'
        ) {
          throw result;
        }

        if (
          result.message ===
          'Пользователь успешно зарегистрирован'
        ) {
          dispatch({
            type: 'POST_REGISTRATION_SUCCESS',
            payload: result,
          });
          dispatch({
            type: 'SHOW_NOTIFICATION',
            payload: result.message,
            notificationType: 'success',
          });
        }
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        console.log(error);
      }
    )
    .catch((error) => {
      dispatch({
        type: 'POST_REGISTRATION_ERROR',
        payload: error,
      });
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: error.message,
        notificationType: 'error',
      });
    });
};
