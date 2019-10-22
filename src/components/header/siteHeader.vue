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
            <div class="site-category">
              <ul class="site-category-list clearfix site-category-list-custom">
                <li class="category-item">
                  <router-link to="/" class="title"></router-link>
                  <div class="children clearfix children-col-4">
                    <ul class="children-list children-list-col children-list-col-1">
                      <li>
                        <router-link to="/" class="link clearfix">
                          <img src="" alt="" class="thumb" width="40" height="40"/>
                          <span class="text"></span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item" @mouseenter="enterNav" @mouseleave="leaveNav" :class="{'nav-item-active': isEnterNav}">
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
      showAll: true,
      isEnterNav: false
    }
  },
  methods: {
    enterNav () {
      this.isEnterNav = true
    },
    leaveNav () {
      this.isEnterNav = false
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
      .nav-list
        position relative
        z-index 10
        float left
        width 1100px
        height 88px
        margin 0
        padding 12px 0 0 30px
        font-size 16px

        .nav-item
          float left
        .nav-category
          position relative
          float left
          width 127px
          padding-right 15px
          .link
            display block
            padding 26px 10px 38px
            color #333333
            transition color 0.2s
        .nav-item-active .link
          color $hover_color

          .item-children
            display none
            .container
              width 1226px
              margin 0 auto
              .children-list
                font-size 12px
                li
                  position relative
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
                    content ""
                    background-color #e0e0e0
                  .figure-thumb
                    width 160px
                    height 110px
                    margin 0 auto 16px
                    text-align center
                    img
                      width 160px
                      height 110px
                  .title
                    color #333333
                  .price
                    margin 0
                    line-height 20px
                    color $hover_color



</style>
