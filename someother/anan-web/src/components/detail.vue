<template>
	<div class="main">
		<div class="header">
      <div class="head-banner">
        <tab>
          <tab-item @on-item-click="onItemClick">
            <div class="module" v-show="!moduleShow.house">
              <div class="module_bg">
                <img src="../assets/house_service.jpg" alt="">
              </div>
              <div class="module_title">
                <p>新房源服务</p>
              </div>
            </div>
            <div class="module now_page-normal" v-show="moduleShow.house">
              <div class="module_bg">
                <img src="../assets/house_service.jpg" alt="">
              </div>
              <div class="module_title">
                <p>新房源服务</p>
              </div>
            </div>
          </tab-item>
          <tab-item @on-item-click="onItemClick">
            <div class="module" v-show="!moduleShow.trusteeship">
              <div class="module_bg">
                <img src="../assets/trusteeship_service.jpg" alt="">
              </div>
              <div class="module_title">
                <p>无忧托管服务</p>
              </div>
            </div>
            <div class="module now_page-sp" v-show="moduleShow.trusteeship">
              <div class="module_bg">
                <img src="../assets/trusteeship_service.jpg" alt="">
              </div>
              <div class="module_title">
                <p>无忧托管服务</p>
              </div>
              <div class="tip">
                <p>最受房东欢迎的服务</p>
              </div>
            </div>
          </tab-item>
          <tab-item @on-item-click="onItemClick">
            <div class="module" v-show="!moduleShow.clean">
              <div class="module_bg">
                <img src="../assets/clean_service.jpg" alt="">
              </div>
              <div class="module_title">
                <p>布草保洁服务</p>
              </div>
            </div>
            <div class="module now_page-normal" v-show="moduleShow.clean">
              <div class="module_bg">
                <img src="../assets/clean_service.jpg" alt="">
              </div>
              <div class="module_title">
                <p>布草保洁服务</p>
              </div>
            </div>
          </tab-item>
        </tab>
      </div>
		</div>
		<div class="container">
      <div class="house" v-show="moduleShow.clean">
      </div>
      <div class="trusteeship" v-show="moduleShow.trusteeship">
        <div class="service">
          <div class="module left">
            <div class="rule">
              <p>按出租成交逐单计费</p>
              <p>不同出租率阶梯费率</p>
              <p>全面保障房东收益</p>
            </div>
            <div class="slogan">
              <p>您去游山玩水</p>
              <p>我们帮你赚钱</p>
            </div>
          </div>
          <div class="module right">
            <div>
              <p class="tip">每单低至</p>
              <p class="num">8% <span>起</span></p>
            </div>
            <div class="ruleTip">
              <p>以平台实际结算价为基准</p>
              <p class="underline">布草保洁按独立服务计费</p>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="module first-module">
            <p class="step-num">第一步</p>
            <p>告诉我们</p>
            <p>您的需求</p>
          </div>
          <div class="module">
            <p class="step-num">第二步</p>
            <p>接听来电</p>
            <p>沟通需求</p>
          </div>
          <div class="module">
            <p class="step-num">第三步</p>
            <p>实地看房</p>
            <p>沟通方案</p>
          </div>
          <div class="module">
            <p class="step-num">第四步</p>
            <p>签署协议</p>
            <p>开始服务</p>
          </div>
        </div>
      </div>
      <div class="clean" v-show="moduleShow.clean">
        <div class="service">
          <div class="module first-module">
            <div class="module-img">
              <img src="../assets/time.png" alt="">
            </div>
            <div class="module-text">
              <p>一小时极速响应</p>
              <span>提前一天预定即可</span><br>
              <span>节假日服务有保障</span>
            </div>
          </div>
          <div class="module">
            <div class="module-img">
              <img src="../assets/standard.png" alt="">
            </div>
            <div class="module-text">
              <p>10步31项保洁标准</p>
              <p>洁癖房客也无可挑剔</p>
              <span>完整覆盖所有功能区</span><br>
              <span>抹布分区，先后有序</span>
            </div>
          </div>
          <div class="module">
            <div class="module-img">
              <img src="../assets/guarantee.png" alt="">
            </div>
            <div class="module-text">
              <p>专业级培训保洁员</p>
              <p>健康安心有保障</p>
              <span>保洁员经认证上岗</span><br>
              <span>健康证／无犯罪记录齐全</span><br>
              <span>自带专业保洁工具</span>
            </div>
          </div>
          <div class="module">
            <div class="module-img">
              <img src="../assets/praise_service.png" alt="">
            </div>
            <div class="module-text">
              <p>五星级酒店高端布草</p>
              <p>住客安睡，助力好评</p>
              <span>60支100%全棉亲肤四件套</span><br>
              <span>螺旋平织工艺浴巾面巾</span>
            </div>
          </div>
        </div>
        <div class="price">
          <p>布草保洁服务价格</p>
          <div class="module">
            <div class="size">
              <p>普通一室</p>
              <span>&lt; 50 m<sup>2</sup></span>
            </div>
            <div class="item-price">
              <div>
                <span>59元/</span>
                <span class="ci">次</span>
                <span class="contain"> 含一套布草</span>
              </div>
              <span>原价69</span>
            </div>
          </div>
          <div class="module">
            <div class="size">
              <p>普通两室</p>
              <span>50-90 m<sup>2</sup></span>
            </div>
            <div class="item-price">
              <div>
                <span>89元/</span>
                <span class="ci">次</span>
                <span class="contain"> 含一套布草</span>
              </div>
              <span>原价129</span>
            </div>
          </div>
          <div class="module">
            <div class="size">
              <p>普通三室</p>
              <span>90-120 m<sup>2</sup></span>
            </div>
            <div class="item-price">
              <div>
                <span>129元/</span>
                <span class="ci">次</span>
                <span class="contain"> 含两套布草</span>
              </div>
              <span>原价169</span>
            </div>
          </div>
          <div class="module">
            <div class="size">
              <p>普通四室</p>
              <span>120-140 m<sup>2</sup></span>
            </div>
            <div class="item-price">
              <div>
                <span>179元/</span>
                <span class="ci">次</span>
                <span class="contain">含三套布草</span>
              </div>
              <span>原价219</span>
            </div>
          </div>
          <div class="module">
            <p class="other">更大面积请咨询客服</p>
          </div>
          <div class="service-tip">
            <p>价格按实用面积计算</p>
            <p>额外增加布草15元／套</p>
            <p>布草采用租赁形式，每租赁一套布草需支付300元押金</p>
            <p>服务满20次以上，押金可全额退还</p>
          </div>
        </div>
      </div>
		</div>
		<div class="footer">
      <div class="direct2form" @click="redirect2Other('form', 'trusteeship')" v-show="moduleShow.trusteeship">
        <span>立刻开始</span>
      </div>
      <div class="direct2form" @click="redirect2Other('form', 'clean')" v-show="moduleShow.clean">
        <span>立即预约服务</span>
      </div>
		</div>
	</div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  name: 'service-detail',
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      nowPage: '',
      moduleShow: {
        house: false,
        clean: false,
        trusteeship: false
      }
    }
  },
  created () {
    if (this.$route.query.tab) {
      this.nowPage = this.$route.query.tab
      this.moduleShow[this.nowPage] = !this.moduleShow[this.nowPage]
    } else {
      this.moduleShow.house = !this.moduleShow[this.nowPage]
    }
  },
  methods: {
    onItemClick (index) {
      for (let module in this.moduleShow) {
        this.moduleShow[module] = false
      }
      switch (index) {
        case 0:
          this.moduleShow.house = true
          break
        case 1:
          this.moduleShow.trusteeship = true
          break
        case 2:
          this.moduleShow.clean = true
          break
        default:
      }
    },
    redirect2Other (url, checked) {
      this.$router.push({path: `/${url}`, query: {'checked': checked}})
    }
  }
}
</script>

