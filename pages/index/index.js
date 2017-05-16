//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        motto: '这是第一个页面',
        userInfo: {
            avatarUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=141660177,2785183244&fm=58',
            nickName: 'xx'
        }
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    }
})
