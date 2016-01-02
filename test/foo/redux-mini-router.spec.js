import expect from 'expect';
import { foo } from '../../src/index';

describe('redux-mini-router', () => {
    it('should work', () => {
        console.log('it does');
        expect(foo()).toBe(true);
    });
});
