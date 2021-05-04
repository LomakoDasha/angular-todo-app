import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  const arrayOfValues = [
    {id: 1, title: 'Label 1', description: 'some text', importanceFlag: true},
    {id: 2, title: 'Label 2', description: 'some text', importanceFlag: false}
  ];

  it('create an instance of pipe', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    it('filter pipe active & match data values', () => {
      expect(pipe.transform(arrayOfValues, '1')).toEqual([{id: 1, title: 'Label 1', description: 'some text', importanceFlag: true}]);
    });

    it('filter pipe active & not match data values', () => {
      expect(pipe.transform(arrayOfValues, '666')).toEqual([]);
    });

    it('filter pipe not active', () => {
      expect(pipe.transform(arrayOfValues, '')).toEqual(arrayOfValues);
    });
  });
});
