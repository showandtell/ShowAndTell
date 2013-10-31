Show & Tell
--------------------------------------------------------------------------------
Multimedia Card Maker 
Primary use case is to quickly create voice over slide shows and flash cards

Use slide shows to document how things work, and show how to make cards

Features
--------
* Add images from files and urls
* Record voice overs
* Export to reveal.js slideshows

Planned
-------
* Maps
* Export to anki decks

Dev info
--------------------------------------------------------------------------------

### Overview:

Show & Tell is all client side JavaScript. There is no server component or AJAX
so you can download and open it from your filesystem.

I plan to make this tool easy to extend with new widgets and configure for other use cases (e.g. creating surveys)

Exporters take the deck object array and emit something.
I want them to also be modular.

I plan to make it so this works well on mobile devices.
I want to get rid of the bootstrap stuff and many use the topcoat buttons.
I'm not sure what I'll do for modals.

### Testing:

I would appreciate help with this
