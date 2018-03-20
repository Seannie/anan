<template>
  <div class="main">
    <div class="header">
      <div class="feedback">
        <p>非常抱歉</p>
        <p>我们尚未在此区域开展业务</p>
      </div>
    </div>
    <div class="container">
      <div class="text top">
        <p>但是您的需求对我们非常重要</p>
      </div>
      <div class="text bottom">
        <p>我们会慎重评估</p>
        <p>尽快在您所在的区域提供服务</p>
      </div>
      <div class="text bottom">
        <p>一旦我们开始提供服务</p>
        <p>将在第一时间联系您</p>
        <p>并为您奉上特别的优惠</p>
      </div>
    </div>
    <div class="footer">
      <p>感谢您选择</p>
      <div class="logo">
        <img src="../assets/normal_logo.png" alt="">
      </div>
      <div class="back" @click="direct2entry">
        <span>回到首页</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fail-page',
  data () {
    return {}
  },
  methods: {
    direct2entry () {
      this.$router.push(`/`)
    }
  }
}
</script>
<style lang="scss" scoped>
  $bgcolor: #f8fffd;
  $fontcolor: #00ca9d;
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    p {
      text-align: center;
      margin: 0;
    }
    .header {
      .feedback {
        font-size: .5rem;
        color: #ff6500;
        margin: 1.2rem 0;
      }
    }
    .container {
      .text {
        font-size: .38rem;
        margin-bottom: .66rem;
      }
    }
    .footer {
      position: relative;
      > p {
        font-size: .38rem;
      }
      .logo {
        margin: 0 auto;
        width: 2.5rem;
        margin-top: .55rem;
        font-size: 0;
        img {
          width: 100%;
        }
      }
      .back {
        position: absolute;
        left: 50%;
        font-size: 0;
        margin-top: 1.1rem;
        transform: translateX(-50%);
        span {
          font-size: .38rem;
        }
      }
    }
  }
</style>
