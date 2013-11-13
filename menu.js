var Base = require('ribcage-view')
  , Button = require('ribcage-button');

var MenuBar = Base.extend({
  tagName: 'div'
, className: 'menu-bar'

, afterRender: function () {
    var buttons = this.options.buttons || [];

    this.closeSubviews();

    for (var i in buttons) {
      this.addButton(buttons[i]);
    }
  }

, addButton: function (opts) {
    opts.tagName = 'span';
    opts.className = 'btn-bar'

    // someone may have passed in an already built button
    // if so, just append it now
    if (typeof opts.render == 'function') {
      return this.appendSubview(opts);
    }

    var self = this
      , button = new Button(opts);

    this.appendSubview(button);
  }

, clearButtons: function () {
    this.options.buttons = [];
    this.render();
  }

});

module.exports = MenuBar;
