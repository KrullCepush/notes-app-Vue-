export const requestImitation = async (fn) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn())
    }, 500)
  })
}
