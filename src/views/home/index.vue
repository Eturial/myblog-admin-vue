<template>
  <div class="headImgBox">
    <!--<div class="scene">-->
      <!--<div><span id="like">Eturial's Blog</span></div>-->
    <!--</div>-->
    <div class="h-information">
      <img src="@/assets/avatar03.jpg" alt="">
      <h2 class="h-description">
        <!--Write the Code. Change the World.-->
        山河远阔，人间烟火。
      </h2>
    </div>
  </div>
</template>

<script>
export default { 
  name: 'Home', 
  data() { 
    return {}
  },
  components: {},
  methods: {},
  created () {}
}
</script>

<style scoped>
  .headImgBox {
    height: 100%;
    /*position: relative;*/
    width: 100%;

    background-size: cover;
    background-position: center 100%;
    background-repeat: no-repeat;
    /*margin-bottom: 90px;*/
    background-image: url('./../../assets/background03.png');
  }

  .h-information {
    text-align: center;
    width: 70%;
    margin: auto;
    position: relative;
    top: 200px;
    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(230, 244, 249, 0.8);
    border-radius: 5px;
    z-index: 1;
    animation: b 1s ease-out;
    -webkit-animation: b 1s ease-out;
  }

  @-webkit-keyframes b {
    0% {
      -webkit-transform: translateY(90px);
      transform: translateY(90px);
    }
    80% {
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }
    90% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes b {
    0% {
      -webkit-transform: translateY(90px);
      transform: translateY(90px);
    }
    80% {
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }
    90% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .h-information img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    object-fit: cover;
  }
  .h-information img:hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
  .h-information h2 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    /*font-family: 'Sigmar One';*/
    background: linear-gradient(to right, #df2050, #48456d);
    -webkit-background-clip: text;
    color: transparent;
  }

  .headImgBox .scene {
    width: 100%;
    /*height:300px;*/
    text-align: center;
    font-size: 100px;
    font-weight: 200;
    color: #fff;
    position: absolute;
    left: 0;
    top: 160px;
    font-family: 'Sigmar One', Arial;
    text-shadow: 0 2px 2px #47456d;
  }

  .headImgBox .scene span {
    transform: matrix(1, 0, 0, 1, 0, 0);
    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);
    text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
  }
</style>

