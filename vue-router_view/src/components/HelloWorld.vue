<template>
  <div class="hello">
    <div class="content">
      <div @click="changeDataTransform"> 测试dataTransform</div>
      <dataTransform :array="dataTransform" :length="dataTransform.list.length" :number="666">
      </dataTransform>
    </div>

    <div class="content">

      <div>测试router-link</div>
      <router-link to="/a">a</router-link>
      <router-link to="/b">b</router-link>
      <router-link to="/c">c</router-link>
      <testDataChange :info="data"></testDataChange>
      <div style="display:flex;justify-content:space-around">
        <router-view ></router-view>
        <router-view></router-view>
        <router-view></router-view>
      </div>
    </div>

    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>

  </div>
</template>

<script>
import testDataChange from '@/components/testDataChange'
import dataTransform from '@/components/dataTransform'

export default {
  name: 'HelloWorld',
  components: {
    testDataChange, dataTransform
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: {
        hello: '你好',
        panda: '熊猫'
      },
      dataTransform: {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    }
  },
  methods: {
    changeDataTransform() {
      console.log('change')
      this.dataTransform.list = [1, 2, 3, 4]

    },
    aaaa() {
      console.log('aaaa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 200px;
  border: 5px solid rgb(218, 43, 81);
  margin:  50px auto;
  width: 50%;
  padding:20px;
}
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