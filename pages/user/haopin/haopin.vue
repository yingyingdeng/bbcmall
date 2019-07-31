<template>
	<view>
		<view class="tips">
			<view class="tipstitle"><text>操作提示</text></view>
			<view class="tipscont">阿士大夫撒旦法萨芬撒地方啊斯蒂芬撒旦按顺丰撒地方沙发撒</view>
		</view>
		<view class="order-list">
			<view class="list">
				<view class="row">
					
					
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
					<view class="uf-ac pjrate">
						<view class="tipstitle"><text>商品评价：</text></view>
						<view><uni-rate :value="0" :margin="5" :size="26"  :is-fill="false"   color="#bbb" active-color="#ffae00" /></view>
					</view>
					<view class="textareasz">
						<textarea class="textareatype" placeholder-style="color:#797979" placeholder="请输入评价内容"/>
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
					<view class="uf-ac pjrate">
						<view class="tipstitle"><text>商品评价：</text></view>
						<view><uni-rate :value="4" :margin="5" :size="26"  /></view>
					</view>
					<view class="textareasz">
						<textarea class="textareatype" placeholder-style="color:#797979" placeholder="请输入评价内容"/>
					</view>
					
					
					<view class="textareasz">
						<checkbox-group>
							<label>
								<checkbox value="cb" checked="true" color="#C9141D" style="transform:scale(0.8)" />匿名提交
							</label>
						</checkbox-group>
					</view>
				</view>
			</view>
		</view>
		<view class="space"></view>
		<view class="footer">
			<button class="goumai" type="warn"  @tap="toShow">提交</button>
		</view>
		
	</view>
</template>

<script>
	import uniRate from '../../../components/uni-rate/uni-rate.vue'
	
	export default {
		components: {
			uniRate
		},
		data() {
			return {
				
			}
		},
		methods: {
		 toShow(){
			 uni.navigateTo({
			 	url: 'haopinshow',
			 	
			 });
		 }	
		}
	}
</script>

<style lang="scss">
	page{background: #f3f3f3;}
	.tips{background: #fff;margin: 20upx 0 0 0;border-radius: 20upx;padding: 20upx 3%;color: #797979;}
	.tipstitle{font-size: 32upx;font-weight: bold;color: #333;}
	.tipstitle text{border-left: 5upx solid #c9141d;padding-left:15upx;line-height: 2}
	.tipscont{padding: 10upx 20upx;font-size: 30upx;}
	.red{background: #c9141d}
	.pjrate{padding: 30upx 0; font-size: 30upx;}
	.textareasz{margin: 10upx 0 20upx 0;width: 100%}
	.textareatype{box-shadow: 0 0 10upx #ddd; height: 200upx;padding: 10upx 2%; line-height: 50upx;width: 96%;border-radius: 10upx;font-size: 30upx; }
	.footer {position: fixed;bottom: 0upx;width: 96%;height: 100upx;border-top: solid 1upx #eee; background-color: #fff;z-index: 10;display: flex;justify-content: space-between;align-items: center;padding: 5upx 2%;}
	.goumai{ line-height: 90upx; height: 90upx;  display: flex; justify-content: center; align-items: center; flex: 1;color: #fff; background: linear-gradient(to right, #ff4672 , #fe3612);border-radius:40upx;}
	.space{height: 120upx;}
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
