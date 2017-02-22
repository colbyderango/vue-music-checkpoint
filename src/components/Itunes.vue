<template>
    <div class="itunes">
        
        <form @submit.prevent="search">
            <input v-model="query" placeholder="Artist">
            <button id="get-music-button"type="submit">Search Artist</button>

        </form>
        <ul>
            <Song :song="song" v-for="song in songs" @click="getMusicByArtist(this.query)">
            </Song>
        </ul>
    </div>
    
</template>




<script>
   
    import itunesService from '../services/itunes-service'  
    import Song from './Song'
    
    
    export default {
        name: 'search',
        components: {
            Song
        },
        data() {
            return {
                query: '',
                songs: [],
                song: {}
            }
        },
        methods: {
            search() {
                itunesService.getMusicByArtist(this.query).then(res => {
                    res.json().then(music => {
                        this.songs = music.results.map(function (song) {
                            return {
                                title: song.trackName,
                                albumArt: song.artworkUrl60,
                                artist: song.artistName,
                                collection: song.collectionName,
                                price: song.collectionPrice,
                                preview: song.previewUrl,
                                id: song.trackId
                            };
                        })
                    })
                })
            }
        },
        watch: {
            preview() {
                return song
            }
        }
    }

</script>