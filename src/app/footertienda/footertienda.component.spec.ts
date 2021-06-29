import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootertiendaComponent } from './footertienda.component';

describe('FootertiendaComponent', () => {
  let component: FootertiendaComponent;
  let fixture: ComponentFixture<FootertiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootertiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootertiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
