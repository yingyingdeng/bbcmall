<template>
	<view>
		<view class="comments" id="comments">
			<view class="row">
				<view class="text">商品评价(<text class="pj_red">{{comment.number}}</text>)</view>
				<view class="arrow">
					<view class="show" @tap="showComments()">
						<text class="pj_red">98%</text>好评
						<view class="icon iconfont icon-xiajiantou"></view>
					</view>
				</view>
			</view>
			<view class="pingjia">
				<view class="active"> 全部（190+）</view>
				<view>好评（180+）</view>
				<view>中评（20+）</view>
				<view>差评（10+）</view>
			</view>
			<view class="comment">
				<view class="user-info">
					<view class="face"><image :src="comment.userface"></image></view>
					<view class="username">{{comment.username}}</view>
				</view>
				<view class="content">
					{{comment.content}}
				</view>
				<view class="compic">
					<view @tap="toDetail"><image src="../../static/goods/p1.jpg" mode="widthFix"></image></view>
					<view><image src="../../static/goods/p1.jpg" mode="widthFix"></image></view>
					<view><image src="../../static/goods/p1.jpg" mode="widthFix"></image></view>
					<view><image src="../../static/goods/p1.jpg" mode="widthFix"></image></view>
					<view><image src="../../static/goods/p1.jpg" mode="widthFix"></image></view>
					<view><image src="../../static/goods/p1.jpg" mode="widthFix"></image></view>
					<view><image src="../../static/goods/p1.jpg" mode="widthFix"></image></view>
					<view><image src="../../static/goods/p1.jpg" mode="widthFix"></image></view>
				</view>
				<view class="peizhi">黑色，全网通6+128G ，官网标配</view>
				<view class="pinglun">
					<view class="user-info">
						<view class="face"><image :src="comment.userface"></image></view>
						<view class="username">{{comment.username}}</view>
					</view>
					<view class="content">
						{{comment.content}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

	data() {
		return {
			comment:{
				number:1,
				userface:'../../static/face.jpg',
				username:'大黑哥',
				content:'很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！',
				commentpic:[
					{commentpiclist:'../../static/goods/p1.jpg'},
					{commentpiclist:'../../static/goods/p1.jpg'},
					{commentpiclist:'../../static/goods/p1.jpg'}
				]
			}
		}
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url: '../detail/detail',
					
				});
			}
		}
	}
</script>

<style lang="scss">
	.comments {
		width: 92%;
			padding: 20upx 4%;
			background-color: #fff;
			margin-top: 10upx;
		.row {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			margin: 0 0 30upx 0;
			.text {
				font-size: 30upx;
			}
			.pj_red{ color: #c9141d}
			.arrow {
				font-size: 28upx;
				position: absolute;
				right: 4%;
				color: #999;
				.show {
					display: flex;
					align-items: center;
					.icon {
						color: #ccc;
					}
				}
			}
		}
		.comment {
			width: 100%;
			.user-info {
				width: 100%;
				height: 40upx;
				display: flex;
				align-items: center;
				.face {
					width: 40upx;
					height: 40upx;
					margin-right: 8upx;
					image {
						width: 40upx;
						height: 40upx;
						border-radius: 100%;
					}
				}
				.username {
					font-size: 24upx;
					color: #999;
				}
			}
			.content {
				margin-top: 10upx;
				font-size: 26upx;
			}
		}
	}
	.compic{display: flex; flex-wrap: wrap; padding-bottom: 10upx; }
	.compic>view{ display: flex;align-items: center; justify-content: center; width: 18%; padding: 10upx 2% 10upx 0;}
	.compic image{ width: 100%;border-radius:10upx;box-shadow: 0 0 10upx #f1f1f1; }
	.peizhi{ color: #999; font-size: 24upx;}
	.pinglun{ border-top: 1upx solid #f5f5f5; padding-top:15upx; margin-top: 15upx }
	.pingjia{ display: flex; flex-wrap: wrap; padding-bottom: 30upx;}
	.pingjia>view{ border: 1upx solid #f3f3f3; padding: 10upx 15upx 0; border-radius: 10upx; margin-right: 10upx; font-size: 24upx; margin-bottom: 10upx;}
	.pingjia .active{background: #c9141d ; color: #fff;border: #c9141d 1upx solid;}
</style>
