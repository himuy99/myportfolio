let mediaQuery = window.matchMedia("(max-width: 900px)")

if (mediaQuery.matches) {
  window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
      itemWidth: 30,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    })
  })
} else {
  window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
      itemWidth: 30,
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    })
  })
}