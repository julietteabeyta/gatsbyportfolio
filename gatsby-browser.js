const transitionDelay = 510

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location && location.href && location.href.includes('/blog')) {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo({}, (savedPosition || (0, 0))),
      transitionDelay
    )
  }
  return false
}
