<template>
  <div class="main">
    <swiper :options="contentSwiper" ref="contentSwiper">
      <swiper-slide>
        <div class="banner" id="banner">
          <swiper :options="bannerSwiper" ref="bannerSwiper">
            <swiper-slide>
              <img src="../assets/bg_1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/bg_2.jpg" alt="">
            </swiper-slide>
          </swiper>
          <div class="logo">
            <img src="../assets/main_logo.png" alt="">
          </div>
          <div class="direct2form" @click="direct2form">
            <span>咨询托管</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="intro" id="intro">
          <div class="intro-pannel fdmoney">
            <p>比自己盈利更重要的是 <span class="tip">房东赚钱</span></p>
            <div class="intro-text">
              <div>
                <p><span>*</span> 区域特征化运营方案</p>
                <p><span>*</span> 线上线下同步导航</p>
                <p><span>*</span> 夜间收益提高20%</p>
              </div>
              <div class="icon right"><img src="../assets/fdmoney.png" alt=""></div>
            </div>
          </div>
          <div class="intro-pannel fdhome">
            <p>比自己家更爱惜的是 <span class="tip">房东的家</span></p>
            <div class="intro-text">
              <div class="icon left"><img src="../assets/fdhome.png" alt=""></div>
              <div>
                <p><span>*</span> 专业保洁与布草换洗</p>
                <p><span>*</span> 实住人数与身份验证</p>
                <p><span>*</span> 房内物品缺损检查</p>
              </div>
            </div>
          </div>
          <div class="intro-pannel praise">
            <p>比市场好评更重要的是 <span class="tip">住客好评</span></p>
            <div class="intro-text">
              <div>
                <p><span>*</span> 24小时住客沟通响应</p>
                <p><span>*</span> 热情迎接，温暖送别</p>
                <p><span>*</span> 突发状况闪电响应</p>
              </div>
              <div class="icon right"><img src="../assets/praise.png" alt=""></div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="service" id="service">
          <div class="module first">
            <div class="module-title">
              <p>新房源服务</p>
              <span class="more">了解更多 ></span>
            </div>
            <div class="module-content">
              <div class="item">
                <div>
                  <img src="../assets/resources_1.png" alt="">
                </div>
                <span>装饰布置</span>
              </div>
              <div class="item">
                <div>
                  <img src="../assets/resources_2.png" alt="">
                </div>
                <span>专业摄影</span>
              </div>
              <div class="item">
                <div>
                  <img src="../assets/resources_3.png" alt="">
                </div>
                <span>平台发布</span>
              </div>
            </div>
          </div>
          <div class="module">
            <div class="module-title">
              <p>无忧托管服务</p>
              <span class="more"  @click="trusteeshipMore">了解更多 ></span>
            </div>
            <div>
              <div class="module-content">
                <div class="item">
                  <div>
                    <img src="../assets/trusteeship_1.png" alt="">
                  </div>
                  <span>租价监控</span>
                </div>
                <div class="item">
                  <div>
                    <img src="../assets/trusteeship_2.png" alt="">
                  </div>
                  <span>排名维护</span>
                </div>
                <div class="item">
                  <div>
                    <img src="../assets/trusteeship_3.png" alt="">
                  </div>
                  <span>房态管理</span>
                </div>
              </div>
              <div class="module-content">
                <div class="item">
                  <div>
                    <img src="../assets/trusteeship_4.png" alt="">
                  </div>
                  <span>宾客咨询</span>
                </div>
                <div class="item">
                  <div>
                    <img src="../assets/trusteeship_5.png" alt="">
                  </div>
                  <span>管家服务</span>
                </div>
                <div class="item">
                  <div>
                    <img src="../assets/trusteeship_6.png" alt="">
                  </div>
                  <span>入住查验</span>
                </div>
              </div>
            </div>
          </div>
          <div class="module last">
            <div class="module-title">
              <p>布草保洁服务</p>
              <span class="more" @click="cleanMore">了解更多 ></span>
            </div>
            <div class="module-content">
              <div class="item">
                <div>
                  <img src="../assets/clean_1.png" alt="">
                </div>
                <span>保洁清扫</span>
              </div>
              <div class="item">
                <div>
                  <img src="../assets/clean_2.png" alt="">
                </div>
                <span>布草换洗</span>
              </div>
              <div class="item">
                <div>
                  <img src="../assets/clean_3.png" alt="">
                </div>
                <span>物品检查</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="landlord" id="landlord">
          <p>合作房东对我们的评价</p>
          <div class="landlord-pannel">
            <swiper :options="landlordSwiper">
              <swiper-slide>
                <div class="module">
                  <div class="landlord-fd">
                    <!-- flex布局 -->
                    <div class="fdhouse">
                      <img src="../assets/home_1.jpg" alt="">
                    </div>
                    <div class="fdphoto">
                      <div class="photo">
                        <img src="../assets/head_1.png" alt="">
                      </div>
                      <img class="zan" src="../assets/zan.png" alt="">
                    </div>
                    <div class="fdinfo">
                      <p class="fdname">Alex <span>爱彼迎 超赞房东</span></p>
                      <p class="fdnum">安安管家受托为Alex管理3套房源</p>
                    </div>
                  </div>
                  <div class="landlord-text">
                    <p>“之前我一个人管理5套房，让我完全失去了自由时间，每天都陷在各种琐事中，看似出租率不错，但算上我的时间和精力成本，还是亏损的。自从找到安宿来代理运营我的房子，除了稳定的收益，我还获得大量自由的时间，可以陪家人和女友，看书旅游，从客人的评价看，比我自己管理时的好评率还要高，真是躺着也能赚钱呀。”</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="module">
                  <div class="landlord-fd">
                    <!-- flex布局 -->
                    <div class="fdhouse">
                      <img src="../assets/home_2.jpg" alt="">
                    </div>
                    <div class="fdphoto">
                      <div class="photo">
                        <img src="../assets/head_2.png" alt="">
                      </div>
                      <img class="zan" src="../assets/zan.png" alt="">
                    </div>
                    <div class="fdinfo">
                      <p class="fdname">Arby</p>
                      <p class="fdnum">使用安宿管家布草保洁服务</p>
                    </div>
                  </div>
                  <div class="landlord-text">
                    <p>“之前找的阿姨，不稳定，换了好几个，打扫质量参差不齐，为此还被客人差评过。也约过其他平台的保洁服务，有时提前很多天都约不上。后来，朋友向我推荐了安宿，抱着试试的态度预约了第一次服务，结果一看就是规范培训过的，尤其是换床品和清洁厕所，相当专业。现在一直在用安宿，节假日提前一天也能约上，客人也没再投诉过保洁问题，非常推荐。”</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="module">
                  <div class="landlord-fd">
                    <!-- flex布局 -->
                    <div class="fdhouse">
                      <img src="../assets/home_3.jpg" alt="">
                    </div>
                    <div class="fdphoto">
                      <div class="photo">
                        <img src="../assets/head_3.png" alt="">
                      </div>
                      <img class="zan" src="../assets/zan.png" alt="">
                    </div>
                    <div class="fdinfo">
                      <p class="fdname">Alex</p>
                      <p class="fdnum">使用安宿管家新房源服务</p>
                    </div>
                  </div>
                  <div class="landlord-text">
                    <p>“家里有套房租客到期离开了，朋友推荐尝试做短租，并介绍了安宿管家的新房源服务，从第一次实地看房到房屋整理软装，拍照上线只用了一周时间，看到上线后的房子照片，都怀疑是不是自己家了。客服经理还给了详细的定价建议和维护指南，晚上照着做，第二天就有了订单，安宿的服务令人印象深刻，短租真是一件非常有趣的事情。”</p>
                  </div>
                </div>
              </swiper-slide>
              <!-- <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div> -->
            </swiper>
          </div>
         <!--  <div>
            <div>
              <img src="../head_2.png" alt="">
              <div><p>Alex 爱彼迎 超赞房东</p><p>安安管家受托为Alex管理3套房源</p></div>
              <div><img src="" alt=""></div>
            </div>
            <div>
              <p>"使用安安管家的服务，再也不用自己扫马桶了。让我每天多出更多时间思考人生，可以背着包出远门旅行了。完了回来一看，嘿，比我自己运营的出租率还高，全五星好评，太他妈牛逼了。"</p>
            </div>
          </div> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="platform" id="platform">
          <div class="partner">
            <p>我们的平台合作伙伴</p>
            <div class="platform-pannel">
              <div class="module-content">
                <div class="item">
                  <div>
                    <img src="../assets/partner_1.png" alt="">
                  </div>
                  <span>爱彼迎</span>
                </div>
                <div class="item">
                  <div>
                    <img src="../assets/partner_2.png" alt="">
                  </div>
                  <span>途家</span>
                </div>
                <div class="item">
                  <div>
                    <img src="../assets/partner_3.png" alt="">
                  </div>
                  <span>缤客</span>
                </div>
              </div>
              <div class="module-content">
                <div class="item">
                  <div>
                    <img src="../assets/partner_4.png" alt="">
                  </div>
                  <span>榛果民宿</span>
                </div>
                <div class="item">
                  <div>
                    <img src="../assets/partner_5.png" alt="">
                  </div>
                  <span>小猪短租</span>
                </div>
                <div class="item">
                  <div>
                    <img src="../assets/partner_6.png" alt="">
                  </div>
                  <span>蚂蚁短租</span>
                </div>
              </div>
            </div>

          </div>
          <div class="team">
            <p>我们的团队</p>
            <div></div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="mainpage" id="mainpage">
          <div class="logo">
            <img src="../assets/normal_logo.png" alt="">
          </div>
          <div class="direct2form" @click="direct2form">
            <span>咨询托管</span>
          </div>
          <div class="qrcode">
            <span>扫码加微信公众号</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
