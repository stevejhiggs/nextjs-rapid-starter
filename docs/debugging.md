# Debugging

Debugging can be slightly complex as code can be running client-side or server-side. There are vscode debug configurations already generated for both scenarios and sourcemaps are generated to allow client-side debugging direct from chrome.

## Server side debugging

- start the app using `yarn start`
- launch the "debug server side" debug configuration in vscode
- set your breakpoints

## Client side debugging

You will need the vscode "Debugger for chrome" extension

- start the app using `yarn start`
- launch the "debug client side in chrome" debug configuration in vscode
- set your breakpoints

Alternatively you can just debug using the chrome devtools in exactly the same way you would debug any other client side javascript.
