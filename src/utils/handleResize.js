export const handleResize = (setWindowWidth) => {
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  window.addEventListener('resize', updateWindowWidth)

  return () => {
    window.removeEventListener('resize', updateWindowWidth)
  }
}
