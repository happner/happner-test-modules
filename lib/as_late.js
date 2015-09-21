module.exports = AsLate;

// Tests use this module to inssert into an already running mesh node

function AsLate(arg, u, ments) {
  this.args = arg + u + ments;
  this.started = false;
};

AsLate.prototype.start = function($happn, callback) {
  this.started = true;
  callback();
}

AsLate.prototype.stop = function($happn, callback) {
  this.started = false;
  callback();
}

AsLate.prototype.exchangeMethod = function(opts, callback) {
  opts.args = this.args;
  opts.started = this.started;
  callback(null, opts);
}

AsLate.prototype.$happner = {
  config: {
    component: {
      startMethod: 'start',
      stopMethod: 'stop',
    }
  }
}
