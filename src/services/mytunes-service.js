import Vue from 'vue'

let myTunes = {}

// THESE ARE SIMPLE HELPER FUNCTIONS TO KEEP YOUR MYTUNES IN LOCAL STORAGE
// WE WILL EVENTUALLY BE REPLACING THESE GUYS BUT NOT TODAY :)
// NOTICE HOWEVER THAT THESE FUNCTIONS ARE NOT GOING TO BE EXPORTED BECAUSE 
// THE COMPONENT SHOULD NEVER BE RESPONSIBLE FOR ACTUALLY CALLING saveMytunes
// PERHAPS YOU SHOULD HAVE THE LIST SAVED WHENEVER IT MUTATES ***CHANGES***
function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))
}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {}
}

loadMytunes()

export default {
  getTracks() { return myTunes

  },
  addTrack(track) {
    track.isAdded = true
    track.thumbUp = 0
    track.thumbDown = 0
    Vue.set(myTunes, track.id, track)
    saveMytunes()
  
   },
  removeTrack(track) { 
    track.isAdded = false
    Vue.delete(myTunes, track.id)
    saveMytunes()
  },
  promoteTrack(track) { 
    track.thumbUp += 1
    saveMytunes()
  },
  demoteTrack(track) { 
    track.thumbDown += 1
    saveMytunes()
  }
}