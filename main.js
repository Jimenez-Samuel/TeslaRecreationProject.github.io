const header = document.querySelector('.header')
const sections = document.querySelectorAll('.mainZones')

const observerOptions = {
  root: null,
  rootMargin: '0px', 
  threshold: 0.90
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const { isIntersecting } = entry

    if(isIntersecting){
      const colorHeader = entry.target.getAttribute('data-header-color')
      header.style.color = colorHeader
    }
  })
}, observerOptions)

sections.forEach(section => {
  observer.observe(section)
})