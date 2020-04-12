import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loading } from './loading.component';

describe('LoadingComponent', () => {
  let component: Loading;
  let fixture: ComponentFixture<Loading>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
