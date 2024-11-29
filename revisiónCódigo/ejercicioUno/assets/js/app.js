const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//Se debe asignar correctamente el nomnbre de la cvlase .name
const $b = document.querySelector('.blog'); //Se asignaa correctamente el nombre de la clase blog pues estaba nombrado como id
const $l = document.querySelector('.location');

async function displayUser(username) { //la función no funciona porque le falta agregar async para que responda junto con await
  $n.textContent = 'cargando...';
  try{ //agregar try
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();//Falta definir data pues se utiliza después

  console.log(data);
  
  $n.textContent = `${data.name}`; //cambiar comillas simples por comillas invertidas
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
} catch (err){
  handleError(err); //manejar error 
  } 
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`//agregar$ antes de n
}

displayUser('stolinski').catch(handleError);