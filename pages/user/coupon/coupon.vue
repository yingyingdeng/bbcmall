<template>
	<view>
		<uni-nav-bar :fixed="true"  :statusBar="true"  @click-left="back" >
			<block slot="left">
				<view class="icon iconfont icon-fanhui"></view>
			</block>
			<view class="nav-tab-bar uf-ac-ajc">
				<block v-for="(tab,index) in tabBar" :key="tab.id">
				<view class="uf-ac-ajc" :class="{'active':tabIndex==index}" @tap="tabTabs(index)">
					<text>{{tab.name}}</text>
					<view v-if="(tabIndex==index)" class="nav-tab-bar-line"></view>
				</view>
				</block>
			</view>
		</uni-nav-bar>
		
		<view class="uni-tab-bar">
		<swiper class="swiper-box" :current="tabIndex" @change="tabChange" :style="{height:swiperheight+'px'}">
			<swiper-item>
				<scroll-view scroll-y  class="list">
				<view class="swiper-item">
					<view class="uf-ac-jc yhq">
						<view class="uf left">
							<view class="yhp-img uf-ac-ajc"><image src="../../../static/goods/p2.jpg" mode="widthFix" lazy-load></image></view>
							<view class="yuhcont">
								<view class="dianpu"><text>炎妃熙娆</text>订单满100.00币</view>
								<view class="text">编码：466520613568269002</view>
								<view class="text">2019-06-11~2020-03-31</view>
							</view>
							<view class="gap-top"></view>
							<view class="gap-bottom"></view>
						</view>
						
						<view class="right uf-ac-ajc">
							<view><text class="shuzi">10</text><text class="iconzhibi"></text></view>
							<view class="shiyong">去使用</view>
						</view>
					</view>
				</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y  class="list">
					<view class="swiper-item">
						<view class="uf-ac-jc yhq">
							<view class="uf left">
								<view class="yhp-img uf-ac-ajc"><image src="../../../static/goods/p2.jpg" mode="widthFix" lazy-load></image></view>
								<view class="yuhcont">
									<view class="dianpu"><text>炎妃熙娆</text>订单满100.00币</view>
									<view class="text">编码：466520613568269002</view>
									<view class="text">2019-06-11~2020-03-31</view>
								</view>
								<view class="icon iconfont icon-yishiyong"></view>
								<view class="gap-top"></view>
								<view class="gap-bottom"></view>
							</view>
							
							<view class="right2 uf-ac-ajc">
								<view><text class="shuzi">10</text><text class="iconzhibi"></text></view>
								<view class="chakan">查看</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y  class="list">
					<view class="swiper-item">
						<view class="uf-ac-jc yhq">
							<view class="uf left">
								<view class="yhp-img uf-ac-ajc"><image src="../../../static/goods/p2.jpg" mode="widthFix" lazy-load></image></view>
								<view class="yuhcont">
									<view class="dianpu"><text>炎妃熙娆</text>订单满100.00币</view>
									<view class="text">编码：466520613568269002</view>
									<view class="text">2019-06-11~2020-03-31</view>
								</view>
								<view class="icon iconfont icon-yiguoqi"></view>
								<view class="gap-top"></view>
								<view class="gap-bottom"></view>
							</view>
							
							<view class="right2 uf-ac-ajc">
								<view><text class="shuzi">10</text><text class="iconzhibi"></text></view>
								<view class="chakan">已过期</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "../../../components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				swiperheight:0,
				tabIndex:0,
				tabBar:[
					{name:"未使用",id:"going"},
					{name:"已使用",id:"completed"},
					{name:"已过期",id:"completed"}
				],
				store_voucher_list: {
						"8": {
							"store_name":"炎妃熙娆",
							"voucher_id": 5,
							"voucher_code": "916150613079117002",
							"vouchertemplate_id": 8,
							"voucher_title": "代金券名称",
							"voucher_desc": "代金券描述",
							"voucher_startdate": 1559735117,
							"voucher_enddate": 1585929600,
							"voucher_price": 100,
							"voucher_limit": "500.00",
							"voucher_store_id": 1,
							"voucher_state": 1,
							"voucher_activedate": 1559735117,
							"voucher_type": 0,
							"voucher_owner_id": 2,
							"voucher_owner_name": "cy28414080",
							"voucher_order_id": null,
							"desc": "面额100元 有效期至 2020-04-04  消费满500.00可用",
							"voucher_jifen":10,
							"voucher_img":"../../static/goods/p8.jpg",
						},
						"19": {
							"store_name":"Bbcmall",
							"voucher_id": 6,
							"voucher_code": "916150613079117002",
							"vouchertemplate_id": 8,
							"voucher_title": "代金券名称",
							"voucher_desc": "代金券描述",
							"voucher_startdate": 1559735117,
							"voucher_enddate": 1585929600,
							"voucher_price": 100,
							"voucher_limit": "500.00",
							"voucher_store_id": 1,
							"voucher_state": 1,
							"voucher_activedate": 1559735117,
							"voucher_type": 0,
							"voucher_owner_id": 2,
							"voucher_owner_name": "cy28414080",
							"voucher_order_id": null,
							"couponClass":'hide',
							"desc": "面额100 有效期至 2020-04-04  消费满500.00可用",
							"voucher_jifen":1,
							"voucher_img":"../../static/goods/p7.jpg",
						}
				}
				
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res)=> {
					let height = res.windowHeight - uni.upx2px(125);
					this.swiperheight = height
				}
			});
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			tabTabs(index){
				this.tabIndex=index;
			},
			tabChange(e){
				uni.showLoading();
				this.tabIndex=e.detail.current;
				uni.hideLoading();
			}
		}
	}
