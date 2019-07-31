<template>
	<view>
		<uni-status-bar bgcolor="#ffffff"></uni-status-bar>
		<view class="icon iconfont icon-ego-guanbi" @tap="back">
			
		</view>
		 <view class="logo"><image src="../../static/logo.jpg" mode="widthFix" lazy-load></image></view>
		 
		 <view class="form">
			 
			 <!-- 帐号密码登录 -->
			 <template v-if="!status">
				 <view class="username">
				 	<input placeholder="请输入帐号/邮箱/手机号" class="phone-name" v-model="username" />
				 </view>
				 <view class="password">
				 	<input placeholder="请输入密码" type="password" class="forget-input" v-model="password" />
				 	<view class="wjmi" @tap="toResetpasswd">
				 		<view>忘记密码</view>
				 	</view>
				 </view>
			 </template>
		 	
			
			<!-- 手机帐号登录 -->
			<template v-else>
				<view class="code">
					<input placeholder="请输入手机号" class="phone-input" v-model="phone" />
						<view class="phone-num">
							<picker  @change="PhoneChange" :value="index" :range="phonenum">
								<view class="picker">
									{{index>-1?phonenum[index]:'+86'}}<text class="icon iconfont icon-jiantouxia"></text>
								</view>
							</picker>
						</view>
				</view>		
				<view class="password">
					<input placeholder="请输入验证码" class="forget-input" v-model="checknum"  />
					<view class="wjmi">
						<view>获取验证码</view>
					</view>
				</view>
			</template>
		
			
		 	<button type="warn" :loading="loading" :class="{'btn-disabled':disabled}" class="btn" @tap="submit" :disabled=disabled>登 录</button>
		 	<view class="res">
		 		<view @tap="changeStatus">
					{{status?'帐号密码登录':'验证码登录'}}
				</view>
		 		<view @tap="toRegister">立即注册</view>
		 	</view>
		 </view>
		 
		<view class="xieyi">注册即代表您同意《bbc协议》</view>
		 
	</view>
</template>

<script>
	import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue';
	import {login} from '../../utils/api/api'
	export default {
		components: {
			uniStatusBar
		},
		data() {
			return {
				disabled:true,
				loading:false,
				status:false,
				username:"",
				password:"",
				phone:"",
				checknum:"",
				phonenum: [
					'中国(+86)', 
					'俄罗斯(+7)', 
					'菲律宾(+63)',
					],
			}
		},
		onLoad() {

		},
		watch: {
			username(val){
				this.OnBtnChange();
			},
			password(val){
				this.OnBtnChange();
			},
			phone(val){
				this.OnBtnChange();
			},
			checknum(val){
				this.OnBtnChange();
			}
		},
		methods: {
			// 初始化表单
			initInput(){
				this.username='';
				this.password='';
				this.phone='';
				this.checknum='';
			},
			// 改变按钮状态
			OnBtnChange(){
				if((this.username && this.password)||(this.phone && this.checknum)){
					this.disabled=false;return;
				}
				this.disabled=true
			},
			
			// 登录状态切换
			changeStatus(){
				this.initInput();
				this.status =!this.status;
			},
			back(){
				console.log("返回上一步")
				
			},
			submit(){
				uni.showLoading();
				setTimeout(function () {
					uni.hideLoading();
				}, 6000);
				const param = { username: this.phone, password: this.password };
				this.$postRequest(login, param).then(res => {
				  console.log(param, res)
				  if (res.status == 200) {
					if (res.data.errCode == 0) {
					  this.$store.commit(types.LOGIN, res.data.data.sign);				
					  uni.hideLoading();
					  uni.showToast({
					  	title: "登录成功",
					  	icon: "success"
					  })
					  uni.navigateTo({
					  	url: '../index/index',
					  });
					} else {
						uni.hideLoading();
						uni.showToast({
						title: res.data.errMsg,
						icon: "none"
						})
					}
				  }
				})
			},
			PhoneChange(e) {
				this.index = e.detail.value
			},
			toRegister(){
				uni.navigateTo({
					url: 'register',
				});
			},
			toResetpasswd(){
				uni.navigateTo({
					url: 'resetpasswd',
				});
			},			
		}
	}
</script>

<style>
page{ background: #FFFFFF;}
.logo{ display: flex; align-items: center; justify-content: center;}
.logo image{width: 200upx; margin-top: 200upx;}
.icon-ego-guanbi{position: fixed; top: 60upx; left: 30upx; font-size: 40upx;color: #333333;}

.form {padding: 50upx 5%;font-size: 30upx; width: 90%;}
.username,.password,.code{position: relative;width: 100%;}
.phone-name,.phone-input,.forget-input{
	height: 100upx;
	display: flex;
	align-items: center;
	border-bottom: 1upx solid #f3f3f3; color: #999;display: block;font-size: 30upx;
}
.phone-input{ padding-left: 90upx;}
.phone-num,.wjmi{position: absolute;  height: 100%;  align-items: center; display: flex; top: 0;z-index: 10;}
.wjmi{right:0;}
.phone-num{left: 0; width: 90upx; font-size: 40upx; font-weight: bold;}
.phone-num .icon-jiantouxia{ font-size: 12upx; margin-left: 10upx;}
.wjmi>view{ background: #f3f3f3; color: #797979;padding: 15upx 20upx;border-radius: 10upx;}
.btn {
	color: #fff;
	width: 100%;
	height: 90upx;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10upx;
	background-color: #c9141d;
	font-size: 32upx; margin-top: 26upx;
}
.btn-disabled{}
.res {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100upx;
			color: #797979;
		}
		.xieyi{ width: 100%; text-align: center;color: #797979;}

</style>
