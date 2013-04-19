class window.FontFlipper
  constructor: (fonts, @stripGoogle=false, @logFonts=false, @el='.font-flipper')->
    @fonts = @parseFonts(fonts)
    @num_fonts = @fonts.length
    @cur_font_index = 0
    @setEventHandlers()

  setEventHandlers: ->
    _self = @;
    $(@el).click (e)->
      _self.flip();

  parseFonts: (fonts)->
    unless @stripGoogle then fonts else @stripGoogleString(fonts)

  stripGoogleString: (fontString)->
    fontString.replace(/\+/g, ' ').replace(/((:|,)[\d]+(italic)*)|(:|,)/g, '').split('|')

  increment: ->
    if @cur_font_index < @num_fonts-1
      @cur_font_index += 1
    else
      @cur_font_index = 0

  flip: ->
    @cur_font_name = @fonts[@cur_font_index]
    @increment()
    @render()
    if @logFonts then console.log @cur_font_name

  render: ->
    $(@el).css('font-family', @cur_font_name)
