# Open Sesame

A beautiful one-time setup app to autologin into BITS net.
Developed on Electron.


## For development and running

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/OSDLabs/Open-Sesame.git
# Go into the repository
cd Open-Sesame

# Install dependencies and run the app
npm install && npm start
```
Before sending in a pull request, you need to run [jshint](http://jshint.com/) to keep consistent code quality

```bash
# Run the lint script 
npm run lint
```
To test packaged releases in development mode:

```bash
# Install electron-packager
npm install -g electron-packager
# For macOS
electron-packager . --platform=darwin
# For Linux
electron-packager . --platform=linux
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).



