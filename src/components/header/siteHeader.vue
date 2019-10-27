<template>
  <div class="site-header">
    <div class="container">
      <div class="header-logo">
        <router-link class="logo ir" to="/" title="小米官网">小米官网</router-link>
      </div>
      <div class="header-nav">
        <ul class="nav-list clearfix">
          <li class="nav-category">
            <router-link class="link-category" to="/">
              <span class="text">全部商品分类</span>
            </router-link>
          </li>
          <li class="nav-item" @mouseenter="enterNav" @mouseleave="leaveNav" :class="{'nav-item-active': isEnterNav}">
            <router-link to="/" class="link">
              <span class="text">小米手机</span>
            </router-link>
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
        <form action="" class="search-form clearfix" method="get">
          <input type="search" class="search-text"/>
          <input type="submit" class="search-btn iconfont" value="&#xe60d;"/>
          <div class="search-hot-words" @click="isShowSearch" :class="{ 'fade-out': isSearch, 'fade-in': !isSearch}">
            <router-link to="">小米9 Pro 5G</router-link>
            <router-link to="">Redmi Note 8</router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="header-nav-menu" :style="{display: isShowNav ? 'block': 'none'}" :class="{'slide-down': isShowNav, 'slide-up': !isShowNav, 'header-nav-menu-active': isShowNav}">
      <div class="container">
        <ul class="children-list clearfix">
          <li class="first">
            <router-link to="/">
              <div class="figure figure-thumb">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png?thumb=1&w=200&h=138&f=webp&q=90" alt="" width="160" height="110">
              </div>
              <div class="title">小米</div>
              <p class="price">3699元起</p>
            </router-link>
          </li>
        </ul>
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
      showAll: true,
      isEnterNav: false,
      isSearch: false,
      isShowNav: false
    }
  },
  methods: {
    enterNav () {
      this.isEnterNav = true
      this.isShowNav = true
    },
    leaveNav () {
      this.isEnterNav = false
      this.isShowNav = false
    },
    isShowSearch () {
      this.isSearch = true
    }
  }
}
</script>

<style scoped lang="stylus">
.site-header
  z-index: 20;
  height: 100px
  .container
    position relative
    .header-logo
      float left
      width 62px
      margin-top 22px
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
        &:active::after
          transform scale(.9)
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
        transform: translateZ(0)
        
    .header-nav
      float left
      width 850px
      .nav-list
        position relative
        z-index 10
        float left
        width 1100px
        height 88px
        margin 0
        padding 12px 0 0 30px
        font-size 16px
        .nav-category
          position relative
          float left
          width 127px
          padding-right 15px
          .link-category
            display inline-block
            padding 26px 0 38px
            text-align right
            color #333333

          
        .nav-item
          float left
          .link
            display block
            padding 26px 10px 38px
            color #333333
            transition color 0.2s
        .nav-item-active
          position relative
          &::after
            position absolute
            top 50px
            left 50%
            width 600px
            height 40px
            margin-left -300px
            content ''
            background-color rgba(0,0,0,0)
        .nav-item-active .link
          color $hover_color
        .nav-item .link:focus
          outline 0
        
    .header-search
      float right
      width 296px
      margin-top 25px
      .search-form
        position relative
        width 296px
        height 50px
        z-index 20
        .search-form:hover .search-btn,.search-form:hover .search-text
          border-color $font_color
        .search-form-focus .search-btn,.search-form-focus .search-text,.search-form-focus:hover .search-btn,.site-header .search-form-focus:hover .search-text,.search-form:hover .search-btn:hover
          border-color $hover_color
        .search-text
          right 51px
          z-index 1
          width 223px
          height 48px
          padding 0 10px
          font-size 14px
          line-height 48px
        .search-btn
          right 0
          z-index 2
          width 52px
          height 50px
          font-size 24px
          line-height 24px
          background #fff
          color #616161
          &:hover
            background $hover_color
            color #ffffff
        .search-btn,.search-text
          position absolute
          top 0
          border 1px solid #e0e0e0
          outline 0
          transition all .2s
        .search-hot-words
          position absolute
          top 14px
          right 62px
          z-index 2
          text-align right
          transition opacity 0.2s
          &.fade-out
            opacity 0
          &.fade-in
            opacity 1
          a
            display inline-block
            margin-left 5px
            padding 0 5px
            font-size 12px
            background #eee
            color #757575
            transition all .2s
            &:hover
              background $hover_color
              color #ffffff
  .header-nav-menu
    position absolute
    top 100px
    left 0
    z-index 24
    width 100%
    height 0
    border-top 1px solid #e0e0e0
    background #fff
    overflow hidden
  .header-nav-menu.slide-up
    height: 0
  .header-nav-menu.slide-down
    height: 229px
  .header-nav-menu-active
    border-bottom: 1px solid\9;
    box-shadow: 0 3px 4px rgba(0,0,0,.18);
    transition: height .3s,-webkit-box-shadow .2s;
    transition: box-shadow .2s,height .3s;
    transition: box-shadow .2s,height .3s,-webkit-box-shadow .2s
    .container
      .children-list
        margin 0
        padding 0
        list-style-type none
        font-size 12px
        li
          position: relative
          float left
          width 180px
          padding 35px 12px 0
          text-align center
          &::before
            position absolute
            left 0
            top 35px
            z-index 1
            width 1px
            height 100px
            content ''
            background-color #e0e0e0
      .children-list .first::before
        display none
          .figure-thumb
            width 160px
            height 110px
            margin 0 auto 16px
            text-align center
            img
              width 160px
              height 110px
          .title
            margin 0
            line-height 20px
            color #333
          .price
            margin 0
            line-height 20px
            color $hover_color

</style>
