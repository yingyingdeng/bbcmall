<template>
	<view class="animated fadeIn">
		<view class="headerbg">
			<view class="integral">
				<text class="uf-ac-ajc">123456</text>
				<view class="uf-ac-ajc jifengz"><view class="icon iconfont icon-gantanhao-yuankuang"></view>可以使用积分</view>
			</view>
		</view>
		<block v-for="(jifen,index) in jfmingxi" :key="index">
			<view class="uf-ac-jc jifen">
				<view>
					<view class="jftext">{{jifen.jftext}}</view>
					<view class="jftimes uf-ac"><text class="icon iconfont icon-shijian"></text>{{jifen.jftimes}}</view>
				</view>
				<view class="jfnum">{{jifen.jfnum}}</view>
			</view>
		</block>

		
	</view>
</template>
<script>
	
	export default {
		
		data() {
			return {
				jfmingxi:[
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
			};
		},
		
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color:#f1f1f1;
	font-size: 30upx;
}
.headerbg{ background: url(../../static/mallbg.jpg) no-repeat; width: 100%; height: 160upx}
.integral{ height: 160upx;justify-content: center;display: flex; flex-direction:column }
.integral text{color: #f1f1f1; font-size: 60upx;line-height: 1;}
.integral .jifengz{color: #f1f1f1; font-size: 28upx;padding-top: 15upx;}
.icon-gantanhao-yuankuang{font-size: 24upx; margin-right: 15upx;}
.jifen{background: #fff; padding: 10upx 30upx; border-bottom: 1upx #f3f3f3 solid}
.jftext{font-size: 32upx;}
.jftimes{font-size: 26upx;color: #aaa}
.jfnum{font-size: 40upx;color: #C9141D;}
.icon-shijian{font-size: 26upx; margin-right: 10upx;}
</style>
