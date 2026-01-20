export function downloadFile(fileName: string, downloadName: string) {
  const link = document.createElement('a')
  link.href = `${import.meta.env.BASE_URL}${fileName}`
  link.download = downloadName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
