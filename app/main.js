const answer = require('the-answer');

// Demonstrate packaged dependency
console.log(`The answer is: ${answer}`);

const {app, BrowserWindow} = require('electron');

(async() => {
  await app.whenReady();
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });
  window.loadFile('./app/index.html');
})();