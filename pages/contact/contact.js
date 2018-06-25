Page({

  bindtap: function (event) {
    wx.navigateTo({
      url: "../message/search/search",
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  tapRow:function (event) {
    wx.showToast({
      title: "暂未开放",
    })
  },

  showToast:function(event) {
    wx.showToast({
      title: "暂未开放",
    })
  },


  /**
   * 页面的初始数据
   */
  data: {
    
    message: [
      {
        groupName: "特别关心",
        icon: "/images/close.png",
        number: "0/0"
      },
      {
        groupName: "常用群聊",
        icon: "/images/close.png",
        number: "1/1"
      },
      {
        groupName: "我的好友",
        icon: "/images/close.png",
        number: "41/53"
      },
      {
        groupName: "三年情",
        icon: "/images/close.png",
        number: "4/10"
      },
      {
        groupName: "十年友",
        icon: "/images/close.png",
        number: "10/20"
      },
      {
        groupName: "前端开发组",
        icon: "/images/close.png",
        number: "10/22"
      },
      {
        groupName: "后台开发组",
        icon: "/images/close.png",
        number: "4/9"
      },
      {
        groupName: "微信小程序",
        icon: "/images/close.png",
        number: "12/13"
      },
      {
        groupName: "滥人情",
        icon: "/images/close.png",
        number: "3/8"
      },
      {
        groupName: "娇人笑",
        icon: "/images/close.png",
        number: "4/9"
      },
      {
        groupName: "奈何桥",
        icon: "/images/close.png",
        number: "6/13"
      },
      {
        groupName: "乱人心",
        icon: "/images/close.png",
        number: "1/3"
      },
      {
        groupName: "惹人爱",
        icon: "/images/close.png",
        number: "9/12"
      },
      {
        groupName: "惹人醉",
        icon: "/images/close.png",
        number: "10/21"
      }
    ],

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