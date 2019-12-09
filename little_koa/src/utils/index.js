const db = {
  save (k, v) {
    localStorage.setItem(k, JSON.stringify(v))
  },
  get (k) {
    JSON.parse(localStorage.getItem(k))
  },
  del (...ks) {
    for (let k in ks) {
      localStorage.removeItem(k)
    }
  },
  clear () {
    localStorage.clear()
  }
}

export default db
