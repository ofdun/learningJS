class Group {
  constructor(array = []) {
    this.group = array;
  }

  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.group = this.group.filter((item) => item !== value);
    }
  }

  has(value) {
    return this.group.includes(value);
  }

  static from(array) {
    return new Group(array);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(groupObject) {
    this.count = 0;
    this.group = groupObject.group;
  }

  next() {
    if (this.group.length === this.count) return { done: true };

    let value = this.group[this.count];
    this.count++;

    return { value: value, done: false };
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
