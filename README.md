# docker-node-react

## To start a project for the first time:
- yarn
- yarn start
- cd frontend
- yarn
- yarn start


## Docker:
- docker build . -t project-name/backend
- docker run \
  -d \
  --rm \
  -p 5000:5000 \
  project-name/backend

- cd frontend
- docker build -t project-name/frontend .
- docker run \
  -it \
  --rm \
  -v ${PWD}:/app \
  -v /app/node_modules \
  -p 3000:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  project-name/frontend
