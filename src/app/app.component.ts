import { Component, VERSION, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  msg = '';

  constructor() {}
  
  ngOnInit() {
    this.exerciseForObservable1();
    this.exerciseForObservable2();
    this.exerciseForObservable3();
  }

  exerciseForObservable1() {
    console.log(`========== BEGIN observable1 ========== `);

    const observable1 = of(1, 2, 3);
    // TODO: see requirements in app.component.html

    console.log(`========== END observable1 ========== `);
  }

  exerciseForObservable2() {
    console.log(`========== BEGIN observable2 ========== `);

    const array = ['a', 'b', 'c'];
    const observable2 = from(array);
    // TODO: see requirements in app.component.html

    console.log(`========== END observable2 ========== `);
  }

  exerciseForObservable3() {
    console.log(`========== BEGIN observable3 ========== `);

    const observable3 = of('This message is displayed using interpolation and comes from an Observable');
    // TODO: see requirements in app.component.html

    console.log(`========== END observable3 ========== `);
  }

}
