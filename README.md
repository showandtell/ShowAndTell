Show & Tell
--------------------------------------------------------------------------------

Show & Tell is a tool designed for quickly creating slide shows with voice overs.

Features
--------
* Add images from files and urls
* Record voice audio clips using the new getUserMedia API
* Export to reveal.js slideshows
* Publish/save presentations online using github pages

Developer info
--------------------------------------------------------------------------------

### TODO

* implement gh oauth
* Try to encapsulate code for each media widget. Use polymer web components?
* keep audio names and overwrite previous files when publishing.

## Github integraton

Presentations are published to a github repo called "slide-shows".
I considered creating a repository for every presentation, but decided against it
because it would cause difficulties when trying to import presentations,
and it would provide a way for users with many presentations to keep them organized.
However, this could make collaboration messy. 
The slide-shows repo is forked from a single root repo (github.com/showandtell/slide-shows).
This enables people to pull request updates to the base files.
I'm not sure if this is good idea yet. Forks have limitations,
you can only have one, and you can't make them private.

### Overview:

Show & Tell is all client side JavaScript. There is no server component or AJAX
so you can download and open it from your filesystem.

I plan to eventually make this tool easy to extend with new widgets and configure for other use cases
(e.g. creating falsh card decks or surveys)

Exporters take the deck object array and emit something.
I want them to also be modular.

## Firefox with RecordRTC

There is a transcoding bug: https://github.com/muaz-khan/WebRTC-Experiment/issues/173

## Mobile 

I want to make this work on mobile devices but there are a many problems with the audio recording feature.

[There are issues with WAV playback in Android Chrome](http://stackoverflow.com/questions/19731825/webrtc-audio-playback-in-android-chrome),
and WAV files are huge, so I right now I convert to vorbis by downloading a 18 meg
compiled to js version of ffmpeg as shown by Mauz Khan:
https://github.com/muaz-khan/WebRTC-Experiment/tree/master/ffmpeg
Conversion is slow on mobile, and it doesn't produce any output,
I think because there is a problem with the recording itself.
