<template>
	<view class="animated fadeIn fast">
		<view class="headerbg">
			<view class="integral">
				<text class="uf-ac-ajc">123456</text>
				<view class="uf-ac-ajc jifengz"><view class="icon iconfont icon-gantanhao-yuankuang"></view>可以使用积分</view>
			</view>
			<view class="integraljl">
				<view @tap="toMingxi">
					<text>积分明细</text>
				</view>
				<view @tap="toJilu">
					<text>兑换记录</text>
				</view>
			</view>
		</view>
		<view class="nav-tab-bar uf-ac-ajc">
			<block v-for="(tab,index) in tabBar" :key="tab.id">
				<view class="tab-list" :class="{'active':tabIndex==index}" @tap="tabTabs(index)">
					<view class="tabname">{{tab.name}}</view>
					<view v-if="(tabIndex==index)" class="nav-tab-bar-line "></view>
				</view>
			</block>
		</view>
		<view class="uni-tab-bar">
			<swiper class="swiper-box"  :current="tabIndex" @change="tabChange" :style="{height:swiperheight+'px'}">
				<swiper-item>
					<scroll-view scroll-y  class="list">
					<view class="swiper-item">
						<block v-for="(jifen,index) in jflist" :key="index">
							<view class="jflist">
								<view class="jflistpic"  @tap="toShow"><image :src="jifen.jflistpic" mode="widthFix" lazy-load></image></view>
								<view class="jflisttitle" >
									<view class="jftitle"  @tap="toShow">{{jifen.jftitle}}</view>
									<view class="uf-ac-jc">
										<view>
											<view class="jifennum"><text>{{jifen.jifennum}}</text>积分</view>
											<view class="jfshichang">市场价：{{jifen.jfshichang}}元</view>
										</view>
										<view><button type="primary" class="duihuan">兑换</button></view>
									</view>
									
								</view>
							</view>
						</block>
					</view>
					</scroll-view>
				</swiper-item>
					<swiper-item>
						<scroll-view scroll-y  class="list">
							<view class="swiper-item">
								<block v-for="(coupon,cpid) in store_voucher_list" :key="cpid">
								<view class="yhq uf-ac-jc">
									<view class="yhq-left uf">
										<view class="yhp-img uf-ac-ajc">
											<image :src="coupon.voucher_img" lazy-load mode="widthFix"></image>
										</view>
										<view>
											<view class="miane"><text class="iconzhibi"></text>{{coupon.voucher_price}}</view>
											<view class="man">{{coupon.store_name}}满{{coupon.voucher_limit}}币可用</view>
											<view class="suoxu">需<text>{{coupon.voucher_jifen}}</text>积分</view>
										</view>
										<view class="gap-top"></view>
										<view class="gap-bottom"></view>
									</view>
									<view  class="yhq-right uf-ac-ajc">立即兑换</view>
								</view>
								</block>
							</view>
						</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>
