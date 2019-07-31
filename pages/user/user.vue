<template>
	<view>
		<view class="header">
			<view class="status_bar">  
				<view class="top_view"></view>  
			</view>
			<view class="shezhi" @tap="toSetting">
				<text class="icon iconfont icon-shezhi"></text>
			</view>
			
			<view class="userinfo uf">
				<view class="face"><image :src="userinfo.face" lazy-load mode="widthFix"></image></view>
				<view class="info">
					<view class="username uf-ac">
						<view class="name">{{userinfo.username}}</view>
						<view class="vip icon iconfont" :class="userinfo.vip2"></view>
					</view>
					<view class="integral"><text>{{userinfo.phone}}</text></view>
				</view>
			</view>
			
		</view>
		
		<view class="paybox">
			<view class="box">
				<view class="qianbao uf-ac-ajc" @tap="toMoney">
					<view class="yenum">{{userinfo.Balance}}</view>
					<view class="yetitle">余额（<text class="iconzhibi"></text>）</view>
				</view>
				<view class="qianbao uf-ac-ajc">
					<view class="yenum">{{userinfo.integral}}</view>
					<view class="yetitle">积分</view>
				</view>
				<view class="qianbao uf-ac-ajc" @tap="toChongzhi">
					<view class="icon iconfont icon-chongzhi-"></view>
					<view class="yetitlecc">充值</view>
				</view>
				
			</view>
		</view> 
		
		<view class="orderbox">
			<view class="uf-ac-jc order">
				<view class="myorder">我的订单</view>
				<view class="allorder">全部订单<text class="icon iconfont icon-arrow-right-copy"></text></view>
			</view>
			<view class="orderlist uf-ac-jc" >
				
					<view class="uf-ac-ajc ordertb" v-for="(row,index) in orderTypeLise" :key="index" hover-class="hover" @tap="toOrderType(index)">
						<view class="tubiao icon iconfont" :class="row.iconclass">
							<view class="badge" v-if="row.badge>0">{{row.badge}}</view>
						</view>
						<view class="ordertitle">{{row.name}}</view>
						
					</view>
			
			</view>
		</view>
		
		<view class="orderbox">
			<view class="uf-ac-jc order">
				<view class="myorder">我的常用</view>
			</view>
			<view class="cylist">
				<view class="changyong uf-ac-ajc" v-for="(list,list_i) in severList" :key="list_i"  @tap="toPage(list_i)">
					<view class="tubiao2 icon iconfont" :class="list.iconclass"></view>
					<view class="ordertitle">{{list.name}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				userinfo:{
					
				},
				orderTypeLise:[
					//name-标题 icon-图标 badge-角标
					{
						name:'待付款',
						iconclass:'icon-daifukuan',
						badge:0,
					},
					{
						name:'待发货',
						iconclass:'icon-icon-test',
						badge:1,
					},
					{
						name:'待收货',
						iconclass:' icon-daishouhuo',
						badge:2,
					},
					{
						name:'待评价',
						iconclass:' icon-daipingjia',
						badge:3,
					},
					{
						name:'退换货',
						iconclass:'icon-tianmaowuyoutuihuanhuo juse',
						badge:0,
					}
				],
				severList:[
					{
						name:'个人资料',
						iconclass:'icon-ziliao juse',
						url:'../user/setting/setting',
					},
					{
						name:'积分商城',
						iconclass:' icon-dingdan qianlan',
						url:'../integralmall/integralmall',
					},
					{
						name:'我的推广',
						iconclass:'icon-tuiguangdingdan qred',
						url:'../user/promotion/promotion',
					},
					{
						name:'系统消息',
						iconclass:' icon-zhaoshangxiaochengxu-xitongxiaoxi qgreen',
						url:'../user/systeminfo/systeminfo',
					},
					{
						name:'我的投诉',
						iconclass:' icon-haofangtuo400iconfont2tousu qgreen',
						url:'../user/complaint/complaint',
					},
					{
						name:'我的收藏',
						iconclass:'icon-shoucang juse',
						url:'../user/keep/keep',
					},
					{
						name:'平台客服',
						iconclass:'icon-kefu1 qianlan',
						url:'../user/mallservice/servicelist',
					},
					{
						name:'好评宝贝',
						iconclass:' icon-daipingjia qred',
						url:'../user/haopin/haopinshow',
					},
					{
						name:'我的足迹',
						iconclass:' icon-jiaoyinzujifangke qred',
						url:'../user/foot/foot',
					},
					{
						name:'优惠券',
						iconclass:' icon-kaquan qgreen',
						url:'../user/coupon/coupon',
					},
					{
						name:'收货地址',
						iconclass:'icon-dizhi juse',
						url:'../address/address',
					}
				]
			};
		},
	
		onLoad() {
			this.init();
		},
		methods: {
			init() {
				//用户信息
				this.userinfo={
					face:'../../static/HM-PersonalCenter/face.jpeg',
					username:"VIP会员10240",
					vip1:"icon-canpinhuihuiyuanv1",
					vip2:"icon-canpinhuihuiyuanv2",
					vip3:"icon-canpinhuihuiyuanv3",
					vip4:"icon-canpinhuihuiyuanv4",
					phone:"187****0026",
					Balance:"499.90",
					integral:1856
				}		
			},
			toOrderType(index){
				uni.navigateTo({url:'../user/order_list/order_list?tabIndex=0'}) 
			},
			toSetting(){
				uni.navigateTo({
					url:'../user/setting/setting'
				})
			},
			toChongzhi(){
				uni.navigateTo({
					url: 'deposit/deposit',	
				});
			},
			toMoney(){
				uni.navigateTo({
					url: 'deposit/money',
					
				});
			},
			//用户点击列表项
			toPage(list_i){
				
				uni.navigateTo({url: this.severList[list_i].url});
			},
		}
	}
