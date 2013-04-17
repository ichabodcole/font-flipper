// Generated by CoffeeScript 1.3.3
(function() {

  window.FontFlipper = (function() {

    function FontFlipper(fonts, strip, logFonts, el) {
      this.strip = strip != null ? strip : false;
      this.logFonts = logFonts != null ? logFonts : false;
      this.el = el != null ? el : '.font-flipper';
      this.fonts = this.parseFonts(fonts);
      this.num_fonts = this.fonts.length;
      this.cur_font_index = 0;
      this.setEventHandlers();
    }

    FontFlipper.prototype.setEventHandlers = function() {
      var _self;
      _self = this;
      return $(this.el).click(function(e) {
        return _self.flip();
      });
    };

    FontFlipper.prototype.parseFonts = function(fonts) {
      if (!this.strip) {
        return fonts;
      } else {
        return this.stripGoogleString(fonts);
      }
    };

    FontFlipper.prototype.stripGoogleString = function(fontString) {
      return fontString.replace(/\+/g, ' ').replace(/((:|,)[\d]+(italic)*)|(:|,)/g, '').split('|');
    };

    FontFlipper.prototype.increment = function() {
      if (this.cur_font_index < this.num_fonts - 1) {
        return this.cur_font_index += 1;
      } else {
        return this.cur_font_index = 0;
      }
    };

    FontFlipper.prototype.flip = function() {
      this.cur_font_name = this.fonts[this.cur_font_index];
      this.increment();
      this.render();
      if (this.logFonts) {
        return console.log(this.cur_font_name);
      }
    };

    FontFlipper.prototype.render = function() {
      return $(this.el).css('font-family', this.cur_font_name);
    };

    return FontFlipper;

  })();

}).call(this);
