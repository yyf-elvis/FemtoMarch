export default {
  mounted(el, binding) {
    const options = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
      once: false,
      ...(typeof binding.value === 'object' ? binding.value : {})
    }

    // 添加基础类（必须在Observer之前）
    el.classList.add('v-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('v-reveal-show')
            
            if (options.once) {
              observer.unobserve(el)
            }
          } else if (!options.once) {
            el.classList.remove('v-reveal-show')
          }
        })
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin
      }
    )

    observer.observe(el)
    el._revealObserver = observer
  },

  unmounted(el) {
    if (el._revealObserver) {
      el._revealObserver.disconnect()
    }
  }
}