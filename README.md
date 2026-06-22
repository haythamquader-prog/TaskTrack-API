# TaskTrack API

## Overview

TaskTrack API is a simple task management service built with Node.js and Express. It demonstrates containerized deployment using Docker and version control using GitHub.

## Tech Stack

* Node.js
* Express.js
* Docker
* Git
* GitHub

## Docker Build

docker build -t tasktrack-api .

## Run Container

docker run -p 3000:3000 tasktrack-api

## Stop Container

docker ps

docker stop CONTAINER_ID

docker rm CONTAINER_ID

## Configuration

Port: 3000

No environment variables are required.

## Testing

Open:

http://localhost:3000

Expected response:

TaskTrack API is running

## Author

Haytham Quader