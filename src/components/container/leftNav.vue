<template>
  <div class="home-hero-container container">
    <div class="home-hero">
      <div id="banner">
        <div class="img-wrap">
          <ul>
            <li class="item" style="display: block;">
              <img :src="imgs[0].imgUrl" />
            </li>
            <li class="item">
              <img :src="imgs[1].imgUrl" />
              </li>
            <li class="item">
              <img :src="imgs[2].imgUrl" />
            </li>
            <li class="item">
              <img :src="imgs[3].imgUrl" />
            </li>
            <li class="item">
              <img :src="imgs[4].imgUrl" />
            </li>
          </ul>
        </div>
        <div class="lr-tab">
          <div class="left btn"></div>
          <div class="right btn"></div>
        </div>
        <div class="tab-btn">
          <ul>
            <li class="bottom-btn active"></li>
            <li class="bottom-btn"></li>
            <li class="bottom-btn"></li>
            <li class="bottom-btn"></li>
            <li class="bottom-btn"></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-hero-sub row"></div>
  </div>
</template>

<script>
import '@/utils/autoPlayPic.js'
export default {
  data () {
    return {
      imgs: [
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a012edbf0cf3bf3b1de22b78c19ad050.jpg?w=2452&h=920'},
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8569a4aa8489b7c666d097b90c2e495e.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c45b83231b290d29c4cc150deb513383.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6d5f1c4b27a244efe1433a411069f35.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b642c13442fc0ca455394f34e59a22b3.jpg?thumb=1&w=1533&h=575&f=webp&q=90'}
      ]
    }
  }
}
</script>

<style scoped>
.home-hero-container {
  position: relative;
  z-index: 9;
}
.home-hero {
  position: relative;
  margin-bottom: 26px;
}
#banner {
  margin: 0 auto;
  /* width: 1226px; */
  height: 460px;
  background-color: #ff6700;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.item {
  display: none;
  list-style: none;
}

.item img {
  width: 1226px;
  height: 460px;
  position: absolute;
  top: 0;
  left: 0;
}

.lr-tab .btn {
  position: absolute;
  width: 41px;
  height: 69px;
  top: 195px;
  background: url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png");
}

.lr-tab .left {
  left: 234px;
  background-position-x: -83px;
}

.lr-tab .left:hover {
  background-position-x: 0;
  cursor: pointer;
}

.lr-tab .right {
  right: 0;
  background-position: -125px 0;
}

.lr-tab .right:hover {
  background-position-x: -41px;
  cursor: pointer;
}

.tab-btn {
  position: absolute;
  width: 120px;
  height: 30px;
  right: 15px;
  bottom: 15px;
}

.bottom-btn {
  list-style: none;
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  float: left;
  margin: 5px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  transition: all .3s;
}

.bottom-btn:hover {
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  transition: all .3s;
  cursor: pointer;
}

.active {
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  transition: all .3s;
}
</style>
