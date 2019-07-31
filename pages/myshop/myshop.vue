<template>
	<view>
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">
			
				<view class="nav-item active">
					<view class="uf-ac-ajc">
						<text>默认</text>
						<view class="tubiao icon iconfont icon-shangxiajiantou-" ></view>
					</view>
					<view class="nav-item-line"></view>
				</view>
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>销量</text>
						<view class="tubiao icon iconfont icon-shangjiantou" ></view>
					</view>
					<view class="nav-item-line"></view>
				</view>
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>人气</text>
						<view class="tubiao icon iconfont icon-xiajiantou" ></view>
					</view>
					<view class="nav-item-line"></view>
				</view>
				
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>筛选</text>
						<view class="tubiao icon iconfont icon-shaixuan" ></view>
					</view>
					<view class="nav-item-line"></view>
				</view>
			
		</view>
		
		<view class="place"></view>
		<view class="dianpu">
			<block v-for="(dianpu,index) in dianpulist" :key="index">
			<view class="dianpulist" >
				<view class="touxiangtop">
					<view class="touxiang"><image :src="dianpu.txpic" mode="widthFix" lazy-load></image></view>
					<view class="dpname">
						<view class="dpmingc">{{dianpu.dpname}} <text>自营</text></view>
						<view class="dpchengjia">{{dianpu.zsnum}}在售 | {{dianpu.scnum}} 成交</view>
					</view>
					<view class="jindian" @tap="toShop()"><text>进店</text></view>
				</view>
				
				<view class="uf-ac-jc dppro">
					<view>
						<image src="../../static/goods/p1.jpg" mode="widthFix"></image>
						<text>：123</text>
					</view>
					<view>
						<image src="../../static/goods/p1.jpg" mode="widthFix"></image>
						<text>：123</text>
					</view>
					<view>
						<image src="../../static/goods/p1.jpg" mode="widthFix"></image>
						<text>：123</text>
					</view>
				</view>
				
			</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headerPosition:"fixed",
				headerTop:"0px",
				index:0,
				dianpulist:[
					{
						txpic:"../../static/face.jpg",
						dpname:"BbcMall商城",
						zsnum:99,
						scnum:57,
						prolist:[
							{
								propic:"../../static/goods/p1.jpg",
								jiage:"123"
							},
							{
								propic:"../../static/goods/p2.jpg",
								jiage:"123"
							},
							{
								propic:"../../static/goods/p3.jpg",
								jiage:"123"
							}
						]
							
						
					},
					{
						txpic:"../../static/face.jpg",
						dpname:"BbcMall商城",
						zsnum:99,
						scnum:57,
						prolist:[
							{
								propic:"../../static/goods/p1.jpg",
								jiage:"123"
							},
							{
								propic:"../../static/goods/p2.jpg",
								jiage:"123"
							},
							{
								propic:"../../static/goods/p3.jpg",
								jiage:"123"
							}
						]
							
						
					},
					{
						txpic:"../../static/face.jpg",
						dpname:"BbcMall商城",
						zsnum:99,
						scnum:57,
						prolist:[
							{
								propic:"../../static/goods/p1.jpg",
								jiage:"123"
							},
							{
								propic:"../../static/goods/p2.jpg",
								jiage:"123"
							},
							{
								propic:"../../static/goods/p3.jpg",
								jiage:"123"
							}
						]
							
						
					}
				]
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		
		methods: {
			toShop(){
				uni.navigateTo({
					url: '../shop/shop',
				});
			}
		}
	}
</script>

<style>
	page{background: #f3f3f3;}
	.navbar{position: fixed;left: 0;top: var(--window-top);display: flex;width: 100%;height: 80upx;background: #fff;z-index: 10;border-bottom: 1upx solid #f5f5f5;}
	.navbar .nav-item{flex: 1;color: #787878; padding-top: 5upx}
	.uf-ac-ajc text{font-size: 32upx;}
	.active text {color: #c9141d; font-weight: 300;}
	.active .tubiao {color: #c9141d; font-weight: 300;}
	.tubiao{ font-size: 20upx; color: #ddd; margin-left: 5upx}
	.active .nav-item-line{border-bottom: 3upx solid #cc0e10;border-top: 3upx solid #cc0e10;width: 60upx; margin:10upx auto 0 auto; border-radius:20upx;  }
	.place{background-color: #ffffff;height: 80upx;}
	.dianpu{ width: 96%; margin: 0 2%;}
	.dianpulist{ background: #fff; border-radius:15upx; padding: 15upx; margin-top: 20upx;}
	.touxiangtop{border-bottom: 1upx solid #f9f9f9; padding: 10upx; display: flex;justify-content: flex-start;}
	.touxiang{ width: 100upx;}
	.touxiang image{ width: 100upx; height: 100upx; border-radius:50% ;box-shadow: 0 0 10upx #999;}
	.dpname{padding: 0 2% 0 3%; width: 95%;}
	.dpmingc { font-size: 30upx; font-weight: 300;}
	.dpmingc text{ color: #fff; background: #C9141D;padding: 3upx 15upx; border-radius: 30upx; margin-left: 10upx; font-size: 24upx; }
	.dpchengjia{ color: #999;}
	.jindian{ width: 180upx;align-items: center; display: flex; justify-content: flex-end; height: 100upx;}
	.jindian text{border: #C9141D 1upx solid ;color:#C9141D ;padding: 0 20upx; border-radius: 30upx; font-size: 28upx;}
	.dppro{ padding-top: 20upx; flex-wrap: wrap;}
	.dppro>view{ width: 31.33%; padding: 0 1%;position: relative;}
	.dppro>view>text{position: absolute;z-index: 10;bottom: 15upx;left: 10upx;font-size: 23upx; color: #fff; border-radius: 0 10upx 0 10upx; padding: 5upx 10upx 0 35upx;background:url(../../static/womc-logo.png) no-repeat 8upx 10upx; background-size: 28upx;background-color: rgba(0, 0, 0, 0.55); }
	.dppro>view image{ width: 100%; border-radius:10upx ;}
</style>
