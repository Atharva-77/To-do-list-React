# React - To-Do-List

This is a react website that allows you to add an employee by filling it's details. You can view all employees in form of a table too.

## How to run

Download the entire code.  
Do `npm install`. This will install all the node modules.  
Do `npm start`. This will run your code & the website opens on your localhost.

## If localhost dosen't work then try one of the following steps

1. Disable the firewall.
2. If you are using vscode, open `.vscode/launch.json`. Check the `url's port number inside it`. After that click on `add configuration` and launch chrome. `Save & Run` the file.
3. If above steps don't work, Change the `.vscode/launch.json` to :-

```
{
    "version": "0.2.0",
    "configurations": [

        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:5500",
            "webRoot": "${workspaceRoot}"
        }
    ]
}
```

Restart the vscode and it will run.
