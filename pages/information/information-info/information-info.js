// pages/information/information-info/information-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCommentShow: false,
    isSendShow: false,
    starNumber: 15,
    star: {
      state: false,
      path: '/images/icon_little_star_normal.png',
    },
    starImages: [{
      state: false,
      path: '/images/icon_little_star_normal.png',
    }, {
      state: false,
      path: '/images/icon_little_star_normal.png'
    }, {
      state: false,
      path: '/images/icon_little_star_normal.png'
    }],
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
      }, this.data.starImages[1], this.data.starImages[2]]
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
      }, this.data.starImages[2]]
    } else if (index == 2) {
      let path = '', state = !this.data.starImages[2].state
      if (this.data.starImages[2].state) {
        path = '/images/icon_little_star_normal.png'
      } else {
        path = '/images/icon_little_star_select.png'
      }
      statImgs = [this.data.starImages[0], this.data.starImages[1], {
        state: state,
        path: path,
      }]
    }
    this.setData({
      starImages: statImgs
    })
  },

  articleStar: function (e) {
    var paths = '', status = !this.data.star.state, starNumbers = this.data.starNumber
    if (this.data.star.state) {
      starNumbers--;
      paths = '/images/icon_little_star_normal.png'
    } else {
      starNumbers++;
      paths = '/images/icon_little_star_select.png'
    }
    this.setData({
      starNumber: starNumbers,
      star: {
        state: status,
        path: paths
      }
    })
  },

  openSend: function (e) {
    var that = this;
    that.setData({
      isSendShow: !that.data.isSendShow
    })
  },
  closeSend: function (e) {
    var that = this;
    that.setData({
      isSendShow: false
    })
  },
  send: function (e) {
    var that = this;
    that.setData({
      isSendShow: false
    })
  },
  closeComment: function (e) {
    var that = this;
    that.setData({
      isCommentShow: false
    })
  },
  openComment: function (e) {
    var that = this;
    that.setData({
      isCommentShow: !that.data.isCommentShow
    })
  },
  catchtap: function (e) { },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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