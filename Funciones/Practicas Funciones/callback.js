function operar(x,y,callback) {
  let resultado= x+y;
  callback(resultado);
}
operar(10,2,function(resultado){
  console.log(`La suma es :` + resultado); 
})