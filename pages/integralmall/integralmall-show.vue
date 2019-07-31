<template>
	<view class="animated fadeIn">
		<view class="swiper-box">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.img" @tap="toSwiper(swiper)"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}}/{{swiperList.length}}</view>
		</view>
		<!-- 标题 价格 -->
		<view class="goods-info">
			<view class="price"><text>{{goodsData.price}}</text>积分</view>
			<view class="title">
				<view><text>{{goodsData.ziying}}</text>{{goodsData.name}}</view>
				<view class="jieshao"><text class="icon iconfont icon-zhekou jiang"></text>{{goodsData.maidian}}</view>
			</view>
		</view>
		
		<!-- 底部菜单 -->
		<view class="footer" @tap="showZengpin">
			<view class="btn">
				<view class="goumai" >立即兑换</view>
			</view>
		</view>
		
		<!-- 购买数量弹出 -->
		
		<view class="share" :class="zengpinClass" @touchmove.stop.prevent="discard" @tap="hideZengpin">
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="zhifu">
					<view class="h2">支付积分</view>
					<view class="zhifujf"><text>10000积分</text></view>
				</view>
				<view class="uf-ac-jc shuliang">
					<text>数量</text>
					<view class="number">
						<view class="sub" @tap.stop="sub">
							<view class="icon iconfont icon-jian"></view>
						</view>
						<view class="input" @tap.stop="discard">
							<input type="number" disabled  v-model="goodsData.number" />
						</view>
						<view class="add"  @tap.stop="add">
							<view class="icon iconfont icon-jiahaob"></view>
						</view>
					</view>
				</view>
				
				<button class="anniu" type="warn" @tap="toIentegralshow">确认兑换</button>
				<view class="guanbi icon iconfont icon-ego-guanbi"  @tap="hideZengpin" ></view>
			</view>
		</view>

		<!-- 详情 -->
		<view class="description">
			<view class="title">— 商品详情 —</view>
			<view class="content"><rich-text :nodes="descriptionStr"></rich-text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			zengpinClass:'',//弹窗css类，控制开关动画
			//轮播主图数据
			swiperList: [
				{ id: 1, img: '../../static/show/1.jpg' },
				{ id: 2, img: '../../static/show/2.jpg' },
				{ id: 3, img: '../../static/show/3.jpg' },
				{ id: 4, img: '../../static/show/4.jpg' }
			],
			//轮播图下标
			currentSwiper: 0,
			goodsData:{
				id:1,
				name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
				maidian:"这里是产品买点",
				ziying:"自营",
				price:"127",
				number:1,
				},
				//商品描述html
				descriptionStr:'<div style="text-align:center;"><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOogx.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOHKK.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOTv6.jpg"/></div>'
			}
		},
		methods: {
			toIentegralshow(){
				uni.navigateTo({
					url: 'integraltj',
					
				});
			},
			//减少数量
			sub(){
				if(this.goodsData.number<=1){
					return;
				}
				this.goodsData.number--;
			},
			//增加数量
			add(){
				this.goodsData.number++;
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			//购买弹窗
			showZengpin() {
				console.log('show');
				this.zengpinClass = 'show';
			},
			hideZengpin() {
				this.zengpinClass = 'hide';
				setTimeout(() => {
					this.zengpinClass = 'none';
				}, 200);
			},
			
			discard() {
				//丢弃
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f9f9f9;
	}
	@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(-100%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(-100%);
			}
			100% {
				transform: translateY(0);
			}
		}
	.swiper-box {
		position: relative;
		width: 100%;
		height: 760upx;
		swiper {
			width: 100%;
			height: 760upx;
			swiper-item {
				image {
					width: 760upx;
					height: 760upx;
				}
			}
		}
		.indicator{
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
	
	.goods-info {width: 94%;
		padding: 20upx 3% 0 3%;
		background-color: #fff;
		}
	.goods-info .price {
		
		font-weight: 600;
		color: #c9141d;
	}
	.goods-info .price text{font-size: 42upx; margin-right: 15upx;} 
	.goods-info .title {
		font-size: 32upx; 
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden; line-height: 50upx;
	}
	.goods-info .title text{ border: 1upx solid #c9141d; padding: 3upx 10upx; border-radius: 10upx; font-size: 24upx;color: #c9141d; margin-right: 10upx; }
	.goods-info .title .jieshao{ 
		color: #999;  
		font-size: 26upx;
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		}
	.goods-info .title .jieshao .jiang{ border: 0; font-size: 32upx;padding: 0 10upx 0 0; margin: 0}
	.footer {
		position: fixed;
		bottom: 0upx;
		width: 100%;
		height: 100upx;
		border-top: solid 1upx #eee; 
		background-color: #fff;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		}
	
	.btn{ flex: 2; display: flex;justify-content:space-between;align-items: center; margin: 5upx 10upx; }
	.goumai{ line-height: 80upx; height: 80upx;  display: flex; justify-content: center; align-items: center; flex: 1;color: #fff; background: linear-gradient(to right, #ff4672 , #fe3612);border-radius:40upx;}
	.description {
		.title {
			width: 100%;
			height: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			color: #333; background: #fff; margin-top: 10upx;
		}
	}
	.share{
		display: none;
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.15s linear both;
			}
			.layer {
				animation: showLayer 0.15s linear both;
			}
		}
		&.hide {
			display: block;
			.mask{
				animation: hidePopup 0.15s linear both;
			}
			
			.layer {
				animation: hideLayer 0.15s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			background-color: rgba(0,0,0,.5);
			position: fixed;
			width: 100%;
			height: 100%;
			top:0;
			z-index: 11;
		}
		.layer{
			width: 100%;
			position: fixed;
			z-index: 12;
			padding: 0;
			top: 100%;
			background-color: rgba(255,255,255,1);border-radius: 20upx 20upx 0 0;; padding-bottom: 20upx;
			
			.h2{
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 34upx;
			}
		}
	}
	.zhifu{border-bottom: 1upx solid #f3f3f3;padding: 30upx;}
	.zhifujf {margin-top: 10upx;}
	.zhifujf text{color: #fff; background: linear-gradient(to right, #ff4672 , #fe3612);border-radius:40upx; padding: 5upx 20upx;font-size: 22upx; }
	.guanbi{position: absolute;z-index: 10;right: 30upx;top: 30upx; width: 50upx;height: 50upx;align-items: center;justify-content: center; border: 1upx solid #f3f3f3; border-radius: 40upx;display: flex; font-size: 30upx; box-shadow: 0 0 10upx #f1f1f1;color: #aaa; font-size: 28upx ; background: #fff;}
	.shuliang{ padding: 30upx;}
	.shuliang text{font-size: 34upx;}
	.anniu{color: #fff; background: linear-gradient(to right, #ff4672 , #fe3612);border-radius:0upx;}
	.number{
		display: flex;
		justify-content: center;
		align-items: center;
		.input{
			width: 80upx;
			height: 60upx;
			margin: 0 5upx;
		
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			input{
				width: 80upx;
				height: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: 40upx;
			}
		}
		
		.sub ,.add{
			width: 40upx;
			height: 40upx;
			border:1upx solid #f3f3f3;
			border-radius: 5upx;
			.icon{
				font-size: 30upx;
				width: 40upx;
				height: 40upx;
				display: flex;
				justify-content: center;
				align-items: center;
				
			}
		}
	}
</style>
