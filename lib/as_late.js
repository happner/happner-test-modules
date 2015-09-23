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

AsLate.prototype.mware1 = function($happn, res, req, next) {
  res.send('mware1\n');
  next();
}

AsLate.prototype.mware2 = function(res, req, next) {
  res.send('mware2\n');
  next();
}

AsLate.prototype.webMethod = function($happn, res, req, next) {
  res.end('done');
}

AsLate.prototype.$happner = {
  config: {
    component: {
      startMethod: 'start',
      stopMethod: 'stop',
      web: {
        routes: {
          'long-route': ['mware1', 'mware2', 'webMethod'],
          'short-route': 'webMethod',
          'widget': 'static',
        }
      }
    }
  }
}
