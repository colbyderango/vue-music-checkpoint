<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
        <a href="#" data-activates="slide-out" class="button-collapse mytunesies"><i class="material-icons">menu</i></a>


    <div class="row tunesies">

      <div class="col s12">
        <h1 class="white-text">Search</h1>
        <itunes class="itunes card-panel"></itunes>

      </div>


      <myTunes></myTunes>



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
  $(document).ready(function () {
    $('.button-collapse').sideNav();
  });

</script>


<style>
  /**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/
  body{
    background-image: url("https://s-media-cache-ak0.pinimg.com/originals/ad/47/af/ad47af29ad50df1477b9413f9d521db0.jpg");
    
  }
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: rgba(104, 2, 207, 0.3);
  }
  
  .itunes {

    background: rgba(158, 147, 147, 0.3);
    min-height: 500px;
    min-width: 45%;
  }
  .tunesies{
    float: right;
  }
  .mytunesies{
    background-color: rgba(158, 147, 147, 0.3);
  }
  
 
</style>