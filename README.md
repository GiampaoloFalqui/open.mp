# open.mp Landing Page

[![Build Status](https://travis-ci.org/openmultiplayer/homepage.svg?branch=master)](https://travis-ci.org/openmultiplayer/homepage)

The official landing page for the open.mp project.

## Contributing

This website is built with [Next.js](https://nextjs.org/) with no special configuration or surprises. Simply clone the
repo, run `npm install` to grab dependencies and `npm run dev` to start the development server on http://localhost:3000
then you can edit the source with hot reloading.

Run `npm build` to build a production distribution and `npm run favicon` to generate the favicon if ever the logo
changes.

### Using Docker

Download the latest container of Node:

`docker pull node`

Go to the locally cloned Git repository:

`cd <git_repository_location>`

Run the Node container binding the open.mp code to the container and exposing the 3000 port so that you can see the site on your `http://localhost:3000`:

`docker run -ti -p 3000:3000 -v $(pwd):/data node /bin/bash`
