<template>
  <div class="site-header">
    <div class="container">
      <div class="header-logo">
        <router-link class="logo ir" to="/" title="小米官网">小米官网</router-link>
      </div>
      <div class="header-nav">
        <ul class="nav-list">
          <li class="nav-category">
            <router-link class="link-category" to="/">
              <span class="text">全部商品分类</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="link">
              <span class="text">小米手机</span>
            </router-link>
            <div class="item-children">
              <div class="container">
                <ul class="children-list clearfix">
                  <li class="first">
                    <router-link to="/">
                      <div class="figure figure-thumb">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png?thumb=1&w=200&h=138&f=webp&q=90" alt="" width="160" height="110">
                      </div>
                      <div class="title">小米9 Pro 5G</div>
                      <p class="price">3699元起</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/" class="link">
              <span class="text">Redmi红米</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="link">
              <span class="text">电视</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="link">
              <span class="text">笔记本</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="link">
              <span class="text">家电</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="link">
              <span class="text">路由器</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="link">
              <span class="text">智能硬件</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="link">
              <span class="text">服务</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="link">
              <span class="text">社区</span>
            </router-link>
          </li>
        </ul>
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

</style>
