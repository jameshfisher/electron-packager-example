#!/usr/bin/env node
const packager = require("electron-packager");
(async () => {
  const appPaths = await packager({
    dir: '.',
    name: 'MyElectronApp',
    overwrite: true,
    prune: true,
    afterExtract: [(buildPath, electronVersion, platform, arch, callback) => {
      console.log("afterExtract", buildPath, electronVersion, platform, arch, callback);
    }],
    afterPrune: [(buildPath, electronVersion, platform, arch, callback) => {
      console.log("afterPrune", buildPath, electronVersion, platform, arch, callback);
    }],
    afterCopy: [(buildPath, electronVersion, platform, arch, callback) => {
      console.log("afterCopy", buildPath, electronVersion, platform, arch, callback);
    }]
  });
  console.log(`Electron app bundles created: ${appPaths.join("\n")}`);
})();