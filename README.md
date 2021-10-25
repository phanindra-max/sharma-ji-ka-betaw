
# sharma-ji-ka-betaw

## Goal Planner and organizer to give you the super powers of Sharma Ji Ka Betaaw 🏋️‍♂️

# Hello there!

Hi! Thanks for checking in. This repo hosts source code of and online organizer and learning paths sharing platform. Hosted at : [Website](https://sharma-ji-ka-beta.herokuapp.com/)

# Introduction

Sharma-Ji-Ka-Betaw is a Hindi metaphor for citing obidient kid. In the age of information where everyone is constantly bombarded with lots of distractions, it's quite difficult to focus and keep your eye on the main goal That's where this project tries to help you and give the super powers of **Sharma-Ji-Ka-Betaw!**

## Using the Website & Key Features

The website mainly focuses on bringing the openness where anyone can join and create a learning track

- User must have to signed in to create any tracks of his own
- After signing in, user can create a track using the plus button at the bottom right corner of the screen.
- Then user can navigate to his own track and strat adding the topics/subtopics in order to organize how he/she wants to achieve his goal
- After completing a track you can mark it as completed just a small visual token of achieving something, you'll see the cards turning party mode(green color, lol) 


## Installation and setup

Feel free to download the code on your machine and play with it. You can do that by cloning this repo using

`git clone https://github.com/phanindra-max/sharma-ji-ka-betaw.git`

command in your terminal.

- after that, open the directory where you cloned the repo.
- Now you need to create a .env file in the root directory of the project with the following details:

> NODE_ENV=<environment_of_server>

> MONGO_URI=<your_mongo_cloud_url>

## Running the app

For hot reloading and development usecase:

    npm run dev

For production:

    npm run build --prefix client && node server/index.js
