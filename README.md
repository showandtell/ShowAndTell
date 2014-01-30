Show & Tell
--------------------------------------------------------------------------------
Multimedia Card Maker 
The primary use case is to quickly create voice over slide shows.
I also plan to reuse much of the code to make Anki flashcards (see anki.html).

Features
--------
* Add images from files and urls
* Record voice overs
* Export to reveal.js slideshows

Anki Features
-------------
* Save slippy maps to images
* Export apkg with media files

TODO:
-----
* ~~~Export to hosting service (gh-pages?)~~~
* Covert wave audio files to something that plays everywhere
* Dynamic cards
* Make a presentation about the features
* Condense bootstrap, use different modals? (maybe http://leanmodal.finelysliced.com.au/#)
* Delete cards, immediate update, selection icon.
* Make recording icon with 2s delay
* Add name
* Is recording possible in windows firefox?

Use build/module system
* ES6 Modle loader polyfill can compile on the fly, but what if one script won't load?
* So I think a concatenator with a compile step is the best option.
* If I add a build step I will also try out a css framework.

Dev info
--------------------------------------------------------------------------------

### Overview:

Show & Tell is all client side JavaScript. There is no server component or AJAX
so you can download and open it from your filesystem.

I plan to eventually make this tool easy to extend with new widgets and configure for other use cases
(e.g. creating surveys)

Exporters take the deck object array and emit something.
I want them to also be modular.
Right now I only have exporters that generate downloadable zips.
It would be convenient to have one that publishes presentations to github pages.

I plan to make it so this works well on mobile devices.
I want to get rid of the bootstrap stuff and many use the topcoat buttons.
I'm not sure what I'll do for modals.
[Audio recording doesn't quite work in Android Chrome](http://stackoverflow.com/questions/19731825/webrtc-audio-playback-in-android-chrome),
but I suspect it will soon.

### Testing:

I would appreciate help with this.

