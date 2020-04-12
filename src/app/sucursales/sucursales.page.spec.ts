import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SucursalesPage } from './sucursales.page';

describe('SucursalesPage', () => {
  let component: SucursalesPage;
  let fixture: ComponentFixture<SucursalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SucursalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
