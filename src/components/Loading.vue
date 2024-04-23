<template>
  <div class="loading" v-show="show">
    <div class="loading-center">
      <div class="loading-center-absolute">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
        <div class="five"></div>
        <div class="six"></div>
        <div class="seven"></div>
        <div class="eight"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      show: true
    };
  },
  watch: {
    $route(to, from) {
      if (!from.name) this.show = false;
    }
  }
};
</script>

<style  lang="scss">
.loading {
  display: block;
  height: 100%;
  width: 100%;
  z-index: 1;
  margin-top: 0px;
  top: 0px;
}
.loading-center {
  width: 100%;
  height: 100%;
  position: relative;
}
.loading-center-absolute {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 150px;
  width: 150px;
  margin-top: -75px;
  margin-left: -75px;
  transform: scale(0.6);
  border-radius: 50% 50% 50% 50%;
  > div {
    width: 20px;
    height: 20px;
    background-color: #895ef4;
    position: absolute;
    border-radius: 50% 50% 50% 50%;
    animation: animate 0.8s infinite;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.7);
  }
  .one {
    top: 19px;
    left: 19px;
  }
  .two {
    top: 0px;
    left: 65px;
    animation-delay: 0.1s;
  }
  .three {
    top: 19px;
    left: 111px;
    animation-delay: 0.2s;
  }
  .four {
    top: 65px;
    left: 130px;
    animation-delay: 0.3s;
  }
  .five {
    top: 111px;
    left: 111px;
    animation-delay: 0.4s;
  }
  .six {
    top: 130px;
    left: 65px;
    animation-delay: 0.5s;
  }
  .seven {
    top: 111px;
    left: 19px;
    animation-delay: 0.6s;
  }
  .eight {
    top: 65px;
    left: 0px;
    animation-delay: 0.7s;
  }
}

@keyframes animate {
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
