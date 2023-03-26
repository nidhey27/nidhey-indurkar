import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesafeComponent } from './besafe.component';

describe('BesafeComponent', () => {
  let component: BesafeComponent;
  let fixture: ComponentFixture<BesafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BesafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
