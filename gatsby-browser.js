const transitionDelay = 250

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.href.includes('/blog')) {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo({}, (savedPosition || (0, 0))),
      transitionDelay
    )
  }
  return false
}
