import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { CartService } from '../../../cart/services/cart.service';

import { ProductListComponent } from './product-list.component';
import { ProductComponent } from '../product/product.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    let actions$: Observable<Action>;
    let store: MockStore<{ products: {} }>;
    const initialState = {
      products: {
        ids: [],
        loading: false,
        loaded: false,
        error: null
      }
    };

    actions$ = of({ type: '[Get Product Page (App/Admin)] GET_PRODUCT' });

    let cartServiceStub = {
      addItemToCart: () => { }
    };

    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent],
      providers: [
        { provide: CartService, useValue: cartServiceStub },
        provideMockStore({ initialState }),
        provideMockActions(() => actions$)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
