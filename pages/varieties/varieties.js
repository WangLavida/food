// pages/varieties/varieties.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: []
  },
  clickItem: function(e) {
    console.log(e.detail);
    wx.request({
      url: 'https://apicloud.mob.com/v1/cook/menu/search',
      data: {
        key: "270af719eb517",
        cid: e.detail.categoryInfo.ctgId,
        page:1,
        size:15
      },
      success: res => {
        console.log(res);
        var resData = JSON.stringify(res.data.result.list);
        resData = resData.replace(/\"\[/g,"[");
        resData = resData.replace(/\]\"/g, "]");
        resData = resData.replace(/\\\"/g, "\"");
        resData = resData.replace(/\?/g, "");        
        wx.navigateTo({
          url: '../child/child?data=' + resData + '&cid=' + e.detail.categoryInfo.ctgId + '&name=' + e.detail.categoryInfo.name,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      listData: app.globalData.foodInfo.childs[0].childs,
    })
    console.log(this.data.listData);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
          return{
            desc:"来自小怪兽",
            path:"/pages/splash/splash",
            imageUrl:"/image/logo.png"
          }
  }
})