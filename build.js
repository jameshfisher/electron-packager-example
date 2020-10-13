#!/usr/bin/env node
const packager = require("electron-packager");

function ignore(path) {
  if (path === "") return false;
  if (path.startsWith("/node_modules")) return false;
  if (path.startsWith("/app")) return false;
  return true;
}

(async () => {
  const appPaths = await packager({
    // The default approach in Electron world seems to be to mix source files for distribution (e.g. main.js)
    // with non-distributable files (e.g. super_secret.cert) in the same directory,
    // then ignore some with the "ignore" property below.
    // This is obviously playing with fire,
    // and the ideal would be to put our distributable app in a separate dir like 'app/'.
    // But then electron-packager doesn't respect our package.json and bundle our node_modules.
    // Instead, we use `ignore` with a function that turns it into a whitelist.
    dir: '.',
    ignore: path => {
      const res = ignore(path);
      console.log(res ? "Ignoring" : "Not ignoring", path);
      return res;
    },
    out: 'build',
    name: 'MyElectronApp',
    overwrite: true
  });
  console.log(`Electron app bundles created: ${appPaths.join("\n")}`);
})();