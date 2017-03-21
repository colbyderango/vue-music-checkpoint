<template>
    
<div>
  <ul id="slide-out " class="side-nav fixed naver">
    <h1 class="white-text">My songs</h1>
      
      <Song class="card-panel mytunesies":song="song" v-for="song in mySongs"></Song>
    </ul>
    
        
    
  </div>

</template>



<script>
    import Song from './Song'
    import myTunesService from '../services/mytunes-service'

    export default {
        name: 'my-tunes',
        components: {
            Song
        },
        data() {
            return {
                mySongs: myTunesService.getTracks()
            }
        },
        methods: {
            removeSong(){
                myTunesService.removeTrack(this.song)
            }
        }


    }
 $(document).ready(function(){
       $('.button-collapse').sideNav({

      edge: 'right', // Choose the horizontal origin
    
    }
  );
     
  });
      

</script>
<style>
    .mytunesies{
        background-color: rgba(158, 147, 147, 0.3);
    }
    .naver{
        background-image: url("https://s-media-cache-ak0.pinimg.com/originals/ad/47/af/ad47af29ad50df1477b9413f9d521db0.jpg");
          ;
    }
</style>