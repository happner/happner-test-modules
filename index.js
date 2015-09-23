module.exports = Default;

module.exports.AsFactory = require('./lib/as_factory');
module.exports.AsModule = require('./lib/as_module');
module.exports.AsClass = require('./lib/as_class');
module.exports.AsLate = require('./lib/as_late');


function Default(arg, u, ments) {
  this.args = arg + u + ments;
  this.started = false;
};


Default.prototype.start = function($happn, callback) {
  this.started = true;
  callback();
}

Default.prototype.stop = function($happn, callback) {
  this.started = false;
  callback();
}



Default.prototype.exchangeMethod = function(opts, callback) {
  opts.args = this.args;
  opts.started = this.started;
  callback(null, opts);
}


Default.prototype.mware1 = function($happn, req, res, next) {
  res.write('mware1\n');
  next();
}

Default.prototype.mware2 = function(req, res, next) {
  res.write('mware2\n');
  next();
}

Default.prototype.webMethod = function($happn, req, res, next) {
  res.end('done');
}

Default.prototype.$happner = {
  config: {
    component: {
      startMethod: 'start',
      stopMethod: 'stop',
      web: {
        routes: {
          'long-route': ['mware1', 'mware2', 'webMethod'],
          'short-route': 'webMethod',
          'widget': 'static',
          'static': 'static',
        }
      }
    }
  }
}
