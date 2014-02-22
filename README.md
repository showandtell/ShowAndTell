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

TODO:
-----
* ~~cant click cards on mobile~~
* bug changing slides during ogg processing
* ~~Delete cards, move cards, immediate update of deck, selection icon.~~
* ~~Pressing stop before the recording starts~~
* Single source of data on GH, put the static files in __reveal and call the repo presentations.
* The forking thing might be a bad idea... being able to pull request theme changes is cool though.
* import from gh
* Ability to name presentations
* ~~Covert wave audio files to something that plays everywhere~~
* Make a presentation about the features
* Condense bootstrap, use different modals? (maybe http://leanmodal.finelysliced.com.au/#)
* Is recording possible in windows firefox?

Dev info
--------------------------------------------------------------------------------

### Overview:

Show & Tell is all client side JavaScript. There is no server component or AJAX
so you can download and open it from your filesystem.

I plan to eventually make this tool easy to extend with new widgets and configure for other use cases
(e.g. creating falsh card decks or surveys)

Exporters take the deck object array and emit something.
I want them to also be modular.

I plan to make it so this works well on mobile devices.

[There are issues with WAV playback in Android Chrome](http://stackoverflow.com/questions/19731825/webrtc-audio-playback-in-android-chrome),
and WAV files are huge, so I right now I convert to ogg by downloading a 18 meg
compiled to js version of ffmpeg as shown by Mauz Khan:
https://github.com/muaz-khan/WebRTC-Experiment/tree/master/ffmpeg

### Testing:

I would appreciate help with this.

