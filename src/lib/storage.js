class Db {
  constructor(name) {
    this.name = name;
    this.data = [];
  }
  randomString(len) {
    var p =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()=';
    return [...Array(len)].reduce(
      (a) => a + p[~~(Math.random() * p.length)],
      ''
    );
  }
  create(data) {
    this.data > 0 && this.load();
    console.log('This: ', this.data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof data === 'object' && !Array.isArray(data)) {
          if (!data['id']) data['id'] = this.randomString(16);
          this.data.push(data);
          this.save();
          return resolve(this.findById(data.id));
        }

        if (typeof data === 'object' && Array.isArray(data)) {
          for (let prop in data) {
            if (!data[prop].id) data[prop].id = this.randomString(16);
            this.data.push(data[prop]);
          }
          this.save();
          return resolve(data);
        }
        return reject('Data must be an object');
      }, 500);
    });
  }

  get length() {
    this.load();
    const res = this.data.length > 0 ? this.data.length : 0;
    return res;
  }

  get allData() {
    this.load();
    return this.data;
  }

  findById(id) {
    this.load();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const doc = this.data.filter((res) => res.id === id);

        if (!doc[0]) return reject('this data does not exist');

        return resolve(doc[0]);
      }, 1000);
    });
  }

  update(id, update) {
    this.load();
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          let old = await this.findById(id);

          if (typeof update === 'object' && !Array.isArray(update)) {
            this.data[this.data.indexOf(old)] = { ...update };
            this.save();
            return resolve(update);
          }
          return reject('New data must be an object');
        } catch {
          (err) => {
            return reject(err);
          };
        }
      }, 1200);
    });
  }

  delete(id) {
    this.load();
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const docDel = await this.findById(id);
          const docIndex = this.data.indexOf(docDel);
          this.data.splice(docIndex, 1);
          this.save();
          return resolve(this.data);
        } catch {
          (err) => reject(err);
        }
      }, 1000);
    });
  }

  load() {
    this.data = JSON.parse(localStorage.getItem(this.name));
  }
  save() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }
}
export default Db;
