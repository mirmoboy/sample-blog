export const cleanUrl = ({ id, title }) => {
  if (id && title) {
    const slug = title.trim().replace(/\s/g, '-').toLowerCase()

    return `${slug}-${id}`
  }

  return ''
}

export const getIdFromCleanUrl = (pathUrl) => {
  if (pathUrl) {
    return pathUrl.split('-').pop()
  }

  return ''
}