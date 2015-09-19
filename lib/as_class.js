module.exports = AsClass;

function AsClass(constr,uctor, args) {
  this.args = constr + uctor + args;
  this.value = {};
};

AsClass.prototype.start = function($happn, callback) {
  callback(null);
}

AsClass.prototype.stop = function($happn, callback) {
  callback(null);
}

AsClass.prototype.c_setValue = function(value, callback) {
  this.value = value;
  callback();
}

AsClass.prototype.c_getValue = function(callback) {
  callback(null, this.value);
}

AsClass.prototype.c_goodExchangeMethod = function(opts, callback) {
  callback(null, {result: opts, args: this.args});
}

AsClass.prototype.c_badExchangeMethod = function(opts, callback) {
  callback(new Error('Darn'));
}
