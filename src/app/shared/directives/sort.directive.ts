import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@ws/core/store';
import { selectors, SetSortField, Sort } from '@ws/wildshape/store';

@Directive({
  selector: '[wsSort]',
})
export class SortDirective implements OnInit {
  @Input('wsSort') sort: string;

  element: HTMLElement;

  constructor(private el: ElementRef, private store: Store<AppState>) {
    this.element = <HTMLElement>el.nativeElement;
  }

  ngOnInit(): void {
    this.store.pipe(select(selectors.sort)).subscribe(this.onSortChanged.bind(this));
  }

  @HostListener('click') onclick() {
    this.store.dispatch(new SetSortField(this.sort))
  }

  onSortChanged(sort: Sort) {
    this.element.classList.remove('ascending', 'descending');
    if (sort.field === this.sort) {
      this.element.classList.add(sort.ascending ? 'ascending' : 'descending');
    }
  }
}


