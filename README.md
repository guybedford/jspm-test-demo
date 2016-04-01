Usage
--

```
npm install jspm@beta
npm install -g phantomjs
jspm install
git checkout jspm_packages
```

> The `git checkout jspm_packages` step is pending PR https://github.com/SitePen/remap-istanbul/pull/44.

Then:

```
./test-jspm.sh
```

Or:

```
./test-phantom.sh
```

Or open `test.html` to see the tests directly in the browser with coverage report in the JS console.