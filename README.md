##FontFlipper
  A tiny JavaScript library that helps you quickly preview different fonts on an html page simply by clicking text.

###Usage:
  1. Include the font_flipper.js file in your html page.
  2. Within a page ready function add the following
      var fonts = ["FontName1", "FontName2", "FontName2"];
      var fp = new FontFlipper(fonts)
  3. Now all any text on your page wrapped in a class of ".font-flipper" will cycle through your list of fonts when you click it.

  #### Extras
    FontFlipper can take a few additional arugments in its constructor to make your life easier.
    FontFlipper(fonts, stripGoogle=false, log=false, el=".font-flipper")<br>
      * fonts: an array of string font names associated with a loaded or available font.
      * stripGoogle: when set to true allows you to pass a string into the fonts arugment in Googles webfont include * format. Defaults to false.
      * log: when set to true will log the name of the font in the browser console when it's flipped to. Defaults to false.
      * el: the class or id that FontFlipper should hook into. Defaults to ".font-flipper"


###Requirements:
  jQuery

###Examples:
Using the stripGoogle flag:
* An include from Google Web fonts.
  <link href='http://fonts.googleapis.com/css?family=Wire+One|Josefin+Sans|Rationale|Tulpen+One|Dorsa|Open+Sans+Condensed:300|Raleway' rel='stylesheet' type='text/css'>
  In your FontFlipper set up
  var fonts = "Wire+One|Josefin+Sans|Rationale|Tulpen+One|Dorsa|Open+Sans+Condensed:300|Raleway";
  var fp = FontFlipper(fonts, true)