</script>

<style lang="scss">
	page{background-color:#f3f3f3}
	.header{background:linear-gradient(to right, #f0513b , #e02433);padding-bottom: 20upx;}
	.status_bar {height: var(--status-bar-height); width: 100%; background-color:transparent;}  
	.top_view {height: var(--status-bar-height); width: 100%; position: fixed; background-color:transparent; top: 0;z-index: 999; }
	.hover{background-color:#f9f9f9;border-radius: 10upx;}
	
	.userinfo{padding: 0 4%;}
	.face{width: 120upx; }
	.face image{width: 120upx;height: 120upx;border-radius: 120upx;box-shadow: 0 0 10upx #7a000a;}
	.info{margin-left: 20upx;}
	.username{width:100%;}
	.name{font-size: 36upx;margin-right: 10upx;color: #fff;;}
	.vip{font-size: 30upx;color: #fff;}
	.integral text{padding:10upx 20upx;height:40upx;color:#fff;background-color:rgba(0,0,0,0.1);border-radius:40upx;font-size:24upx}
	.shezhi{display: flex;align-items: center;justify-content: flex-end;padding: 0 4%;}
	.shezhi text{font-size:46upx ; color: #fff; margin-left: 20upx;}
	
	.paybox{background:linear-gradient(to right, #f0513b , #e02433);width:96%;height:100upx;padding:0 2%;margin-bottom:calc(80upx );display:flex;align-items:flex-start;border-radius:0 0 100% 100%;margin-top: -1upx;}
	.box{width:98%;padding:30upx 1%;background-color:#fefefe;border-radius:20upx;box-shadow:0 0 20upx rgba(0,0,0,0.1);display: flex;justify-content: space-between;height: 100upx}
	.box>view,.orderlist>view{flex: 1;flex-direction: column;}
	.qianbao{border-right: 1upx solid #f3f3f3;}
	.qianbao:last-child{border-right:0}
	.qianbao>view,.ordertb>view,.changyong>view{line-height: 1}
	.yenum{font-weight: bold;margin-bottom: 20upx; font-size: 36upx}
	.yetitle{color: #999;font-size: 26upx;}
	.iconzhibi{background: url(../../static/homc-logo.png) no-repeat center center;background-size: 26upx; width: 26upx;height: 26upx;display: inline-block;}
	.icon-chongzhi-{font-size: 46upx;color: #c9141d;margin-bottom: 10upx;}
	.yetitlecc{color: #c9141d;font-size: 26upx;}
	
	.orderbox{width:96%;margin:0 2%;background-color:#fefefe;border-radius:20upx;box-shadow:0 0 20upx rgba(0,0,0,0.05);padding:10upx 0;margin-bottom: 20upx; }
	.order{padding: 20upx;border-bottom: 1upx solid #f3f3f3;}
	.myorder{font-size: 30upx;font-weight: bold;}
	.allorder{color: #999;}
	.icon-arrow-right-copy{font-size: 24upx;}
	.orderlist{padding: 20upx 0upx;}
	.tubiao{font-size: 65upx; color: #787878;font-weight: 300;position: relative}
	.tubiao2{font-size: 65upx; color: #787878;font-weight: 300;}
	.badge{width:4vw;height:4vw;background:linear-gradient(to right, #f0513b , #e02433);border-radius:100%;font-size:20upx;color:#fff;display:flex;align-items:center;justify-content:center;position: absolute;z-index: 10;right: -1vw;top: 0;}
	.ordertitle{color: #999;font-size: 24upx;padding: 10upx 0 20upx 0}
	.cylist{display: flex; width: 100%;flex-wrap: wrap;align-items: center;justify-content: flex-start;padding-bottom: 20upx;}
	.changyong{width: 25%;flex-direction: column;padding-top: 30upx;}
	.juse{color: #fe905b}
	.qianlan{color: #90c6ff;}
	.qred{color: #f88082;}
	.qgreen{color: #64d4c6}
	
	
</style>
