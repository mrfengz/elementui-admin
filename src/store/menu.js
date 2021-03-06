/**
 * Created by Mr.Zhou on 2017/8/7.
 */

export const menu_list = [{
    icon: 'el-icon-setting',
    index: 'readme',
    title: '项目简介'
}, {
    icon: 'el-icon-menu',
    index: '100',
    title: '好友设置',
    subs: [{
        index: 'friendRequest',
        icon: 'el-icon-setting',
        title: '好友申请'
    }, {
        index: 'friendCommand',
        icon: 'el-icon-setting',
        title: '私聊指令'
    }]
},{
    icon: 'el-icon-menu',
    index: '200',
    title: '群组设置',
    subs: [{
        index: 'groupList',
        icon: 'el-icon-setting',
        title: '群组列表'
    }]
},{
    icon: 'el-icon-menu',
    index: '2',
    title: '表格',
    subs: [{
        index: 'basetable',
        icon: 'el-icon-setting',
        title: '基础表格'
    }, {
        index: 'vuetable',
        title: 'Vue表格组件'
    }
    ]
}, {
    icon: 'el-icon-date',
    index: '3',
    title: '表单',
    subs: [{
        index: 'baseform',
        icon: 'el-icon-setting',
        title: '基本表单'
    }, {
        index: 'vueeditor',
        title: '编辑器'
    }, {
        index: 'markdown',
        title: 'markdown'
    }, {
        index: 'upload',
        title: '文件上传'
    }
    ]
}, {
    icon: 'el-icon-star-on',
    index: 'basecharts',
    title: '图表'
}, {
    icon: 'el-icon-upload2',
    index: 'drag',
    title: '拖拽'
}, {
    icon: 'el-icon-upload2',
    index: 'commontable',
    title: '测试表格'
}, {
    icon: 'el-icon-upload2',
    index: 'robotserver',
    title: '微信机器人'
}];
