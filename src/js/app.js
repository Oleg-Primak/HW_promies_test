
const appendMems = (results) => {
    results.forEach((name) => {
      const img = document.createElement('img');
      img.setAttribute('src', name.image);
      document.body.append(img);
    });
  };
  
  fetch("https://rickandmortyapi.com/api/character/")
    .then((result) => result.json())
    //.then((result) => console.log(result))
    .then((result) => appendMems(result.results.slice(3 , 9)))
    .catch(error => console.log('error', error));
  
  async function getRickMortiFunkAsync() {
    try {
      const getData = await fetch("https://rickandmortyapi.com/api/character");
      const getDataJson = await getData.json();
    
      appendMems(getDataJson.results.slice(9, 11));
    
    } catch (error) {
      console.log('ERROR', error.message);
    }
  }

  
  const searchUsersData = (names) => new Promise((resolve) => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((data) => data.json())
      .then((result) => resolve(result.results.filter(({name}) => names.includes(name)))) ;
  })
  
  
  const getRickMorti = () => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((data) => data.json())
    .then((result) => result.results.map(( {name}) => name))
    //.then((result) => console.log(result))
    .then((names) => searchUsersData(names.slice(0, 5)))
    .then((items) => console.log(items))
    .catch((error) => console.log(error.message));
  };
  
  getRickMorti()
  getRickMortiFunkAsync()
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  //COPY !!!!!!!!!!!!!!!!!!
  
  const createMemesImg = (results) => results.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('meme');
    div.innerHTML = `
    <img src = ${element.image} alt=${element.name} class="img">                 
    <p class="meme__name"><b>Название:</b> ${element.name}</p>
    <p class="meme__id"><b>ID:</b> ${element.id}</p>
    `;
    document.body.append(div);
  });
  
  
  
  const getMemesWithFetch = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(result => createMemesImg(result.results.slice(0, 9)))
      
      //.catch(error => console.log('ERROR', error.message))
      ;
  }
  
  getMemesWithFetch()*/