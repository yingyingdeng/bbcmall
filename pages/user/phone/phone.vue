<template>
	<view>
		<view class="form">
			<view class="username">
				
				<input placeholder="请输入手机号" v-model="phoneNumber" placeholder-style="color: rgba(0,0,0,0.8);"/>
				<view class="phone-num">
					<picker  @change="PhoneChange" :value="index" :range="phonenum">
						<view class="picker">
							{{index>-1?phonenum[index]:'+86'}}<text class="icon iconfont icon-jiantouxia"></text>
						</view>
					</picker>
				</view>
			</view>
			<view class="code">
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
				<input placeholder="请输入验证码" password="true" v-model="code" placeholder-style="color: rgba(0,0,0,0.8);"/>
			</view>
			
			<view class="btn" @tap="doReg">确认绑定</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber:"",
				code:'',
				getCodeText:'获取验证码',
				getCodeBtnColor:"#797979",
				phonenum: [
					'中国(+86)', 
					'俄罗斯(+7)', 
					'菲律宾(+63)',
					],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{ background: #f3f3f3}
	.username{position: relative}
	.username input{padding-left: 80upx;}
	.phone-num{position: absolute;  height: 100%;  align-items: center; display: flex; top: 0;z-index: 10;}
	.phone-num{left: 40upx; width: 90upx; font-size: 40upx; font-weight: bold;}
	.phone-num .icon-jiantouxia{ font-size: 16upx; margin-left: 10upx;}
.form { margin-top: 20upx;
		width: 90%;
		padding: 0 5%;
		font-size: 30upx;
		.username,
		.password,
		.code{
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
		.code{
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
</style>
