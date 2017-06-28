function Stack(){
  this.items = new Array();

}

Stack.prototype.empty =  function ()   {
  return this.items.length === 0;
};

Stack.prototype.push = function (item)  {
  this.items.push(item);
  return item;
};

let peek = () => this.items(this.items.length -1);
// return peek;



module.exports = Stack;
