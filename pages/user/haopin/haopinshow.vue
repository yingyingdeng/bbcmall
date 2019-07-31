<template>
	<view>
		<view class="haoping">
			<view class="zengpin uf">
				<view class="zppic"><image src="../../../static/goods/p2.jpg" lazy-load mode="widthFix"></image></view>
				<view class="zptitle">
					<view class="zpbttitle">新款B57智能手环心率血压健康手表彩色触摸屏防水 黑色</view>
					<view class="uf-ac pjrate">
						<view class="tipstitle"><text>商品评价：</text></view>
						<view><uni-rate :value="4" :margin="5" :size="20" :is-fill="false" :disabled="true"  color="#bbb" active-color="#ffae00" /></view>
					</view>
				</view>
			</view>
			<view class="mypingjia">
				<view class="mydpt uf-ac-jc">
					<view class="fontweight">我的评论</view>
					<view>2019-15-15</view>
					
				</view>
				<view class="mycont">单张大小不超过1M的图片 </view>
			</view>
			<view class="mypingjia">
				<view class="mydpt uf-ac-jc">
					<view>2019-15-15</view>
					<view class="fontweight">店铺回复</view>
				</view>
				<view class="mycont">上传后的图片也将被保存在个人主页相册中以便其它使用。 </view>
			</view>
			<view class="shaitu">
				<view class="sttitle">晒图</view>
				<view class="uf stpic">
					<view><image src="../../../static/goods/p8.jpg" mode="widthFix" lazy-load></image></view>
					<view><image src="../../../static/goods/p8.jpg" mode="widthFix" lazy-load></image></view>
					<view><image src="../../../static/goods/p8.jpg" mode="widthFix" lazy-load></image></view>
					<view><image src="../../../static/goods/p8.jpg" mode="widthFix" lazy-load></image></view>
					<view><image src="../../../static/goods/p8.jpg" mode="widthFix" lazy-load></image></view>
					<view><image src="../../../static/goods/p8.jpg" mode="widthFix" lazy-load></image></view>
					<view><image src="../../../static/goods/p8.jpg" mode="widthFix" lazy-load></image></view>
				</view>
			</view>
			
		</view>
		<view class="haoping">
			<view class="zengpin uf">
				<view class="zppic"><image src="../../../static/goods/p2.jpg" lazy-load mode="widthFix"></image></view>
				<view class="zptitle">
					<view class="zpbttitle">新款B57智能手环心率血压健康手表彩色触摸屏防水 黑色</view>
					<view class="uf-ac pjrate">
						<view class="tipstitle"><text>商品评价：</text></view>
						<view><uni-rate :value="4" :margin="5" :size="20" :is-fill="false" :disabled="true"  color="#bbb" active-color="#ffae00" /></view>
					</view>
				</view>
			</view>
			<view class="mypingjia">
				<view class="mydpt uf-ac-jc">
					<view class="fontweight">我的评论</view>
					<view>2019-15-15</view>
					
				</view>
				<view class="mycont">单张大小不超过1M的图片 </view>
			</view>
			<view class="mypingjia">
				<view class="mydpt uf-ac-jc">
					<view>2019-15-15</view>
					<view class="fontweight">店铺回复</view>
				</view>
				<view class="mycont">上传后的图片也将被保存在个人主页相册中以便其它使用。 </view>
			</view>
			<upload-image @upload="upload"></upload-image>
			<button type="warn" class="sbutton">我要晒图</button>
		</view>
	</view>
</template>

<script>
	import uniRate from '../../../components/uni-rate/uni-rate.vue'
	import uploadImage from "../../../components/upload-pic/upload-image.vue";
	export default {
		components: {
			uniRate,
			uploadImage
		},
		data() {
			return {
				
			}
		},
		methods: {
			toShow(){
				uni.navigateTo({
					url: 'haopin',
					
				});
			}
		}
	}
</script>

<style lang="scss">
	page{background: #f3f3f3;}
	.haoping{margin-top: 10px; background: #ffffff;padding: 20upx 3% 30upx 3%;border-radius: 20upx}
	.zengpin{background: #f3f3f3;border-radius: 10upx;padding: 20upx 20upx 10upx 20upx; margin: 10upx 0upx;}
	.zppic{width: 120upx}
	.zppic image{width: 120upx;height: 120upx;border-radius: 10upx}
	.zptitle{margin-left: 20upx;color: #333; line-height: 1.5}
	.zpbttitle{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;font-size: 30upx; }
	.pjrate{padding: 10upx 0; font-size: 28upx;}
	.tipstitle{font-size: 28upx;color: #333;font-weight: bold}
	.mypingjia{border: 1upx dashed #ddd; margin-top: 20upx; padding: 10upx 20upx; border-radius: 10upx;}
	.fontweight{font-weight: bold;color: #333}
	.mydpt{color: #999}
	.mycont{color: #666;}
	.sbutton{background: linear-gradient(to bottom right, #f0513b , #e02433); margin-top: 20upx;}
	.shaitu{margin-top: 20upx}
	.sttitle{ont-size: 28upx;color: #333;font-weight: bold; margin: 10upx 0;}
	.stpic{flex-wrap: wrap}
	.stpic>view{width: 18%; margin-right:2%}
	.stpic image{width: 100%; height: 100%; border-radius: 10upx;}
</style>
