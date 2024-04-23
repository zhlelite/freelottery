<template>
  <div class="lottery">
    <div class="jtitle">充值幸运抽奖</div>
    <div class="username">{{ username.name }}</div>
    <div class="luckystaff">
      <span v-for="x in luckystaff" :key="x.id">{{ x.name }}</span>
    </div>
    <van-button class="cj" type="primary" @click="gonow" v-if="stop == false"
      >开始</van-button
    >
    <van-button class="cj" type="primary" @click="stopnow" v-if="stop == true"
      >停止</van-button
    >
    <div class="copy">某某公司</div>
  </div>
</template>
<script>
import api from "@/api/index";
export default {
  name: "lottery",
  data() {
    return {
      stop: false,
      luckystaff: [],
      username: {
        name: "敬请期待"
      },
      list: [],
      count: 1
    };
  },
  components: {},
  created() {
    let that = this;
    document.onkeypress = function (e) {
      var keycode = document.all ? event.keyCode : e.which;
      if (keycode == 13 && that.stop == false) {
        that.gonow();
        return false;
      }
      if (keycode == 13 && that.stop == true) {
        that.stopnow();
        return false;
      }
    };
    this.loadList();
  },
  computed: {},
  mounted() {
  },
  watch: {},
  methods: {
    //仅仅是为了名单滚动的效果
    loadList() {
      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });
      // this.list = [];
      this.list = [
        { "name": "周杰伦" },
        { "name": "泰勒·斯威夫特" },
        { "name": "成龙" },
        { "name": "约翰尼·德普" },
        { "name": "艾玛·沃森" },
        { "name": "布拉德·皮特" },
        { "name": "莱昂纳多·迪卡普里奥" },
        { "name": "安吉丽娜·朱莉" },
        { "name": "克里斯·海姆斯沃斯" },
        { "name": "詹妮弗·安妮斯顿" },
        { "name": "汤姆·克鲁斯" },
        { "name": "罗伯特·帕丁森" },
        { "name": "瑞恩·高斯林" },
        { "name": "范冰冰" },
        { "name": "汤姆·哈迪" },
        { "name": "李冰冰" },
        { "name": "黄晓明" },
        { "name": "阿黛尔" },
        { "name": "贾斯汀·比伯" },
        { "name": "丹尼尔·雷德克里夫" },
        { "name": "艾玛·斯通" },
        { "name": "马特·达蒙" },
        { "name": "威尔·史密斯" },
        { "name": "章子怡" },
        { "name": "邓紫棋" },
        { "name": "沙奎尔·奥尼尔" },
        { "name": "瑞秋·麦克亚当斯" },
        { "name": "杰森·斯坦森" },
        { "name": "迪丽热巴" },
        { "name": "詹妮弗·洛佩兹" },
        { "name": "卓别林" },
        { "name": "玛丽莲·梦露" },
        { "name": "吴彦祖" },
        { "name": "舒淇" },
        { "name": "尼古拉斯·凯奇" },
        { "name": "达斯汀·霍夫曼" },
        { "name": "休·杰克曼" },
        { "name": "凯特·布兰切特" },
        { "name": "丽贝卡·弗格森" },
        { "name": "马特·达蒙" },
        { "name": "杰森·莫玛" },
        { "name": "詹妮弗·劳伦斯" },
        { "name": "本·阿弗莱克" },
        { "name": "亚当·桑德勒" },
        { "name": "莎拉·杰西卡·帕克" },
        { "name": "瑞恩·雷诺兹" },
        { "name": "李易峰" },
        { "name": "克里斯·埃文斯" },
        { "name": "朴信惠" },
        { "name": "全智贤" }
      ]
      this.$toast.clear();
      // let params = {
      //   activity_title: "三周年活动"
      // };
      // api.listuser(params).then(res => {
      //   this.loading = false;
      //   this.list = res.data.data.data;
      //   this.$toast.clear();
      // });
    },
    randomName(user) {
      let list = this.list;
      this.username = list[Math.floor(Math.random() * list.length)];
    },
    gonow() {
      if (this.count == 11) {
        alert("已经抽了10个了");
        return;
      } else {
        this._inter = setInterval(() => {
          this.randomName();
        }, 100);
        this.stop = true;
      }
      this.count++;
    },
    //真正的中奖者由后端random产生后返回前端显示
    stopnow() {
      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });
      this.username.name = "---";
      this.stop = false;
      //模拟中奖
      this.luckystaff.push({
        name: '周杰伦',
        id: 1
      });
      this.$toast.clear();
      // let params = {
      //   activity_title: "三周年活动"
      // };
      // api.luckdraw(params).then(res => {
      //   this.loading = false;
      //   this.$toast.clear();
      //   if (res.data.code == 0) {
      //     this.username = res.data.data.win_user[0];
      //     this.luckystaff.push({
      //       name: this.username.name,
      //       id: this.username.id
      //     });
      //   } else {
      //     this.$toast.fail(res.data.message);
      //   }
      // });
      clearInterval(this._inter);
    },
  }
};
</script>

<style scoped lang="scss">
.lottery {
  height: 100%;
  position: relative;
  background: url(../assets/bbg.png) no-repeat top center;
  background-size: 100% 100%;
  .logo {
    position: absolute;
    left: 100px;
    top: 0;
  }
  .title {
    display: inline-block;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .jtitle {
    padding: 10rem 0 5rem 0;
    font-weight: bold;
    font-size: 6rem;
    color: #ffefc0;
    text-shadow: 1px 1px 0 #4e0101;
  }
  .username {
    color: #753a10;
    font-weight: bold;
    font-size: 50px;
    height: 4rem;
    padding: 1% 0;
    margin: 8% 10rem 3% 10rem;
    background-image: linear-gradient(
      90deg,
      rgba(255, 49, 18, 0) 0%,
      #ffeec5 34%,
      #ffeec5 66%,
      rgba(254, 37, 4, 0) 100%
    );
  }
  .luckystaff {
    height: 1.5rem;
    width: 100%;
    font-size: 0.8rem;
    margin-bottom: 5%;
    position: relative;
    vertical-align: top;
    z-index: 55;
    span {
      display: inline-block;
      color: #ffeec5;
      margin: 0;
      width: 20%;
      font-size: 18px;
    }
  }
  .cj {
    background: url(../assets/cjbutton.png) no-repeat top center;
    background-size: 100% 100%;
    border: none;
    width: 300px;
    height: 60px;
    color: #753a10;
    font-weight: bold;
    position: relative;
    z-index: 33;
    font-size: 1.6rem;
  }
  .copy {
    position: absolute;
    z-index: 4;
    text-align: center;
    left: 0;
    bottom: 1rem;
    width: 100%;
    color: #fff;
  }
  .footer {
    position: absolute;
    z-index: 3;
    left: 0;
    text-align: right;
    bottom: 0;
    width: 100%;
    img {
      margin-right: 20px;
    }
  }
}
@media screen and (max-width: 1920px) {
  .lottery {
    .title {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    .jtitle {
      padding: 10rem 0 5rem 0;
    }
    .username {
      padding: 2rem 10rem 4rem 10rem;
    }
  }
}
</style>
