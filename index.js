class SortedList {
  constructor() {
   this.items = []
   this.length = this.items.length
   
  }

  add(item) {
    this.items.push(item);
    this.length ++
    this.items.sort((ele1,ele2) => {
        if (ele1 < ele2) {
          return -1
        }
        else if (ele1 > ele2){
          return 1
        }
        else {
          return 0
        }
        
    })
  }

  get(pos) {

  }

  max() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
    }
    else {
      return this.items[this.items.length -1]
    }
  }

  min() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
    }
    else {
      return this.items[0]
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
