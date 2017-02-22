<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->

    <div class="row center">
     
        <div class="col s6">
          <h1>Search</h1>
          <itunes class="itunes card"></itunes>

        </div>
        <div class="col s6">
          <h1>My Jams</h1>

          <myTunes class="my-tunes card"></myTunes>
        </div>

     
    </div>

  </div>
  





</template>

<script>
  import Itunes from './Itunes'
  import MyTunes from './MyTunes'
  import mytunesService from '../services/mytunes-service'


  export default {
    name: 'home',
    components: { Itunes, MyTunes },
    data() {
      return {

      }
    }
  }

</script>


<style>
  /**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/
  
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: rgba(104, 2, 207, 0.3);
  }
  
  .itunes {
    display: inline-block;
    background: rgba(158, 147, 147, 0.3);
    min-height: 500px;
    min-width: 45%;
  }


  
</style>