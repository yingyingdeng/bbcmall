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
					<block v-for="(com,index) in tslist" :key="index">
						<view class="going" >
							<view class="uf-ac-jc">
								<view>商家：{{com.tsshop}}</view>
								<view class="tszz">状态：<text>{{com.txzhuangtai}}</text></view>
							</view>
							<view class="uf txpro">
								<view class="txpic"><image :src="com.txpic" mode="widthFix" lazy-load></image></view>
								<view class="txyuanyin">
									<view class="txname">投诉产品：{{com.tsname}}</view>
									<view class="txyy">投诉原因：<text>{{com.txyy}}</text></view>
								</view>
							</view>
							<view class="chakan uf-ac-jc">
								<view class="times">时间：{{com.times}}</view>
								<view class="uf-ac-jc">
									<view class="see" @tap="toShow">查看</view>
									<view class="cancel">取消</view>
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
						<block v-for="(com,index) in tslist" :key="index">
							<view class="going" >
								<view class="uf-ac-jc">
									<view>商家：{{com.tsshop}}</view>
									<view class="tszz">状态：<text>{{com.txzhuangtai}}</text></view>
								</view>
								<view class="uf txpro">
									<view class="txpic"><image :src="com.txpic" mode="widthFix" lazy-load></image></view>
									<view class="txyuanyin">
										<view class="txname">投诉产品：{{com.tsname}}</view>
										<view class="txyy">投诉原因：<text>{{com.txyy}}</text></view>
									</view>
								</view>
								<view class="chakan uf-ac-jc">
									<view class="times">时间：{{com.times}}</view>
									<view class="uf-ac-jc">
										<view class="see" @tap="toShow">查看</view>
										<view class="cancel">取消</view>
									</view>
								</view>
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
					{name:"进行中",id:"going"},
					{name:"已完成",id:"completed"}
				],
				tslist:[
					{
						tsshop:"BbcMaLL直营店",
						txzhuangtai:"已完成",
						txpic:"../../../static/goods/p1.jpg",
						tsname:"按实际对话框flash打飞机萨拉款到发货卢萨卡的解放后",
						txyy:"售后保障服务",
						times:"2018-02-12"
					},
					{
						tsshop:"BbcMaLL直营店",
						txzhuangtai:"已完成",
						txpic:"../../../static/goods/p2.jpg",
						tsname:"按实际对话框flash打飞机萨拉款到发货卢萨卡的解放后",
						txyy:"售后保障服务",
						times:"2018-02-12"
					}
				]
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
			toShow(){
				uni.navigateTo({
					url: 'complaintshow',
					
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
.swiper-item{ padding: 0 3%; width: 94%;}
.going{background: #FFFFFF; border-radius: 10upx; padding: 20upx; margin-top: 20upx;}
.txpro{ margin: 15upx 0upx;background: #F9F9F9;padding: 15upx 15upx 0 15upx; border-radius: 10upx;}
.txpic{ width: 140upx;}
.txpic image{width: 140upx; height: 140upx; border-radius: 10upx;}
.txyuanyin{ padding-left: 20upx; }
.txyuanyin>view{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;}
.txname{ font-size: 28upx; color: #222;-webkit-line-clamp: 2;}
.txyy{font-size: 25upx; color: #999999;-webkit-line-clamp: 1;}
.txyy text{color: #C9141D;}
.times{color: #999999; font-size: 24upx;}
.see{ background: #C9141D; padding:0upx 10upx; color: #FFFFFF; font-size: 24upx; border-radius: 5upx;}
.cancel{border: 1upx solid #f3f3f3; padding:0upx 10upx; margin-left: 20upx;font-size: 24upx;border-radius: 5upx;}
.tszz text{color:#C9141D ;}
</style>
