<template>
	<view>
		<view class="duihuan">
			<view class="uf-ac-jc">
				<view class="jxtitle"><text>投诉管理</text></view>
				<view class="type">新投诉</view>
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
			<view class="xinxi">
				<view>订单编号：<text class="danhao">2000000000022001</text></view>
				<view>支付方式：<text class="red">站内余额支付</text></view>
				<view>下单时间：2019/01/01 08:00</view>
				<view>付款时间：2019/01/01 08:00</view>
				<view>商家： 炎妃熙娆</view>
				<view>所在地区：陕西 西安市  长安南路82号</view>
				<view>联系方式：18182529357</view>
			</view>
		</view>
		<view class="duihuan">
			<view class="uf-ac-jc">
				<view class="jxtitle"><text>投诉申请</text></view>
			</view>
			<view class="tousu">
				<radio-group @change="radioChange">
					<label v-for="(item, index) in items" :key="item.value">
						<view class="uf-ac tousulist">
							<view>
								<radio :value="item.value" :checked="index === current" color="#C9141D" style="transform:scale(0.8)" />
							</view>
							<view class="tstitle">{{item.name}}</view>
						</view>
						<view class="tscont">{{item.cont}}</view>
					</label>
				</radio-group>
			</view>
			
			<view class="pjrate">
				<view class="tipstitle"><text>投诉内容</text></view>
				<view class="textareasz">
					<textarea class="textareatype" placeholder-style="color:#797979" placeholder="请输入评价内容"/>
				</view>
			</view>
			 
			 <!-- 上传图片 -->	
			<upload-image @upload="upload"></upload-image>
			
		</view>
		<view class="space"></view>
		<view class="footer">
			<button class="goumai" type="warn">提交</button>
		</view>
	</view>
</template>

<script>
	import uploadImage from "../../../components/upload-pic/upload-image.vue";
	export default {
		components: {
			uploadImage
		},
		data() {
			return {
				imgList: [],
				
				items: [{
						value: '售后保障服务',
						name: '售后保障服务 ',
						cont:'交易完成后30天内，在使用商品过程中，发现商品有质量问题或无法正常使用，可进行维权。'
					},
					{
						value: '未收到货',
						name: '未收到货',
						cont:'交易成功，未收到货，钱已经付给商家，可进行维权。'
					}
				]
			}
		},
		
		methods: {

				radioChange(evt) {
					for (let i = 0; i < this.items.length; i++) {
						if (this.items[i].value === evt.target.value) {
							this.current = i;
							break;
						}
					}
				},
				upload(arr){
					this.imgList=arr;
				}
		}
	}
</script>

<style  lang="scss">
	page{background: #f3f3f3;}

	radio-group label{padding:0;margin: 0}
	.duihuan{background: #fff;margin: 20upx 0 0 0;border-radius: 20upx;padding: 20upx 3%;color: #797979;}
	.jxtitle text{border-left: 5upx solid #c9141d;padding-left:15upx;line-height: 2;font-size: 32upx;font-weight: bold;color: #333;}
	.xinxi{padding: 20upx}
	.xinxi>view{padding: 10upx 0;}
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
	.danhao{color: #333333;font-weight: bold;}
	.tousu{padding: 10upx 0;}
	.tousulist{padding: 10upx 0;}
	.tstitle{font-size: 30upx; color: #333;}
	.tscont{padding: 10upx 0 10upx 60upx;color: #999}
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
