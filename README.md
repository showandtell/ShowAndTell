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
This enables people to merge updates to the base files.
However, I plan to change this because of the limitations on github forks
(you can only have one, and you can't make them private).

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

This app is intented to work well on mobile devices, however the audio recording feature has limitations.
I've only gotten it to work on Android Chrome, and the output usually
contains audio glitches (e.g. pops and clicks).
Because WAV files are huge, I convert them to vorbis by downloading a 18 meg
compiled to js version of ffmpeg as demonstrated by Mauz Khan here:
https://github.com/muaz-khan/WebRTC-Experiment/tree/master/ffmpeg
However, the conversion process is extrememly slow on mobile devices.
