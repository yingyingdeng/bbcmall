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
					
					<view class="return">
						<view class="uf-ac-jc shopbt">
							<view class="shop"><text class="icon iconfont icon-dianpu"></text> 炎妃熙娆</view>
							<view class="type">审核状态：<text>待审核</text></view>
						</view>
						<view class="uf-ac-jc tkdh">
							<view>退款单号：552104190619204403</view>
							<view>06/19 20:44</view>
						</view>
						<view class="uf-ac-jc tkcont">
							<view>
								<view class="tktitle">订单商品全部退款</view>
								<view>订单单号：2000000000025802</view>
							</view>
							<view class="tkje">
								<view>退款金额</view>
								<view><text class="iconzhibi">123.00</text></view>
							</view>
						</view>
						<view class="uf-ac-jc zhuangtai">
							<view class="ptzt">平台状态：<text>无</text></view>
							<view class="btns">
								<view class="default"  @tap="totkShow">查看详情</view>
								<view class="default">联系卖家</view>
							</view>
						</view>
					</view>
					
				</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y  class="list">
					<view class="swiper-item">
						<view class="return">
							<view class="uf-ac-jc shopbt">
								<view class="shop"><text class="icon iconfont icon-dianpu"></text> 炎妃熙娆</view>
								<view class="type">审核状态：<text>待审核</text></view>
							</view>
							<view class="uf-ac-jc tkdh">
								
								<view>退款单号：552104190619204403</view>
								<view>06/19 20:44</view>
							</view>
							<view class="uf-ac-jc tkcont">
								<view class="uf">
									<view class="pro"><image src="../../../static/goods/p10.jpg" mode="widthFix" lazy-load></image></view>
									<view>
										<view class="tktitlex">订单商品全部退款订单商品全部退款订单商品全部退款</view>
										<view>订单单号：2000000000025802</view>
									</view>
								</view>
								<view class="tkje">
									<view>退款金额</view>
									<view><text class="iconzhibi">123.00</text></view>
								</view>
							</view>
							<view class="uf-ac-jc zhuangtai">
								<view class="ptzt">平台状态：<text>无</text></view>
								<view class="btns">
									<view class="default" @tap="tothShow">查看详情</view>
									<view class="default">联系卖家</view>
								</view>
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
	import uniNavBar from "../../../components/uni-nav-bar/uni-nav-bar.vue";
	
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				swiperheight:0,
				tabIndex:0,
				tabBar:[
					{name:"退款申请",id:"going"},
					{name:"退款退货",id:"completed"}
				],
				
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
			},
			tothShow(){
				uni.navigateTo({
					url: '../returnpro/returnshow',
					
				});
			},
			totkShow(){
				uni.navigateTo({
					url: '../returngoods/returngoodshow',
					
				});
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
	.return{background: #fff;margin: 20upx 0 0 0;border-radius: 20upx;padding: 20upx 3%;}
	.iconzhibi{background: url(../../../static/omc-logo.png) no-repeat left center;background-size: 30upx; padding-left: 35upx; font-size: 30upx;color: #C9141D;}
	.red{color: #C9141D;}
	.font32{font-size: 32upx;}
	.shopbt{border-bottom: 1upx solid #f3f3f3;padding: 10upx 0;}
	.shop{padding-top: 0upx;font-size: 32upx;}
	.icon-dianpu{color:#c9141d; margin-right: 10upx; }
	.type{font-size: 30upx;display: flex;align-items: center;}
	.type text{color: #c9141d;}
	.tkdh{padding: 10upx 0;color: #999;}
	.tkcont{background: #f6f6f6;padding: 15upx 20upx;border-radius: 10upx;color: #999;}
	.tktitle{font-size: 30upx;color: #333;;}
	.tkje{align-items: flex-end;display: flex;justify-content: center;flex-direction: column;}
	.zhuangtai{padding-top: 20upx;}
	.ptzt{font-size: 30upx;color: #999;}
	.ptzt text{color:#c9141d ;}
	.btns{padding: 10upx 0;display: flex;align-items: center;justify-content: flex-end;}
	.btns>view{min-width: 120upx;height: 50upx;padding: 0 20upx;border-radius: 50upx;display: flex;justify-content: center;align-items: center;font-size: 28upx;margin-left: 20upx;}
	.default{border: solid 1upx #ccc;color: #666;}
	.pro{width: 100upx;margin-right: 20upx;}
	.pro image{width: 100upx;height: 100upx;border-radius: 10upx;}
	.tktitlex{font-size: 30upx;color: #333;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;}
	
	
</style>
