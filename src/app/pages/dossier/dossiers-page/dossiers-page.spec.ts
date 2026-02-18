import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersPage } from './dossiers-page';

describe('DossiersPage', () => {
  let component: DossiersPage;
  let fixture: ComponentFixture<DossiersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossiersPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossiersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
