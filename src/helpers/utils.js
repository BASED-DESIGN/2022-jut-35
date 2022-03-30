export function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

export function spliceIntoChunks(arr, chunkSize) {
  const res = [], array = JSON.parse(JSON.stringify(arr))
  while (array.length > 0) {
      const chunk = array.splice(0, chunkSize)
      res.push(chunk)
  }
  return res
}