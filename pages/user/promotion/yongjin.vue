<template>
	<view>
		
		<block v-for="(yj,index) in yongjin" :key="index">
			<view class="uf-ac-jc jifen">
				<view>
					<view class="jftext">{{yj.jftext}}</view>
					<view class="jftimes uf-ac"><text class="icon iconfont icon-shijian"></text>{{yj.jftimes}}</view>
				</view>
				<view class="jfnum">{{yj.jfnum}}</view>
			</view>
		</block>
		<view class="space"></view>
		<view class="uf-ac-jc footer">
			<view>推广会员</view>
			<view @tap="toYongjin">推广佣金</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yongjin:[
					{
						jftext:"会员登录",
						jftimes:"2019-10-10",
						jfnum:"+10"
					},
					{
						jftext:"会员注册",
						jftimes:"2019-10-10",
						jfnum:"+10"
					},
					{
						jftext:"发布好评",
						jftimes:"2019-10-10",
						jfnum:"+10"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style  lang="scss">
	page{ background: #f3f3f3;}
	.headerbg{ background: url(../../../static/mallbg.jpg) no-repeat; width: 100%; height: 160upx}
	.integral{ height: 160upx;justify-content: center;display: flex; flex-direction:column }
	.integral text{color: #f1f1f1; font-size: 60upx;line-height: 1;}
	.integral .jifengz{color: #f1f1f1; font-size: 28upx;padding-top: 15upx;}
	.icon-gantanhao-yuankuang{font-size: 24upx; margin-right: 15upx;}
	.jifen{background: #fff; padding: 10upx 30upx; border-bottom: 1upx #f3f3f3 solid}
	.jftext{font-size: 32upx;}
	.jftimes{font-size: 26upx;color: #aaa}
	.jfnum{font-size: 40upx;color: #C9141D;}
	.icon-shijian{font-size: 26upx; margin-right: 10upx;}
	.footer{position: fixed;left: 0;bottom: 0;width: 100%;z-index: 10;;height: 100upx;border: 1upx solid #f1f1f1;background: #FFFFFF}
	.footer>view{flex: 1;display:flex;justify-content: center;align-items: center;border-right: 1upx solid #f1f1f1;font-size: 32upx;color: #666;}
	.footer>view:last-child{border-right: 0}
	.space{height: 100upx}
</style>
