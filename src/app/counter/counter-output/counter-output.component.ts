import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-couter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter!: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    // this.store.select(getCounter).subscribe((counter) => {
    //   this.counter = counter;
    // });/
    this.counter = this.store.select(getCounter);
  }
}
