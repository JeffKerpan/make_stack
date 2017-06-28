function Stack(){
  this.items = [];


let empty = () => this.items.length === 0;

let push = (item) => {
  this.items.push(item);
  return item;
};

let peek = () => this.items[this.items.length -1];

let pop = () => this.items.pop();

let search = (term) => {
  for(let i=0; i<this.items.length; i++) {
    if(this.items[i] === term) {
      return i;
    }
  }
  return 0.1;
};

  return {
    empty,
    push,
    peek,
    pop,
    search
  };

}


module.exports = Stack;
