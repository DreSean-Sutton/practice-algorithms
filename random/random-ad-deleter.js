document.querySelectorAll('[data-id^="urn:li:activity:"]').forEach($post => {
  const isAdvertisement = $post.querySelector('[data-entity-hovercard-id^="urn:li:fs_miniCompany:"]') !== null
  if (isAdvertisement) {
    console.log($post.textContent.replaceAll(/\s+/g, ' '))
    $post.remove()
  }
})
