import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform returns sorted array', () => {
    const pipe = new OrderByPipe();
    const array = [{ price: 2, description: 'b' }, { price: 3, description: 'b' }, { price: 1, description: 'b' }];
    expect(pipe.transform(array, 'price'))
      .toEqual([{ price: 1, description: 'b' }, { price: 2, description: 'b' }, { price: 3, description: 'b' }], 'array sorted incorect');
  });
});
