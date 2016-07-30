import { Component } from "@angular/core";
import { Logger } from "./logger";

@Component({
  selector: 'greeter',
  template: `
  <div #greeter></div>
  `
})
class Greeter {
  public foo: string;
  private l : Logger;
  constructor(l : Logger) {
    this.foo = "bar";
    this.l.log(this.foo);
  }
}

let g = new Greeter(new Logger());
console.log(g.foo);
