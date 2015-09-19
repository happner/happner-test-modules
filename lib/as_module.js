module.exports.start = function(callback) {
  callback(null);
}

module.exports.stop = function(callback) {
  callback(null);
}

module.exports.m_goodExchangeMethod = function(opts, callback) {
  callback(null, {result: opts});
}

module.exports.m_badExchangeMethod = function(opts, callback) {
  callback(new Error('Darn'));
}

