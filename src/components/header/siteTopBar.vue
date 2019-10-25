<template>
  <div class="site-topbar">
    <div class="container">
      <div class="topbar-nav">
        <router-link to="/" target="_blank" class="title">小米商城</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">MIUI</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">IoT</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">云服务</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">金融</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">有品</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">小爱开放平台</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">企业团购</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">资质证照</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">协议规则</router-link>
        <span class="sep">|</span>
        <router-link to="" class="topbar-download title" :class="{'active': isShow}" @mouseenter.native.stop="enter" @mouseleave.native.stop="leave">下载app
          <span class="appcode">
            <img src="https://i1.mifile.cn/f/i/17/appdownload/download.png?1" alt="小米商城" width="90" height="90">小米商城APP
          </span>
        </router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">Select Location</router-link>
      </div>
      <div class="topbar-cart" :class="[{'topbar-cart-active': isShowCart}]">
        <router-link class="cart-mini" to="" @mouseenter.native.stop="enterCart" @mouseleave.native.stop="leaveCart">
          <i class="iconfont icon-cart--copy "></i>
          <i class="iconfont icon-gouwucheman hide"></i>
          购物车
          <span class="cart-mini-num">(0)</span>
        </router-link>
        <div class="cart-menu" :style="{height: isShowCart?'100px':'0px'}">
          <div class="menu-content">
            <div class="loading" :class="{'hide': isShowCart}">
              <div class="loader"></div>
            </div>
            <ul class="cart-list hide"></ul>
            <div class="cart-total clearfix hide"></div>
            <div class="msg msg-error hide"></div>
            <div class="msg msg-empty" :class="{'hide': !isShowCart}">购物车中还没有商品，赶紧选购吧!</div>
          </div>
        </div>
      </div>
      <div class="topbar-info">
        <router-link class="link title" to="">登录</router-link>
        <span class="sep">|</span>
        <router-link class="link title" to="">注册</router-link>
        <span class="sep">|</span>
        <span class="message">
          <router-link class="needmessage title" to="">
            消息通知
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      isShowCart: false
    }
  },
  methods: {
    enter () {
      this.isShow = true
    },
    leave () {
      this.isShow = false
    },
    enterCart () {
      this.isShowCart = true
    },
    leaveCart () {
      this.isShowCart = false
    }
  }
}
</script>

<style scoped lang="stylus">
.site-topbar
  position relative
  height 40px
  font-size 12px
  color $font_color
  background #333
  z-index 30
  .container
    width 1226px
    margin 0 auto
    .topbar-nav
      float left
      height 40px
      line-height 40px
      .title:hover
        color #fff
      .sep
        margin 0.3em
        color $bg_color
      a
        color $font_color
        line-height 40px
        display inline-block

      .topbar-download
        position relative
        .appcode
          position absolute
          top 40px
          left 50%
          width 124px
          height 0
          background #fff
          margin-left -55px
          box-shadow 0 1px 5px #aaa
          text-align center
          font-size 14px
          color #333
          line-height 1
          overflow hidden
          transition height 0.3s
        img
          display block
          margin 18px auto 12px
      .active
        &::before
          content ""
          position absolute
          bottom 0
          left 50%
          width 0
          height 0
          margin-left -8px
          border-width 0 8px 8px
          border-style solid
          border-color rgba(0,0,0,0) rgba(0,0,0,0) #fff
      .topbar-download.active .appcode
        height 148px

    .topbar-cart
      position relative
      float right
      width 120px
      height 40px
      margin-left 15px
      transition all 0.2s
      font-size 12px
      .cart-mini
        position relative
        z-index 32
        display block
        height 40px
        line-height 40px
        text-align center
        color $font_color
        background $bg_color
    .topbar-cart-active .cart-mini
        color $hover_color
        background #fff
        i
          margin-right 4px
          font-size 20px
          line-height 20px
          vertical-align -4px
      .cart-menu
        position absolute
        right 0
        top 40px
        z-index 31
        width 316px
        height 0
        color $bg_color
        background #fff
        box-shadow 0 2px 10px rgba(0, 0, 0, 0.15)
        transition height 0.3s
        .menu-content
          padding 20px 0 0
          text-align center
          .loading
            margin 0 20px 20px
            text-align center
            padding 20px 0
            .loader
              position relative
              margin 0 auto
              width 4px
              height 20px
              background $hover_color
              overflow visible
              transform scale(1)
              animation loader 0.3s infinite alternate-reverse linear
              &::before
                margin -10px 0 0 -10px
                transform scaleY(.3)
                transform-origin 50% 50%
                animation loader 0.3s .25s infinite alternate-reverse linear
              &::after
                margin -10px 0 0 6px
                transform scaleY(.5)
                transform-origin 50% 50%
                animation loader 0.3s .5s infinite alternate-reverse linear
            .loader::before, .loader::after
              position absolute
              left 50%
              top 50%
              width 4px
              height 20px
              content ''
              background $hover_color
            .cart-list
              margin 0
              padding 0
              list-style-type none
            .cart-total
              padding 15px 20px
              background #fafafa
            .msg
              padding 20px 0 20px
            .cart-menu .loading, .msg
              text-align center
              margin 0 20px 20px
        @keyframes loader
          0%
            transform scaleY(0.5)
            opacity 0.2
          100%
            transform scale(1)
            opacity 1  

    .topbar-info
      position relative
      float right
      height 40px
      line-height 40px
      a
        color $font_color
        line-height 40px
        display inline-block
      .title:hover
        color #fff
      .link
        padding 0 5px
        text-align center
      .sep
        margin 0
        color $bg_color
      .message
        padding 0 10px
</style>
