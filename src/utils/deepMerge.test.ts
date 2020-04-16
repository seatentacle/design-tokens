import {
  deepMerge,
  DeepPartial,
} from './deepMerge';

type Obj = {
  a: {
    b: number;
    c: number;
  };
  d: null;
};

describe('deep merge', () => {
  let left: Obj;
  let leftCopy: Obj;

  let right: DeepPartial<Obj>;
  let rightCopy: DeepPartial<Obj>;
  
  let result: Obj;

  beforeEach(() => {
    left = {
      a: {
        b: 1,
        c: 2,
      },
      d: null,
    };
    leftCopy = { ...left };
    
    right = {
      a: {
        b: 3,
      },
    };
    rightCopy = { ...right };

    result = deepMerge<Obj>(left, right);
  });

  it('should return correctly merged object', () => {
    expect(result).toEqual({
      a: {
        b: 3,
        c: 2,
      },
      d: null,
    });
  });

  it('should not mutate the arguments', () => {
    expect(rightCopy).toEqual(right);
    expect(leftCopy).toEqual(left);
  });
});
