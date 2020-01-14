---
title: "MIDI Particles"
blurb: "A web app built on Vue that takes MIDI input via the web MIDI API to create particle visualizations."
image: ../images/midi-particles.png
maintech: Vue,Vuex,Web MIDI API
tags: Vue,Web MIDI API,SCSS,Vuex,Canvas2D,localStorage,OOP
position: 6
---
[An extremely customizable application](https://midiparticles.netlify.com/) that takes MIDI input and creates particle visualizations. Because it uses the experimental Web MIDI API, it is only supported in Chrome at the moment. The project is open source and maintained [on GitHub](https://github.com/sparlos/MIDI-Particles).

The app includes an onscreen keyboard to mimic the user’s real life MIDI input device. The speed of the particles is determined by the input velocity that the MIDI device registers (between 0-127).

Its many customizable features are all  listed on the GitHub repo. All customizable settings are saved in localStorage with the aid of lowDB and, because of the large amount of settings, the project also uses Vuex for state management.

For the actual animation, the app uses requestAnimationFrame paired with Canvas2D rendering. All of the JavaScript and Vue code was written completely from scratch. The particles and particle systems were also created from scratch using an Object Oriented Approach which utilizes modern ES6 classes.
