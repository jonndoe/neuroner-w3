# pull official base image
FROM python:3.8.0-alpine

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update \
    && apk add build-base postgresql-dev gcc python3-dev musl-dev jpeg-dev zlib-dev

ENV LIBRARY_PATH=/lib:/usr/lib

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt






# copy project
COPY . /usr/src/app/

# copy entrypoint.sh
COPY ./bakerydemo/entrypoint.sh /usr/src/app/entrypoint.sh

#RUN chmod 777 entrypoint.sh
#RUN ls -la

# run entrypoint.sh
#ENTRYPOINT ["/usr/src/app/entrypoint.sh"]