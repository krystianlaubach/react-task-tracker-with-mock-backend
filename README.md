# React Task Tracker with Mock Backend

I am not an author of this app. I have created it for learning purpose based on the [React JS Crash Course 2021](https://youtu.be/w7ejDZ8SWv8) with small amendments. 

All credits to [Brad Traversy](https://github.com/bradtraversy) from [Traversy Media](https://www.youtube.com/c/TraversyMedia/featured).
Original repository [Task Tracker App](https://github.com/bradtraversy/react-crash-2021).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
To mock backend project uses [JSON Server](https://github.com/typicode/json-server).
I have also used [React Date Picker](https://github.com/Hacker0x01/react-datepicker) component and  [Moment.js](https://momentjs.com/) library.

My modifications:

- Use [React Date Picker](https://github.com/Hacker0x01/react-datepicker) instead of text field for Task Date Time
- Use [Moment.js](https://momentjs.com/) for date time formatting
- Sort tasks by date
- Display error above input instead of displaying alert popup
- Handle Promise returned from Fetch API
- Move functions responsible for fetching data to fetcher class 

## Usage

### Install dependencies

### `npm install`

### Run JSON Server ([http://localhost:5000](http://localhost:5000))

### `npm run server`

### Run the app in the development mode ([http://localhost:3000](http://localhost:3000))

### `npm run start`

### Build the app for production to the `build` folder.

### `npm run build`

### Install HTTP server for running production build

### `sudo npm install -g serve`

### Run the app in the production mode ([http://localhost:8000](http://localhost:8000))

### `serve -s build -p 8000`