</script>

<style>
page{ background: #f3f3f3}
.nav-tab-bar{ margin-left: -20upx; position: relative;color: #787878;}
.nav-tab-bar>view{ margin-right: 50upx; font-size: 32upx;}
.active{color: #c9141d; }
.nav-tab-bar-line{ border-bottom: 3upx #c9141d solid;border-top: 3upx #c9141d solid; border-radius: 20upx; width: 70upx;position: absolute;bottom: 12upx;}
.icon-fanhui{ padding-left: 20upx; font-size: 40upx;}
.swiper-item{ padding: 0 3%; width: 94%;}
.yhq{margin-top: 20upx;}
.gap-top,.gap-bottom{position: absolute;width: 20upx;height: 20upx;right: -10upx;background-color: #f1f1f1;border-radius: 20upx;}
.gap-top{top: -10upx;}
.gap-bottom{bottom: -10upx;}
.yhp-img{width: 120upx;padding:0 20upx;}
.yhp-img image{width: 120upx; height: 120upx; border-radius:120upx }
.iconzhibi{background: url(../../../static/womc-logo.png) no-repeat left center;background-size: 30upx;padding-right: 40upx;}
.left{background: #ffffff; width: 100%; height: 200upx;position: relative;border-radius: 20upx 0 0 20upx;}
.right,.right2{width: 200upx;color: #ffffff;border-left: 4upx dashed #FFFFFF;height: 200upx;border-radius: 0 20upx 20upx 0;font-size: 32upx; flex-direction: column;}
.right{background: linear-gradient(to right, #ff4672 , #fe3612);}
.right2{background: #AAAAAA;}
.text{color: #797979;}
.shuzi{font-size: 50upx;line-height: 1;font-weight: bold;}
.shiyong,.chakan{background: #FFFFFF; border-radius: 5upx;font-size: 24upx; padding: 5upx 20upx;color: #fe3612;margin-top: 10upx;}
.shiyong{color: #fe3612;}
.chakan{color: #AAAAAA;}
.yuhcont{flex-direction: column;display: flex;align-items: flex-start;justify-content: center;}
.dianpu,.text{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;color: #797979;}
.dianpu text{font-weight: bold;margin-right: 10upx;}
.icon-yishiyong,.icon-yiguoqi{position: absolute;right: 20upx;font-size: 150upx;z-index: 6;color: rgba(153,153,153,0.2);}
</style>
