<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sideBar.opened" class="drawer-bg" @click="handleClickOutside" />
    <side-bar class="sidebar-container" />
    <div :class="{hasTagsView:tagView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <nav-bar />
        <tag-view v-if="tagView" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { AppMain, NavBar, Settings, SideBar, TagView } from './components'
import ResizeMixin from './mixins/resize-handler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    NavBar,
    RightPanel,
    Settings,
    SideBar,
    TagView
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sideBar: state => state.app.sideBar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      tagView: state => state.settings.tagView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sideBar.opened,
        openSidebar: this.sideBar.opened,
        withoutAnimation: this.sideBar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin";
@import "src/styles/variables";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}
</style>
