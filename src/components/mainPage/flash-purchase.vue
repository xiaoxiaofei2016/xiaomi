<template>
  <div class="home-flashsale xm-plain-box">
    <div class="box-hd">
      <h2 class="title">小米闪购</h2>
    </div>
    <div class="box-bd clearfix">
      <div class="row">
        <div class="flashsale-countdown rainbow-item-4 span4">
          <div class="round">10:00 场</div>
          <img src="" alt="">
          <div class="desc">距离结束还有</div>
          <div class="countdown clearfix">
            <span>02</span>
            <i>:</i>
            <span>51</span>
            <i>:</i>
            <span>36</span>
          </div>
        </div>
        <div class="span16 flashsale-list swiper-container swiper-no-swiping">
           <!-- 轮播  -->
        </div>
        <div class="swiper-controls">
          <span class="swiper-flashsale-prev">
            <i class="iconfont"></i>
          </span>
          <span class="swiper-flashsale-next">
            <i class="iconfont"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
.home-flashsale
  margin-bottom 22px
  position relative
  .flashsale-countdown
    height 300px
    padding-top 39px
    border-top-width 1px
    border-top-style solid
    background #f1eded
    text-align center
  .rainbow-item-4
    border-top-color #e53935
    .round
      font-size 21px
      color #ef3a3b
      padding-top 15px
    img
      margin 25px auto
    .desc
      color rgba(0,0,0,.54)
      font-size 15px
    .countdown
      width 168px
      margin 28px auto 0
      span
        width 46px
        height 46px
        background #605751
        color #fff
        font-size 24px
        line-height 46px
        float left
      i
        width 15px
        float left
        height 46px
        line-height 46px
        color #605751
        font-size 28px
        font-style normal
  
  .swiper-controls
    position absolute
    right 0
    top 24px
    .swiper-flashsale-prev,.swiper-flashsale-next
      display inline-block
      width 24px
      height 16px
      padding 3px 5px
      margin-left -1px
      border 1px solid $border_color
      font-size 16px
      line-height 16px
      -webkit-transition color .5s
      transition color .5s
      color $font_color
      text-align center
      cursor pointer
    .swiper-flashsale-next:focus,.swiper-flashsale-prev:focus
      outline none
    .swiper-flashsale-next:hover,.swiper-flashsale-prev:hover
      color $hover_color
.xm-plain-box
  .box-hd
    position relative
    height 58px
    -webkit-font-smoothing antialiased
    .title
      margin 0
      font-size 22px
      font-weight 200
      line-height 58px
      color #333
      
</style>
