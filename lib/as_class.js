module.exports = AsClass;

function AsClass(constr,uctor, args) {
  this.args = constr + uctor + args;
};

AsClass.prototype.c_goodExchangeMethod = function(opts, callback) {
  callback(null, {result: opts, args: this.args});
}

AsClass.prototype.c_badExchangeMethod = function(opts, callback) {
  callback(new Error('Darn'));
}
