const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      // Burger animation
      burger.classList.toggle('toggle');
    });
  };
  
  navSlide();
  
  const testimonialsSlide = () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let index = 0;
  
    setInterval(() => {
      testimonials[index].classList.remove('active');
      index++;
  
      if (index === testimonials.length) {
        index = 0;
      }
  
      testimonials[index].classList.add('active');
    }, 5000);
  };
  
  testimonialsSlide();
  