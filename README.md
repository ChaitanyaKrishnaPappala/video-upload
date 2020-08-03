This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

Run `yarn` to install all project dependencies. Create a .env file (look at .env.SAMPLE for reference). The keys in .env.SAMPLE are populated with dummy values,
please add real working values for .env file.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This will even start the mock server (backend) on port 3001

### `Database Setup`
Postgres is used as database for this project.
Steps to setup:

Install postgres on windows or mac.

For mac:
Follow this link:
https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb

For windows:
Follow this link: https://www.microfocus.com/documentation/idol/IDOL_12_0/MediaServer/Guides/html/English/Content/Getting_Started/Configure/_TRN_Set_up_PostgreSQL.htm

After installing the required packages and configuring postgres with a user,
Follow the below instructions to get started with other database setup:

Create a role:
`CREATE ROLE username WITH LOGIN PASSWORD 'quoted password'`

Create a database:
`CREATE DATABASE videos;`

Create a table:
`CREATE TABLE upload (ID SERIAL PRIMARY KEY, uuid   title VARCHAR(200));`

Please create a .env file and setup other details like username and password.


### `Upload Videos`

Videos can be uploaded by using the following command in the video-upload project (root folder)
`yarn build testupload /fake/filepath`

It takes two arguments - title of the video and the source path of the video to be uploaded












