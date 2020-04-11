import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpresaListContainer } from './empresa-list.container';

describe('EmpresaListComponent', () => {
  let component: EmpresaListContainer;
  let fixture: ComponentFixture<EmpresaListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaListContainer ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpresaListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
