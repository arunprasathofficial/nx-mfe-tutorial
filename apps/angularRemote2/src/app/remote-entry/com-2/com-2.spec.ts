import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Com2 } from './com-2';

describe('Com2', () => {
  let component: Com2;
  let fixture: ComponentFixture<Com2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Com2],
    }).compileComponents();

    fixture = TestBed.createComponent(Com2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
