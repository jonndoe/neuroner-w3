Wagtail-based neuroner project [WAGTAIL CMS](http://wagtail.readthedocs.io/en/latest/getting_started/index.html).
=======================

This is simple blog project with comments capabilities and users registration.

### Features Demonstrated in This project:

-   Dividing a project up into multiple apps
-   Custom content models
-   A typical weblog in the "blog" app
-   Example of using a "base" app to contain misc additional functionality (e.g. Contact Form, About, etc.)
-   "StandardPage" model using mixins borrowed from other apps
-   Example of customizing the Wagtail Admin via _wagtail_hooks_
-   Example of using the Wagtail "snippets" system to represent bread categories, countries and ingredients
-   Example of a custom "Galleries" feature that pulls in images used in other content types in the system
-   Example of creating ManyToMany relationships via the Ingredients feature on BreadPage
-   Extended with comments plug in.

**Document contents**

- [Installation](#installation)
- [Other notes](#other-notes)

# Installation

- [Docker](#setup-with-docker)
- [Miniconda](#setup-with-miniconda)


If you're new to Python and/or Django, we suggest you run this project on a Virtual Machine using Docker . Docker will help resolve common software dependency issues. Developers more familiar with
miniconda and traditional Django app setup instructions should skip to [Setup with miniconda](#setup-with-miniconda).

Setup with Docker
-----------------

#### Dependencies
* [Docker](https://docs.docker.com/engine/installation/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Installation
Run the following commands:

```bash
git clone https://github.com/wagtail/bakerydemo.git
cd neuroner
docker-compose up --build
```

The demo site will now be accessible at [http://localhost:8000/](http://localhost:8000/) and the Wagtail admin
interface at [http://localhost:8000/admin/](http://localhost:8000/admin/).

Log into the admin with the credentials ``admin / changeme``.

**Important:** This `docker-compose.yml` is configured for local testing only, and is _not_ intended for production use.

### Debugging
To tail the logs from the Docker containers in realtime, run:

```bash
docker-compose logs -f
```

Setup with Miniconda
---------------------
You can run the Wagtail demo locally without setting up Vagrant or Docker and simply use Miniconda, which is relatively easy to use.

#### Dependencies
* Python > 3.6
* [Miniconda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/)

### Installation

With [Miniconda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/) installed, run:

    conda create -n env_name python=3.8
    conda activate env_name
    (env_name) user@user:/ python --version

Confirm that this is showing a compatible version of Python 3.x.

Now we're ready to set up the project itself:

    cd ~/dev [or your preferred dev directory]
    git clone https://github.com/jonndoe/neuroner-w3.git
    cd neuroner
    pip install -r requirements/everything.txt

Next, we'll set up our local environment variables. We use [django-dotenv](https://github.com/jpadilla/django-dotenv)
to help with this. It reads environment variables located in a file name `.env` in the top level directory of the project. The only variable we need to start is `DJANGO_SETTINGS_MODULE`:

    $ cp bakerydemo/settings/local.py.example bakerydemo/settings/local.py
    $ echo "DJANGO_SETTINGS_MODULE=bakerydemo.settings.local" > .env

To set up your database and load initial data, run the following commands:

    ./manage.py migrate
    ./manage.py load_initial_data
    ./manage.py runserver

Log into the admin with the credentials ``admin / changeme``.


# Next steps

# Contributing
If you're a Python or Django developer, fork the [repo](https://github.com/wagtail/bakerydemo.git) and get stuck in! If you'd like to get involved you may find our [contributing guidelines](https://github.com/wagtail/bakerydemo/blob/master/contributing.md) a useful read.

### Preparing this archive for distribution

If you change content or images in this repo and need to prepare a new fixture file for export, do the following on a branch:

`./manage.py dumpdata --natural-foreign --indent 2 -e auth.permission -e contenttypes -e wagtailcore.GroupCollectionPermission -e wagtailimages.filter -e wagtailcore.pagerevision -e wagtailimages.rendition  -e sessions > bakerydemo/base/fixtures/bakerydemo.json`


# Other notes

### Sending email from the contact form

The following setting in `base.py` and `production.py` ensures that live email is not sent by the demo contact form.

`EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'`

In production on your own site, you'll need to change this to:

`EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'`

and configure [SMTP settings](https://docs.djangoproject.com/en/1.10/topics/email/#smtp-backend) appropriate for your email provider.

### Ownership of demo content

All content in the demo is public domain. Textual content in this project is either sourced from Wikipedia or is lorem ipsum. All images are from either Wikimedia Commons or other copyright-free sources.
