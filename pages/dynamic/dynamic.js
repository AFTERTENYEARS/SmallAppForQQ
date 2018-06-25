Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: [
      {
        groupName: "游戏",
        icon: "/images/game.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "日迹",
        icon: "/images/weather.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "看点",
        icon: "/images/kan.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "音乐",
        icon: "/images/song.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "直播",
        icon: "/images/video.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "附近的群",
        icon: "/images/qun.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "同城服务",
        icon: "/images/cityse.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "运动",
        icon: "/images/sport.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "腾讯课堂",
        icon: "/images/class.png",
        rightImage: "/images/tip.png"
      }
    ],
  },

  bindtap: function (event) {
    wx.navigateTo({
      url: "../message/search/search",
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  showToast: function (event) {
    wx.showToast({
      title: "暂未开放",
    })
  },

  tapRow:function(event) {
    wx.showToast({
      title: "暂未开放",
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