#!/usr/bin/env node
const packager = require("electron-packager");

(async () => {
  const appPaths = await packager({
    // The default approach in Electron world seems to be to mix source files for distribution (e.g. main.js)
    // with non-distributable files (e.g. code-signing certs!) in the same directory,
    // then ignore some with the "ignore" property below.
    // This is obviously playing with fire!!
    // We instead put files intended for distribution into app/
    dir: 'app',
    out: 'build',
    name: 'MyElectronApp',
    overwrite: true
  });
  console.log(`Electron app bundles created: ${appPaths.join("\n")}`);
})();