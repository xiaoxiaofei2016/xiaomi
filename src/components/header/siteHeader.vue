<template>
  <div class="site-header">
    <div class="container">
      <div class="header-logo">
        <router-link class="logo" to="/"></router-link>
      </div>
      <div class="header-nav">
        <ul class="nav-list">
          <li class="nav-category">
            <router-link to="" class="link-category">
              <span class="text">全部商品</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="link" to="">
              <span class="text">小米手机</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="link" to="">
              <span class="text">Redmi红米</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="link" to="">
              <span class="text">电视</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="link" to="">
              <span class="text">笔记本</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="link" to="">
              <span class="text">家电</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="link" to="">
              <span class="text">路由器</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="link" to="">
              <span class="text">智能硬件</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="link" to="">
              <span class="text">服务</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="link" to="">
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
}
</script>

<style scoped>

</style>
