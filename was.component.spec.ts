import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WASComponent } from './was.component';

describe('WASComponent', () => {
  let component: WASComponent;
  let fixture: ComponentFixture<WASComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WASComponent]
    });
    fixture = TestBed.createComponent(WASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
