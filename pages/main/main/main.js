// pages/main/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starImages: [{
      state: false,
      path: '/images/icon_little_star_normal.png',
    }, {
      state: false,
      path: '/images/icon_little_star_normal.png'
    }],
    currentTab: 0,
    sendSuccess: false
  },

  star: function (e) {
    let index = e.currentTarget.dataset.index;
    let statImgs;
    if (index == 0) {
      var path = '', state = !this.data.starImages[0].state
      if (this.data.starImages[0].state) {
        path = '/images/icon_little_star_normal.png'
      } else {
        path = '/images/icon_little_star_select.png'
      }
      statImgs = [{
        state: state,
        path: path,
      }, this.data.starImages[1]]
    } else if (index == 1) {
      let path = '', state = !this.data.starImages[1].state
      if (this.data.starImages[1].state) {
        path = '/images/icon_little_star_normal.png'
      } else {
        path = '/images/icon_little_star_select.png'
      }
      statImgs = [this.data.starImages[0], {
        state: state,
        path: path,
      }]
    }
    this.setData({
      starImages: statImgs
    })
  },

  swichNav: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange: function (e) {
    this.setData({ currentTab: e.detail.current });
  },

  sendPost: function (e) {
    wx.navigateTo({
      url: '/pages/main/sendpost/sendpost',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.toast = this.selectComponent("#toast");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (this.data.sendSuccess) {
      this.toast.showToast('发布帖子成功');
      this.setData({
        sendSuccess: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})