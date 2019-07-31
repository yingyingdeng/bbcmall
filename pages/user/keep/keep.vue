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
		<swiper  class="swiper-box" :current="tabIndex" @change="tabChange" :style="{height:swiperheight+'px'}">
			<swiper-item>
				<scroll-view scroll-y  class="list">
				<view class="swiper-item">
					<view class="dianpu">
					<block v-for="(shop,index) in shoplist" :key="index">
						<view class="dianpulist" >
							<view class="touxiangtop">
								<view class="touxiang"><image :src="shop.shoplogo" mode="widthFix" lazy-load></image></view>
								<view class="dpname">
									<view class="dpmingc">{{shop.shopname}} <text>自营</text></view>
									<view class="dpchengjia">{{shop.attentionnum}}人关注</view>
								</view>
								<view class="jindian" @tap="toShop()"><text class="icon iconfont icon-gengduo"></text></view>
							</view>
							
							<view class="uf-ac-jc dppro" >
								<block  v-for="(shoplist,index2) in shop.shopproduct" :key="index2">
									<view>
										<image :src="shoplist.propic" mode="widthFix"></image>
										<text>：{{shoplist.proprice}}</text>
									</view>
								</block>
							</view>
							
						</view>
						</block>
					</view>
				</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y  class="list">
				<view class="swiper-item">
					<view class="product">
						<block v-for="(pro,index) in prolist" :key="index">
							<view class="floor-item">
								<view><image :src="pro.productpic" mode="aspectFill" lazy-load></image></view>
								<view class="tzcont" @tap="toProduct(pro)">
									<text class="titlex">{{pro.protitle}}</text>
									<view class="proguanzhu"><text>{{pro.proattentionnum}}</text>人关注</view>
									<view class="uf-ac-jc">
										<view><text class="price">:{{pro.productprice}}</text></view>
										<view><text class="icon iconfont icon-gouwuche"></text></view>
									</view>
								</view>
							</view>
						</block>
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
					{name:"产品",id:"product"},
					{name:"店铺",id:"shop"}
				],
				shoplist:[
					{
					shoplogo:"../../../static/face.jpg",
					shopname:"bbcmall自营店",
					ziying:"flase",
					attentionnum:100,
					shopproduct:[
							{
								propic:"../../../static/goods/p1.jpg",
								proprice:100
							},
							{
								propic:"../../../static/goods/p1.jpg",
								proprice:100
							},
							{
								propic:"../../../static/goods/p1.jpg",
								proprice:100
							},
						]
					},
					
			],
			proructurl:"",
			prolist:[
				{	
					proid:1,
					protitle:"111安上路肯定会发烧了看到回复撒娇考虑到粉红色拉开捷达黑龙江快递费",
					productpic:"../../../static/goods/p1.jpg",
					productprice:100,
					proattentionnum:100,
					prourl:"../../product/product-show"
				},
				{	
					proid:2,
					protitle:"222安上路肯定会发烧了看到回复撒娇考虑到粉红色拉开捷达黑龙江快递费",
					productpic:"../../../static/goods/p1.jpg",
					productprice:100,
					proattentionnum:100,
					prourl:"../../product/product-show"
				}
				
			]
				
		}
	},
	
	onLoad() {
		uni.getSystemInfo({
			success: (res)=> {
				let height = res.windowHeight - uni.upx2px(115);
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
		toShop(){
			uni.navigateTo({
				url: '../../shop/shop',
			});
		},
		toProduct(e){
			uni.navigateTo({
				url:"../../product/product-show?id="+e.proid
			})
			
		},
		tabChange(e){
			uni.showLoading();
			this.tabIndex=e.detail.current;
			uni.hideLoading();
		},
		
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

.dianpu{ width: 96%; margin: 0 2%;}
.dianpulist{ background: #fff; border-radius:15upx; padding: 15upx; margin-top: 20upx;}
.touxiangtop{border-bottom: 1upx solid #f9f9f9; padding: 10upx; display: flex;justify-content: flex-start;}
.touxiang{ width: 100upx;}
.touxiang image{ width: 100upx; height: 100upx; border-radius:50% ;box-shadow: 0 0 10upx #999;}
.dpname{padding: 0 2% 0 3%; width: 95%;}
.dpmingc { font-size: 30upx; font-weight: 300;}
.dpmingc text{ color: #fff; background: #C9141D;padding: 3upx 15upx; border-radius: 30upx; margin-left: 10upx; font-size: 24upx; }

.jindian{ width: 180upx;align-items: center; display: flex; justify-content: flex-end; height: 100upx;}
.icon-gengduo{ font-size: 40upx; color: #999;}
.dppro{ padding-top: 20upx; flex-wrap: wrap;}
.dppro>view{ width: 31.33%; padding: 0 1%;position: relative;}
.dppro>view>text{position: absolute;z-index: 10;bottom: 15upx;left: 10upx;font-size: 23upx; color: #fff; border-radius: 0 10upx 0 10upx; padding: 5upx 10upx 0 35upx;background:url(../../../static/womc-logo.png) no-repeat 8upx 10upx; background-size: 28upx;background-color: rgba(0, 0, 0, 0.55); }
.dppro>view image{ width: 100%; border-radius:10upx ;}


.product{ width: 96%; margin: 0 2%;}
.floor-item{border: 1upx solid #f3f3f3; background: #fff; padding: 20upx 20upx 10upx 20upx; border-radius: 20upx;display: flex; margin-top: 20upx;}
.floor-item	image{width:160upx;border-radius: 6upx;height: 160upx; margin-right: 20upx}
.tzcont{ color: #797979 }
.floor-item .titlex{ display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;font-size: 32upx; padding: 0; margin: 0; color: #333}
.floor-item .price{color: #C9141D;background:url(../../../static/omc-logo.png) no-repeat left center; font-size: 30upx; background-size: 40upx; padding-left: 40upx;line-height: 1;}
.yuanjia{ color: #797979;text-decoration:line-through; margin-left: 20upx;}
.floor-item .price_line{color: #797979;background:url(../../../static/line-omc-logo.png) no-repeat 0upx 4upx; font-size: 30upx; background-size: 40upx; padding-left: 40upx;line-height: 1;}
.proguanzhu{ color: #999; padding-top: 10upx;}
.icon-gouwuche{ font-size: 40upx;color: #C9141D;}
</style>
