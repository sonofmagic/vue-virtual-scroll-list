export function getDatas(counts) {
  const data: { id: string; text: string }[] = []
  for (let index = 0; index < counts; index++) {
    data.push({
      id: String(index),
      text: Math.random().toString(16).slice(8)
    })
  }
  return data
}
