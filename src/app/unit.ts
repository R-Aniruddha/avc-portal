export class Unit {
    id: number;
    title = '';
    complete = false;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
  