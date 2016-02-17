SystemJS.config({
  baseURL: ".",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "jspm-test-runner/": "test-runner/"
  }
});
