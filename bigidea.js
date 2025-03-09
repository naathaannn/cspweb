document.addEventListener("DOMContentLoaded", function() {
    // Particles.js initialization
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "char",
          character: {
            value: ["0", "1"],
            font: "Courier New",
            style: "",
            weight: "400",
            fill: true
          }
        },
        opacity: {
          value: 0.2,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.3,
            sync: false
          }
        },
        size: {
          value: 35,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 10,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 54,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  
    // Add hover effects for navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        // Dim other buttons when hovering one
        navButtons.forEach(btn => {
          if (btn !== button) {
            btn.style.opacity = '0.7';
          }
        });
      });
      button.addEventListener('mouseleave', () => {
        // Restore opacity of all buttons
        navButtons.forEach(btn => {
          btn.style.opacity = '1';
        });
      });
    });
  
    // Cursor trail effect
    const cursorTrail = document.querySelector('.cursor-trail');
    const particles = [];
    const maxParticles = 45;
    
    // Create particles for the cursor trail
    for (let i = 0; i < maxParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('cursor-particle');
      particle.style.opacity = '0';
      cursorTrail.appendChild(particle);
      
      particles.push({
        element: particle,
        x: 0,
        y: 0,
        size: Math.random() * 5 + 3,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        life: 0,
        maxLife: Math.random() * 30 + 20
      });
    }
    
    // Track mouse movement
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Animation loop for cursor trail
    function animateParticles() {
      particles.forEach(p => {
        // If particle is "dead", reset it at current mouse position
        if (p.life <= 0) {
          p.x = mouseX;
          p.y = mouseY;
          p.size = Math.random() * 5 + 3;
          p.speedX = Math.random() * 2 - 1;
          p.speedY = Math.random() * 2 - 1;
          p.life = p.maxLife;
          p.element.style.opacity = '0.8';
        }
        
        // Update particle position
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;
        
        // Update visual properties
        const opacity = p.life / p.maxLife;
        p.element.style.opacity = opacity.toString();
        p.element.style.width = p.size + 'px';
        p.element.style.height = p.size + 'px';
        p.element.style.left = p.x + 'px';
        p.element.style.top = p.y + 'px';
        p.element.style.background = `rgba(255, 255, 255, ${opacity})`;
      });
      
      requestAnimationFrame(animateParticles);
    }
    
    // Start animation
    animateParticles();
  
    // You can add page transition effects here if needed
    document.querySelectorAll('.nav-button').forEach(link => {
      link.addEventListener('click', function(e) {
        // This is where you would add page transition logic
      });
    });
  });
  