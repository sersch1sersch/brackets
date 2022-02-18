module.exports = function check(str, bracketsConfig) {
  let xArray = [];
  bracketsConfig.forEach(items => {
    xArray.push(items.join(''))
  });
  
  let y = 0;
  while( y < xArray.length){
    xArray.forEach(items => {
      while(str.indexOf(items) !== -1){
          str = str.replace(items, '');
          y = 0;    
      }
      y++;
    })
  }
  return (str.length !== 0) ? false : true;
}