<style lang="scss" scoped>
  $bgcolor: #f9fff3;
  $fontcolor: #00aa99;

  .header {
    width: 100%;
    .head-banner {
      display: flex;
      flex-grow: 1;
      .module {
        font-size: 0;
        .module_bg {
          width: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .module_title {
          text-align: center;
          p {
            height: 1.22rem;
            line-height: 1.22rem;
            background-color: #00cc99;
            margin: 0;
            font-size: .32rem;
            color: #fff;
          }
        }
        .tip {
          text-align: center;
        }
      }
      .now_page-sp {
        .module_bg {
          position: relative;
        }
        .module_title {
          position: relative;
          z-index: 999;
          padding-top: .12rem;
          margin-top: -.4rem;
          background-color: #006655;
          p {
            background-color: #008866;
          }
        }
        .tip {
          background-color: #eebb00;
          height: .61rem;
          line-height: .61rem;
          p {
            font-size: .24rem;
            margin: 0;
            color: #fff;
          }
        }
      }
      .now_page-normal {
        .module_bg {
          position: relative;
        }
        .module_title {
          position: relative;
          z-index: 999;
          padding-top: .12rem;
          margin-top: -.25rem;
          background-color: #006655;
          p {
            height: 1.35rem;
            line-height: 1.35rem;
            background-color: #008866;
          }
        }
      }
    }
  }
  .container {
    .trusteeship {
      margin-bottom: 1.28rem;
      p {
        margin: .1rem;
      }
      .service {
        display: flex;
        margin: .73rem .42rem 0 .42rem;
        padding-bottom: .92rem;
        border-bottom: 1px solid #ececec;/*no*/
        .module {
          flex-grow: 1;
          .rule {
            font-size: .30rem;
          }
          .slogan {
            margin-top: .56rem;
            color: $fontcolor;
            font-size: .40rem;
          }
          .tip {
            font-size: .30rem;
            color: #848484;
          }
          .num {
            font-size: .76rem;
            color: $fontcolor;
            margin-top: .45rem;
            border-bottom: 1px solid $fontcolor;/*no*/
            text-align: center;
            span {
              font-size: .3rem;
              color: #848484;
            }
          }
          .ruleTip {
            font-size: .28rem;
            color: #9f9f9f;
            margin-top: .40rem;
            .underline {
              text-decoration: underline;
            }
          }
        }
        .right {
          margin-left: .48rem;
        }
      }
      .step {
        margin: .8rem .67rem 0 .67rem;
        padding-bottom: .92rem;
        display: flex;
        .module {
          font-size: .28rem;
          flex-grow: 1;
          text-align: center;
          .step-num {
            color: $fontcolor;
          }
        }
        .module:before {
          content: "-";
          color: #d7d7d7;
          float: left;
          margin-top: 34%;
        }
        .first-module:before {
          content: "-";
          color: #fff;
        }
      }
    }
    .clean {
      margin-bottom: 1.28rem;
      .service {
        .module {
          height: 3.1rem;
          display: flex;
          align-items: center;
          p {
            margin: 0;
          }
          .module-img {
            margin-left: .89rem;
            width: 1.15rem;
            img {
              width: 100%;
            }
          }
          .module-text {
            font-size: .32rem;
            margin-left: 1.02rem;
            p {
              font-size: .32rem;
              color: $fontcolor;
              margin-bottom: .24rem;
            }
            p:first-child {
              margin-bottom: 6px;
            }
            span {
              color: #999;
              line-height: .28rem;
              font-size: .28rem;
            }
          }
        }
        .first-module {
          .module-text {
            p {
              margin-bottom: .24rem !important;
            }
          }
        }
        .module:nth-child(even){
          background-color: $bgcolor;
        }
      }
      .price {
        font-size: .32rem;
        padding: 0 .8rem;
        > p {
          margin: 0;
          color: $fontcolor;
          padding: .78rem 0 .2rem 0;
          font-size: .4rem;
        }
        .module {
          display: flex;
          padding: .55rem .25rem;
          border-bottom: 1px solid #ebebeb;/*no*/
          .size {
            > p {
              color: $fontcolor;
              margin: 0;
            }
            > span{
              font-size: .28rem;
              color: #999;
            }
          }
          .item-price {
            margin-left: .82rem;
            .ci {
              font-size: .3rem;
            }
            .contain {
              font-size: .3rem;
              color: #aaa;
            }
            > span {
              font-size: .28rem;
              color: #aaa;
              text-decoration: line-through;
            }
          }
          .other {
            font-size: .3rem;
            margin: 0;
            color: #111;
          }
        }
        .service-tip {
          font-size: .26rem;
          color: #999;
          padding: .38rem .27rem 1.06rem .27rem;
          p {
            margin: 0;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    .direct2form {
      font-size: .32rem;
      height: 1.28rem;
      line-height: 1.28rem;
      text-align: center;
      color: #fff;
      background-color: #00cc99;
    }
  }
</style>
