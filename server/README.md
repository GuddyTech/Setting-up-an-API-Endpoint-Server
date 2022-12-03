In creating the API ENDPOINT, I
Created a Client folder
Created a Server folder
Created a db.json file in the server folder.

From GitBash...

cd server folder
npm init
HIT ENTER ENTER till all the questions are answered
npm install --save json-server   OR
npm install -g json-server

ls to see that the nodemodules is showing

Run your server on port 3001 so that your react app can run on port 3000
json-server --port 3001 --watch db.json

HAPPY HACKING!!!!

Run your React App on port 3000 then fetch the Resource Endpoint and use it in the react app.

RESOURCE ENDPOINT
https://localhost:3001/notes

If you copy this link and paste it in your browser, you'll get the data in your db.json

If you RUN the Home https://localhost:3001 you'll get a congrats message.

>> You are successfully running JSON Server.

Then you can go to notes.

You can then fetch the Resource Endpoint to consume the data in your React App.
