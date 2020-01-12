import { characters } from '../src';

test('GIVEN characters THEN should have no duplicate keys', () => {
	function hasDuplicates<T>(array: T[]) {
		return new Set(array).size !== array.length;
	}

	const confusablesArray = [...characters.values()].flatMap(confusablesSet => [
		...confusablesSet
	]);

	expect(hasDuplicates(confusablesArray)).toBe(false);
});
