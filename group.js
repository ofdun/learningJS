class Group {
    constructor(array=[]) {
        this.group = array;
    }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        if (this.has(value)) {
            this.group = this.group.filter(item => item !== value);
        }
    }

    has(value) {
        return this.group.includes(value);
    }
    static from(array) {
        return new Group(array);
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false