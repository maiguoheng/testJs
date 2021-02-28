<template>
  <div class="hello" @click="dataChange">
    测试数据改变：
    <div style="border:5px solid gray; margin-bottom:50px">{{info.panda}}---{{info.newData}}</div>
  </div>
</template>

<script>
//测试点：
//当只是属性为组件内增加的（本例中的info.newData)改变时，视图不会变化,
//因为数据没有被监听
// 只有组件内data中的或props传进来的属性改变且该属性在视图中有绑定时，
// 才会更新视图，这时候新增的属性也会跟着变动
//如 ：
//本例中info.newData是新增属性，只是改变info.newData试图不会变；
// 改变data中的index也不会使试图更新，因为视图中没有用到index
// 而改变info.panda会使视图更新，这时候newData才会在视图中显示 

// 解决方法:
// data中增加updateView属性，将属性绑到某个节点的:key
// 需要更新视图时就使updateView++,时视图更新


export default {
  name: 'HelloWorld',
  props: {
    info: {
      type: Object ,
      default: {
        a: 'a',
        b: 'b', 
        c: 'c'
      }
    }
  },
  methods:{
    dataChange(){
      this.index++;
      !this.info.newData&&(this.info.newData='新增数据')
    this.info.newData=this.info.newData+'aa-'
    if(this.index>3){this.info.panda=this.info.panda+this.index}
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      index:1
    }
  },
  mounted(){
    console.log(this.info)


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
