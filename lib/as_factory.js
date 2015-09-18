module.exports.asyncCreate = function(arg, u, ments, callback) {

  var args = arg + u + ments;
  
  callback(null, {

    a_goodExchangeMethod: function(opts, callback) {
      callback(null, {result: opts, args: args});
    },

    a_badExchangeMethod: function(opts, callback) {
      callback(new Error('Darn'));
    }

  });
}

module.exports.syncCreate = function(arg, u, ments) {

  var args = arg + u + ments;

  return {

    s_goodExchangeMethod: function(opts, callback) {
      callback(null, {result: opts, args: args});
    },

    s_badExchangeMethod: function(opts, callback) {
      callback(new Error('Darn'));
    }

  }
}
