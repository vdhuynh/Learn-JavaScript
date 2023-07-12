class MobilePhone {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDescription() {
    return `The ${this.name} costs ${this.price}`;
  }
}

class Android extends MobilePhone {
  getVersion() {
    return 12;
  }
}

class iOS extends MobilePhone {
  getVersion() {
    return 15;
  }
}
