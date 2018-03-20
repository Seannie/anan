<template>
	<div class="main">
		<div class="header">
			<div class="back" @click="direct2entry">
				<span>回到首页</span>
			</div>
			<div class="logo">
				<img src="../assets/normal_logo.png" alt="">
			</div>
		</div>
		<div class="container">
			<p class="title-main">请告诉我们，您的信息与需求</p>
			<p class="tip-main">您的隐私将被严格保密，请参阅我们的<span>隐私申明</span></p>
			<div class="module link-info">
				<p class="title-module">您的联系信息</p>
				<div class="nameSex">
					<group class="no-border-bottom">
						<x-input v-model="basicInfo.userName" :max="20" class="name" :show-clear="false" title="姓名"></x-input>
						<selector class="sex" v-model="basicInfo.sex" :options="sexOptions"></selector>
					</group>
				</div>
				<div>
					<group class="no-border-bottom">
						<x-input label-width="2.6rem" title="联系电话 (+86)" :show-clear="false" name="mobile" mask="999 9999 9999" v-model="basicInfo.telNum" :max="13" is-type="china-mobile"></x-input>
					</group>
				</div>
        <div class="VCode">
          <group>
            <x-input title="请输入验证码" v-model="code" class="weui-vcode"></x-input>
            <div class="button-group">
              <div class="sendBtn" @click="sendCode" v-if="secondBtnShow"><p>获取验证码</p></div>
              <div class="secondView" v-if="!secondBtnShow">
                <div class="tip"><p>验证码已发送</p></div>
                <div class="second">
                  <countdown v-model="second" :start="secondStart" @on-finish="btnViewChange"></countdown><span>秒后再次尝试</span>
                </div>
              </div>
            </div>
          </group>
        </div>
        <div class="chooseCity">
          <group>
            <x-address title="选择城市" v-model="basicInfo.address" raw-value :list="addressData" value-text-align="left"></x-address>
          </group>
        </div>
			</div>
			<div class="module service-content">
				<p class="title-module">您感兴趣的服务内容</p>
				<div class="service-pannel">
					<div class="row">
						<div class="item" @click="checkChange('newHouse')">
							<div class="check">
								<img v-show="!basicInfo.checked.newHouse" src="../assets/uncheck.png" alt="">
								<img v-show="basicInfo.checked.newHouse" src="../assets/checked.png" alt="">
							</div>
							<span>新房源服务</span><span class="tip">有房想出租?</span>
						</div>
						<div class="item" @click="checkChange('trusteeship')">
							<div class="check">
								<img v-show="!basicInfo.checked.trusteeship" src="../assets/uncheck.png" alt="">
								<img v-show="basicInfo.checked.trusteeship" src="../assets/checked.png" alt="">
							</div>
							<span>无忧托管服务</span><span class="tip">解放时间，提高收益</span>
						</div>
						<div class="item" @click="checkChange('clean')">
							<div class="check">
								<img v-show="!basicInfo.checked.clean" src="../assets/uncheck.png" alt="">
								<img v-show="basicInfo.checked.clean" src="../assets/checked.png" alt="">
							</div>
							<span>保洁布草服务</span><span class="tip">找不到阿姨，自己保洁？</span>
						</div>
					</div>
				</div>
			</div>
			<div class="module service-date">
				<p class="title-module">希望开始服务的日期</p>
				<group>
					<datetime title="开始的日期" v-model="basicInfo.startServiceTime" :start-date="startDate" :end-date="endDate"></datetime>
					<selector v-model="basicInfo.partnerTime" title="希望合作的周期" name="district" :options="timeOptions"></selector>
				</group>
			</div>
      <div class="more-content" v-if="moreContentShow">
        <div class="module home-address">
          <p class="title-module">需要提供服务的爱屋地址</p>
          <group class="no-border-bottom">
            <x-input v-model="optionalInfo.detailAddress.stree" title="请填写街道地址" placeholder="精确到路名，如南京西路123弄"></x-input>
            <x-input v-model="optionalInfo.detailAddress.community" title="小区名称" placeholder="请填写房源所在的小区名称"></x-input>
            <x-input v-model="optionalInfo.detailAddress.building" title="楼、单元、门牌号" placeholder=""></x-input>
          </group>
        </div>
        <div class="module home-info">
          <p class="title-module">爱屋信息</p>
          <group class="no-border-bottom">
            <popup-picker title="户型" :data="typePicker" v-model="optionalInfo.houseType"></popup-picker>
            <cell title="面积">
              <div>
                <input type="number" v-model="optionalInfo.houseSize">
                <span class="danwei">平米</span>
              </div>
            </cell>
          </group>
        </div>
        <div class="module bed-info">
          <p class="title-module">床型</p>
          <group ref="bedInfo">
            <bedCell :is="item.component" :bedInfo="item.prop" v-for="item in bedTypeComponents"></bedCell>
          </group>
          <p class="addBed" @click="showAddBed = true">添加</p>
          <group>
            <popup-picker :show.sync="showAddBed" :show-cell="false" :data="bedType" v-model="addBedType"></popup-picker>
          </group>
        </div>
      </div>
      <div class="more" @click="seeMore" v-if="!moreContentShow">
        <span>提供更全面的信息，获得更准确的报价</span>
      </div>
			<div class="uploadData" @click="uploadData">
				<span>获得报价</span>
			</div>
		</div>
		<div class="footer">
			<div class="logo">
				<img src="../assets/normal_logo.png" alt="">
			</div>
		</div>
    <toast v-model="toast.warnToastShow" type="warn">{{toast.text}}</toast>
	</div>
