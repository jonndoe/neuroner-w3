# Pull from base image
FROM python:3.7-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory inside docker container
# if we need to run any command inside container,
# docker will run from this directory
WORKDIR /code

# Copy project from local folder where Dockerfile is (.) to
# /code/ directory inside container
COPY . /code/

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements/everything.txt

# run entrypoint.sh
ENTRYPOINT ["/code/docker-entrypoint.sh"]



