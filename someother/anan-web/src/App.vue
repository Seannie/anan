<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
	@font-face {
    font-family: Helvetica, 'pingFangSC-Medium';
    src: url('/static/fonts/ttf');
    font-weight: normal;
    font-style: normal;
	}
	body {
		margin: 0;
		width: 100%;
	}
	.swiper-container {
		height: 100%;
		width: 100%;
	}
	.banner {
		.swiper-container .swiper-slide {
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	// vux reset
	.header {
		.vux-tab {
			height: auto !important;
			.vux-tab-item {
				line-height: 0 !important;
				background-size: 0 !important;
			}
			.vux-tab-ink-bar {
				height: 0 !important;
			}
		}
	}
	.vux-toast {
		font-size: 20px;
	}
	// form reset
	.no-border-bottom .weui-cells:after {
		border: none !important;
	}
	.weui-cells {
		margin-top: 0 !important;
		.weui-cell {
			.weui-cell__ft {
				.weui-btn_primary {
					background-color: #00ca9d;
				}
			}
			.vux-cell-bd {
				p{
					margin: 0;
				}
			}
			p {
				margin: 0;
			}
		}
		a {
			text-decoration: none;
		}
	}
	.nameSex .weui-cells {
		display: flex;
		.weui-cell.name {
			width: 4.3rem;
		}
		.weui-cell_select .weui-select {
			padding: 0 0 0 0;/*no*/
		}
		.weui-cell_select .weui-cell__bd:after {
			border-color: #fff;
		}
		.sex {
			flex-grow: 1;
			.weui-cell__bd {
				padding-left: 10px;/*no*/
				border-left: 1px solid #eee;/*no*/
			}
		}
	}
	.VCode .weui-cells {
		display: flex;
		.weui-cell {
			width: 3.9rem;
		}
		.button-group {
			flex-grow: 1;
		}
	}
	.chooseCity {
		.vux-popup-picker-select-box {
			padding-left: 10px;
		}
	}
	.service-date {
		.weui-cells {
			.weui-select {
				padding-right: 0;
				float: right;
				width: auto;
			}
			.weui-cell_select .weui-cell__bd:after {
				border-color: #fff;
			}
			.vux-selector .weui-label{
				width: 2.5rem;
			}
		}
	}
</style>
