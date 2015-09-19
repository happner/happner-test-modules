module.exports.asyncCreate = function(arg, u, ments, callback) {

  var args = arg + u + ments;
  var value;
  
  callback(null, {

    start: function(callback) {
      callback(null);
    },

    stop: function(callback) {
      callback(null);
    },

    a_setValue: function(v, callback) {
      value = v;
      callback();
    },

    a_getValue: function(callback) {
      callback(null, value);
    },

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
  var value;

  return {

    start: function(callback) {
      callback(null);
    },

    stop: function(callback) {
      callback(null);
    },

    s_setValue: function(v, callback) {
      value = v;
      callback();
    },

    s_getValue: function(callback) {
      callback(null, value);
    },

    s_goodExchangeMethod: function(opts, callback) {
      callback(null, {result: opts, args: args});
    },

    s_badExchangeMethod: function(opts, callback) {
      callback(new Error('Darn'));
    }

  }
}
