( async()=>{
   const fs=require('fs');
   const fs2=require('fs');
   const pokemonId=Array.from({ length:151 },(_,i)=> i+1);
   const pagesId=Array.from({ length:10 },(_,i)=> i+1); 
   
   let fileContent=pokemonId.map(
      id=>`/pokemons/${id}`
   ).join('\n');
  fs.writeFileSync('routes.txt',fileContent);  

  let fileContent2=pagesId.map(
      id=>`/pokemons/page/${id}`
   ).join('\n');
   fs2.appendFileSync('routes.txt','\n'+fileContent2);  

})();