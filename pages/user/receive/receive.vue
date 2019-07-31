<template>
	<view>
		<view class="receive">
			<view class="receivebt"><text>订单交易通知</text></view>
			<view>
				<view class="uf-ac-jc receivelist">
					<view class="text">付款成功提示</view>
					<view><switch checked color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
				<view class="uf-ac-jc receivelist">
					<view>商品出库提示</view>
					<view><switch  color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
				<view class="uf-ac-jc receivelist">
					<view>兑换码即将到期提醒</view>
					<view><switch  color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
			</view>
		</view>

		<view class="receive">
			<view class="receivebt"><text>余额卡券提醒</text></view>
			<view>
				<view class="uf-ac-jc receivelist">
					<view class="text">余额变动提醒</view>
					<view><switch  color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
				<view class="uf-ac-jc receivelist">
					<view>充值卡余额变动提醒</view>
					<view><switch checked color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
				<view class="uf-ac-jc receivelist">
					<view>代金券即将到期提醒</view>
					<view><switch checked color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
				<view class="uf-ac-jc receivelist">
					<view>代金券使用提醒</view>
					<view><switch  color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
			</view>
		</view>
		      
		<view class="receive">
			<view class="receivebt"><text>售后服务消息</text></view>
			<view>
				<view class="uf-ac-jc receivelist">
					<view class="text">退换货消息</view>
					<view><switch  color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
				<view class="uf-ac-jc receivelist">
					<view>到货通知消息</view>
					<view><switch  color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
				<view class="uf-ac-jc receivelist">
					<view>平台咨询回复提示</view>
					<view><switch  color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
				<view class="uf-ac-jc receivelist">
					<view>商品咨询回复提示</view>
					<view><switch  color="#C9141D" style="transform:scale(0.7)"/></view>
				</view>
			</view>
		</view>
		<view class="anniu">
			<button type="warn" class="button">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{background: #f3f3f3;}
	.receive{background: #fff;margin: 20upx 2% 0 2%;border-radius: 20upx;}
	.receivebt{font-size: 34upx;font-weight: bold;padding: 30upx 30upx 20upx 30upx;}
	.receivebt text{border-left: 10upx solid #C9141D; padding-left: 20upx;line-height: 1;}
	.receivelist{border-bottom: 1upx solid #f3f3f3;padding: 10upx 0 30upx 30upx;}
	.receivelist:last-child{border-bottom:0}
	.text{font-size: 30upx;}
	.anniu{margin: 20upx 2%;}
	.button{background: #C9141D;color: #FFFFFF;}
</style>
