<template>
	<cell ref="bedCell" :title="bedInfo.bedTypeText" :inline-desc="bedInfo.tip">
		<div class="bedNum">
			<div class="reduce" @click="numChange(false, `${bedInfo.type}`)">
				<img src="../assets/reduce.png" alt="">
			</div>
			<p class="num">{{typeTotal}}</p>
			<div class="add" @click="numChange(true, `${bedInfo.type}`)">
				<img src="../assets/add.png" alt="">
			</div>
		</div>
	</cell>
</template>

<script>
import { Cell } from 'vux'
export default {
  components: {
    Cell
  },
  data () {
    return {
      typeTotal: 0
    }
  },
  props: ['bedInfo'],
  methods: {
    numChange (bool, type) {
      if (bool) {
        this.typeTotal++
      } else {
        if (this.typeTotal !== 0) {
          this.typeTotal--
        }
      }
    }
  }
}
</script>

<style lang="scss">
	.bedNum {
		display: flex;
		justify-content: center;
		align-items: center;
		.add, .reduce {
			font-size: 0;
			width: .5rem;
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
			margin: 0 .16rem !important;
		}
	}
	.addBed {
		font-size: .28rem;
		color: #00ca9d;
		padding: .32rem .15rem;
	}
</style>
