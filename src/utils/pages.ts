export const getPagesCount = (tottalCount: number, limit: number) => {
  return Math.ceil(tottalCount/limit)
}

export const getPagesArray = (totalPages: number) => {
  const result = []
  for(let i: number = 0; i<totalPages; i++) {
    
    result.push(i+1)
  }
  return result
}