</template>

<script>
import { XInput, Cell, Group, Selector, Countdown, XButton, PopupPicker, XAddress, Toast, Datetime, ChinaAddressV4Data } from 'vux'
import bedCell from '@/components/bedType'
import { AddUserItem, RequestSmsCode, VSmsCode } from '../api/api'
export default {
  name: 'form-trusteeship',
  components: {
    XInput,
    XAddress,
    Group,
    Countdown,
    XButton,
    Selector,
    Toast,
    ChinaAddressV4Data,
    PopupPicker,
    Cell,
    Datetime,
    bedCell
  },
  data () {
    return {
      basicInfo: {
        userName: null,
        sex: '先生',
        telNum: null,
        address: [],
        startServiceTime: null,
        partnerTime: '3个月',
        checked: {
          newHouse: false,
          trusteeship: false,
          clean: false
        }
      },
      optionalInfo: {
        detailAddress: {
          stree: null,
          community: null,
          building: null
        },
        houseSize: null,
        houseType: [],
        bed: []
      },
      second: 59,
      code: null,
      startDate: '2018-01-01',
      endDate: '2020-12-31',
      addressData: ChinaAddressV4Data,
      sexOptions: ['先生', '女士'],
      moreContentShow: false,
      secondBtnShow: true,
      toast: {
        warnToastShow: false,
        text: '填写完整后提交'
      },
      secondStart: false,
      addBedType: ['双人大床(宽1.8米及以上)'],
      showAddBed: false,
      bedType: [['双人大床(宽1.8米及以上)', '双人床(宽1.3米~1.8米)', '单人床(宽1.3米以下)', '上下铺', '沙发床', '榻榻米', '移动折叠床']],
      timeOptions: ['3个月', '6个月', '一年', '长期'],
      typePicker: [['1室', '2室', '3室', '4室', '5室', '6室', '其他'], ['0厅', '1厅', '2厅', '3厅', '4厅', '5厅', '6厅', '其他'], ['0厨', '1厨', '2厨', '3厨', '4厨', '5厨', '6厨', '其他'], ['1卫', '2卫', '3卫', '4卫', '5卫', '6卫', '其他']],
      bed: {
        type_1: 0,
        type_2: 0,
        type_4: 0,
        type_5: 0,
        type_6: 0,
        type_7: 0
      },
      allBedType: {
        type_1: '双人大床(宽1.8米及以上)',
        type_2: '双人床(宽1.3米~1.8米)',
        type_3: '单人床(宽1.3米以下)',
        type_4: '上下铺',
        type_5: '沙发床',
        type_6: '榻榻米',
        type_7: '移动折叠床'
      },
      bedTypeText: {
        type_1: '双人大床',
        type_2: '双人床',
        type_3: '单人床',
        type_4: '上下铺',
        type_5: '沙发床',
        type_6: '榻榻米',
        type_7: '移动折叠床'
      },
      bedTypetip: {
        type_1: '宽1.8米及以上',
        type_2: '宽1.3米~1.8米',
        type_3: '宽1.3米以下',
        type_4: '',
        type_5: '',
        type_6: '',
        type_7: ''
      },
      chooseBed: [],
      bedTypeComponents: []
    }
  },
  methods: {
    checkChange (property) {
      this.basicInfo.checked[property] = !this.basicInfo.checked[property]
    },
    numChange (bool, type) {
      if (bool) {
        this.bed[type]++
      } else {
        if (this.bed[type] !== 0) {
          this.bed[type]--
        }
      }
    },
    direct2entry () {
      this.$router.push(`/`)
    },
    seeMore () {
      this.moreContentShow = !this.moreContentShow
    },
    uploadData () {
      if (this.basicInfo.userName && this.basicInfo.telNum && this.basicInfo.startServiceTime && this.basicInfo.address.length !== 0 && this.code) {
        VSmsCode(this.code, this.basicInfo.telNum).then(res => {
          if (this.basicInfo.address.length !== 0 && this.basicInfo.address[0] === '310000') {
            this.$refs.bedInfo.$children.forEach((item, index) => {
              this.optionalInfo.bed[index].num = item.typeTotal
            })
            let data = Object.assign(this.basicInfo, this.optionalInfo);
            AddUserItem(data).then(res => {
              this.$router.push(`/success`)
            }).catch(err => {
              console.log('保存失败', err)
            })
          } else {
            this.$router.push(`/fail`)
          }
        }).catch(err => {
          this.toast.warnToastShow = true
          this.toast.text = '验证码错误'
          console.log(err)
        })
      } else {
        this.toast.warnToastShow = true
      }
    },
    btnViewChange () {
      this.second = 59
      this.secondBtnShow = true
      this.secondStart = false
    },
    sendCode () {
      if (this.basicInfo.telNum) {
        RequestSmsCode(this.basicInfo.telNum).then(res => {
          this.secondBtnShow = false
          this.secondStart = true
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  created () {
    if (this.$route.query.checked) {
      this.checkChange(this.$route.query.checked)
    }
  },
  watch: {
    'addBedType': {
      handler (newVal, oldVal) {
        for (let key of Object.keys(this.allBedType)) {
          if (newVal[0] === this.allBedType[key]) {
            if (this.chooseBed.indexOf(key) === -1) {
              let bedObj = {
                type: this.allBedType[key],
                num: 0
              }
              this.optionalInfo.bed.push(bedObj)
              this.chooseBed.push(key)
              this.bed[key] = 0
              this.bedTypeComponents.push({
                'component': 'bedCell',
                'prop': {
                  'bedTypeText': this.bedTypeText[key],
                  'tip': this.bedTypetip[key],
                  'type': key
                }
              })
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $bgcolor: #f8fffd;
  $fontcolor: #00ca9d;
  input[type="number"] {
    -webkit-appearance: none;
  }
  .main {
		padding: .71rem .59rem;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: .45rem;
		border-bottom: 1px solid $fontcolor;/*no*/
		.back {
			font-size: .32rem;
			color: $fontcolor;
		}
		.logo {
			width: 2.50rem;
			img {
				width: 100%;
			}
		}
	}

	.container {
		p {
			margin: 0;
		}
		.title-main {
			font-size: .4rem;
			color: #777;
			margin: .55rem 0 .33rem 0;
		}
		.tip-main {
			color: #d5d5d5;
			font-size: .24rem;
			span {
				color: $fontcolor;
			}
		}
		.module {
			border-bottom: 1px solid $fontcolor;/*no*/
			.title-module {
        font-size: .32rem;
				color: $fontcolor;
				margin: .53rem 0;
			}
		}
    .link-info {
      .VCode {
        .button-group {
          position: relative;
          font-size: 0;
          .sendBtn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            text-align: center;
            font-size: .3rem;
            background-color: #00ca9d;
            color: #fff;
            border-radius: 4px;
            p {
              padding: 5px;
            }
          }
          .secondView {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            .tip{
              text-align: center;
              font-size: .2rem;
              width: 85px;
              p {
                padding: 4px 5px;
              }
            }
            .second {
              text-align: center;
              font-size: .2rem;
            }
          }
        }
      }
    }
		.service-content {
			display: flex;
			flex-direction: column;
			.service-pannel {
				.row {
					padding: .32rem 0 .44rem 0;
					// display: flex;
					border-top: 1px solid #eee;/*no*/
					.item {
						padding: .2rem .20rem;
						display: flex;
						align-items: center;
						flex-grow: 1;
						.check{
							font-size: 0;
							width: .40rem;
							margin-right: .24rem;
							img {
								width: 100%;
							}
						}
						span {
							font-size: .32rem;
						}
						.tip {
							font-size: .22rem;
							margin-left: .22rem;
							color: #ccc;
						}
					}
				}
				.row-line {
					border-top: 1px solid #eee;/*no*/
				}
			}
		}
		.home-info {
			input {
				width: .70rem;
				padding: .16rem;
				border: 1px solid #f3f3f3;/*no*/
				border-radius: 6px;/*no*/
				text-align: center;
			}
		}
		.bed-info {
			.bedNum {
				display: flex;
				justify-content: center;
				align-items: center;
				.add, .reduce {
					font-size: 0;
					width: .50rem;
					img {
						width: 100%;
					}
				}
				.num {
					border-radius: 6px;/*no*/
					border: 1px solid #f3f3f3;/*no*/
					padding: .16rem;
				}
				p {
					margin: 0 .16rem;
				}
			}
			.addBed {
				font-size: .28rem;
				color: $fontcolor;
				padding: .32rem .15rem;
			}
		}
    .more {
      font-size: .32rem;
      color: $fontcolor;
      text-align: center;
      padding: .32rem 0;
      border: 1px solid $fontcolor;/*no*/
      border-radius: 6px;/*no*/
      margin-top:  .55rem;
    }
		.uploadData {
      font-size: .32rem;
			color: #fff;
			text-align: center;
			padding: .32rem 0;
			background-color: $fontcolor;
			border-radius: 6px;/*no*/
			margin-top: .55rem;
		}
	}

	.footer {
		.logo {
			margin: 0 auto;
			margin-top: 2.75rem;
			width: 33.3333%;
			img {
				width: 100%;
			}
		}
	}
</style>