<script>
	
	export default {
		
		data() {
			return {
				swiperheight:0,
				tabIndex:0,
				tabBar:[
					{name:"礼品兑换",id:"lipin"},
					{name:"优惠券兑换",id:"youhuiquan"}
				],
				jflist:[
					{
						jflistpic:"../../static/goods/p6.jpg",
						jftitle:"商场同款卡宾男装大力水手联名款条纹圆领短袖针织衫2019春夏新A 米白色",
						jifennum:9966,
						jfshichang:1600	
					},
					{
						jflistpic:"../../static/goods/p8.jpg",
						jftitle:"卡宾男装大力水手联名款条纹圆领短袖针织衫2019春夏新A 米白色",
						jifennum:1000,
						jfshichang:1600	
					},
					{
						jflistpic:"../../static/goods/p7.jpg",
						jftitle:"同款卡宾男装大力水手联名款条纹圆领短袖针织衫2019春夏新A 米白色",
						jifennum:1200,
						jfshichang:1600	
					},
					{
						jflistpic:"../../static/goods/p8.jpg",
						jftitle:"卡宾男装大力水手联名款条纹圆领短袖针织衫2019春夏新A 米白色",
						jifennum:1000,
						jfshichang:1600	
					},
					{
						jflistpic:"../../static/goods/p7.jpg",
						jftitle:"同款卡宾男装大力水手联名款条纹圆领短袖针织衫2019春夏新A 米白色",
						jifennum:1200,
						jfshichang:1600	
					}
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
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res)=> {
					let height = res.windowHeight - uni.upx2px(360);
					this.swiperheight = height
				}
			});
		},
		methods: {
			toJilu(){
				uni.navigateTo({
					url: 'integraljilu',
					
				});
			},
			toShow(){
				uni.navigateTo({
					url: 'integralmall-show',
					
				});
			},
			toMingxi(){
				uni.navigateTo({
					url: 'integralmx',
				});
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

<style lang="scss">
page{
	background-color:#f1f1f1;
	font-size: 30upx;
}
.nav-tab-bar{color: #787878;background: #ffffff;font-size: 34upx;}
.tab-list{ display: flex; justify-content: center;align-items: center;flex-direction: column; flex: 1; height: 100upx;}
.tabname{font-size: 32upx;}
.active{color: #c9141d;}
.nav-tab-bar-line{ border-bottom: 3upx solid #cc0e10;border-top: 3upx solid #cc0e10;width: 50upx; border-radius:20upx;}
.headerbg{ background: url(../../static/mallbg.jpg) no-repeat; width: 100%; height: 260upx}
.integral{ height: 160upx;justify-content: center;display: flex; flex-direction:column }
.integral text{color: #f1f1f1; font-size: 60upx;line-height: 1;}
.integral .jifengz{color: #f1f1f1; font-size: 28upx;padding-top: 15upx;}
.icon-gantanhao-yuankuang{font-size: 24upx; margin-right: 15upx;}
.integraljl{ height: 100upx;display: flex;}
.integraljl>view{display: flex;align-items:flex-start; flex: 1; margin: 0upx 15upx;}
.integraljl>view:first-child{justify-content: flex-end;}
.integraljl>view>text{ padding: 15upx 30upx; border: 2upx solid #f1f1f1; border-radius: 50upx;color: #f1f1f1;line-height: 1;}
.jflist{
	background: #ffffff;
	margin-top:10upx;
	padding: 20upx 3% 10upx 3%;
	width: 94%; display: flex;
	}
.jflistpic{ width: 160upx; margin-right: 30upx}
.jflistpic image{ width: 160upx; height: 160upx;border-radius: 10upx;}
.jflisttitle{ width: 100%;padding: 0;margin: 0}
.jftitle{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;font-size: 32upx; color: #333; line-height: 1.5}
.jifennum{color: #C9141D;}
.jifennum text{ font-size: 40upx; margin-right: 10upx;}
.jfshichang{color: #999; font-size: 26upx;}
.duihuan{background: linear-gradient(to right, #ff4672 , #fe3612); font-size: 28upx;padding: 10upx 20upx;line-height: 1.5;}
.yhq{margin: 20upx 2% 0 2%;}
.gap-top,.gap-bottom{position: absolute;width: 20upx;height: 20upx;right: -10upx;background-color: #f1f1f1;border-radius: 20upx;}
.gap-top{top: -10upx;}
.gap-bottom{bottom: -10upx;}
.yhq-right{background: linear-gradient(to right, #ff4672 , #fe3612);width: 200upx;color: #ffffff;border-left: 4upx dashed #f6f6f6;height: 200upx;border-radius: 0 20upx 20upx 0;font-size: 32upx;}
.yhq-left{background: #ffffff; width: 100%; height: 200upx;position: relative;border-radius: 20upx 0 0 20upx;}
.yhp-img{width: 150upx;padding:0 30upx;}
.yhp-img image{width: 150upx; height: 150upx; border-radius:150upx }
.iconzhibi{background: url(../../static/omc-logo.png) no-repeat left center;background-size: 40upx;padding-left: 40upx;}
.miane{font-size: 46upx;margin-top: 25upx;line-height: 1.2;color: #C9141D}
.man{color: #797979;}
.suoxu{color: #797979}
.suoxu text{color: #C9141D;font-weight: bold;padding: 0 10upx;}
</style>
