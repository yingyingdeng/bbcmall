<template>
	<view>
	
		<view class="swiper-box">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.img" @tap="toSwiper(swiper)"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}}/{{swiperList.length}}</view>
		</view>
		<view class="uf-ac-jc prace">
			<view class="qgprace uf-ac-jc">
				<view class="qgjgprace">
					<view class="yuanjia">优惠价：<text class="iconzhibi iconprace">{{goodsData.price}}</text></view>
					<view class="yuanjia">原价：<text class="iconzhibi iconprace2">{{goodsData.yprice}}</text></view>
				</view>
				<view class="sanjiao"></view>
			</view>
			<view class="qgtime">
				<view class="qgtimetitle">距离结束还剩：</view>
				<uni-countdown :day="goodsData.day" :hour="goodsData.hour" :minute="goodsData.minute" :second="goodsData.second" color="#FFFFFF" background-color="#fe3612" border-color="#fe3612" />
			</view>
		</view>
		
		<view class="goods-info">
			<view>
				<view class="title">{{goodsData.name}}</view>
				<view class="jieshao">{{goodsData.maidian}}</view>
				<view class="zekou uf-ac-jc">
					
					<view class="xiangou">限购{{goodsData.xiangou}}件</view>
					<view class="xiaoliang"><text>{{goodsData.goumainum}}</text> 人已抢</view>
				</view>
			</view>
		</view>
		
		<view class="description">
			<view class="titlexx">— 商品详情 —</view>
			<view class="contentxx"><rich-text :nodes="descriptionStr"></rich-text></view>
		</view>
		
		<!-- 底部按钮 -->
		<view class="footer">
			<button class="goumai" type="warn">立即抢购</button>
		</view>
	</view>
</template>

<script>
	import uniCountdown from '../../components/uni-countdown/uni-countdown.vue'
	export default {
		components: {
			uniCountdown
		},
		data() {
			return {
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
					name:"VIVO X27 限时抢购活动",
					maidian:"此次618 力度空前巨大",
					price:"127.00",
					yprice:"299.00",
					goumainum:12,
					xiangou:1,
					day:1,
					hour:2,
					minute:30,
					second:0
					},
					//商品描述html
					descriptionStr:'<div style="text-align:center;"><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOogx.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOHKK.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOTv6.jpg"/></div>'
			}
		},	
		methods: {
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			timeup() {
				uni.showToast({
					title: '时间到'
				})
			}
		}
};
</script>

<style>
	page {background-color: #f3f3f3;}
	.swiper-box{position: relative;width: 100%;height: 750upx;}
	.swiper-box swiper{width: 100%;height: 750upx;}
	.swiper-box swiper swiper-item image {width: 750upx;height: 750upx;}
	.swiper-box .indicator{display: flex;justify-content: center;align-items: center;padding: 0 25upx;height: 40upx;border-radius: 40upx;font-size: 22upx;position: absolute;bottom: 20upx;right: 20upx;color: #fff;background-color: rgba(0, 0, 0, 0.2);}
	.prace{}
	.sanjiao{width:0upx;height:0upx;border-left: 60upx solid transparent;border-right:60upx solid #ffebed;border-bottom: 60upx solid transparent;border-top: 60upx solid transparent;}
	.qgprace{width: 60%;background: linear-gradient(to right, #ff4672 , #fe3612); height: 120upx;}
	.qgtime{width: 40%;background: linear-gradient(to right, #ffebed , #ffd0d5);height: 120upx;}
	.qgjgprace{padding-left:30upx ;}
	.iconzhibi{background: url(../../static/womc-logo.png) no-repeat left center;background-size: 28upx;padding-left: 30upx;}
	.iconprace{font-size: 40upx;color: #fff;font-weight: bold;line-height: 1;}
	.iconprace2{font-size: 28upx;color: #fff;text-decoration: line-through;color: #fff;line-height: 1;}
	.yuanjia{color: #fff;}
	.qgtimetitle{padding:15upx 0 8upx 0;line-height: 1;display: flex;justify-content: center;}
	.footer {position: fixed;bottom: 0upx;width: 96%;height: 100upx;border-top: solid 1upx #eee; background-color: #fff;z-index: 10;display: flex;justify-content: space-between;align-items: center;padding: 5upx 2%;}
	.goumai{ line-height: 90upx; height: 90upx;  display: flex; justify-content: center; align-items: center; flex: 1;color: #fff; background: linear-gradient(to right, #ff4672 , #fe3612);border-radius:40upx;}
	.goods-info {width: 94%;padding: 20upx 3%;background-color: #fff;}
	.goods-info .title {font-size: 36upx; word-break: break-all;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;line-height: 1.5;}
	.goods-info .jieshao{ color: #999; font-size: 26upx;word-break: break-all;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
	.zekou {margin-right: 10upx; margin-top: 10upx; }
	.zekou .xiangou{border: 1upx solid #ff4672; border-radius: 5upx; font-size: 24upx;padding: 10upx 15upx; color: #ff4672;line-height: 1;}
	.xiaoliang {color: #797979;}
	.xiaoliang text{color: #C9141D;font-weight: bold;margin-right: 10upx;}
	.description {}
	.titlexx {width: 100%;height: 100upx;display: flex;justify-content: center;align-items: center;font-size: 34upx;color: #333; background: #fff; margin-top: 10upx;}
</style>
