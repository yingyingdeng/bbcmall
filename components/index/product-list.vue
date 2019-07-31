<template>
	<view class="product animated fadeIn"  @tap="toGoods">
		<view><image mode="widthFix" :src="product.img" lazy-load></image></view>
		<view class="name">{{product.name }}</view>
		<view class="info">
			<view class="price iconzhibi">{{ product.price }}</view>
			<view class="slogan">{{ product.slogan }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			product:Object,
			index:Number
			},
			methods: {
				//商品跳转
				toGoods(e){
					
					uni.navigateTo({
						url: '../product/product-show' 
					});
				}
			}
		}
		
		
		

</script>

<style >

			
.product {
		
			border-radius: 10upx;
			background-color: #fff;
			box-shadow: 0upx 0upx 20upx rgba(0, 0, 0, 0.1);
			
		}
.product image {
			width: 100%;
			border-radius: 10upx 10upx 0 0;
		}
.product .name {
			width: 92%;
			padding: 0upx 4% 5upx 4%;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			text-align: justify;
			overflow: hidden;
			font-size: 28upx;color: #666
		}
.product .info {
			display: flex;
			justify-content: space-between;
			width: 90%;
			padding: 0upx 5% 20upx 5%;
			align-items: center;
			
		}
.product .info .price {
			color: #d53d38;
			font-size: 30upx;
			font-weight: 600;padding-left: 35upx;
		}
.product .info .slogan {
			
			color: #807c87;
			font-size: 24upx;
		}
.iconzhibi { background:url(../../static/omc-logo.png) no-repeat 0 15upx;background-size:30upx;}	


</style>
