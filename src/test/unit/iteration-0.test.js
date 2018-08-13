import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 0', () => {
  const district = new DistrictRepository(kinderData);

  test('district has data in an object', () => {
    // remember that an array is also just an object.
    expect(typeof district.stats).toBe('object');
  });

  test('data coming in has no duplicates', () => {
    // uncomment out the tests that best fits your model
    district.removeDuplicates(district.stats);
    // expect(district.stats.length).toBe(181);
    // console.log(Object.keys(district.stats));
    expect(Object.keys(district.stats).length).toBe(181);
  });
});
