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
* ~~bug changing slides during ogg processing~~
* ~~Delete cards, move cards, immediate update of deck, selection icon.~~
* ~~Pressing stop before the recording starts~~
* ~~Ability name presentation when exporting to gh~~
* import from gh
* implement gh oauth
* ~~Covert wave audio files to something that plays everywhere~~
* Make a presentation about the features
* Try to encapsulate code for each media widget. Use polymer web components??
* Is recording possible in windows firefox?
* keep audio names and overwrite previous files when publishing.

Presentations are published to a github repo called "slide-shows".
I'm hesitant to use a single repo:

* it could make collaboration on individual presentations harder.
* but it would enable pull requesting theme changes.

Dev info
--------------------------------------------------------------------------------

### Overview:

Show & Tell is all client side JavaScript. There is no server component or AJAX
so you can download and open it from your filesystem.

I plan to eventually make this tool easy to extend with new widgets and configure for other use cases
(e.g. creating falsh card decks or surveys)

Exporters take the deck object array and emit something.
I want them to also be modular.

## Mobile 

I want to make this work on mobile devices but there are a many problems with the audio recording feature.

[There are issues with WAV playback in Android Chrome](http://stackoverflow.com/questions/19731825/webrtc-audio-playback-in-android-chrome),
and WAV files are huge, so I right now I convert to vorbis by downloading a 18 meg
compiled to js version of ffmpeg as shown by Mauz Khan:
https://github.com/muaz-khan/WebRTC-Experiment/tree/master/ffmpeg
Conversion is slow on mobile, and it doesn't produce any output,
I think because there is a problem with the recording itself.
