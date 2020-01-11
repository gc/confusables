import remove from '../src';

test('GIVEN Confusable characters THEN removes confusables', () => {
	expect(remove('⓵➊⑴¹𝟏𝟙１𝟷𝟣⒈𝟭1➀₁①❶⥠')).toStrictEqual('11111111111111111');
	expect(remove('⓵➊⑴¹𝟏𝟙１𝟷𝟣⒈𝟭1➀₁①❶⥠')).toStrictEqual('11111111111111111');
	expect(remove('remove~simple&punctuation*quickly')).toStrictEqual(
		'remove~simple&punctuation*quickly'
	);
	expect(remove('Iлｔèｒｎåｔïｏｎɑｌíƶａｔïǫԉ')).toStrictEqual('Internationalization');
	expect(remove('ᴎᴑᴅᴇȷʂ')).toStrictEqual('NoDEJs');
	expect(remove('hambúrguer')).toStrictEqual('hamburguer');
	expect(remove('hŒllœ')).toStrictEqual('hOElloe');
	expect(remove('ABCDEFGHIJKLMNOPQRSTUVWXYZé')).toStrictEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZe');
	expect(remove('Ἢἕļľᦞ ш٥ṟｌᑰ')).toStrictEqual('Hello World');
	expect(remove('᧚ỏņꊰṵśảƅĺɘʂ')).toStrictEqual('confusables');
	expect(remove('Ƈ০ⓃբỦⓢἊƄʟἕᔕ')).toStrictEqual('CoNfUsAbLeS');
	expect(remove('ƇȮṆⒻꓵSΛБᒹἜᔢ')).toStrictEqual('CONFUSABLES');
	expect(remove('Àᴮ©¹²³ᕽȲⓏᾌ⧂⦶Ἀ')).toStrictEqual('ABC123XYZAOOA');
	expect(remove('գẮȥฝѕꊼếὠḍČ∱ŖνẞցTўⒽդʆủᛖɫΚἰסṕ')).toStrictEqual('qAzWsXewdCfRvBgTyHnJuMlKiOp');
	expect(remove('Ἢἕļľᦞ ш٥ṟｌᑰ! Hello World!')).toStrictEqual('Hello World! Hello World!');
	expect(remove('ᾌḆՇḎᎬғƓҥĮʝᵏረӎⁿ៰ᑬℚƦȘፕǕ٧ẂᵡΥⓏᾄᑲćđɇ⒡ḡȟ׀ϳⓚוɱпṏpｑⓡᶊṱῠงὤӽ⒴ⓩ¹ᒿ³ᶣ5Ϭ7890')).toStrictEqual(
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
	);
});
