const cardElements = document.querySelectorAll('.col');
  
    // Add event listeners to each card element
    cardElements.forEach((card) => {
      const video = card.querySelector('.video');
      const thumbnail = card.querySelector('.thumbnail');
  
      card.addEventListener('mouseenter', () => {
        video.style.display = 'block';
        thumbnail.style.display = 'none';
        video.play(); // Play the video on hover
      });
  
      card.addEventListener('mouseleave', () => {
        video.style.display = 'none';
        thumbnail.style.display = 'block';
        video.pause(); // Pause the video when the cursor leaves
      });
    });
    
    window.addEventListener('load', function () {
    document.querySelector('.hero').classList.add('loaded');
  });
  

  function toggleFlotingQuery() {
    const flotingQuery = document.getElementById('flotingQuery');
    if (flotingQuery.style.marginRight === '-331px') {
      flotingQuery.style.marginRight = '0';
    } else {
      flotingQuery.style.marginRight = '-331px';
    }
  }

  // Add a click event listener to the flotingQuery-btn
  const flotingQueryBtn = document.querySelector('.flotingQuery-btn');
  flotingQueryBtn.addEventListener('click', toggleFlotingQuery);


