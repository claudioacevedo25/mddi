const handleClickScroll = (scrollTo?: string) => {
  const element = document.getElementById(scrollTo ?? "home")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}
export { handleClickScroll }
