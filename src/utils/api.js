export default {
  getSwiper: '/swiper', // 获取轮播图
  getContent: '/category/book', // 按照分类获取图书
  getBook: '/book/', // 获取单个图书
  getTitles: '/titles/', // 获取标题目录
  getArticle: '/article/', // 获取一篇文章
  login: '/user/login', // 登录接口
  sendCode: '/smsCode', // 发送短信验证码
  register: '/user/register', // 注册
  getUserData: '/user', // 获取用户数据
  addCollection: '/collect', // 添加收藏
  addLike: '/like', // 添加喜欢
  deleteCollection: '/collect/', // 删除收藏的书籍
  deleteLike: '/like/', // 删除喜欢的书籍
  getCollection: '/collect', // 获得收藏的书籍
  getLike: '/like', // 获得喜欢的书籍
  getAllBooks: '/category/', // 获取该分类下所有的图书
  getReadList: '/readList', // 获取阅读过的图书
  changeUser: '/user', // 修改用户 信息
  changePassword: '/user/changePassword', // 修改密码
  getUploadToken: '/uploadToken' // 获得上传token
}
