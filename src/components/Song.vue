<template>
    <div class="card">

        <h1>{{song.title}}</h1>
        <img :src="song.albumArt">
        <h2> {{song.artist}}</h2>
        <h4> {{song.collection}}</h4>
        <p> {{song.price}}</p>
        <audio ref='player' controls preload="none">
            <source :src="song.preview" type="audio/mp4">
        </audio>
        <button  class="btn-floating"v-if="!song.isAdded" @click="addSong"><i class="small material-icons">add</i></button>
        <button class="btn-floating" v-if="song.isAdded" @click="removeTrack"><i class="small material-icons">delete</i></button>
        <button @click="thumbUp"><i class="small material-icons">thumb_up</i>{{song.thumbUp}}</button>
        <button @click="thumbDown"><i class=" small material-icons">thumb_down</i>{{song.thumbDown}}</button>

    </div>

    </div>
</template>



<script>
    import mytunesService from '../services/mytunes-service'
    export default {
        name: 'song',
        props: ['song'],
        mounted() {
            this.$watch('song', () => {
                this.$refs.player.load()
            })
        },
        methods: {
            addSong() {
                console.log(this.song)
                mytunesService.addTrack(this.song)
            },
            removeTrack() {
                mytunesService.removeTrack(this.song)
            },
            thumbUp() {
                mytunesService.promoteTrack(this.song)
            },
            thumbDown() {
                mytunesService.demoteTrack(this.song)
            }


        },
        watch: {
            song() {
                return this.song
            }
        }
    }

</script>