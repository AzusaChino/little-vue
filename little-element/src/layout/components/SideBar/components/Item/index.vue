<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(createElement, context) {
    // react 风格
    const { icon, title } = context.props
    const virtualNodes = []
    if (icon) {
      if (icon.includes('el-icon')) {
        virtualNodes.push(<i class={[icon, 'sub-el-icon']}/>)
      } else {
        virtualNodes.push(<svg-icon icon-class={icon}/>)
      }
      if (title) {
        virtualNodes.push(<span slot='title'> {(title)} </span>)
      }
    }
    return virtualNodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
