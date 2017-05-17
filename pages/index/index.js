//index.js
//获取应用实例
var app = getApp()
var icons = [];
var columns = [];
var bornDate = new Date('1991-10-19');
var nowDate = new Date();
for (var i = 1; i <= 1200; i++) {
    var year = Math.floor(i / 12);
    if (i > 1 && i % 12 == 1) {
        columns.push({
            text: year + '岁',
            index: year
        });
    }
    var className = '';
    if ((nowDate.getFullYear() - bornDate.getFullYear()) >= year) {
        className = 'has'
    }
    icons.push({
        class: className,
        index: i
    });
    if (i === 1200) {
        columns.push({
            text: year + '岁',
            index: year
        });
    }

}
Page({
    data: {
        motto: '这是第一个页面',
        userInfo: {
            avatarUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=141660177,2785183244&fm=58',
            nickName: 'Marine'
        },
        icons: icons,
        columns: columns

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
