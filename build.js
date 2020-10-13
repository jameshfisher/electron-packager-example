#!/usr/bin/env node
const packager = require("electron-packager");

function ignore(path) {
  if (path === "") return false;
  if (path === "/package.json") return false;
  if (path.startsWith("/node_modules")) return false;
  if (path.startsWith("/app")) return false;
  return true;
}

(async () => {
  const appPaths = await packager({
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