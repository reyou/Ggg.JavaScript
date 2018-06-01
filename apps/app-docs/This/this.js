class C {
  f() {
    return this;
  }
}
var c = new C();
console.log(c.f());
class D extends C {}

const d = new D();
console.log(d.f() === d);
