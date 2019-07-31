<template>
	<view>
		<!-- 评论区 start -->
			<view class="comment">
				
				
					<view class="comment-body">
						<view class="uni-comment-top uf-ac-jc">
							<text>订单咨询</text>
							<view class="icon iconfont icon-ego-guanbi"></view>
						</view>
						<view class="uni-comment-content">请写明要咨询的订单编号。如需处理交易中产生的纠纷，请选择投诉</view>
						<view class="uni-comment-date">
							<text class="uni-times">2天前</text>
							<text class="text1">未回复</text>
						</view>
					</view>
					<view class="comment-body">
						<view class="uni-comment-top uf-ac-jc">
							<text>商品咨询</text>
							<view class="icon iconfont icon-ego-guanbi"></view>
						</view>
						<view class="uni-comment-content">请写明商品链接，或平台货号。如果您对商品规格、介绍等有疑问，可以在商品详情页“购买咨询”处发起咨询，会得到及时专业的回复。</view>
						<view class="uni-comment-date">
							<text class="uni-times">2天前</text>
						</view>
						<view class="uni-comment-top huifu">
							<text>平台回复</text>
						</view>
						<view class="uni-comment-content">请写明商品链接，或平台货号。如果您对商品规格、介绍等有疑问，可以在商品详情页“购买咨询”处发起咨询，会得到及时专业的回复。</view>
						<view class="uni-comment-date">
							<text class="uni-times">刚刚</text>
							<text class="text2">已回复</text>
						</view>
					</view>
					<view class="comment-body">
						<view class="uni-comment-top uf-ac-jc">
							<text>订单咨询</text>
							<view class="icon iconfont icon-ego-guanbi"></view>
						</view>
						<view class="uni-comment-content">请写明要咨询的订单编号。如需处理交易中产生的纠纷，请选择投诉</view>
						<view class="uni-comment-date">
							<text class="uni-times">2天前</text>
							<text class="text2">已回复</text>
						</view>
					</view>
				
				
			</view>
			<!-- 评论区 end -->
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			onNavigationBarButtonTap(e) {
				if (e.index==0) {
					uni.navigateTo({
						url:'mallservice'
					});
				}	
			},
		}
	}
</script>


<style>
	.comment{padding: 0 3%; width: 94%;}
	.comment-body{ background: #F3F3F3; padding:20upx 20upx 20upx 20upx; border-radius: 10upx; margin-top: 20upx;}
	.uni-comment-top text{ font-size: 30upx;color: #666;}
	.icon-ego-guanbi{border: 1upx solid #ddd;box-shadow: 0 0upx 8upx #AAAAAA; background: #F9F9F9; border-radius: 50%;font-size: 24upx; width: 40upx; height: 40upx;display: flex;justify-content: center;align-items: center;color: #999;}
	.uni-comment-content{ background: #f9f9f9; margin: 20upx 0; padding: 15upx;border-radius: 10upx;color: #999;}
	.text1{color:#C9141D;font-size: 26upx;}
	.text2{color:#36c359;font-size: 26upx;}
	.uni-times{ color: #aaa;font-size: 26upx;}
	.huifu{align-items: flex-end;justify-content: flex-end;display: flex;}
</style>
