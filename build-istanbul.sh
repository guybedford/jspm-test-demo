cd build-istanbul
jspm build istanbul node-build.js --config istanbul-jspm-config.json --skip-source-maps --node --format amd
jspm build istanbul browser-build.js --config istanbul-jspm-config.json --browser --minify --format amd