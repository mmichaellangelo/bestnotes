> **<span style="color: red">WORK IN PROGRESS. EXPECT BREAKING CHANGES.</span>**
# BestNotes
### A simple, self-hosted note-taking application.

My goal for this project is to provide an elegant, private, and secure solution for cross-platform note-taking. I do not currently plan to monetize the project, which is why it will be exclusively self-hosted. I am mainly building this as a learning project, but plan to use it personally as well.

#### Powered By:
> SvelteKit  
> NodeJS/Express  
> PostgreSQL  

Everything is setup to run from docker compose, so starting up all the services is as simple as running:

> $ docker compose up

Hot reloading is functional for both the frontend SvelteKit app via Vite and the backend Node app via Nodemon.

*<span style="color: yellow">I have only tested this in a linux environment. Somtimes mounted docker directories behave differently on Windows.</span>*