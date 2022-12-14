import { UrgentPipe } from './urgent.pipe';

describe('UrgentPipe', () => {
  it('create an instance', () => {
    const pipe = new UrgentPipe();
    expect(pipe).toBeTruthy();
  });
});
