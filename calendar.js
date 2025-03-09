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

  // Calendar functionality
  const calendarGrid = document.getElementById('calendar-grid');
  const weeklyNotesElement = document.getElementById('weekly-notes');
  
  // ===== CUSTOMIZE YOUR EVENTS HERE =====
  // Define events directly in code - edit this to add/remove events
  const events = {
      // Format: "YYYY-MM-DD": [{ title, description, color }]
      "2025-03-10": [
          {
              title: "Current Day",
              description: "",
              color: "#ff5e5e"
          }
      ],
      "2025-03-14": [
          {
              title: "Weekly Check #5",
              description: "",
              color: "#4a90e2" 
          }
      ],
      "2025-03-16": [
          {
              title: "Spring Break",
              description: "",
              color: "#e28743"
          }
      ],
      "2025-03-17": [
        {
            title: "Spring Break",
            description: "",
            color: "#e28743"
        }
    ],
       "2025-03-18": [
        {
            title: "Spring Break",
            description: "",
            color: "#e28743"
        }
    ],
    "2025-03-19": [
      {
          title: "Spring Break",
          description: "",
          color: "#e28743"
      }
  ],
  "2025-03-20": [
    {
        title: "Spring Break",
        description: "",
        color: "#e28743"
    }
],
"2025-03-21": [
  {
      title: "Spring Break",
      description: "",
      color: "#e28743"
  }
],
"2025-03-22": [
  {
      title: "Spring Break",
      description: "",
      color: "#e28743"
  }
],   
  };
  
  // ===== CUSTOMIZE YOUR WEEKLY NOTES HERE =====
  // Edit this HTML to change the notes content with bullet points
  const weeklyNotes = `
      <h3>Week 1 (Mar 1-8):</h3>
      <ul>
          <li>Focus on Code.org</li>
      </ul>
      
      <h3>Week 2 (Mar 9-15):</h3>
      <ul>
          <li>Try to practice before the AP exam</li>
          <li>Khan Academy is a great resource for this!</li>
      </ul>
      
      <h3>Week 3 (Mar 16-22):</h3>
      <ul>
          <li>Spring Break</li>
      </ul>
      
      <h3>Week 4 (Mar 23-31):</h3>
      <ul>
          <li>AP project?</li>
      </ul>
  `;
  
  // Generate March 2025 calendar
  function generateCalendar() {
      calendarGrid.innerHTML = '';
      
      // March 2025 starts on a Saturday (first day of week is Sunday)
      const daysInMonth = 31;
      const firstDay = 6; // 0 = Sunday, 6 = Saturday
      
      // Add empty cells for days before the first of the month
      for (let i = 0; i < firstDay; i++) {
          const emptyDay = document.createElement('div');
          emptyDay.classList.add('calendar-day', 'empty');
          calendarGrid.appendChild(emptyDay);
      }
      
      // Add cells for all days in the month
      for (let day = 1; day <= daysInMonth; day++) {
          const dayCell = document.createElement('div');
          dayCell.classList.add('calendar-day');
          
          const dateNumber = document.createElement('div');
          dateNumber.classList.add('date-number');
          dateNumber.textContent = day;
          dayCell.appendChild(dateNumber);
          
          // Check if there are events for this day
          const dateString = `2025-03-${day.toString().padStart(2, '0')}`;
          if (events[dateString] && events[dateString].length > 0) {
              const eventIndicator = document.createElement('div');
              eventIndicator.classList.add('event-indicator');
              eventIndicator.style.backgroundColor = events[dateString][0].color || "#ff5e5e";
              dayCell.appendChild(eventIndicator);
              
              // Add event list
              const eventsList = document.createElement('div');
              eventsList.classList.add('events-list');
              
              events[dateString].forEach(event => {
                  const eventItem = document.createElement('div');
                  eventItem.classList.add('event-item');
                  eventItem.textContent = event.title;
                  eventItem.title = event.description; // Tooltip on hover
                  
                  // Apply custom color to event
                  eventItem.style.backgroundColor = event.color || "#4a90e2";
                  eventItem.style.color = getContrastColor(event.color || "#4a90e2");
                  
                  eventsList.appendChild(eventItem);
              });
              
              dayCell.appendChild(eventsList);
          }
          
          calendarGrid.appendChild(dayCell);
      }
      
      // Update weekly notes
      weeklyNotesElement.innerHTML = weeklyNotes;
  }
  
  // Get appropriate text color based on background color for contrast
  function getContrastColor(hexColor) {
      // Convert hex to RGB
      const r = parseInt(hexColor.substr(1, 2), 16);
      const g = parseInt(hexColor.substr(3, 2), 16);
      const b = parseInt(hexColor.substr(5, 2), 16);
      
      // Calculate luminance
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      
      // Return white for dark colors, black for light colors
      return luminance > 0.5 ? '#000000' : '#ffffff';
  }
  
  // Back arrow functionality (placeholder)
  const backArrow = document.getElementById('back-arrow');
  backArrow.addEventListener('click', () => {
      // This can be programmed later as requested
      console.log('Back arrow clicked');
  });
  
  // Initialize calendar
  generateCalendar();
});
