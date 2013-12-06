var jQuery = require('jquery');




jQuery.fn.blurEl = function( callback ) {
  var els = this.get();

  $('body').on( 'click', function( e ) {
    var clickedEl = e.target;
    var exuc = false;
    $.each( els, function( index, el ) {
      var $el = $( el );
      if ( !$.contains( el, clickedEl ) && !$el.is( clickedEl ) ) {
        exuc = true;
        return false;
      }
    })
    if ( exuc === true ) {
      callback();
    }
  })
}

// example:
//
// $('.list3, .list4').blurEl( function() {
//     alert('triggered');
// })


jQuery.fn.serializeObject = function() {
  var a, o;
  o = {};
  a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      return o[this.name].push(this.value || "");
    } else {
      return o[this.name] = this.value || "";
    }
  });
  return o;
};

// example
//
// $('form').serializeObject()


module.exports = jQuery;
