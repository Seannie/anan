<template>
  <div class="main">
    <div class="header">
      <div class="success">
        <img src="../assets/success.png" alt="">
      </div>
      <div class="tip">
        <p>我们已经收到您的服务需求</p>
      </div>
    </div>
    <div class="container">
      <div class="text top">
        <p>我们会根据您的需求</p>
        <p>制定详尽的报价方案</p>
      </div>
      <div class="text bottom">
        <p>工作人员将在24小时内</p>
        <p>和你取得联系</p>
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
  name: 'success-page',
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
      .success {
        width: 26.6667%;
        font-size: 0;
        margin: .9rem auto;
        img {
          width: 100%;
        }
      }
      .tip {
        font-size: .5rem;
        margin-bottom: .9rem;
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
