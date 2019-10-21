<template>
  <div class="site-header">
    <div class="container">
      <div class="header-logo">
        <router-link class="logo ir" to="/" title="小米官网">小米官网</router-link>
      </div>
      <div class="header-nav">
      <el-menu class="el-menu-demo" mode="horizontal" router>
        <el-submenu index="0" v-show="showAll" class="nav-category">
          <template slot="title">全部商品</template>
          <el-menu-item index="0-1">1</el-menu-item>
          <el-menu-item index="0-2">2</el-menu-item>
          <el-menu-item index="0-3">3</el-menu-item>
        </el-submenu>
        <el-submenu index="1">
          <template slot="title">小米手机</template>
          <el-menu-item index="1" v-for="" :key="">
            <div class="figure">
              <img src="" alt="" width="160" height="110">
            </div>
            <div class="title">小米9 Pro 5G </div>
            <p class="price">3699元起</p>        
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">Redmi红米</template>
          <ul class="children-list" v-for="" :key="">
            <el-menu-item index="2" >
              <li class="first">
                <div class="figure">
                  <img src="" alt="" width="160" height="110">
                </div>
                <div class="title">小米9 Pro 5G </div>
                <p class="price">3699元起</p>
              </li>
            </el-menu-item>
          </ul>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">电视</template>
          <ul class="children-list" v-for="" :key="">
            <el-menu-item index="3" >
              <li class="first">
                <div class="figure">
                  <img src="" alt="" width="160" height="110">
                </div>
                <div class="title">小米9 Pro 5G </div>
                <p class="price">3699元起</p>
              </li>
            </el-menu-item>
          </ul>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">笔记本</template>
          <ul class="children-list" v-for="" :key="">
            <el-menu-item index="4" >
              <li class="first">
                <div class="figure">
                  <img src="" alt="" width="160" height="110">
                </div>
                <div class="title">小米9 Pro 5G </div>
                <p class="price">3699元起</p>
              </li>
            </el-menu-item>
          </ul>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">家电</template>
          <ul class="children-list" v-for="" :key="">
            <el-menu-item index="5" >
              <li class="first">
                <div class="figure">
                  <img src="" alt="" width="160" height="110">
                </div>
                <div class="title">小米9 Pro 5G </div>
                <p class="price">3699元起</p>
              </li>
            </el-menu-item>
          </ul>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">路由器</template>
          <ul class="children-list" v-for="" :key="">
            <el-menu-item index="6" >
              <li class="first">
                <div class="figure">
                  <img src="" alt="" width="160" height="110">
                </div>
                <div class="title">小米9 Pro 5G </div>
                <p class="price">3699元起</p>
              </li>
            </el-menu-item>
          </ul>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">智能硬件</template>
          <ul class="children-list" v-for="" :key="">
            <el-menu-item index="7" >
              <li class="first">
                <div class="figure">
                  <img src="" alt="" width="160" height="110">
                </div>
                <div class="title">小米9 Pro 5G </div>
                <p class="price">3699元起</p>
              </li>
            </el-menu-item>
          </ul>
        </el-submenu>
        <el-menu-item index="8" >服务</el-menu-item>
        <el-menu-item index="9">社区</el-menu-item>
      </el-menu>
      </div>
      <div class="header-search">
        <form action="" class="search-form clearfix">
          <input type="text" class="search-text"/>
          <input type="submit" class="search-btn iconfont"/>
          <div class="search-hot-words">
            <router-link to="">小米9 Pro 5G</router-link>
            <router-link to="">Redmi Note 8</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: [
        '0', '1', '2', '3'
      ],
      showAll: true
    }
  }
}
</script>

<style scoped lang="stylus">
.site-header
  position relative
  .container
    width 1226px
    margin 0 auto
    .header-logo
      float left
      width 62px
      margin-top 22px
      .ir
        text-align left 
        text-indent -9999em
      .logo
        position relative
        display block
        width 55px
        height 55px
        overflow hidden
        background-color $hover_color
        &::before
          background url('https://s02.mifile.cn/assets/static/image/mi-logo.png') no-repeat 50% 50%
          opacity 1
          transform translate(0, 0)
        &::after
          background url('https://s02.mifile.cn/assets/static/image/mi-home.png') no-repeat 50% 50%
          opacity 0
          margin-left -55px
          transform translate(0, 0)
        &:hover::before
          opacity 0
          transform translateX(55px)
        &:hover::after
          opacity 1
          transform translateX(55px)
      .logo::before, .logo::after
        position absolute
        left 0
        top 0
        z-index 1
        width 55px
        height 55px
        content ''
        transform-origin 50% 50%
        transition all .2s
        
    .header-nav
      float left
      width 850px
      .el-menu-demo
        position relative
        z-index 10
        float left
        width 1100px
        height 88px
        margin 0
        padding 12px 0 0 30px
        list-style-type none
        font-size 16px
        .nav-category
          position relative
          float left
          width 127px
          padding-right 15px
        .el-submenu
          float left
          

</style>
