import courseService from "../../globals/service/course.js";

Page({
  data: {
    total: 0,
    page: 1,
    page_size: 12,
    courses: [],
    id:null
  },
  onShow: function() {
    this.getData();
  },
  getData: function() {
    const params = {
      page: this.data.page,
      page_size: this.data.page_size,
    };
    courseService.index(params)
      .then( res => {
        this.setData({
          courses: res.list
        })
    })
  },
  goToCourseDetail(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  onShareAppMessage: function() {
    return {
      title: "视频课",
      path: "/pages/index/index"
    };
  }
});