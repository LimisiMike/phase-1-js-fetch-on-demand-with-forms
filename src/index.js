const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault(); //line 2 to 5 - Adds Event listener to capture Form Data and override the Form Behavior
      const input = document.querySelector('input#searchByID');//This will help us access input values directly as compared to e.target.children[1].value
  
//At this point, With this data, and the default form behavior overridden, we can set up a fetch request. 
      fetch(`http://localhost:3000/movies/${input.value}`) //Now, if you type a valid ID into the form, a specific movie object will be logged!
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');
    
    title.innerText = data.title;
    summary.innerText = data.summary;
        // console.log(data);
        // LOG: (3) [{…}, {…}, {…}]
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);

