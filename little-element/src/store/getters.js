const getters = {
  sideBar: state => state.app.sideBar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagView.visitedViews,
  cachedViews: state => state.tagView.cachedViews,
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name,
  // introduction: state => state.user.introduction,
  // roles: state => state.user.roles,
  permissionRoutes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}

export default getters
