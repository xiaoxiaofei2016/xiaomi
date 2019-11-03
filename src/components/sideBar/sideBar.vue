<template>
  <div class="home-tool-bar home-tool-bar-large">
    <router-link to="/" class="item">
      <div class="icon">
        <img src="" alt="" class="static">
        <img src="" alt="" class="hover">
      </div>
      <span class="text">
        手机APP
      </span>
      <div class="pop-content">
        <img src="" alt="">
        <span class="desc">手机扫一扫一分赢好礼</span>
      </div>
    </router-link>
    <router-link to="/" class="item">
      <div class="icon">
        <img src="" alt="" class="static">
        <img src="" alt="" class="hover">
      </div>
      <span class="text">
        个人中心
      </span>
    </router-link>
    <router-link to="/" class="item">
      <div class="icon">
        <img src="" alt="" class="static">
        <img src="" alt="" class="hover">
      </div>
      <span class="text">
        售后服务
      </span>
    </router-link>
    <router-link to="/" class="item">
      <div class="icon">
        <img src="" alt="" class="static">
        <img src="" alt="" class="hover">
      </div>
      <span class="text">
        人工客服
      </span>
    </router-link>
    <router-link to="/" class="item">
      <div class="icon">
        <img src="" alt="" class="static">
        <img src="" alt="" class="hover">
      </div>
      <span class="text">
        购物车
      </span>
    </router-link>
    <router-link to="/" class="item backtop">
      <div class="icon">
        <img src="" alt="" class="static">
        <img src="" alt="" class="hover">
      </div>
      <span class="text">回顶部</span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
.home-tool-bar
  position fixed
  bottom 70px
  right 0
  z-index 99
  .item
    position relative
    display block
    width 82px
    height 90px
    margin-top -1px
    background-color #fff
    border 1px solid #f5f5f5
    text-align center
    &:hover .text
      color $hover_color
    &:hover .static
      opacity 0
    &:hover .hover
      opacity 1
    &:hover .pop-content
      transform translate3d(-110%,0,0)
      opacity 1
      visibility visible
    .icon
      position relative
      width 30px
      height 30px
      margin 0 auto 8px
      padding-top 18px
      img
        position absolute
        bottom 0
        left 0
        width 30px
        height 30px
        -webkit-transition opacity .3s
        transition opacity .3s
      .static
        opacity 1
      .hover
        opacity 0
    .text
      color #757575
      -webkit-transition color .3s
      transition color .3s
    .pop-content
      position absolute
      left 0
      top 0
      padding 14px
      background #fff
      border 1px solid #f5f5f5
      -webkit-transition opacity .3s
      transition opacity .3s
      -webkit-transform translateZ(0)
      transform translateZ(0)
      opacity 0
      visibility hidden
      &::after
        right -18px
        border-color rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #fff
        z-index 2
      &::before
        right -19px
        border-color rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #f5f5f5
        z-index 1
      &::before,&::after
        content ''
        position absolute
        top 21%
        width 0
        height 0
        border-width 10px
        border-style solid
        overflow hidden
      img
        display block
        width 100px
        height 100px
        margin 6px auto
      .desc
        display block
        width 82px
        margin 14px auto 0
        color #757575
        text-align center
  .backtop
    margin-top 14px
    border-top 1px solid #f5f5f5
    visibility hidden
    &.active
      visibility visible
      
.home-tool-bar-small
  left 50%
  right auto
  margin-left 613px
  bottom 40px
  &.mini
    right 0
    left auto
    margin-left 0

</style>
