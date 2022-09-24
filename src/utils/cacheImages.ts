export const cacheImages = async (imagePaths: string[], setImagesCached: any) => {
  const promises = await imagePaths.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image()

      img.src = src
      img.onload = resolve
      img.onerror = reject
    })
  })

  await Promise.all(promises)

  setImagesCached(true)
}
