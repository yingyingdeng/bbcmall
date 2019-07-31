<template>
	<view>
		<view class="form">
			<view class="username">
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
				<input placeholder="请输入邮箱" v-model="phoneNumber" placeholder-style="color: rgba(0,0,0,0.8);"/>
			</view>
			<view class="code">
				<input placeholder="请输入验证码" v-model="code" placeholder-style="color: rgba(0,0,0,0.8);"/>
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
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{ background: #ffffff}
.form { margin-top: 20upx;
		width: 90%;
		padding: 0 5%;
		font-size: 30upx;
		.username,
		.password,
		.code{
			width: 100%;
			height: 90upx;
			display: flex;
			align-items: center;
			border-bottom: 1upx solid #ddd;
			color: #999;
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
			margin-top: 26upx;
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
</style>
