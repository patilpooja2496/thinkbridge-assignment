import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemDetailsComponent } from './delete-item-details.component';

describe('DeleteItemDetailsComponent', () => {
  let component: DeleteItemDetailsComponent;
  let fixture: ComponentFixture<DeleteItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
