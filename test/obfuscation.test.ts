import { obfuscate } from '../src';

const originalMath = global.Math;

beforeAll(() => {
	const mockMath = Object.create(global.Math);
	mockMath.random = () => 0.5;
	global.Math = mockMath;
});

afterAll(() => {
	global.Math = originalMath;
});

test('GIVEN normal characters THEN pseudo-randomly obfuscates some of them', () => {
	expect(obfuscate('0123456789')).toStrictEqual('⓿𝟣ᒾǯ４５⁶⑦₈𝟿');
	expect(obfuscate('hello world')).toStrictEqual('ɦɛᶩᶩõ ῲõɼᶩᶁ');
});

test('GIVEN unsupported characters THEN should not obfuscate', () => {
	expect(obfuscate('No way?!')).toStrictEqual('Иõ ῲᾅẙ?!');
});
