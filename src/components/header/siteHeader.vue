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
            <div class="site-category" style="display: block">
              <ul class="site-category-list clearfix site-category-list-custom">
                <li class="category-item"
                  :class="isShowLeftNav[index2] ? 'category-item-active' : ''"
                  @mouseenter="enterLeftNav()" @mouseleave="leaveLeftNav()"
                  :data-index="index2"
                  v-for="(item, index) in leftNav" :key="index"
                  >
                  <router-link to="/" class="title">{{item.name}}
                    <i class="iconfont icon-jiantou"></i>
                  </router-link>
                  <div class="children clearfix children-col-4">
                    <ul class="children-list children-list-col children-list-col-1" v-if="item.list.length">
                      <li v-for="(list, i) in item.list[index2].col1" :key="i">
                        <router-link to="/" class="link clearfix">
                          <img :src="list.img" alt="" width="40" height="40" class="thumb"/>
                          <span class="text">{{list.title}}</span>
                        </router-link>
                      </li>
                    </ul>
                    <ul class="children-list children-list-col children-list-col-2" v-if="item.list.length">
                      <li v-for="(list, i) in item.list[index2].col2" :key="i">
                        <router-link to="/" class="link clearfix">
                          <img :src="list.img" alt="" width="40" height="40" class="thumb"/>
                          <span class="text">{{list.title}}</span>
                        </router-link>
                      </li>
                    </ul>
                    <ul class="children-list children-list-col children-list-col-3" v-if="item.list.length">
                      <li v-for="(list, i) in item.list[index2].col3" :key="i">
                        <router-link to="/" class="link clearfix">
                          <img :src="list.img" alt="" width="40" height="40" class="thumb"/>
                          <span class="text">{{list.title}}</span>
                        </router-link>
                      </li>
                    </ul>
                    <ul class="children-list children-list-col children-list-col-4" v-if="item.list.length">
                      <li v-for="(list, i) in item.list[index2].col4" :key="i">
                        <router-link to="/" class="link clearfix">
                          <img :src="list.img" alt="" width="40" height="40" class="thumb"/>
                          <span class="text">{{list.title}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item" @mouseenter="enterNav(0)" @mouseleave="leaveNav(0)" :class="{'nav-item-active': isEnterNav[0]}" data-index="0">
            <router-link to="/" class="link">
              <span class="text">小米手机</span>
            </router-link>
          </li>
          <li class="nav-item" data-index="1" @mouseenter="enterNav(1)" @mouseleave="leaveNav(1)" :class="{'nav-item-active': isEnterNav[1]}">
            <router-link to="/" class="link">
              <span class="text">Redmi红米</span>
            </router-link>
          </li>
          <li class="nav-item" data-index="2" @mouseenter="enterNav(2)" @mouseleave="leaveNav(2)" :class="{'nav-item-active': isEnterNav[2]}">
            <router-link to="/" class="link">
              <span class="text">电视</span>
             </router-link>
          </li>
          <li class="nav-item" data-index="3" @mouseenter="enterNav(3)" @mouseleave="leaveNav(3)" :class="{'nav-item-active': isEnterNav[3]}">
            <router-link to="/" class="link">
              <span class="text">笔记本</span>
            </router-link>
          </li>
          <li class="nav-item" data-index="4" @mouseenter="enterNav(4)" @mouseleave="leaveNav(4)" :class="{'nav-item-active': isEnterNav[4]}">
            <router-link to="/" class="link">
              <span class="text">家电</span>
            </router-link>
          </li>
          <li class="nav-item" data-index="5" @mouseenter="enterNav(5)" @mouseleave="leaveNav(5)" :class="{'nav-item-active': isEnterNav[5]}">
            <router-link to="/" class="link">
              <span class="text">路由器</span>
            </router-link>
          </li>
          <li class="nav-item" data-index="6" @mouseenter="enterNav(6)" @mouseleave="leaveNav(6)" :class="{'nav-item-active': isEnterNav[6]}">
            <router-link to="/" class="link">
              <span class="text">智能硬件</span>
            </router-link>
          </li>
          <li class="nav-item" data-index="7" @mouseenter="enterNav(7)" @mouseleave="leaveNav(7)" :class="{'nav-item-active': isEnterNav[7]}">
            <router-link to="/" class="link">
              <span class="text">服务</span>
            </router-link>
          </li>
          <li class="nav-item" data-index="8" @mouseenter="enterNav(8)" @mouseleave="leaveNav(8)" :class="{'nav-item-active': isEnterNav[8]}">
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
    <div class="header-nav-menu"
      :class="{'slide-down': isShowNav[index], 'slide-up': !isShowNav[index], 'header-nav-menu-active': isShowNav[index]}"
     @mouseenter="handleMouseEnter(index)" @mouseleave="handleMouseLeave(index)"
      >
      <div class="container">
        <ul class="children-list clearfix" v-if="topNav.length && topNav[index].list.length">
          <li class="first"  v-for="(item, index) in topNav[index].list" :key="index">
            <router-link to="/">
              <div class="figure figure-thumb">
                <img :src="item.img" alt="" width="160" height="110">
              </div>
              <div class="title">{{item.title}}</div>
              <p class="price">{{item.price}}</p>
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
      showAll: true,
      isSearch: false,
      leftNav: [],
      isShowLeftNav: [
        false, false, false, false, false, false, false, false, false, false
      ],
      topNav: [],
      index: 6,
      index2: 0,
      num: -1,
      isShowNav: [
        false, false, false, false, false, false, false
      ]
    }
  },
  computed: {
    isEnterNav () {
      return [
        false, false, false, false, false, false, false, false, false
      ]
    }
  },
  methods: {
    handleMouseEnter (index) {
      console.log('num', this.num)
      console.log('index', this.index)
      this.isShowNav[this.index] = true
      console.log('222', this.isShowNav[this.num])
    },
    handleMouseLeave (index) {
      this.isShowNav[this.index] = false
    },
    enterNav (index) {
      // let isEnterNav = this.isEnterNav.slice(0)
      // let isShowNav = this.isShowNav.slice(0)

      this.isEnterNav[index] = true
      // this.isEnterNav = isEnterNav
      // this.isEnterNav[index] = true
      if (index < 7) {
        this.isShowNav[index] = true
        // this.isShowNav = isShowNav
        // this.isShowNav[index] = true
        console.log(index, 'enter')
        this.index = event.target.dataset.index
      }
      // console.log(index)
    },
    leaveNav (index) {
      this.num = index
      console.log('leaveNav', index)
      // let isEnterNav = this.isEnterNav.slice(0)
      this.isEnterNav[index] = false
      // this.isEnterNav = isEnterNav
      // index = event.target.dataset.index
      if (index < 7) {
        let isShowNav = this.isShowNav
        this.isShowNav[index] = false
        this.isShowNav = isShowNav
        // this.index = event.target.dataset.index
      }
    },
    isShowSearch () {
      this.isSearch = true
    },
    enterLeftNav (index) {
      this.index2 = event.target.dataset.index
      this.isShowLeftNav[index] = true
    },
    leaveLeftNav (index) {
      this.index2 = event.target.dataset.index
      this.isShowLeftNav[index] = false
    }
  },
  created () {
    this.$nextTick(() => {
      this.$http.get('http://localhost:8080/static/leftNav.json').then((res) => {
        console.log(res)
        this.leftNav = res.data.nav
      })
      this.$http.get('http://localhost:8080/static/topNav.json').then(res => {
        this.topNav = res.data.topNav
        // console.log(res.data.topNav[this.index].list)
      })
    })
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
          .site-category
            // display none
            position absolute
            top 88px
            left -92px
            z-index: 21
            width 234px
            height 460px
            font-size 14px
            .site-category-list
              height 418px
              margin 0
              padding 20px 0
              list-style-type none
              border 1px solid $hover_color
              color $bg_color
              background #fff
            .site-category-list-custom
              height 420px
              border 0
              color #ffffff
              background rgba(105,101,101,0.6)
              .category-item
                .title
                  position relative
                  display block
                  padding-left 30px
                  height 42px
                  line-height 42px
                  color $bg_color
                  i[class*=iconfont]
                    position absolute
                    top 12px
                    right 20px
                    font-size 16px
                    line-height 16px
                    color $border_color
                .children
                  display none
                  position absolute
                  left 234px
                  top 0
                  z-index 24
                  height 458px
                  border 1px solid $border_color
                  border-left 0
                  background #fff
                  box-shadow 0 8px 16px rgba(0,0,0,.18)
                .children-col-4
                  width 992px
                  .children-list
                    height 458px
                    margin 0
                    padding 2px 0
                    list-style-type none
                  .children-list-col
                    float left
                    width 248px
                    li
                      position relative
                      float left
                      width 265px
                      height 76px
                      .link
                        display block
                        padding 18px 20px
                        line-height 40px
                        color #333
                        transition color .2s
                        &:hover
                          color $hover_color
                        .thumb
                          float left
                          margin-right 12px
                          vertical-align middle
                        .text
                          float left
                          width 172px
                          line-height 40px
                          white-space nowrap
                          text-overflow ellipsis
                          overflow hidden
              .category-item-active .title
                background $hover_color
                color: #fff
              .category-item-active i[class*=iconfont]
                color #fff
                color hsla(0,0%,100%,.5)
              .category-item-active .children
                display block
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
          border 1px solid $border_color
          outline 0
          transition all .2s
        .search-hot-words
          position absolute
          top 14px
          right 62px
          z-index 2
          text-align right
          transition opacity 0.2s
        .search-hot-words.fade-out
            opacity 0
        .search-hot-words.fade-in
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
    top 140px
    left 0
    z-index 24
    width 100%
    height 0
    background #fff
    overflow hidden
  .header-nav-menu.slide-up
    height: 0
  .header-nav-menu.slide-down
    height: 219px
  .header-nav-menu-active
    border-bottom: 1px solid\9;
    border-top 1px solid $border_color
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
    transition: height .3s, box-shadow .2s;
    transition: box-shadow .2s, height .3s;
    transition: box-shadow .2s, height .3s, box-shadow .2s
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
            background-color $border_color
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
