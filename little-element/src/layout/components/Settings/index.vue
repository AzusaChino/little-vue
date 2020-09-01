<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">Page Style Settings</h3>

      <div class="drawer-item">
        <span>Theme Color</span>
        <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="changeTheme" />
      </div>

      <div class="drawer-item">
        <span>Open TagView</span>
        <el-switch v-model="tagView" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>Fixed Header</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>SideBar Logo</span>
        <el-switch v-model="sideBarLogo" class="drawer-switch" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'

export default {
  name: 'Setting',
  components: {
    ThemePicker
  },
  data() {
    return {}
  },
  computed: {
    fixedHeader: {
      get() {
        return this.$store.state.settings.fixedHeader
      },
      set(val) {
        this.$store.dispatch('type/changeSettings', {
          key: 'fixedHeader',
          value: val
        })
      }
    },
    tagView: {
      get() {
        return this.$store.state.settings.tagView
      },
      set(val) {
        this.$store.dispatch('type/changeSettings', {
          key: 'tagView',
          value: val
        })
      }
    },
    sideBarLogo: {
      get() {
        return this.$store.state.settings.sideBarLogo
      },
      set(val) {
        this.$store.dispatch('type/changeSettings', {
          key: 'sideBarLogo',
          value: val
        })
      }
    }
  },
  methods: {
    changeTheme(val) {
      this.$store.dispatch('type/changeSettings', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}
</style>
