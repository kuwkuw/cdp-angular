import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { CartService } from '../../../cart/services/cart.service';

import { SharedModule } from '../../../shared';

import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartListComponent } from './cart-list.component';

describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;

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

    let cartServiceStub = {
      cartItemList: [],
      addItemToCart: () => { }
    };

    actions$ = of({ type: '[Get Product Page (App/Admin)] GET_PRODUCT' });

    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CartListComponent, CartItemComponent],
      providers: [
        { provide: CartService, useValue: cartServiceStub },
        provideMockStore({ initialState }),
        provideMockActions(() => actions$)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
