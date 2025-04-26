<script>
    function showOption(type) {
      const home = document.getElementById('home');
      const menu = document.getElementById('menu');
	  const location = document.getElementById('location');
      const contact = document.getElementById('contact');
	  
      home.style.display = (type === 'home' || type === 'full') ? 'block' : 'none';
      menu.style.display = (type === 'menu' || type === 'full') ? 'block' : 'none';
	  location.style.display = (type === 'rice' || type === 'full') ? 'block' : 'none';
	  contact.style.display = (type === 'desserts' || type === 'full') ? 'block' : 'none';
          }

    // Default to home
    showOption('home');
	
    function showMenu(type) {
      const Starters = document.getElementById('Starters');
      const maincourse = document.getElementById('maincourse');
	  const rice = document.getElementById('rice');
      const desserts = document.getElementById('desserts');
	  const beverages = document.getElementById('beverages');

      Starters.style.display = (type === 'Starters' || type === 'full') ? 'block' : 'none';
      maincourse.style.display = (type === 'maincourse' || type === 'full') ? 'block' : 'none';
	  rice.style.display = (type === 'rice' || type === 'full') ? 'block' : 'none';
	  desserts.style.display = (type === 'desserts' || type === 'full') ? 'block' : 'none';
      beverages.style.display = (type === 'beverages' || type === 'full') ? 'block' : 'none';
    }

    // Default to full menu
    showMenu('Starters');
</script> 