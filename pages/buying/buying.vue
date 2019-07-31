<template>
	<view>
		<scroll-view class="swiper-tab" scroll-x :scroll-left="scrollLeft" :scroll-with-animation="true">
			<view v-for="(item, index) in qgItems" 
				:key="item.index" 
				:class="['swiper-tab-list',index == tabIndex ? 'qg_active' : '']"
				:id="index" 
				
				@tap="gettqg(item, index)" 
				>
				<view class="list-item" >
					<text>{{item.time}}</text>
					<text v-if="item.hs <= gettime && gettime <= item.he">进行中</text>
					<text v-if="gettime < item.hs">即将开始</text>
					<text v-if="gettime > item.he">已结束</text>
					<!-- <text v-if="index == tabIndex" class="qgactive-item"></text> -->
					<!-- <text v-if="item.hs <= gettime && gettime <= item.he" class="qgactive-item"></text> -->
				</view>
			</view>
		</scroll-view>
		<view class="space"></view>
		<view class="buying">
			<block v-for="(buy,index2) in buyinglist" :key="index2">
				<view class="buyinglist" @tap="toShow">
					<view class="buyingpic">
						<image :src="buy.buyingpic" mode="aspectFill" lazy-load></image>
						<view class="zekou">{{buy.zekou}}</view>
					</view>
					<view class="buyuf" >
						<view class="buytitle">
							<view>{{buy.buytitle}}</view>
							<view class="jiage">
								<text class="iconzhibi">{{buy.zjiage}}</text>
								<text class="iconzhibi-line">{{buy.yjiage}}</text>
							</view>
						</view>
						
						<view class="buybtn">
							<button type="warn">立即抢购</button>
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
				tabIndex: 0,	//选中项下标
				scrollLeft:0,	//滚动位置
				buyinglist:[
					{
						buyingpic:"../../static/lb1.jpg",
						buytitle:"通过 HBuilderX 可视化界面通过 HBuilderX 可视化界面通过 HBuilderX 可视化界面",
						zjiage:"200",
						yjiage:"300",
						zekou:"7.8"
					},
					{
						buyingpic:"../../static/lb2.jpg",
						buytitle:"通过 HBuilderX 可视化界面通过 HBuilderX 可视化界面通过 HBuilderX 可视化界面",
						zjiage:"200",
						yjiage:"300",
						zekou:"7.8"
					},
					{
						buyingpic:"../../static/lb3.jpg",
						buytitle:"通过 HBuilderX 可视化界面通过 HBuilderX 可视化界面通过 HBuilderX 可视化界面",
						zjiage:"200",
						yjiage:"300",
						zekou:"7.8"
					}
				],
				qgItems:[{
					time:'0:00-8:00',
					hs:0,
					he:7
				},{
					time:'8:00-10:00',
					hs:8,
					he:9
				},{
					time:'10:00-12:00',
					hs:10,
					he:11
				},{
					time:'12:00-14:00',
					hs:12,
					he:13
				},{
					time:'14:00-16:00',
					hs:14,
					he:15
				},{
					time:'16:00-18:00',
					hs:16,
					he:17
				},{
					time:'18:00-20:00',
					hs:18,
					he:19
				},{
					time:'20:00-22:00',
					hs:20,
					he:21
				},{
					time:'22:00-24:00',
					hs:22,
					he:23
				}
				]
			}
		},
		computed: {
			gettime(){
				// 计算时间
				let state = '已开抢'
				let nowTime = new Date();
				let h =nowTime.getHours();
				
				return h;
			}
		},
		mounted(){
			console.log(this.gettime)
			for(let i in this.qgItems){
				if (this.qgItems[i].hs <= this.gettime){
					this.tabIndex = i;
					this.scrollLeft = i*50;
				}
			}
		},
		methods: {
			gettqg(item, index) {
				console.log(JSON.stringify(item))
				if (this.tabIndex !== index) {
					this.tabIndex = index;
					this.scrollLeft = index*50;
					this.$emit('clickItem', item);
				}
			},
			toShow(){
				uni.navigateTo({
					url: 'buying-show',
				});
			}
			
		},
	}
</script>

<style scoped>
	.buying{width: 94%; padding: 0 3%;}
	.buyinglist{margin-top: 20upx;}
	.buyingpic{height: 300upx;position: relative;}
	.zekou{position: absolute;z-index: 10;top:40upx;left: 0;border-radius: 0 10upx 10upx 0;background: #ea7484;color: #fff;padding: 0 20upx;}
	.buyingpic image{width: 100%; height: 300upx; border-radius:20upx ;}
	.buyuf{display: flex;align-items: center;justify-content: space-between;padding: 0 20upx;}
	.buytitle{ margin-top: 20upx;flex: 2; }
	.buytitle>view:first-child{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;font-size: 32upx; color: #333;padding-right: 20upx;}
	.buybtn{flex: 1; }
	.buybtn>button{ font-size: 28upx;border-radius: 50upx;}
	.iconzhibi { background:url(../../static/omc-logo.png) no-repeat center left;background-size: 32upx; padding-left: 35upx;}	
	.iconzhibi-line { background:url(../../static/line-omc-logo.png) no-repeat center left;background-size: 32upx; padding-left: 35upx;}
	.jiage .iconzhibi-line{color: #787878;text-decoration: line-through;}
	.jiage .iconzhibi{color: #C9141D;padding-right: 20upx;font-size: 30upx;}
	.jiage{margin-top: 10upx;}
	.space{height: 116upx;}
	.list {
		width: 750upx;
		height: 100%;
	}
	.swiper-box {
		flex: 1;
		width: 100%;
		height: calc(100% - 100upx);
	}
	.swiper-tab {
		width: 100%;
		white-space: nowrap;
		line-height: 64upx;
		height: 116upx;
		border:0;
		font-size:24upx;position: fixed;top: 0;z-index: 15;background: linear-gradient(to right, #ff4672 , #C9141D);
	}
	.swiper-tab-list {
		font-size: 30upx;
		width: 180upx;
		padding: 5px 0;
		display: inline-block;
		text-align: center;
		color: #ffb1b9;
		
		line-height:20px;
	}
	.list-item{
		display:flex;
		flex-direction: column;
		align-items: center;
	}
	.qg_active {
		color: #fff;
		font-weight: bold;
	}
	.qgactive-item{
		width: 0;
		height: 0;
		border-width: 5px;
		border-style: solid;
		border-color: #FF502E transparent transparent transparent;
		position:absolute;
		margin-top:45px;
	}
</style>
