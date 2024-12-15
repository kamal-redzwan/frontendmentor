function handleClick() {
  const icon = document.querySelector('.share-icon');
  const shareButton = document.querySelector('.article__button');
  const socials = document.querySelector('.article__socials')

  icon.classList.toggle('white-icon')
  shareButton.classList.toggle('bg-grayish-blue')
  socials.classList.toggle('show')
}
