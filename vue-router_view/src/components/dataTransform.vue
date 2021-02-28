<template>
  <div class="hello" @click="dataChange" :key='index'>
    测试父子绑定值后,子组件什么时候可以改变父组件的值
    <div style="border:5px solid gray; margin-bottom:50px">{{array.a}}---{{array.b}}</div>
    <div style="border:5px solid gray; margin-bottom:50px">length:{{length}}</div>

  </div>
</template>

<script>
// 测试父子绑定值后,子组件什么时候可以改变父组件的值

export default {
  name: 'dataTransform',
  props: {
    array: {
      type: Object ,
      default: {
      }
    },
    length:{
      type:Number
    },
    number:{
      type:Number,
      validator:function(value){
        if(value<1000)return true
        return false
      }
    }
  },
  methods:{
    dataChange(){
      var m=JSON.parse(JSON.stringify(this.array))
      this.array=m
      m.a="b"
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      index:1
    }
  },
  mounted(){

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
