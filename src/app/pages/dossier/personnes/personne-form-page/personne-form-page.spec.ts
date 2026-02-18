import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneFormPage } from './personne-form-page';

describe('PersonneFormPage', () => {
  let component: PersonneFormPage;
  let fixture: ComponentFixture<PersonneFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonneFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
