import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAdmComponent } from './tabela-adm.component';

describe('TabelaAdmComponent', () => {
  let component: TabelaAdmComponent;
  let fixture: ComponentFixture<TabelaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
