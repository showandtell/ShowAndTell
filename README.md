Show & Tell
--------------------------------------------------------------------------------
Multimedia Card Maker 
Primary use case is to quickly create voice over slide shows and flash cards

Use slide shows to document how things work, and show how to make cards

Features
--------
* Add images
* Record voice overs
* Export to reveal.js slideshows

Planned
-------
* Maps
* Export to anki decks

Adding images by links - I wanted to do this but it requires an image proxy
For now I'm only targeting Chrome.

Dev info
--------------------------------------------------------------------------------

### Overview:

Show & Tell is all client side JavaScript. There is no server component or AJAX
so you can download and open it from your filesystem.

Its easy to extend S&T with new media widgets, just make a handlebars template,
create event handlers that modify the current card object when it is interacted with,
and declare it in the cardConfiguration.js

Exporters take the deck object array and emit something. They are also easy to add.

### Testing:

I would appreciate help with this
