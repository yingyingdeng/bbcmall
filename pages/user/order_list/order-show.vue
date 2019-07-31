<template>
	<view>
		<view class="dingdan uf-ac-jc">
			<view class="address">
				<view class="city"><text>收货地址</text>{{address_info.area_info}}</view>
				<view class="add">{{address_info.address_detail}}</view>
				<view class="uf">
					<view class="name">
						{{address_info.address_realname}}
					</view>
					<view class="tel">
						{{address_info.address_mob_phone}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="duihuan">
			<view class="msgtitle"><text>物流信息</text></view>
			<view class="uf-ac-jc kuaidi" @tap="toWuliu">
				<view>
					<view>快递：<text>顺丰快递</text></view>
					<view>单号：1234567899654122</view>
				</view>
				<view><text class="icon iconfont icon-arrow-right-copy"></text></view>
			</view>
		</view>
		
		<view class="order-list">
			<view class="list">
				<view class="row">
					<view class="uf-ac-jc">
						<view class="shop uf-ac-ajc"><text class="icon iconfont icon-dianpu"></text> BbcMall直营店 </view>
						<view class="type">待发货</view>
					</view>
					
					<view class="order-info">
						<view class="left">
							<image src="../../../static/goods/p2.jpg" lazy-load mode="widthFix"></image>
						</view>
						<view class="right">
							<view class="name">
								新款B57智能手环心率血压健康手表彩色触摸屏防水 黑色
							</view>
							<view class="price-number  uf-ac-jc">
								<view class="price">价格：<text class="iconzhibi">11</text></view>
								<view class="number">数量：1</view>
							</view>
						</view>
					</view>
					<view class="order-info">
						<view class="left">
							<image src="../../../static/goods/p2.jpg" lazy-load mode="widthFix"></image>
						</view>
						<view class="right">
							<view class="name">
								新款B57智能手环心率血压健康手表彩色触摸屏防水 黑色
							</view>
							<view class="price-number  uf-ac-jc">
								<view class="price">价格：<text class="iconzhibi">11</text></view>
								<view class="number">数量：1</view>
							</view>
						</view>
					</view>
					<view class="zengpin uf">
						<view class="zppic"><image src="../../../static/goods/p2.jpg" lazy-load mode="widthFix"></image></view>
						<view class="zptitle">
							<view class="zpbttitle">新款B57智能手环心率血压健康手表彩色触摸屏防水 黑色</view>
							<view class="uf-ac-jc num">
								<view class="zp"><text>赠品</text></view>
								<view>数量：1</view>
							</view>
							
						</view>
					</view>
					<view class="manjiansong">
						满1000减100 送[赠品]，赠品库存不足，未能全部送出 使用了面额为 200的代金券，编码： 345190613516479005
					</view>
					<view class="detail">
						<view class="number font32">共<text class="red font32">2</text>件商品</view>
						<view class="sum font32">
							合计：<view class="price"><text class="iconzhibi font32">1998.5</text></view>
						</view>
						<view class="nominal">（含运费 <text class="iconzhibi">12</text>）</view>
					</view>
					<view class="btns">
						<view class="default">咨询</view>
						<view class="default" @tap="toComfrom">投诉</view>
						<view class="default" @tap="toReturn">退款退货</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="duihuan">
			<view class="msgtitle"><text>买家留言</text></view>
			<view class="xinxi">爱上的看法就撒两地分居啊斯蒂芬就sad六块腹肌萨拉丁会计法萨来得快房价爱收到了会计法上课来打飞机萨芬大立科技</view>
		</view>
		
		<view class="duihuan">
			<view class="msgtitle"><text>订单信息</text></view>
			<view class="xinxi">
				<view>订单编号：<text class="danhao">2000000000022001</text></view>
				<view>付款单号：19061319093478630005</view>
				<view>支付方式：<text class="red">站内余额支付</text></view>
				<view>下单时间：2019/01/01 08:00</view>
				<view>付款时间：2019/01/01 08:00</view>
				<view>发货时间：2019/01/01 08:00</view>
				<view>收货时间：2019/01/01 08:00</view>
			</view>
		</view>
		<view class="space"></view>
		
		<view class="footer">
			<button class="goumai" type="warn">确认收货</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address_info: {
					address_id: 1,
					member_id: 2,
					address_realname: "老常",
					city_id: 36,
					area_id: 38,
					area_info: "陕西省-西安市-高新区",
					address_detail: "唐延路1号旺座国际城A座1301",
					address_tel_phone: null,
					address_mob_phone: "18209180239",
					address_is_default: "1",
					dlyp_id: 0,
					address_longitude: null,
					address_latitude: null,
					address_mob_phone_lang: "86"
				},
			}
	},
	
	methods: {
		toWuliu(){
			uni.navigateTo({
				url: '../wuliu/wuliu',
				
			});
		},
		toComfrom(){
			uni.navigateTo({
				url: '../complaint/complaintfrom',
			});
		},
		toReturn(){
			uni.navigateTo({
				url: '../returnpro/returnpro',
				
			});
		}
	}
	
}
</script>

