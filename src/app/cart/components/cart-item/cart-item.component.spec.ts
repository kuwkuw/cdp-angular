import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.item = {product: {}};

    fixture.detectChanges();

    // Тут можно было проверить попал ли объект в шаблон или нет
    expect(component).toBeTruthy();
  });
});
