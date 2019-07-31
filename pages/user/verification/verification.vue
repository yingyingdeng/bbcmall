<template>
	<view>
		<view class="form">
			<view class="phone">
				187****0026
			</view>
			<view class="username">
				<view class="get-code" v-model="code"  :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
				<input placeholder="请输入验证码" v-model="phoneNumber" placeholder-style="color: rgba(0,0,0,0.8);"/>
			</view>
	
			
			<view class="btn" @tap="doReg">确认,进入下一步</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:'',
				getCodeText:'获取验证码',
				getCodeBtnColor:"#797979",
				getCodeisWaiting:false
			}
		},
		methods: {
			doReg(){
				uni.navigateTo({
					url: '../paypassword/paypassword',
					
				});
			},
			Timer(){},
			getCode(){
				// if(this.getCodeisWaiting){
				// 	return ;
				// }
				// if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
				// 	uni.showToast({title: '请填写正确手机号码',icon:"none"});
				// 	return false; 
				// } 
				this.getCodeText = "发送中..."
				this.getCodeisWaiting = true;
				this.getCodeBtnColor = "rgba(0,0,0,0.8)"
				//示例用定时器模拟请求效果
				setTimeout(()=>{
					uni.showToast({title: '验证码已发送',icon:"none"});
					//示例默认1234，生产中请删除这一句。
					this.code=1234;
					this.setTimer();
				},1000)
				
				
			},
			setTimer(){
				let holdTime = 60;
				this.getCodeText = "重新获取(60)"
				this.Timer = setInterval(()=>{
					if(holdTime<=0){
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#797979";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return ;
					}
					this.getCodeText = "重新获取("+holdTime+")"
					holdTime--;
					
				},1000)
			},
		}
	}
</script>

<style lang="scss">
	page{ background: #f3f3f3}
.form { margin-top: 20upx;
		width: 90%;
		padding: 0 5%;
		font-size: 30upx;
		.username,
		.password{
			width: calc(100% - 90upx);
			height: 90upx;
			display: flex;
			align-items: center;
			border-radius: 10upx;
			background-color: #ffffff;
			padding: 0 45upx;
			margin-bottom: 26upx;
			input {
				width: 100%;
				height: 50upx;
				color: rgba($color: #000000, $alpha: 0.8);
				font-weight: 200;
			}
		}
	
		.btn {
			color: #ffffff;
			width: 100%;
			height: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 10upx;
			background-color: #fff;
			// border: solid 1upx #fffefe;
			// box-shadow: 0 0 2upx rgba(0, 0, 0, .5);
			font-size: 30upx;
			background: #cc0e10;
		}
	}
	.form {
		.username{
			position: relative;
			.get-code{
				position: absolute;
				height: 80upx;
				display: flex;
				align-items: center;
				justify-content: center;
				right: 0;
				padding: 0 40upx;
				// border-left: solid 1upx #fff;
				z-index: 3;
				&:after {
					content: " ";
					width: 1upx;
					height: 40upx;
					background-color: #ddd;
					position: absolute;
					z-index: 3;
					margin-right: 100%;
					left: 0;
					top: 20upx;
				}
			}
		}
		.res {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100upx;
			color: rgba($color: #000000, $alpha: 0.8);
		}
	}
	.phone{padding-bottom:20upx;font-size: 36upx;font-weight: bold;}
</style>
