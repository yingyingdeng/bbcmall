<template>
	<view class="content">
		<view class="w3">
			<view class="w31">
				<image class="w32" src="../../../static/addricon.png" mode=""></image>
				<text class="uni14B">浙江省杭州市西湖区 蒋村街道 紫霞街 176号</text>
			</view>
			<view class="w33">
				<view class="w2lin3">
					<text class="uni10B psds" style="color: #fff;">派</text>
					<text class="line"></text>
				</view>
				<view class="w34">
					<text class="uni2B">【派件中】浙江杭州西湖区文教公司西溪花园淘宝分部派件员 陈暮一 「15*******512」 正在为您派件</text>
					<text class="uni10B" style="color: #999;">04-20 16:10:23</text>
				</view>
			</view>
			<block v-for="(item,i) in 3" :key="i">
				<view class="w33">
					<view class="w2lin3">
						<text class="line"></text>
						<text class="uni10B psds2" style="color: #fff;"></text>
						<text class="line"></text>
					</view>
					<!-- 调试w34的padding可控制循环的间距 -->
					<view class="w34">
						<text class="uni2B">已离开 浙江杭州分拨中心 发往 浙江杭州蒋村公司</text>
						<text class="uni10B" style="color: #999;margin-top: 10upx;">04-20 16:10:23</text>
					</view>
				</view>
			</block>
			<view class="w33">
				<view class="w2lin3">
					<text class="line"></text>
					<text class="uni10B psds3" style="color: #fff;">揽</text>
					<text class="line"></text>
				</view>
				<view class="w34">
					<text class="uni2B">【已揽件】浙江海宁许村公司已揽收</text>
					<text class="uni10B" style="color: #999;">04-20 16:10:23</text>
				</view>
			</view>
			<view class="w33">
				<view class="w2lin3">
					<text class="line"></text>
					<text class="uni10B psds3" style="color: #fff;">发</text>
					<text class="line" style="background-color: #fff;"></text>
				</view>
				<view class="w34">
					<text class="uni2B">【已揽件】浙江海宁许村公司已揽收</text>
					<text class="uni10B" style="color: #999;">04-20 16:10:23</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.psds3{
		width:40upx;
		height:40upx;
		background:#999;
		box-shadow:0px 0px 4upx 0px #999;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		margin-right: 24upx;
		/* margin-top: 12upx; */
	}
	.psds2{
		width:20upx;
		height:20upx;
		background:#999;
		/* box-shadow:0px 0px 4upx 0px #999; */
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		margin-right: 34upx;
		margin-left: 11upx;
	}
	.w2lin3{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.line{
		width: 2upx;
		display: flex;
		flex: 1;
		background-color: #999;
		margin-right: 24upx;
	}
	.w34{
		display: flex;
		flex-direction: column;
		width: 86%;
		/* border: 1upx solid red; */
		padding: 24upx 0;
	}
	.psds{
		width:40upx;
		height:40upx;
		background:rgba(255,149,118,1);
		box-shadow:0px 0px 4upx 0px rgba(255,149,118,1);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		margin-right: 24upx;
		margin-top: 12upx;
	}
	.w33{
		display: flex;
		/* border: 1upx solid red; */
		padding: 0 26upx;
	}
	.w31{
		display: flex;
		padding:0 24upx 24upx 24upx;
		border-bottom: 1upx solid #F2F2F2;
	}
	.w32{
		width: 46upx;
		height: 46upx;
		display: block;
		margin-right: 24upx;
	}
	.w3{
		margin: 24upx;
		background-color: #fff;
	}
	.w2{
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin: 0 24upx;
		border-radius:16upx;
		padding: 22upx;
	}
	.w12{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	.w11{
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
	}
	.w1{
		display: flex;
		background-color: #fff;
		margin: 24upx;
		border-radius:16upx;
		padding: 22upx;
	}
	.w21{
		width: 80upx;
		height: 80upx;
		display: block;
		margin-right: 24upx;
	}
	.g1{
		width: 104upx;
		height: 104upx;
		display: block;
		margin-right: 24upx;
	}
</style>
