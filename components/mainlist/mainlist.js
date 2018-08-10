// components/main_list/mainlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(e){
      this.triggerEvent("clickItem", e.currentTarget.dataset.item);
    }
  }
})