/**
     * Explore isotope and filter
     */
window.addEventListener('load', () => {
    let exploreContainer = select('.explore-container');
    if (exploreContainer) {
      let exploreIsotope = new Isotope(exploreContainer, {
        itemSelector: '.explore-item',
        layoutMode: 'fitRows'
      });

      let exploreFilters = select('#explore-flters li', true);

      on('click', '#explore-flters li', function(e) {
        e.preventDefault();
        exploreFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        exploreIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate explore lightbox 
   */
  const exploreLightbox = GLightbox({
    selector: '.explore-lightbox'
  });

  /**
   * explore details slider
   */
  new Swiper('.explore-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
