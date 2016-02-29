var page = require('webpage').create();

page.onCallback = function(o) {
  if (o.output) {
    console.log(o.output);
    phantom.exit();
  }
  if (o.error) {
    console.error(o.error);
    phantom.exit();
  }
};
page.open('./test.html', function(status) {
  if (status != 'success')
    phantom.exit();
});
