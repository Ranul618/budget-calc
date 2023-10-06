import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModelComponent } from './edit-item-model.component';

describe('EditItemModelComponent', () => {
  let component: EditItemModelComponent;
  let fixture: ComponentFixture<EditItemModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditItemModelComponent]
    });
    fixture = TestBed.createComponent(EditItemModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
