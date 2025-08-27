function somar(X, Y) {
    return X + Y;
  }
  
  function sub(X, Y) {
    return X - Y;
  }
  
  function multi(X, Y) {
    return X * Y;
  }
  
  function divisao(X, Y) {
        return X / Y;
  }
  
  function aoQuadrado(X) {
    return X * X;
  }
  
  function raizQuadrada(X) {
    if (X < 0) {
      return 'Erro: número negativo';
    }
    return Math.sqrt(X);
  }
  
  module.exports = {
    somar,
    sub,
    multi,
    divisao,
    aoQuadrado,
    raizQuadrada
  };
  