export default {
  name: 'entry-page',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      contentSwiper: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        height: window.innerHeight
      },
      bannerSwiper: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        effect: 'fade',
        slidesPerView: 1,
        height: window.innerHeight
      },
      landlordSwiper: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    cleanMore () {
      this.$router.push({path: `/detail`, query: {tab: 'clean'}})
    },
    trusteeshipMore () {
      this.$router.push({path: `/detail`, query: {tab: 'trusteeship'}})
    },
    direct2form () {
      this.$router.push(`/form`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $bgcolor: #f8fffd;
  $fontcolor: #00aa99;

  .banner {
    position: relative;
    .logo {
      position: absolute;
      z-index: 999;
      left: 50%;
      transform: translateX(-50%);
      width: 49.3333%;
      top: 1.47rem;
      img {
        width: 100%;
      }
    }
    .direct2form {
      z-index: 999;
      display: flex;
      position: absolute;
      bottom: 2.18rem;
      width: 64.4%;
      left: 50%;
      height: 1.33rem;
      background: linear-gradient(to top, rgba(0, 170, 153, 0.9), rgba(0, 204, 153, 0.9));
      border-radius: 6px;/*no*/
      transform: translateX(-50%);
      align-items: center;
      justify-content: center;
      span {
        font-size: .38rem;
        color: #fff;
        letter-spacing: 1px;/*no*/
      }
    }
  }
  .fdmoney, .praise {
    background-color: $bgcolor;
  }
  .intro {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .intro .intro-pannel {
    display: flex;
    flex-direction: column;
    height: 33.3333%;
    justify-content: center;
    // padding-top: .71rem;
    p {
      margin: 0;
    }
    > p {
      font-weight: 100;
      font-size: .34rem;
      text-align: center;
    }
    .tip {
      font-weight: bold;
      color: $fontcolor;
    }
    .intro-text {
      padding: 0 19.7333%;
      display: flex;
      justify-content: space-between;
      color: #7b7b7b;
      font-size: .28rem;
      margin-top: .56rem;
      p {
        line-height: .38rem;
        margin: .1rem 0;
      }
      span {
        color: $fontcolor;
        margin-right: 4px;/*no*/
      }
      .icon {
        align-self: center;
        width: 20%;
        margin-top: .1rem;
        img {
          width: 100%;
        }
      }
      .left {
        margin-right: .56rem;
      }
      .right {
        margin-left: .41rem;
      }
    }
  }

  .intro .fdhome .intro-text{
    padding-left: 22%;
  }

  .service {
    padding: .20rem 8.6666% 0 8.6666%;
    .module {
      border-bottom: 1px solid #def2ec;/*no*/
      padding: .7rem 0 .70rem 0;
      .module-title {
        display: flex;
        justify-content: space-between;
        p {
          font-weight: 500;
          margin: 0;
          font-size: .36rem;
          line-height: 100%;
        }
        span {
          font-size: .28rem;
          color: #797979;
        }
        .more {
          color: #3bbc9f;
        }
      }
      .module-content {
        display: flex;
        margin-top: .60rem;
        .item {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          div {
            font-size: 0;
            align-self: center;
            width: .64rem;
            img {
              width: 100%;
            }
          }
          span {
            text-align: center;
            color: #666;
            font-size: .26rem;
            margin-top: .16rem;
          }
        }
      }
    }
    .first {
      padding-top: .72rem;
    }
    .last {
      padding-bottom: .72rem;
    }
    .last {
      border-bottom: none;
    }
  }

  .landlord {
    height: 100%;
    background-color: $bgcolor;
    > p {
      margin: 0;
      padding: .84rem 0 .76rem 0;
      text-align: center;
      color: $fontcolor;
      font-size: .4rem;
    }
    .landlord-pannel {
      width: 93.7333%;
      margin: 0 auto;
      background-color: #fff;
      box-shadow:0px 5px 10px rgba(0, 0, 0, 0.09);
      .module {
        .landlord-fd {
          position: relative;
          .fdhouse {
            position: relative;
            z-index: -1;
            height: 4.75rem;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .fdphoto {
            position: absolute;
            margin: -1.20rem 0 0 .34rem;
            .photo {
              width: 1.57rem;
              height: 1.57rem;
              img {
                width: 100%;
              }
            }
            .zan {
              position: absolute;
              right: 0;
              bottom: 0;
              width: .32rem;
              height: auto;
            }
          }
          .fdinfo {
            width: 100%;
            bottom: 0;
            margin-top: -.84rem;
            p {
              margin: 0;
              padding-left: 2.2rem;
            }
            .fdname {
              height: .84rem;
              line-height: .84rem;
              color: #fff;
              font-size: .32rem;
              background-color: rgba(39, 101, 71, .8);
              span {
                font-size: .28rem;
              }
            }
            .fdnum {
              margin: .1rem 0;
              font-size: .28rem;
              color: #2fb295;
            }
          }
        }
        .landlord-text {
          padding: .36rem .64rem;
          color: #5d5d5d;
          p {
            font-size: .3rem;
            line-height: .48rem;
            text-align:justify;
            margin: 0;
          }
        }
      }
    }
  }

  .platform {
    .platform-pannel {
      padding: 0 .32rem;
    }
    .partner, .team {
      > p {
        margin: 0;
        padding: .84rem 0 .76rem 0;
        text-align: center;
        font-size: .4rem;
        color: $fontcolor;
      }
      .module-content {
        display: flex;
        margin-bottom: .52rem;
        .item {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          div {
            align-self: center;
            width: 1.25rem;
            img {
              width: 100%;
            }
          }
          span {
            text-align: center;
            color: #666;
            font-size: .28rem;
            margin-top: .12rem;
          }
        }
      }
    }
  }

  .mainpage{
    height: 100%;
    background-color: $bgcolor;
    position: relative;
    .logo {
      position: absolute;
      z-index: 999;
      left: 50%;
      transform: translateX(-50%);
      width: 33.3333%;
      top: 1.21rem;
      img {
        width: 100%;
      }
    }
    .direct2form {
      display: flex;
      z-index: 999;
      position: absolute;
      top: 4.16rem;
      width: 64.4%;
      left: 50%;
      height: 1.12rem;
      line-height: 1.12rem;
      background: linear-gradient(to top, rgba(0, 170, 153, 1), rgba(0, 204, 153, 1));
      border-radius: 6px;/*no*/
      transform: translateX(-50%);
      align-items: center;
      justify-content: center;
      span {
        letter-spacing: 1px;/*no*/
        color: #fff;
        font-size: .36rem;
      }
    }
    .qrcode {
      font-size: .32rem;
      position: absolute;
      color: $fontcolor;
      bottom: 1.32rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
