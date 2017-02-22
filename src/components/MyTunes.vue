<template>
<div>
 
    <div class="row">
      <div>
    <Song :song="song" v-for="song in mySongs"></Song>
</div>
</div>
  </div>
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

</script>