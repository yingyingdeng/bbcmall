let url= 'http://devip.f3322.net:8113/'
const urls = {
  origin: url,
  base: url+'api',  
  Home:'/home/lobby', //首页请求
  login:'/login',//用户登录
  reg:"/reg/send",//注册
  regNode:"/reg/",//注册节点信息
  smsSend:"/send/sms",//短信验证码
  emailSend:"/send/email",//邮箱验证码
  forgotPwd:"/get/pwd",//忘记密码

  Major:'/plan/home',   //主页
  userLPwd:'/user/l/pwd',//修改登录密码
  userSPwd:'/user/s/pwd',//修改交易密码
  share:"/home/share",//分享
  feedback:"/mss/add",//留言反馈
  feedbackList:"/mss/list",//我的留言列表
  userinfo:"/user/info",//用户信息
  userOut:"/user/out",//退出登录
  apiUploadsHead: '/uploads/head',//上传头像
  accountDetails:'/home/u_a_edit',//账户详情列表
  rchAddress:'/rch/address/',//充值地址接口
  attendanceRecord:'/plan/rcd',//参与记录
  currencyPage:'/transform/home',//货币页面接口
  exchangeInterface:'/transform/postransform',//兑换接口
  messageList:'/art/list',//消息列表接口
  newsDetails:'/art/read',//消息详情接口
  quotationList:'/hq/rate/',//行情列表接口
  usdtBalance:'/jyb/usdt',//交易-获取用户USDT余额
  exchangeBuying:'/jyb/mt',//交易所挂买接口
  exchangeSelling:'/jys/make',//交易所挂卖接口
  hangupList:'/s/list',//挂卖列表
  paymentList:'/jyb/list',//挂买列表
  realtimeTransaction:'/jys/Record',//实时成交接口

  particScheme:'/plan/par_p_page', //参与计划/复投get
  particSchemePost:'/plan/p_p',      //参与计划post
  repeatThrow:'/plan/after',       ///复投post
  drawProfit:'/with/darw',         //支取收益
  withdrawGet:'/with/extvw',           //提现请求接口
  withdrawPost:'/with/ext',           //提现提交接口
  originScaleInGet:'/plan/f_p',          //原点加仓-get
  originScaleInPost:'/plan/f',          //原点加仓-post

  transfer:'/trans/gettrans', //转账页面参数接口
  postrans:'/trans/postrans',//转账接口
  transList:'/trans/trans_list',//转账记录
  composeHome:"/compose/compose_home",//合成挖矿页面
  posCompose:"/compose/pos_compose",//合成挖矿
  composeList:"/compose/compose_list",//合成挖矿记录
  homeSl:"/home/s_l",//分享记录

  team:"/home/team",//我的社区
  teaminfo:"/home/team_xq",//社区详情
  teamList:"/ers/earnings",//社区奖励明细
  feedbackPage:"/mss/home",//留言类型
  earsEarnings:'/ers/earnings',//奖励明细

  withdrawRecord:'/with/witaw_list',   //提现记录
  userModifyAvatar:'/uploads/head',//头像
  sweepCode:'/rch/sc',//收款
  userDel:'/user/del',//删除未激活用户

  jysDetails:'/jys/details',//交易委托单详情 0买1卖
  paycel:'/jys/paycel',//取消委托
  jsypayment:'/jys/payment',//取消委托

  transactionList:'/b_s/list',//委托记录列表
  exchangerecordListSell:'/jys/details',//委托详情
  icomeDetails:'/h/pd', //参与合约的收益明细
};
module.exports = urls;
