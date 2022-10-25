import {Foo, isCuteNumberGreaterThan10} from '../src/Foo'

describe('Foo', () => {
  it('bar', () => {
    expect(new Foo().bar()).toEqual('bar')
  })

  it('should return true when given array: 2, 4, 7, 9, 11, 14', () => {
    const numbers = [2, 4, 7, 9, 11, 14]
    const res = isCuteNumberGreaterThan10(numbers)
    expect(res).toBeTruthy()
  })

  it('should return false when given array: 2, 4, 6, 9', () => {
    const numbers = [2, 4, 6, 9]
    const res = isCuteNumberGreaterThan10(numbers)
    expect(res).toBeFalsy()
  })

  it('should return false when given array: 2, 4, 6', () => {
    const numbers = [2, 4, 6]
    const res = isCuteNumberGreaterThan10(numbers)
    expect(res).toBeFalsy()
  })
})
