export const chunk = <T>(arr: T[], size: number) => {
  const arra = Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )

  console.log(arra)
  return arra
}
