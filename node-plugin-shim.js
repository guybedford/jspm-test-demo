define({
  fetch: function(load, fetch) {
    if (load.address.substr(0, 5) == '@node')
      return '';
    return fetch.call(this, load);
  },
  instantiate: function(load, instantiate) {
    if (load.address.substr(0, 5) == '@node')
      return this.get(load.address);
    return instantiate(load);
  }
});