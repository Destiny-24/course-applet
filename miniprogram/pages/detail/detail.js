import courseService from "../../globals/service/course.js";
Page({
  data: {
    di:'',
    courses:'',
    activeName:''
  },
  onLoad(options){
    this.getData(options.id)
  },
  getData(id){
    courseService.item(id).then(res =>{
      this.setData({
        courses: res.course
      })
      console.log(this.data.courses)
    })
  },
})
