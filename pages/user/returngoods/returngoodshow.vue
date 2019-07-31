<template>
	<view>
		
		<view class="duihuan">
			<view class="uf-ac-jc">
				<view class="jxtitle"><text>交易信息</text></view>
				<view class="type">买家申请退货</view>
			</view>
			<view class="order-info">
				<view class="left">
					<image src="../../../static/goods/p8.jpg" mode="widthFix" lazy-load></image>
				</view>
				<view class="right">
					<view class="name">
						风衣2019春季韩版新品翻领长袖双排扣长款上衣纯色英伦外套 长款风衣 白色 均码
					</view>
					<view class="price-number uf-ac-jc">
						<view class="price">价格：<text class="iconzhibi">10.00</text></view>
						<view class="number">数量：1</view>
					</view>
				</view>
			</view>
			<view class="detail">
				<view class="number font32">共<text class="red font32">1</text>件商品</view>
				<view class="sum font32">
					合计：<view class="price"><text class="iconzhibi font32">111.00</text></view>
				</view>
				<view class="nominal">（含运费 <text class="iconzhibi">12.00</text>）</view>
			</view>
		</view>
		<view class="duihuan">
			<view class="msgtitle"><text>商家退款处理</text></view>
			<view class="xinxi">
				<view>审核状态：<text class="green">待审核</text></view>
				<view>商家备注：阿萨德扩房价爱所绿多</view>
			</view>
		</view>
		<view class="duihuan">
			<view class="msgtitle"><text>平台处理</text></view>
			<view class="xinxi">
				<view>平台状态：<text class="red">待审核</text></view>
				<view>平台备注：阿萨德扩房价爱所绿多</view>
			</view>
		</view>
		<view class="duihuan">
			<view class="msgtitle"><text>我的退款申请</text></view>
			<view class="xinxi">
				<view>服务类型：<text class="danhao">退款</text></view>
				<view>退款原因：<text class="danhao">效果不好不喜欢</text></view>
				<view>退款金额：<text class="red">23.00</text></view>
				<view>退货退款说明：阿萨德扩房价爱所绿多付军撒绿多扩付</view>
				
				<view>退货凭证：</view>
				<view class="uf ufimg">
					<block v-for="(image,index) in imageList" :key="index">
						<view class="imglist">
							<image :src="image.src" lazy-load mode="widthFix"></image>
						</view>
					</block>
				</view>
			</view>
		</view>
		<view class="duihuan">
			<view class="xinxi">
				<view>订单编号：<text class="danhao">2000000000022001</text></view>
				<view>支付方式：<text class="red">23.00</text></view>
				<view>下单时间：2019/01/01 08:00</view>
				<view>付款时间：2019/01/01 08:00</view>
				<view>商家： 炎妃熙娆</view>
				<view>所在地区：陕西 西安市  长安南路82号</view>
				<view>联系方式：18182529357</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				imageList:[
					{src:"../../../static/goods/p1.jpg"},
					{src:"../../../static/goods/p2.jpg"},
					{src:"../../../static/goods/p3.jpg"}
					
					
				]
			}
		},
		
		methods: {
				toWuliu(){
					uni.navigateTo({
						url: '../wuliu/wuliu',
						
					});
				}
				
				
		}
	}
</script>

<style  lang="scss">
	page{background: #f3f3f3;}
	.duihuan{background: #fff;margin: 20upx 0 0 0;border-radius: 20upx;padding: 20upx 3%;color: #797979;}
	.jxtitle text{border-left: 5upx solid #c9141d;padding-left:15upx;line-height: 2;font-size: 32upx;font-weight: bold;color: #333;}
	.xinxi{padding:0upx 10upx}
	.xinxi>view{padding: 10upx 0;font-size: 30upx;}
	.iconzhibi{background: url(../../../static/omc-logo.png) no-repeat left center;background-size: 30upx; padding-left: 35upx; font-size: 30upx;color: #C9141D;}
	.red{color: #C9141D;}
	.font32{font-size: 32upx;}
	.type{font-size: 30upx;color: #c9141d;display: flex;padding-right: 10upx;align-items: center;}
	.pjrate{padding: 10upx ; font-size: 30upx;}
	.textareasz{margin: 20upx 0 20upx 0;width: 100%}
	.textareatype{box-shadow: 0 0 10upx #ddd; height: 200upx;padding: 10upx 2%; line-height: 50upx;width: 96%;border-radius: 10upx;font-size: 30upx; }
	.footer {position: fixed;bottom: 0upx;width: 96%;height: 100upx;border-top: solid 1upx #eee; background-color: #fff;z-index: 10;display: flex;justify-content: space-between;align-items: center;padding: 5upx 2%;}
	.goumai{ line-height: 90upx; height: 90upx;  display: flex; justify-content: center; align-items: center; flex: 1;color: #fff; background: linear-gradient(to right, #ff4672 , #fe3612);border-radius:40upx;}
	.space{height: 120upx;}
	.leixing{padding:10upx ; }
	.leixing>view{font-size: 30upx;}
	.danhao{color: #333333;font-weight: bold;}
	.msgtitle{font-size: 32upx;font-weight: bold;color: #333;}
	.msgtitle text{border-left: 5upx solid #c9141d;padding-left:15upx;line-height: 2}
	.kuaidi{background: #f9f9f9;color: #333;padding: 20upx; border-radius: 10upx;margin: 15upx 0;}
	.tuihuo{align-items: center}
	.tipstitle{font-size: 30upx}
	.yellow{color: #EB632C;}
	.red{color: #C9141D;}
	.green{color: #09BB07;}
	.font30{font-size: 30upx}
	.imglist{width: 200upx;margin-right: 32upx;}
	.imglist image{width: 200upx;height:200upx; border-radius: 10upx}
	.ufimg{flex-wrap: wrap;}
	.contsm{background: #f9f9f9;border-radius: 10upx; padding: 0 20upx}
	.order-info{
		margin-top: 30upx;
		padding:0 10upx 40upx 10upx;
		display: flex;
		border-bottom: 1upx solid #f3f3f3;
		.left{
			flex-shrink: 0;
			width: 160upx;
			height: 160upx; margin-right: 20upx;
			image{
				width: 160upx;
				height: 160upx;
				border-radius: 10upx;
			}
		}
		.right{
			width: 100%;
			margin-left: 10upx;
			position: relative;
			.name{
				width: 100%;
				font-size: 30upx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.spec{
				color: #a7a7a7;
				font-size: 22upx;
	
			}
			.price-number{
				position: absolute;
				bottom: 0;
				width: 100%;
				font-size: 30upx;
				color: #333;
				.price{
					font-size: 30upx;
					margin-right: 5upx;
				}
				
			}
		}
	}
	.detail{
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		height: 60upx;
		font-size: 30upx;
		margin-top: 20upx;
		.sum{
			padding: 0 8upx;
			display: flex;
			align-items: flex-end;
			.price{
				font-size: 30upx;
			}
		}
		
	}
</style>
