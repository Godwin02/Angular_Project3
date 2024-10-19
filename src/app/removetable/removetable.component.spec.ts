import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovetableComponent } from './removetable.component';

describe('RemovetableComponent', () => {
  let component: RemovetableComponent;
  let fixture: ComponentFixture<RemovetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
