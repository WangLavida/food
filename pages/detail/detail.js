// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    detailData: null,
    ingredients: null,
    method: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    wx.setNavigationBarTitle({
      title: options.name,
    })
    console.log(options.id);
    wx.request({
      url: 'https://apicloud.mob.com/v1/cook/menu/query',
      data: {
        key: "270af719eb517",
        id: options.id,
      },
      success: res => {
        console.log(res.data.result);
        if (res.data.result.recipe.ingredients != null) {
          let ingredientsStr = res.data.result.recipe.ingredients;
          let inJson = JSON.parse(ingredientsStr);
          let ins = ""
          for (var index in inJson) {
            ins = ins + inJson[index] + ";&nbsp;";
          }
          that.setData({
            ingredients: ins
          })
        }
        if (res.data.result.recipe.method != null) {
          let methodStr = res.data.result.recipe.method;
          console.log(methodStr);
          that.setData({
            method: JSON.parse(methodStr)
          })
        }
        that.setData({
          detailData: res.data.result
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

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

  }
})