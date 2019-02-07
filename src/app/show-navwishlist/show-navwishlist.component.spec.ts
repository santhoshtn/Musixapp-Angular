import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNavwishlistComponent } from './show-navwishlist.component';

describe('ShowNavwishlistComponent', () => {
  let component: ShowNavwishlistComponent;
  let fixture: ComponentFixture<ShowNavwishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNavwishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNavwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
