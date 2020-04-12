import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SucursalListContainer } from './sucursal-list.container';

describe('SucursalListComponent', () => {
  let component: SucursalListContainer;
  let fixture: ComponentFixture<SucursalListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalListContainer ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SucursalListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
