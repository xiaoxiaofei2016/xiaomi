<template>
  <div class="home-brick-box home-brick-row-2-box xm-plain-box">
    <div class="box-hd clearfix">
      <h2 class="title">家电</h2>
      <div class="more">
        <ul class="tab-list">
          <li class="tab-active">热门</li>
          <li >电视影音</li>
        </ul>
      </div>
    </div>
    <div class="box-bd">
      <div class="row">
        <div class="span4">
          <ul class="brick-promo-list clearfix">
            <li class="brick-item brick-item-m">
              <router-link to="/">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90" alt=""/>
              </router-link>
            </li>
            <li class="brick-item brick-item-m">
              <router-link to="/">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90" alt=""/>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="span16">
          <ul class="brick-list clearfix hide">
            <div>
              <li class="brick-item brick-item-m brick-item-m-2" v-for="(item, index) in nineImg" :key="index">
                <router-link to="">
                  <div class="figure figure-img">
                    <img :src="item.imgUrl" alt="" width="160" height="160">
                  </div>
                  <h3 class="title">
                    {{item.title}}
                  </h3>
                  <p class="desc">{{item.desc}}</p>
                  <p class="price">
                    <span class="num">{{item.newprice}}</span>
                    <del class v-show="item.oldprice">
                      <span class="num">{{item.oldprice}}</span>
                    </del>
                  </p>
                </router-link>
              </li>
              <li class="brick-item brick-item-s">
                <router-link to="">
                  <div class="figure figure-img">
                    <img src="" alt="" width="80" height="80">
                  </div>
                  <h3 class="title"></h3>
                  <p class="price">
                    <span class="num"></span>
                  </p>
                </router-link>
              </li>
            </div>
            <li class="brick-item brick-item-s">
              <router-link to="">
                <div class="figure figure-more">
                  <i class="iconfont"></i>
                </div>
                <div class="more">
                  浏览更多
                  <small>热门</small>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {},
  created () {}
}
</script>

<style scoped>

</style>