<style lang="scss">
	page{background: #f3f3f3;}
	.dingdan{background: url(../../../static/adbg.jpg) repeat-x bottom #fff;background-size:100upx;border-radius: 0 0 20upx 20upx;padding: 30upx 30upx 30upx 10upx;color: #333;min-height: 80upx;}
	.address{ padding-left: 20upx}
	.city{font-size: 32upx}
	.city text{background: #f52d19; border-radius: 5upx; height: 32upx; font-size: 26upx; color: #f3f3f3; margin-right: 15upx;line-height: 32upx; padding: 0upx 10upx;}
	.add{font-size: 36upx;font-weight: bold;}
	.name,.tel{font-size: 30upx; margin-right: 30upx;}
	.duihuan{background: #fff;margin: 20upx 0 0 0;border-radius: 20upx;padding: 20upx 3%;color: #797979;}
	.danhao{color: #333333;font-weight: bold;}
	.red{color: #C9141D;}
	.green{color: #1AAD19;}
	.uni14B{font-size: 32upx;}
	.msgtitle{font-size: 32upx;font-weight: bold;color: #333;}
	.msgtitle text{border-left: 5upx solid #c9141d;padding-left:15upx;line-height: 2}
	.xinxi{padding: 20upx}
	.xinxi>view{padding: 10upx 0;}
	.kuaidi{background: #f9f9f9;color: #333;padding: 20upx; border-radius: 10upx;margin: 15upx 0;}
	.zengpin{background: #f6f6f6;border-radius: 20upx;padding: 20upx; margin: 30upx 10upx;}
	.zppic{width: 120upx}
	.zppic image{width: 120upx;height: 120upx;border-radius: 10upx}
	.zptitle{margin-left: 20upx;font-size: 28upx; color: #333; line-height: 1.5}
	.zpbttitle{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;}
	.num{margin-top: 20upx}
	.zp text{background: #ef824a; color:#fff; font-size: 24upx; border-radius: 5upx;padding: 5upx 10upx;line-height: 1;}
	.manjiansong{ padding: 0upx 20upx 20upx 20upx;border-bottom: 1upx solid #f3f3f3; font-size: 30upx;color: #C9141D;}
	.iconzhibi{background: url(../../../static/omc-logo.png) no-repeat left center;background-size: 30upx; padding-left: 35upx; font-size: 30upx;color: #C9141D;}
	.font32{font-size: 32upx;}
	
	.footer {position: fixed;bottom: 0upx;width: 96%;height: 100upx;border-top: solid 1upx #eee; background-color: #fff;z-index: 10;display: flex;justify-content: space-between;align-items: center;padding: 5upx 2%;}
	.goumai{ line-height: 90upx; height: 90upx;  display: flex; justify-content: center; align-items: center; flex: 1;color: #fff; background: linear-gradient(to right, #ff4672 , #fe3612);border-radius:40upx;}
	.space{height: 120upx;}
	.shop{padding-top: 20upx;font-size: 32upx;}
	.icon-dianpu{color:#c9141d; margin-right: 10upx; }
	.order-list{
		width: 100%;
		padding-top: 20upx;
		.list{
			width: 100%;
			margin: 0;
			.row{
				width: calc(100% - 40upx);
				padding: 10upx 20upx;
				border-radius: 20upx;
				background-color: #fff;
				margin-bottom: 20upx;
				.type{
					font-size: 30upx;
					color: #c9141d;
					
					display: flex;
					padding-right: 10upx;
					align-items: center;
				}
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
							
							font-size: 22upx;
							color: #333;
							
							.price{
								font-size: 30upx;
								margin-right: 5upx;
							}
							
						}
					}
				}
				
				.detail{
					margin-top: 20upx;
					display: flex;
					justify-content: flex-end;
					align-items: flex-end;
					height: 60upx;
					font-size: 30upx;
					.sum{
						padding: 0 8upx;
						display: flex;
						align-items: flex-end;
						.price{
							font-size: 30upx;
						}
					}
					
				}
				.btns{
					padding: 20upx 0;
					height: 80upx;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					view{
						min-width: 120upx;
						height: 50upx;
						padding: 0 20upx;
						border-radius: 50upx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 28upx;
						margin-left: 20upx;
					}
					.default{
						border: solid 1upx #ccc;
						color: #666;
					}
					.pay{
						border: solid 1upx #c9141d;
						color: #c9141d;
					}
				}
			}
		}
	}
	
</style>
