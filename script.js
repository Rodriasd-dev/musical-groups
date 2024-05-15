document.addEventListener('DOMContentLoaded', () => {
  const musicGroups = [
    { id: 1, name: "Led Zeppelin", genre: "Rock" },
    { id: 2, name: "Miles Davis", genre: "Jazz" },
    { id: 3, name: "Michael Jackson", genre: "Pop" },
    { id: 4, name: "Pink Floyd", genre: "Rock" },
    { id: 5, name: "John Coltrane", genre: "Jazz" },
    { id: 6, name: "Madonna", genre: "Pop" }
];

  const ratingForm = document.getElementById('rating-form');
  const processButton = document.getElementById('process-button');
  const resultSection = document.getElementById('result');
  const rankingList = document.getElementById('ranking-list');

  musicGroups.forEach(group => {
      const div = document.createElement('div');
      div.className = 'group-rating';
      
      const label = document.createElement('label');
      label.setAttribute('for', `group-${group.id}`);
      label.textContent = group.name;
      
      const select = document.createElement('select');
      select.setAttribute('name', group.id);
      select.setAttribute('id', `group-${group.id}`);
      
      for (let i = 1; i <= 10; i++) {
          const option = document.createElement('option');
          option.setAttribute('value', i);
          option.textContent = i;
          select.appendChild(option);
      }
      
      div.appendChild(label);
      div.appendChild(select);
      ratingForm.appendChild(div);
  });

  processButton.addEventListener('click', () => {
      const ratings = [];
      
      

      musicGroups.forEach(group => {  
        
          const rating = document.getElementById(`group-${group.id}`).value;


          ratings.push({ id: group.id, name: group.genre, rating: parseInt(rating) });
      });
      
      ratings.sort((a, b) => b.rating - a.rating);
      
      rankingList.innerHTML = '';
      ratings.forEach(group => {
          const listItem = document.createElement('li');
          listItem.textContent = `Group: ${group.name} - Rating: ${group.rating}`;
          rankingList.appendChild(listItem);
      });
      
      resultSection.style.display = 'block';
  });
});
