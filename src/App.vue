<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'app',
  data() {
    return {}
  },
  created: function () {
    (function () {
      function o() {
        document.documentElement.style.fontSize = (document.documentElement.clientWidth > 414 ? 414 : document.documentElement
          .clientWidth) / 20 + "px"
      }
      var e = null;
      window.addEventListener("resize", function () {
        clearTimeout(e), e = setTimeout(o, 300)
      }, !1), o()
    })(window);
  }
}
</script>
<style lang="scss">
html,
body {
  background: #f5f5f5;
  color: #999;
  height: 100%;
}

html {
  font-size: 20px;
}

* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  color: #333;
  font-size: 0.7rem;
}

h1,
p {
  margin: 0;
  padding: 0;
}

a,
a:active {
  color: #666;
}

a {
  text-decoration: none;
}

.van-tabbar {
  padding-bottom: 0.3rem;
}

.van-tabbar-item {
  height: 3rem;
}

.van-tabbar-item {
  font-size: 0.7rem;
}

.van-tabbar-item__icon {
  position: relative;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
}
.van-collapse-item .van-cell__title {
  text-align: left;
  text-indent: 10px;
}
.van-collapse-item .van-cell__value {
  text-align: left;
}
.van-collapse-item__wrapper .van-collapse-item__content {
  padding: 0;
}
.cityItem .van-cell {
  background: #f8f7fb;
  padding-left: 40px;
}

input[type='text'],
input[type='button'],
input[type='submit'],
input[type='reset'],
select,
textarea,
button {
  -webkit-appearance: none;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 100px white inset;
}
</style>