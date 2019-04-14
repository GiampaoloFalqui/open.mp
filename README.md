# open.mp Landing Page

This is the landing page for open.mp

It's just a Next.js app so `npm run dev` to contribute.

## Development

### Using Docker

Download the latest container of Node:

`docker pull node`

Go to the locally cloned Git repository:

`cd <git_repository_location>`

Run the Node container binding the open.mp code to the container and exposing the 3000 port so that you can see the site on your `http://localhost:3000`:

`docker run -ti -p 3000:3000 -v $(pwd):/data node /bin/bash`