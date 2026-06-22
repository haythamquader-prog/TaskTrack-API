# \# TaskTrack API

# 

# \## Overview

# 

# TaskTrack API is a simple task management service built with Node.js and Express. It provides a lightweight backend application for managing tasks and demonstrates containerized deployment using Docker, version control using GitHub, and deployment to a production environment.

# 

# \---

# 

# \## Tech Stack

# 

# \* Node.js

# \* Express.js

# \* Docker

# \* Git

# \* GitHub

# \* Render (Production Deployment)

# 

# \---

# 

# \## Project Structure

# 

# ```text

# TaskTrack-API/

# ├─ src/

# ├─ docs/

# │  ├─ screenshots/

# │  └─ notes.md

# ├─ Dockerfile

# ├─ .dockerignore

# ├─ .gitignore

# ├─ package.json

# ├─ package-lock.json

# └─ README.md

# ```

# 

# \---

# 

# \## Docker Build

# 

# Build the Docker image:

# 

# ```bash

# docker build -t tasktrack-api .

# ```

# 

# \---

# 

# \## Run Container

# 

# Run the application inside Docker:

# 

# ```bash

# docker run -p 3000:3000 tasktrack-api

# ```

# 

# \---

# 

# \## Stop and Remove Container

# 

# List running containers:

# 

# ```bash

# docker ps

# ```

# 

# Stop a container:

# 

# ```bash

# docker stop CONTAINER\_ID

# ```

# 

# Remove a container:

# 

# ```bash

# docker rm CONTAINER\_ID

# ```

# 

# \---

# 

# \## Configuration

# 

# Port:

# 

# ```text

# 3000

# ```

# 

# No environment variables are required.

# 

# \---

# 

# \## Local Testing

# 

# Start the container and open:

# 

# ```text

# http://localhost:3000

# ```

# 

# Expected response:

# 

# ```text

# TaskTrack API is running

# ```

# 

# Tasks endpoint:

# 

# ```text

# http://localhost:3000/tasks

# ```

# 

# Expected response:

# 

# ```json

# \[

# &#x20; {

# &#x20;   "id": 1,

# &#x20;   "title": "Finish Assignment"

# &#x20; },

# &#x20; {

# &#x20;   "id": 2,

# &#x20;   "title": "Study Docker"

# &#x20; }

# ]

# ```

# 

# \---

# 

# \## Production Deployment (VPS)

# 

# This project has been deployed to a production environment using Render.

# 

# \### Production URL

# 

# https://tasktrack-api-r1kw.onrender.com

# 

# \### Production API Endpoint

# 

# https://tasktrack-api-r1kw.onrender.com/tasks

# 

# \### Deployment Steps

# 

# 1\. Create a cloud service instance.

# 2\. Connect the GitHub repository.

# 3\. Build the Docker image using the Dockerfile.

# 4\. Deploy the container.

# 5\. Verify the application is accessible through the public URL.

# 

# \---

# 

# \## Deployment Verification

# 

# Open:

# 

# ```text

# https://tasktrack-api-r1kw.onrender.com

# ```

# 

# Expected response:

# 

# ```text

# TaskTrack API is running

# ```

# 

# Open:

# 

# ```text

# https://tasktrack-api-r1kw.onrender.com/tasks

# ```

# 

# Expected response:

# 

# ```json

# \[

# &#x20; {

# &#x20;   "id": 1,

# &#x20;   "title": "Finish Assignment"

# &#x20; },

# &#x20; {

# &#x20;   "id": 2,

# &#x20;   "title": "Study Docker"

# &#x20; }

# ]

# ```

# 

# \---

# 

# \## Repository

# 

# GitHub Repository:

# 

# https://github.com/haythamquader-prog/TaskTrack-API

# 

# \---

# 

# \## Author

# 

# Haytham Quader



