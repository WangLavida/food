// pages/child/child.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid: "",
    listData: [],
    pageNo: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.name,
    })
    try {
      var resData = JSON.parse(options.data);
    } catch (e) {
      resData = [];
      this.onReachBottom();
    }
    console.log(resData);
    this.setData({
      listData: resData,
      cid: options.cid
    })
  },
  clickItem: function(e) {
    console.log(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.item.menuId + "&name=" + e.currentTarget.dataset.item.name,
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
    var that = this;
    let page = that.data.pageNo
    that.setData({
      pageNo: page + 1
    })
    wx.request({
      url: 'https://apicloud.mob.com/v1/cook/menu/search',
      data: {
        key: "270af719eb517",
        cid: that.data.cid,
        page: that.data.pageNo,
        size: 10
      },
      success: res => {
        console.log(res);
        that.setData({
          listData: that.data.listData.concat(res.data.result.list)
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})