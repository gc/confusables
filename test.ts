import { writeFileSync } from 'fs';
import { characters } from './dist';
import { remove } from './dist';

const samples = [
    ['aü', 'u'],
    ['⓵➊⑴¹𝟏𝟙１𝟷𝟣⒈𝟭1➀₁①❶⥠', '11111111111111111'],
    ['⓵➊⑴¹𝟏𝟙１𝟷𝟣⒈𝟭1➀₁①❶⥠', '11111111111111111'],
    ['remove~simple&punctuation*quickly', 'remove~simple&punctuation*quickly'],
    ['Iлｔèｒｎåｔïｏｎɑｌíƶａｔïǫԉ', 'Internationalization'],
    ['ᴎᴑᴅᴇȷʂ', 'NoDEJs'],
    ['hambúrguer', 'hamburguer'],
    ['hŒllœ', 'hOElloe'],
    ['ABCDEFGHIJKLMNOPQRSTUVWXYZé', 'ABCDEFGHIJKLMNOPQRSTUVWXYZe'],
    ['Ἢἕļľᦞ ш٥ṟｌᑰ', 'Hello World'],
    ['᧚ỏņꊰṵśảƅĺɘʂ', 'confusables'],
    ['Ƈ০ⓃբỦⓢἊƄʟἕᔕ', 'CoNfUsAbLeS'],
    ['ƇȮṆⒻꓵSΛБᒹἜᔢ', 'CONFUSABLES'],
    ['Àᴮ©¹²³ᕽȲⓏᾌ⧂⦶Ἀ', 'ABC123xYZAOOA'],
    ['գẮȥฝѕꊼếὠḍČ∱ŖνẞցTўⒽդʆủᛖɫΚἰסṕ', 'qAzWsXewdCfRvBgTyHnJuMlKiOp'],
    ['Ἢἕļľᦞ ш٥ṟｌᑰ! Hello World!', 'Hello World! Hello World!'],
    ['ᾌḆՇḎᎬғƓҥĮʝᵏረӎⁿ៰ᑬℚƦȘፕǕ٧ẂᵡΥⓏᾄᑲćđɇ⒡ḡȟ׀ϳⓚוɱпṏpｑⓡᶊṱῠงὤӽ⒴ⓩ¹ᒿ³ᶣ5Ϭ7890',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    ]];

for (const [confusabled, normal] of samples) {
    const removed = remove(confusabled)
    if (removed !== normal) {
        throw new Error(`'${confusabled}' was '${removed}' instead of '${normal}'`)
    }
} 


const duplicate = Object.values(characters).find((chars: string[]) => new Set(chars).size !== chars.length);
if (duplicate) {
    let chars: string[] = [];
    for (const char of duplicate) {
        if (chars.includes(char)) {
            console.log(char);
        }
        chars.push(char);
    }
    throw new Error(`${duplicate} had duplicate characters`)
}

// Autogenerated file from Unicode, source:
// https://www.unicode.org/Public/security/latest/confusables.txt

const otherCharacters = new Map<string, string>([
	['֖', '֭'],
	['֘', '֮'],
	['֙', '֨'],
	['֚', '֤'],
	['ۛ', '᪴⃛'],
	['̓', 'ؙُࣳ̓̕'],
	['̔', 'ٝ'],
	['́', 'ؘَ֜֝݇́॔'],
	['̀', '̀॓'],
	['̆', '̌꙼٘ٚͮ'],
	['̆̇', 'ۨ̐ँঁઁଁఀಁഁ𑒿'],
	['̂', '᳐̑ٛ߮꛰'],
	['̊', '֯۟៓゚ْஂံំ𑌀ํໍͦⷪ'],
	['̈', '࣫߳'],
	['̋', 'ًࣰ'],
	['̃', '͂ٓ'],
	['̇', 'ֹֺׁׂׄ۬݀࣪݁߭͘ंਂં்'],
	['̸', '̷'],
	['̨', '̢᪷ͅ'],
	['̄', '᳒̅ٙ߫꛱'],
	['̎', '᳚'],
	['̒', 'ٗ'],
	['͐', '͗ࣿࣸ'],
	['͒', 'ऀ'],
	['̖', '᳭'],
	['̩', '᳜ٖ'],
	['̫', '᳕'],
	['̳', '͇'],
	['͔', 'ࣹ'],
	['͕', 'ࣺ'],
	['ﾞ', '゛'],
	['ﾟ', '゜'],
	['̵', '̶'],
	['̉', '〬'],
	['̣', '़়਼઼଼𑇊𑓃ִׅ࣭᳝ٜ𐨺'],
	['̤', '࣮᳞'],
	['̥', '༷〭'],
	['̦', '̧̡̹'],
	['̭', '᳙'],
	['̮', '᳘'],
	['̱', '॒̠'],
	['ٌ', 'ࣱࣨࣥ'],
	['ﹲّ', 'ﱞ'],
	['ٍ', 'ࣲ'],
	['ﹴّ', 'ﱟ'],
	['ﹷّ', 'ﳲ'],
	['ﹶّ', 'ﱠ'],
	['ﹹّ', 'ﳳ'],
	['ﹸّ', 'ﱡ'],
	['ِ', 'ؚ̗'],
	['ﹻّ', 'ﳴ'],
	['ﹺّ', 'ﱢ'],
	['ﹼٰ', 'ﱣ'],
	['ٕ', 'ٟ'],
	['ٰ', '̍'],
	['ܼ', '݂'],
	['ঃ', 'ਃఃಃഃඃး𑓁'],
	['่', '់່'],
	['้', '້'],
	['๊', '໊'],
	['๋', '໋'],
	['⃩', '꙯'],
	[' ', '               '],
	['_', 'ߺ﹍﹎'],
	['-', '–﹘۔⁃˗−➖Ⲻ'],
	['-̓', '⨩'],
	['-̈', '⸚'],
	['-̇', '﬩∸'],
	['-̣', '⨪'],
	['-.', '꓾'],
	['〜', '～'],
	[',', '؍٫‚¸ꓹ'],
	['،', '⸲٬'],
	[';', ';'],
	['؛', '⸵'],
	[':', 'ःઃ：։܃܄᛬︰᠃᠉⁚׃˸꞉∶ːꓽ'],
	['::=', '⩴'],
	[':→', '⧴'],
	['!', '！ǃⵑ'],
	['!!', '‼'],
	['!?', '⁉'],
	['?', 'ɁॽᎮꛫ'],
	['?!', '⁈'],
	['??', '⁇'],
	['؟', '⸮'],
	['.', '𝅭․܁܂꘎𐩐٠۰ꓸ'],
	['.,', 'ꓻ'],
	['..', 'ꓺ'],
	['꛳꛳', '꛴'],
	['·', '・･᛫·⸱𐄁∙⋅ꞏᐧ'],
	['···', '⋯ⵈ'],
	['·>', '⋗'],
	['·b', 'ᑾ'],
	['·ḃ', 'ᒀ'],
	['·d', 'ᑺ'],
	['·J', 'ᒘ'],
	['·L', 'ᒶ'],
	['·P', 'ᑶ'],
	['·U', 'ᑗ'],
	['·V', 'ᐺ'],
	['·Ʌ', 'ᐼ'],
	['·Γ', 'ᒮ'],
	['·Δ', 'ᐎ'],
	['·Ո', 'ᑙ'],
	['·ᐁ', 'ᐌ'],
	['·ᐄ', 'ᐐ'],
	['·ᐅ', 'ᐒ'],
	['·ᐆ', 'ᐔ'],
	['·ᐊ', 'ᐗ'],
	['·ᐋ', 'ᐙ'],
	['·ᐲ', 'ᐾ'],
	['·ᑏ', 'ᑛ'],
	['·ᑕ', 'ᑡ'],
	['·ᑖ', 'ᑣ'],
	['·ᑫ', 'ᑴ'],
	['·ᑮ', 'ᑸ'],
	['·ᑰ', 'ᑼ'],
	['·ᒉ', 'ᒒ'],
	['·ᒋ', 'ᒔ'],
	['·ᒌ', 'ᒖ'],
	['·ᒎ', 'ᒚ'],
	['·ᒐ', 'ᒜ'],
	['·ᒑ', 'ᒞ'],
	['·ᒣ', 'ᒬ'],
	['·ᒦ', 'ᒰ'],
	['·ᒧ', 'ᒲ'],
	['·ᒨ', 'ᒴ'],
	['·ᒫ', 'ᒸ'],
	['·ᓂ', 'ᣆ'],
	['·ᓃ', 'ᣈ'],
	['·ᓄ', 'ᣊ'],
	['·ᓅ', 'ᣌ'],
	['·ᓭ', 'ᓶ'],
	['·ᓯ', 'ᓸ'],
	['·ᓰ', 'ᓺ'],
	['·ᓱ', 'ᓼ'],
	['·ᓲ', 'ᓾ'],
	['·ᓴ', 'ᔀ'],
	['·ᓵ', 'ᔂ'],
	['·ᔓ', 'ᔝ'],
	['·ᔔ', 'ᔟ'],
	['·ᔕ', 'ᔡ'],
	['·ᔖ', 'ᔣ'],
	['·ᔫ', 'ᔷ'],
	['·ᔭ', 'ᔹ'],
	['·ᔮ', 'ᔻ'],
	['·ᕃ', 'ᣎ'],
	['·ᕆ', 'ᣏ'],
	['·ᕇ', 'ᣐ'],
	['·ᕈ', 'ᣑ'],
	['·ᕉ', 'ᣒ'],
	['·ᕋ', 'ᣓ'],
	['·ᕌ', 'ᕎ'],
	['·ᕧ', 'ᕨ'],
	['·ᢱ', 'ᢳ'],
	['·ᢴ', 'ᢶ'],
	['·ᢸ', 'ᢹ'],
	['·ᣀ', 'ᣂ'],
	['।', '꠰'],
	['।।', '॥'],
	['᰻᰻', '᰼'],
	['၊၊', '။'],
	['᪨᪨', '᪩'],
	['᪪᪨', '᪫'],
	['᭞᭞', '᭟'],
	['𐩖𐩖', '𐩗'],
	['𑑋𑑋', '𑑌'],
	['𑙁𑙁', '𑙂'],
	['𑱁𑱁', '𑱂'],
	['᱾᱾', '᱿'],
	["'", '՝＇‛′՚׳``｀´΄´᾽᾿῾ʹʹˈˊˋ˴ʻʽʼʾꞌיߴߵᑊᛌ𖽑𖽒'],
	["''", '᳓"＂‟״˝ʺ˶ˮײ'],
	["'''", '‴‷'],
	["''''", '⁗'],
	["'B", 'Ɓ'],
	["'D", 'Ɗ'],
	["'n", 'ŉ'],
	["'P", 'Ƥ'],
	["'T", 'Ƭ'],
	["'Y", 'Ƴ'],
	['(', '［❨❲〔﴾'],
	['((', '⸨'],
	['(ー)', '㈠'],
	['(2)', '⑵'],
	['(2O)', '⒇'],
	['(3)', '⑶'],
	['(4)', '⑷'],
	['(5)', '⑸'],
	['(6)', '⑹'],
	['(7)', '⑺'],
	['(8)', '⑻'],
	['(9)', '⑼'],
	['(a)', '⒜'],
	['(A)', '🄐'],
	['(b)', '⒝'],
	['(B)', '🄑'],
	['(c)', '⒞'],
	['(C)', '🄒'],
	['(d)', '⒟'],
	['(D)', '🄓'],
	['(e)', '⒠'],
	['(E)', '🄔'],
	['(f)', '⒡'],
	['(F)', '🄕'],
	['(g)', '⒢'],
	['(G)', '🄖'],
	['(h)', '⒣'],
	['(H)', '🄗'],
	['(i)', '⒤'],
	['(j)', '⒥'],
	['(J)', '🄙'],
	['(k)', '⒦'],
	['(K)', '🄚'],
	['(l)', '⑴🄘⒧'],
	['(L)', '🄛'],
	['(l2)', '⑿'],
	['(l3)', '⒀'],
	['(l4)', '⒁'],
	['(l5)', '⒂'],
	['(l6)', '⒃'],
	['(l7)', '⒄'],
	['(l8)', '⒅'],
	['(l9)', '⒆'],
	['(ll)', '⑾'],
	['(lO)', '⑽'],
	['(M)', '🄜'],
	['(n)', '⒩'],
	['(N)', '🄝'],
	['(o)', '⒪'],
	['(O)', '🄞'],
	['(p)', '⒫'],
	['(P)', '🄟'],
	['(q)', '⒬'],
	['(Q)', '🄠'],
	['(r)', '⒭'],
	['(R)', '🄡'],
	['(rn)', '⒨'],
	['(s)', '⒮'],
	['(S)', '🄢🄪'],
	['(t)', '⒯'],
	['(T)', '🄣'],
	['(u)', '⒰'],
	['(U)', '🄤'],
	['(v)', '⒱'],
	['(V)', '🄥'],
	['(w)', '⒲'],
	['(W)', '🄦'],
	['(x)', '⒳'],
	['(X)', '🄧'],
	['(y)', '⒴'],
	['(Y)', '🄨'],
	['(z)', '⒵'],
	['(Z)', '🄩'],
	['(ᄀ)', '㈀'],
	['(가)', '㈎'],
	['(ᄂ)', '㈁'],
	['(나)', '㈏'],
	['(ᄃ)', '㈂'],
	['(다)', '㈐'],
	['(ᄅ)', '㈃'],
	['(라)', '㈑'],
	['(ᄆ)', '㈄'],
	['(마)', '㈒'],
	['(ᄇ)', '㈅'],
	['(바)', '㈓'],
	['(ᄉ)', '㈆'],
	['(사)', '㈔'],
	['(ᄋ)', '㈇'],
	['(아)', '㈕'],
	['(오전)', '㈝'],
	['(오후)', '㈞'],
	['(ᄌ)', '㈈'],
	['(자)', '㈖'],
	['(주)', '㈜'],
	['(ᄎ)', '㈉'],
	['(차)', '㈗'],
	['(ᄏ)', '㈊'],
	['(카)', '㈘'],
	['(ᄐ)', '㈋'],
	['(타)', '㈙'],
	['(ᄑ)', '㈌'],
	['(파)', '㈚'],
	['(ᄒ)', '㈍'],
	['(하)', '㈛'],
	['(七)', '㈦'],
	['(三)', '㈢🉁'],
	['(九)', '㈨'],
	['(二)', '㈡🉂'],
	['(五)', '㈤'],
	['(代)', '㈹'],
	['(企)', '㈽'],
	['(休)', '㉁'],
	['(八)', '㈧'],
	['(六)', '㈥'],
	['(労)', '㈸'],
	['(勝)', '🉇'],
	['(十)', '㈩'],
	['(協)', '㈿'],
	['(名)', '㈴'],
	['(呼)', '㈺'],
	['(四)', '㈣'],
	['(土)', '㈯'],
	['(学)', '㈻'],
	['(安)', '🉃'],
	['(打)', '🉅'],
	['(敗)', '🉈'],
	['(日)', '㈰'],
	['(月)', '㈪'],
	['(有)', '㈲'],
	['(木)', '㈭'],
	['(本)', '🉀'],
	['(株)', '㈱'],
	['(水)', '㈬'],
	['(火)', '㈫'],
	['(点)', '🉄'],
	['(特)', '㈵'],
	['(盗)', '🉆'],
	['(監)', '㈼'],
	['(社)', '㈳'],
	['(祝)', '㈷'],
	['(祭)', '㉀'],
	['(自)', '㉂'],
	['(至)', '㉃'],
	['(財)', '㈶'],
	['(資)', '㈾'],
	['(金)', '㈮'],
	[')', '］❩❳〕﴿'],
	['))', '⸩'],
	['{', '❴𝄔'],
	['}', '❵'],
	['⟦', '〚'],
	['⟧', '〛'],
	['❬', '⟨〈〈㇛𡿨'],
	['❭', '⟩〉〉'],
	['︿', '＾'],
	['¶', '⸿'],
	['*', '⁎٭∗𐌟'],
	['/', '᜵⁁∕⁄╱⟋⧸𝈺㇓〳Ⳇノ丿⼃'],
	['/̄', '⧶'],
	['//', '⫽'],
	['///', '⫻'],
	['\\', '＼﹨∖⟍⧵⧹𝈏𝈻㇔丶⼂'],
	['\\\\', '⳹⑊'],
	['\\ᑕ', '⟈'],
	['&', 'ꝸ'],
	['॰', '૰𑂻𑇇⚬'],
	['꣼', '𑇛'],
	['๏', '៙'],
	['๚', '៕'],
	['๛', '៚'],
	['་', '༌'],
	['།།', '༎'],
	['^', '˄ˆ'],
	['ˇ', '꙾˘'],
	['ˉ', '﹉﹊﹋¯￣▔'],
	['ˉb', 'ъ'],
	['ˉbi', 'ꙑ'],
	['ˏ', '͵'],
	['˪', '˻꜖'],
	['˫', '꜔'],
	['°', '⸰˚∘○◦'],
	['°̲', '⍜'],
	['°̈', '⍤'],
	['°C', '℃'],
	['°F', '℉'],
	['௳', '௵'],
	['༚༚', '༛'],
	['༚༝', '༟'],
	['༝༚', '࿎'],
	['༝༝', '༞'],
	['©', 'Ⓒ'],
	['®', 'Ⓡ'],
	['℗', 'Ⓟ'],
	['⅄', '𝈛'],
	['↞', '⯬'],
	['↟', '⯭'],
	['↠', '⯮'],
	['↡', '⯯'],
	['∂', '𝛛𝜕𝝏𝞉𝟃𞣌'],
	['∂̵', '𞣍ð'],
	['∅', '⌀'],
	['∇', '𝛁𝛻𝜵𝝯𝞩𑢨'],
	['∇̈', '⍢'],
	['∇̴', '⍫'],
	['∎', '█■'],
	['∐', '⨿'],
	['+', '᛭➕𐊛'],
	['+̂', '⨣'],
	['+̊', '⨢'],
	['+̃', '⨤'],
	['+̇', '∔'],
	['+̣', '⨥'],
	['+̰', '⨦'],
	['+₂', '⨧'],
	['÷', '➗'],
	['<', '❮˂𝈶ᚲ'],
	['<·', '⋖Ⲵ'],
	['<<<', '⋘'],
	['=', '᐀⹀゠꓿'],
	['=⃰', '⩮'],
	['==', '⩵'],
	['===', '⩶'],
	['>', '❯˃𝈷𖼿'],
	['>>', '⨠'],
	['>>>', '⋙'],
	['~', '⁓῀∼'],
	['~̈', '⍨'],
	['~̇', '⸞⩪'],
	['~̣', '⸟'],
	['∠', '𞣈'],
	['∧', '⋀'],
	['∮∮', '∯'],
	['∮∮∮', '∰'],
	['∴', '⸫'],
	['∵', '⸪'],
	['∷', '⸬'],
	['≈', '𑇞'],
	['≏', '🝞'],
	['⊍', '⨃'],
	['⊎', '⨄'],
	['⊏', '𝈸'],
	['⊐', '𝈹'],
	['⊓', '⨅'],
	['⊔', '⨆'],
	['⊗', '⨂'],
	['⊛', '⍟'],
	['⊠', '🝱'],
	['⊡', '🝕'],
	['⊲', '◁'],
	['⊳', '▷'],
	['⋆̈', '⍣'],
	['⌙', '⨽'],
	['⌤', '⌥'],
	['⌻', '⧇'],
	['⌾', '◎⦾'],
	['⍂', '⧅'],
	['⍉', '⦰'],
	['⍋', '⏃'],
	['⍎', '⏂'],
	['⍕', '⏁'],
	['⍭', '⏆'],
	['⎈', '☸'],
	['⏞', '︷'],
	['⏟', '︸'],
	['⏥', '▱'],
	['⏻', '⏼'],
	['│', '︱｜┃'],
	['┌', '┏'],
	['├', '┣'],
	['▌', '▐'],
	['▖', '▗'],
	['▘', '▝'],
	['▪', '￭'],
	['▶', '▸'],
	['☧', '⳩'],
	['☩', '🜊'],
	['☾', '⏾'],
	['⧟', '🜺'],
	['⨟', '⨾'],
	['⳨', '𐆠'],
	['🄍', '⓪'],
	['🄎', '↺'],
	['ॱ', '˙ൎ'],
	['ー', '－—━㇐ꟷᅳㅡ⼀'],
	['ーー', 'ᆖ'],
	['ーᅡ', 'ힹ'],
	['ーᅥ', 'ힺ'],
	['ーᅥ丨', 'ힻ'],
	['ーᅩ', 'ힼ'],
	['ーᅮ', 'ᆕ'],
	['ー丨', 'ᅴㅢ'],
	['ー丨ᅮ', 'ᆗ'],
	['$⃠', '🄏'],
	['£', '₤'],
	['₸', '〒〶'],
	['᭐', '᭜'],
	['꧐', '꧆'],
	['১', '𑓑'],
	['౧', '೧'],
	['၁', 'ၥ'],
	['➉', '⑩'],
	['₁₀', '⏨'],
	['2', '𝟐𝟚𝟤𝟮𝟸🯲ꝚƧϨꙄᒿꛯ'],
	['٢', 'ꧏ۲'],
	['२', '૨'],
	['২', '𑓒'],
	['౨', '೨'],
	['➁', '②'],
	['2̵', 'ƻ'],
	['2,', '🄃'],
	['2.', '⒉'],
	['22日', '㏵'],
	['22点', '㍮'],
	['23日', '㏶'],
	['23点', '㍯'],
	['24日', '㏷'],
	['24点', '㍰'],
	['25日', '㏸'],
	['26日', '㏹'],
	['27日', '㏺'],
	['28日', '㏻'],
	['29日', '㏼'],
	['2l日', '㏴'],
	['2l点', '㍭'],
	['2O.', '⒛'],
	['2O日', '㏳'],
	['2O点', '㍬'],
	['෨ා', '෩'],
	['෨ී', '෯'],
	['2日', '㏡'],
	['2月', '㋁'],
	['2点', '㍚'],
	['3', '𝈆𝟑𝟛𝟥𝟯𝟹🯳ꞫȜƷꝪⳌӠ𖼻𑣊'],
	['٣', '۳𞣉'],
	['३', '૩'],
	['➂', '③'],
	['3̦', 'Ҙ'],
	['3,', '🄄'],
	['3.', '⒊'],
	['3l日', '㏾'],
	['3O日', '㏽'],
	['3日', '㏢'],
	['3月', '㋂'],
	['3点', '㍛'],
	['4', '𝟒𝟜𝟦𝟰𝟺🯴Ꮞ𑢯'],
	['٤', '۴'],
	['४', '૪'],
	['➃', '④'],
	['4,', '🄅'],
	['4.', '⒋'],
	['4日', '㏣'],
	['4月', '㋃'],
	['4点', '㍜'],
	['5', '𝟓𝟝𝟧𝟱𝟻🯵Ƽ𑢻'],
	['➄', '⑤'],
	['5,', '🄆'],
	['5.', '⒌'],
	['5日', '㏤'],
	['5月', '㋄'],
	['5点', '㍝'],
	['6', '𝟔𝟞𝟨𝟲𝟼🯶ⳒбᏮ𑣕'],
	['৬', '𑓖'],
	['➅', '⑥'],
	['6,', '🄇'],
	['6.', '⒍'],
	['6日', '㏥'],
	['6月', '㋅'],
	['6点', '㍞'],
	['7', '𝈒𝟕𝟟𝟩𝟳𝟽🯷𐓒𑣆'],
	['➆', '⑦'],
	['7,', '🄈'],
	['7.', '⒎'],
	['7日', '㏦'],
	['7月', '㋆'],
	['7点', '㍟'],
	['8', 'ଃ৪𞣋𝟖𝟠𝟪𝟴𝟾🯸ȣȢ𐌚'],
	['८', '૮'],
	['➇', '⑧'],
	['8,', '🄉'],
	['8.', '⒏'],
	['8日', '㏧'],
	['8月', '㋇'],
	['8点', '㍠'],
	['9', '੧୨৭൭𝟗𝟡𝟫𝟵𝟿🯹ꝮⳊ𑣌𑢬𑣖'],
	['٩', '१𑣤۹'],
	['➈', '⑨'],
	['9,', '🄊'],
	['9.', '⒐'],
	['9日', '㏨'],
	['9月', '㋈'],
	['9点', '㍡'],
	['a', '⍺ａ𝐚𝑎𝒂𝒶𝓪𝔞𝕒𝖆𝖺𝗮𝘢𝙖𝚊ɑα𝛂𝛼𝜶𝝰𝞪а'],
	['ͣ', 'ⷶ'],
	['A', 'Ａ𝐀𝐴𝑨𝒜𝓐𝔄𝔸𝕬𝖠𝗔𝘈𝘼𝙰Α𝚨𝛢𝜜𝝖𝞐АᎪᗅꓮ𖽀𐊠'],
	['a̲', '⍶'],
	['ă', 'ǎ'],
	['Ă', 'Ǎ'],
	['å', 'ȧ'],
	['Å', 'Ȧ'],
	['ả', 'ẚ'],
	['a/c', '℀'],
	['a/s', '℁'],
	['aa', 'ꜳ'],
	['AA', 'Ꜳ'],
	['ae', 'æӕ'],
	['AE', 'ÆӔ'],
	['ao', 'ꜵ'],
	['AO', 'Ꜵ'],
	['AR', '🜇'],
	['au', 'ꜷ'],
	['AU', 'Ꜷ'],
	['av', 'ꜹꜻ'],
	['AV', 'ꜸꜺ'],
	['ay', 'ꜽ'],
	['AY', 'Ꜽ'],
	['ᴀ', 'ꭺ'],
	['Ɐ', '∀𝈗ᗄꓯ'],
	['Ɒ', '𐐟'],
	['b', '𝐛𝑏𝒃𝒷𝓫𝔟𝕓𝖇𝖻𝗯𝘣𝙗𝚋ƄЬᏏᑲᖯ'],
	['B', 'Ｂℬ𝐁𝐵𝑩𝓑𝔅𝔹𝕭𝖡𝗕𝘉𝘽𝙱ꞴΒ𝚩𝛣𝜝𝝗𝞑ВᏴᗷꓐ𐊂𐊡𐌁'],
	['b̔', 'ɓ'],
	['ḃ', 'ᑳ'],
	['b̄', 'ƃƂБ'],
	['b̵', 'ƀҍҌѣѢ'],
	['b·', 'ᑿ'],
	['ḃ·', 'ᒁ'],
	["b'", 'ᒈ'],
	['bl', 'Ы'],
	['ʙ', 'вᏼ'],
	['c', 'ｃⅽ𝐜𝑐𝒄𝒸𝓬𝔠𝕔𝖈𝖼𝗰𝘤𝙘𝚌ᴄϲⲥсꮯ𐐽'],
	['ͨ', 'ⷭ'],
	['C', '🝌𑣲𑣩ＣⅭℂℭ𝐂𝐶𝑪𝒞𝓒𝕮𝖢𝗖𝘊𝘾𝙲ϹⲤСᏟꓚ𐊢𐌂𐐕𐔜'],
	['c̸', '¢ȼ'],
	['C⃫', '₡'],
	['C⃠', '🅮'],
	['c̦', 'çҫ'],
	['C̦', 'ÇҪ'],
	["C'", 'Ƈ'],
	['c/o', '℅'],
	['c/u', '℆'],
	['㏄\t⃝', '🅭'],
	['ꞓ', '⋴ɛεϵ𝛆𝛜𝜀𝜖𝜺𝝐𝝴𝞊𝞮𝟄ⲉєԑꮛ𑣎𐐩'],
	['Ꞓ', '€ⲈЄ'],
	['ꞓ̲', '⍷'],
	['ꜿ', 'ͽ'],
	['Ꜿ', 'Ͽ'],
	['d', 'ⅾⅆ𝐝𝑑𝒅𝒹𝓭𝔡𝕕𝖉𝖽𝗱𝘥𝙙𝚍ԁᏧᑯꓒ'],
	['D', 'Ⅾⅅ𝐃𝐷𝑫𝒟𝓓𝔇𝔻𝕯𝖣𝗗𝘋𝘿𝙳Ꭰᗞᗪꓓ'],
	['d̔', 'ɗ'],
	['d̨', 'ɖ'],
	['d̄', 'ƌ'],
	['d̵', 'đ'],
	['D̵', 'ĐÐƉ'],
	['ḏ̵', '₫'],
	['Ꝺ', 'ꝺ'],
	['d·', 'ᑻ'],
	["d'", 'ᒇ'],
	['dȝ', 'ʤ'],
	['dz', 'ǳʣ'],
	['Dz', 'ǲ'],
	['DZ', 'Ǳ'],
	['dž', 'ǆ'],
	['Dž', 'ǅ'],
	['DŽ', 'Ǆ'],
	['dʑ', 'ʥ'],
	['ᴅ', 'ꭰ'],
	['ẟ', '⸹δ𝛅𝛿𝜹𝝳𝞭ծᕷ'],
	['e', '℮ｅℯⅇ𝐞𝑒𝒆𝓮𝔢𝕖𝖊𝖾𝗲𝘦𝙚𝚎ꬲеҽ'],
	['ͤ', 'ⷷ'],
	['E', '⋿Ｅℰ𝐄𝐸𝑬𝓔𝔈𝔼𝕰𝖤𝗘𝘌𝙀𝙴Ε𝚬𝛦𝜠𝝚𝞔ЕⴹᎬꓰ𑢦𑢮𐊆'],
	['ĕ', 'ě'],
	['Ĕ', 'Ě'],
	['e̸', 'ɇ'],
	['E̸', 'Ɇ'],
	['ę', 'ҿ'],
	['ᴇ', 'ꭼ'],
	['ǝ', 'əә'],
	['Ǝ', '∃ⴺꓱ'],
	['ǝ˞', 'ɚ'],
	['ǝo', 'ᴔ'],
	['ǝo̸', 'ꭁ'],
	['ǝo̵', 'ꭂ'],
	['Ə', 'Ә'],
	['Ɛ', '𝈡ℇԐᏋ𖼭𐐁'],
	['ᵋ', 'ᶟ'],
	['ɜ', 'ᴈ'],
	['ɜ̦', 'ҙ'],
	['ɞ', '𐑂'],
	['ʚ', 'ꞝ𐐪'],
	['f', '𝐟𝑓𝒇𝒻𝓯𝔣𝕗𝖋𝖿𝗳𝘧𝙛𝚏ꬵꞙſẝք'],
	['F', '𝈓ℱ𝐅𝐹𝑭𝓕𝔉𝔽𝕱𝖥𝗙𝘍𝙁𝙵ꞘϜ𝟊ᖴꓝ𑣂𑢢𐊇𐊥𐔥'],
	['f̦', 'ƒ'],
	['F̦', 'Ƒ'],
	['f̴', 'ᵮ'],
	['FAX', '℻'],
	['ff', 'ﬀ'],
	['ffi', 'ﬃ'],
	['ffl', 'ﬄ'],
	['fi', 'ﬁ'],
	['fl', 'ﬂ'],
	['fŋ', 'ʩ'],
	['Ⅎ', 'ᖵꓞ'],
	['ꟻ', '𝈰ᖷ'],
	['g', 'ｇℊ𝐠𝑔𝒈𝓰𝔤𝕘𝖌𝗀𝗴𝘨𝙜𝚐ɡᶃƍց'],
	['G', '𝐆𝐺𝑮𝒢𝓖𝔊𝔾𝕲𝖦𝗚𝘎𝙂𝙶ԌᏀᏳꓖ'],
	['ᵍ', 'ᶢ'],
	['g̔', 'ɠ'],
	['ğ', 'ǧ'],
	['Ğ', 'Ǧ'],
	['ģ', 'ǵ'],
	['g̵', 'ǥ'],
	['G̵', 'Ǥ'],
	["G'", 'Ɠ'],
	['ɢ', 'ԍꮐᏻ'],
	['h', 'ｈℎ𝐡𝒉𝒽𝓱𝔥𝕙𝖍𝗁𝗵𝘩𝙝𝚑һհᏂ'],
	['H', 'Ｈℋℌℍ𝐇𝐻𝑯𝓗𝕳𝖧𝗛𝘏𝙃𝙷Η𝚮𝛨𝜢𝝜𝞖ⲎНᎻᕼꓧ𐋏'],
	['ᴴ', 'ᵸ'],
	['h̔', 'ɦꚕᏲ'],
	['H̩', 'ⱧҢ'],
	['h̵', 'ħℏћ'],
	['H̵', 'Ħ'],
	['H̦', 'ӉӇ'],
	['ʜ', 'нꮋ'],
	['ʜ̩', 'ң'],
	['ʜ̦', 'ӊӈ'],
	['Ƕ', 'Ԋ'],
	['ⱶ', 'ꮀ'],
	['Ⱶ', 'ͰᎨᎰꚱ'],
	['ꜧ', 'ꞕ'],
	['i', '˛⍳ｉⅰℹⅈ𝐢𝑖𝒊𝒾𝓲𝔦𝕚𝖎𝗂𝗶𝘪𝙞𝚒ı𝚤ɩιιͺ𝛊𝜄𝜾𝝸𝞲іꙇӏꭵᎥ𑣃'],
	['Ⓘ', 'ⓛ'],
	['i̲', '⍸'],
	['ĭ', 'ǐ'],
	['Ĭ', 'Ǐ'],
	['i̵', 'ɨᵻᵼ'],
	['ii', 'ⅱ'],
	['iii', 'ⅲ'],
	['ij', 'ĳ'],
	['iv', 'ⅳ'],
	['ix', 'ⅸ'],
	['j', 'ｊⅉ𝐣𝑗𝒋𝒿𝓳𝔧𝕛𝖏𝗃𝗷𝘫𝙟𝚓ϳј'],
	['J', 'Ｊ𝐉𝐽𝑱𝒥𝓙𝔍𝕁𝕵𝖩𝗝𝘑𝙅𝙹ꞲͿЈᎫᒍꓙ'],
	['j̵', 'ɉ'],
	['J̵', 'Ɉ'],
	['J·', 'ᒙ'],
	['ȷ', '𝚥յ'],
	['ᴊ', 'ꭻ'],
	['k', '𝐤𝑘𝒌𝓀𝓴𝔨𝕜𝖐𝗄𝗸𝘬𝙠𝚔'],
	['K', 'KＫ𝐊𝐾𝑲𝒦𝓚𝔎𝕂𝕶𝖪𝗞𝘒𝙆𝙺Κ𝚱𝛫𝜥𝝟𝞙ⲔКᏦᛕꓗ𐔘'],
	['k̔', 'ƙ'],
	['K̩', 'ⱩҚ'],
	['K̵', '₭ꝀҞ'],
	["K'", 'Ƙ'],
	['l', '׀|∣⏽￨١۱𐌠𞣇𝟏𝟙𝟣𝟭𝟷🯱IＩⅠℐℑ𝐈𝐼𝑰𝓘𝕀𝕴𝖨𝗜𝘐𝙄𝙸Ɩｌⅼℓ𝐥𝑙𝒍𝓁𝓵𝔩𝕝𝖑𝗅𝗹𝘭𝙡𝚕ǀΙ𝚰𝛪𝜤𝝞𝞘ⲒІӀוןا𞸀𞺀ﺎﺍߊⵏᛁꓲ𖼨𐊊𐌉'],
	['L', '𝈪Ⅼℒ𝐋𝐿𝑳𝓛𝔏𝕃𝕷𝖫𝗟𝘓𝙇𝙻ⳐᏞᒪꓡ𖼖𑢣𑢲𐐛𐔦'],
	['l̋', 'ﴼﴽ'],
	['l̸', 'ł'],
	['L̸', 'Ł'],
	['l̨', 'ɭ'],
	['l̵', 'Ɨƚ'],
	['l̴', 'ɫ'],
	['lٕ', 'إﺈﺇٳ'],
	['l·', 'ŀĿᒷ'],
	['l,', '🄂'],
	['l.', '⒈'],
	["l'", 'ױ'],
	['l2.', '⒓'],
	['l2日', '㏫'],
	['l2月', '㋋'],
	['l2点', '㍤'],
	['l3.', '⒔'],
	['l3日', '㏬'],
	['l3点', '㍥'],
	['l4.', '⒕'],
	['l4日', '㏭'],
	['l4点', '㍦'],
	['l5.', '⒖'],
	['l5日', '㏮'],
	['l5点', '㍧'],
	['l6.', '⒗'],
	['l6日', '㏯'],
	['l6点', '㍨'],
	['l7.', '⒘'],
	['l7日', '㏰'],
	['l7点', '㍩'],
	['l8.', '⒙'],
	['l8日', '㏱'],
	['l8点', '㍪'],
	['l9.', '⒚'],
	['l9日', '㏲'],
	['l9点', '㍫'],
	['lj', 'ǉ'],
	['lJ', 'Ĳ'],
	['Lj', 'ǈ'],
	['LJ', 'Ǉ'],
	['ll', '‖∥Ⅱǁװ'],
	['l̵l̵', '𐆙'],
	['ll.', '⒒'],
	['lll', 'Ⅲ'],
	['l̵l̵S̵', '𐆘'],
	['ll日', '㏪'],
	['ll月', '㋊'],
	['ll点', '㍣'],
	['lO.', '⒑'],
	['lO日', '㏩'],
	['lO月', '㋉'],
	['lO点', '㍢'],
	['ls', 'ʪ'],
	['lt', '₶'],
	['lV', 'Ⅳ'],
	['lX', 'Ⅸ'],
	['lȝ', 'ɮ'],
	['lz', 'ʫ'],
	['lٴ', 'أﺄﺃٲٵ'],
	['lكبر', 'ﷳ'],
	['lللّٰo', 'ﷲ'],
	['l日', '㏠'],
	['l月', '㋀'],
	['l点', '㍙'],
	['ʟ', 'ⳑꮮ𐑃'],
	['M', 'ＭⅯℳ𝐌𝑀𝑴𝓜𝔐𝕄𝕸𝖬𝗠𝘔𝙈𝙼Μ𝚳𝛭𝜧𝝡𝞛ϺⲘМᎷᗰᛖꓟ𐊰𐌑'],
	['M̦', 'Ӎ'],
	['MB', '🝫'],
	['ᷟ', 'ⷨ'],
	['n', '𝐧𝑛𝒏𝓃𝓷𝔫𝕟𝖓𝗇𝗻𝘯𝙣𝚗ոռ'],
	['N', 'Ｎℕ𝐍𝑁𝑵𝒩𝓝𝔑𝕹𝖭𝗡𝘕𝙉𝙽Ν𝚴𝛮𝜨𝝢𝞜Ⲛꓠ𐔓'],
	['N̊', '𐆎'],
	['n̨', 'ɳ'],
	['n̩', 'ƞη𝛈𝜂𝜼𝝶𝞰'],
	['N̦', 'Ɲ'],
	['n̴', 'ᵰ'],
	['nj', 'ǌ'],
	['Nj', 'ǋ'],
	['NJ', 'Ǌ'],
	['No', '№'],
	['ᴎ', 'ͷи𐑍'],
	['ɲ', 'ņ'],
	['o', 'ంಂംං०੦૦௦೦൦๐໐၀۵ｏℴ𝐨𝑜𝒐𝓸𝔬𝕠𝖔𝗈𝗼𝘰𝙤𝚘ᴏᴑꬽο𝛐𝜊𝝄𝝾𝞸σ𝛔𝜎𝝈𝞂𝞼ⲟჿօסه𞸤𞹤𞺄ﻫﻬﻪﻩھﮬﮭﮫﮪہﮨﮩﮧﮦەഠဝ𐓪𑣈𑣗𐐬'],
	['O', '߀০୦𑓐𑣠𝟎𝟘𝟢𝟬𝟶🯰Ｏ𝐎𝑂𝑶𝒪𝓞𝔒𝕆𝕺𝖮𝗢𝘖𝙊𝙾Ο𝚶𝛰𝜪𝝤𝞞ⲞОՕⵔዐଠ𐓂ꓳ𑢵𐊒𐊫𐐄𐔖'],
	['º', 'ᵒ'],
	['ŏ', 'ǒ'],
	['Ŏ', 'Ǒ'],
	['ô', 'ۿ'],
	['Ö', 'Ő'],
	['o̸', 'øꬾ'],
	['O̸', 'Øⵁ'],
	['Ó̸', 'Ǿ'],
	['o̵', 'ɵꝋөѳꮎꮻ'],
	['O̵', '⊖⊝⍬𝈚🜔ƟꝊθϑ𝛉𝛝𝜃𝜗𝜽𝝑𝝷𝞋𝞱𝟅Θϴ𝚯𝚹𝛩𝛳𝜣𝜭𝝝𝝧𝞗𝞡ӨѲⴱᎾᏫ'],
	['ơ', 'ꭴ'],
	['oٰ', 'ﳙ'],
	['O,', '🄁'],
	['O.', '🄀'],
	["o'", 'ơ'],
	["O'", 'ƠᎤ'],
	['º/₀', '%٪⁒'],
	['º/₀₀', '‰؉'],
	['º/₀₀₀', '‱؊'],
	['oe', 'œ'],
	['OE', 'Œ'],
	['oᴇ', 'ɶ'],
	['oo', '∞ꝏꚙ'],
	['OO', 'ꝎꚘ'],
	['oج', 'ﳗﱑ'],
	['oم', 'ﳘﱒ'],
	['oمج', 'ﶓ'],
	['oمم', 'ﶔ'],
	['oى', 'ﱓﱔ'],
	['oരo', 'ൟ'],
	['oာ', 'တ'],
	['O点', '㍘'],
	['ɔ', 'ↄᴐͻ𐑋'],
	['Ɔ', 'ↃϽꓛ𐐣'],
	['ɔ̸', 'ꬿ'],
	['ɔe', 'ꭢ'],
	['ɷ', '𐐿'],
	['p', '⍴ｐ𝐩𝑝𝒑𝓅𝓹𝔭𝕡𝖕𝗉𝗽𝘱𝙥𝚙ρϱ𝛒𝛠𝜌𝜚𝝆𝝔𝞀𝞎𝞺𝟈ⲣр'],
	['P', 'Ｐℙ𝐏𝑃𝑷𝒫𝓟𝔓𝕻𝖯𝗣𝘗𝙋𝙿Ρ𝚸𝛲𝜬𝝦𝞠ⲢРᏢᑭꓑ𐊕'],
	['p̔', 'ƥ'],
	['p̵', 'ᵽ'],
	['p·', 'ᑷ'],
	["P'", 'ᒆ'],
	['ᴘ', 'ᴩꮲ'],
	['ɸ', 'φϕ𝛗𝛟𝜑𝜙𝝋𝝓𝞅𝞍𝞿𝟇ⲫ'],
	['q', '𝐪𝑞𝒒𝓆𝓺𝔮𝕢𝖖𝗊𝗾𝘲𝙦𝚚ԛգզ'],
	['Q', 'ℚ𝐐𝑄𝑸𝒬𝓠𝔔𝕼𝖰𝗤𝘘𝙌𝚀ⵕ'],
	['q̔', 'ʠ'],
	['QE', '🜀'],
	['ɋ', 'ᶐ'],
	['ĸ', 'ᴋκϰ𝛋𝛞𝜅𝜘𝜿𝝒𝝹𝞌𝞳𝟆ⲕкꮶ'],
	['ĸ̩', 'қ'],
	['ĸ̵', 'ҟ'],
	['r', '𝐫𝑟𝒓𝓇𝓻𝔯𝕣𝖗𝗋𝗿𝘳𝙧𝚛ꭇꭈᴦⲅгꮁ'],
	['R', '𝈖ℛℜℝ𝐑𝑅𝑹𝓡𝕽𝖱𝗥𝘙𝙍𝚁ƦᎡᏒ𐒴ᖇꓣ𖼵'],
	['r̨', 'ɽ'],
	['r̩', 'ɼ'],
	['r̵', 'ɍғ'],
	['r̴', 'ᵲ'],
	["r'", 'ґ'],
	['rn', '𑣣ⅿ𝐦𝑚𝒎𝓂𝓶𝔪𝕞𝖒𝗆𝗺𝘮𝙢𝚖𑜀'],
	['rn̸', '₥'],
	['rn̦', 'ɱ'],
	['rn̴', 'ᵯ'],
	['Rs', '₨'],
	['ʀ', 'ꭱꮢ'],
	['ᴙ', 'я'],
	['ɾ̴', 'ᵳ'],
	['ɿ', '℩'],
	['s', 'ｓ𝐬𝑠𝒔𝓈𝓼𝔰𝕤𝖘𝗌𝘀𝘴𝙨𝚜ꜱƽѕꮪ𑣁𐑈'],
	['S', 'Ｓ𝐒𝑆𝑺𝒮𝓢𝔖𝕊𝕾𝖲𝗦𝘚𝙎𝚂ЅՏᏕᏚꓢ𖼺𐊖𐐠'],
	['s̨', 'ʂ'],
	['s̴', 'ᵴ'],
	['ß', 'ꞵβϐ𝛃𝛽𝜷𝝱𝞫Ᏸ'],
	['sss', '🝜'],
	['st', 'ﬆ'],
	['ʃ', '∫ꭍ'],
	['Ʃ', '∑⅀Σ𝚺𝛴𝜮𝝨𝞢ⵉ'],
	['ʃʃ', '∬'],
	['ʃʃʃ', '∭'],
	['ʃʃʃʃ', '⨌'],
	['t', '𝐭𝑡𝒕𝓉𝓽𝔱𝕥𝖙𝗍𝘁𝘵𝙩𝚝'],
	['T', '⊤⟙🝨Ｔ𝐓𝑇𝑻𝒯𝓣𝔗𝕋𝕿𝖳𝗧𝘛𝙏𝚃Τ𝚻𝛵𝜯𝝩𝞣ⲦᎢꓔ𖼊𑢼𐊗𐊱𐌕'],
	['t̔', 'ƭ'],
	['T̈', '⍡'],
	['T̸', 'Ⱦ'],
	['Ţ', 'Ț'],
	['T̨', 'Ʈ'],
	['T̩', 'Ҭ'],
	['T⃫', '₮'],
	['t̵', 'ŧ'],
	['T̵', 'Ŧ'],
	['t̴', 'ᵵ'],
	['Ꞇ', 'Ⴀ'],
	['T3', 'Ꜩ'],
	['tɕ', 'ʨ'],
	['TEL', '℡'],
	['tf', 'ꝷ'],
	['ts', 'ʦ'],
	['tʃ', 'ʧ'],
	['tȝ', 'ꜩ'],
	['ᴛ', 'τ𝛕𝜏𝝉𝞃𝞽тꭲ'],
	['ᴛ̩', 'ҭ'],
	['ƫ', 'ţțᎿ'],
	['u', '𝐮𝑢𝒖𝓊𝓾𝔲𝕦𝖚𝗎𝘂𝘶𝙪𝚞ꞟᴜꭎꭒʋυ𝛖𝜐𝝊𝞄𝞾ս𐓶𑣘'],
	['U', '∪⋃𝐔𝑈𝑼𝒰𝓤𝔘𝕌𝖀𝖴𝗨𝘜𝙐𝚄Սሀ𐓎ᑌꓴ𖽂𑢸'],
	['ŭ', 'ǔ'],
	['Ŭ', 'Ǔ'],
	['u̵', 'ᵾꮜ'],
	['U̵', 'ɄᏌ'],
	['U·', 'ᑘ'],
	["U'", 'ᑧ'],
	['ue', 'ᵫ'],
	['uo', 'ꭣ'],
	['ꭑ', 'ṃ'],
	['ɰ', 'պሣ'],
	['Ʊ', '℧ᘮᘴ'],
	['ʊ̵', 'ᵿ'],
	['v', '∨⋁ｖⅴ𝐯𝑣𝒗𝓋𝓿𝔳𝕧𝖛𝗏𝘃𝘷𝙫𝚟ᴠν𝛎𝜈𝝂𝝼𝞶ѵט𑜆ꮩ𑣀'],
	['V', '𝈍٧۷Ⅴ𝐕𝑉𝑽𝒱𝓥𝔙𝕍𝖁𝖵𝗩𝘝𝙑𝚅ѴⴸᏙᐯꛟꓦ𖼈𑢠𐔝'],
	['V̵', '𐆗'],
	['V·', 'ᐻ'],
	['VB', '🝬'],
	['vi', 'ⅵ'],
	['vii', 'ⅶ'],
	['viii', 'ⅷ'],
	['Vl', 'Ⅵ'],
	['Vll', 'Ⅶ'],
	['Vlll', 'Ⅷ'],
	['Vᷤ', '🜈'],
	['ʌ', '𐓘'],
	['Ʌ', '٨۸Λ𝚲𝛬𝜦𝝠𝞚Лⴷ𐒰ᐱꛎꓥ𖼽𐊍'],
	['Ʌ̦', 'Ӆ'],
	['Ʌ·', 'ᐽ'],
	['w', 'ɯ𝐰𝑤𝒘𝓌𝔀𝔴𝕨𝖜𝗐𝘄𝘸𝙬𝚠ᴡѡԝա𑜊𑜎𑜏ꮃ'],
	['W', '𑣯𑣦𝐖𝑊𝑾𝒲𝓦𝔚𝕎𝖂𝖶𝗪𝘞𝙒𝚆ԜᎳᏔꓪ'],
	['w҆҇', 'ѽ'],
	['ẇ', '𑓅'],
	['W̵', '₩'],
	['w̦', 'ꝡ'],
	['ʍ', 'ᴍмꮇ'],
	['ʍ̦', 'ӎ'],
	['x', '᙮×⤫⤬⨯ｘⅹ𝐱𝑥𝒙𝓍𝔁𝔵𝕩𝖝𝗑𝘅𝘹𝙭𝚡хᕁᕽ'],
	['ͯ', 'ⷯ'],
	['X', '᙭╳𐌢𑣬ＸⅩ𝐗𝑋𝑿𝒳𝓧𝔛𝕏𝖃𝖷𝗫𝘟𝙓𝚇ꞳΧ𝚾𝛸𝜲𝝬𝞦ⲬХⵝᚷꓫ𐊐𐊴𐌗𐔧'],
	['ẋ', '⨰'],
	['X̩', 'Ҳ'],
	['X̵', '𐆖'],
	['xi', 'ⅺ'],
	['xii', 'ⅻ'],
	['Xl', 'Ⅺ'],
	['Xll', 'Ⅻ'],
	['y', 'ɣᶌｙ𝐲𝑦𝒚𝓎𝔂𝔶𝕪𝖞𝗒𝘆𝘺𝙮𝚢ʏỿꭚγℽ𝛄𝛾𝜸𝝲𝞬уүყ𑣜'],
	['Y', 'Ｙ𝐘𝑌𝒀𝒴𝓨𝔜𝕐𝖄𝖸𝗬𝘠𝙔𝚈Υϒ𝚼𝛶𝜰𝝪𝞤ⲨУҮᎩᎽꓬ𖽃𑢤𐊲'],
	['y̔', 'ƴ'],
	['y̵', 'ɏұ'],
	['Y̵', '¥ɎҰ'],
	['ȝ', 'ʒꝫⳍӡჳ'],
	['z', '𝐳𝑧𝒛𝓏𝔃𝔷𝕫𝖟𝗓𝘇𝘻𝙯𝚣ᴢꮓ𑣄'],
	['Z', '𐋵𑣥Ｚℤℨ𝐙𝑍𝒁𝒵𝓩𝖅𝖹𝗭𝘡𝙕𝚉Ζ𝚭𝛧𝜡𝝛𝞕Ꮓꓜ𑢩'],
	['z̨', 'ʐ'],
	['z̵', 'ƶ'],
	['Z̵', 'Ƶ'],
	['z̦', 'ȥ'],
	['Z̦', 'Ȥ'],
	['z̴', 'ᵶ'],
	['þ', 'ƿϸ'],
	['Þ', 'Ϸ𐓄'],
	['ꝰ', '⁹'],
	['ƨ', 'ᴤϩꙅ'],
	['ƅ', 'ьꮟ'],
	['ƅi', 'ы'],
	['ɂ', 'ꭾ'],
	['ˁ', 'ˤ'],
	['ʡ', 'ꛍ'],
	['ʘ', '⊙☉⨀Ꙩⵙ𐓃'],
	['Γ', 'ℾ𝚪𝛤𝜞𝝘𝞒ⲄГᎱᒥ𖼇'],
	['Γ̵', 'Ғ'],
	['Γ·', 'ᒯ'],
	["Γ'", 'Ґ'],
	['Δ', '∆△🜂𝚫𝛥𝜟𝝙𝞓Ⲇⵠᐃ𖼚𐊅𐊣'],
	['Δ̲', '⍙'],
	['Δ·', 'ᐏ'],
	['Δᐠ', 'ᐬ'],
	['ϝ', '𝟋'],
	['ζ', '𝛇𝜁𝜻𝝵𝞯'],
	['ϗ', 'ⳤ'],
	['λ', '𝛌𝜆𝝀𝝺𝞴Ⲗ𐓛'],
	['μ', 'µ𝛍𝜇𝝁𝝻𝞵'],
	['ξ', '𝛏𝜉𝝃𝝽𝞷'],
	['Ξ', '𝚵𝛯𝜩𝝣𝞝'],
	['π', 'ϖℼ𝛑𝛡𝜋𝜛𝝅𝝕𝝿𝞏𝞹𝟉ᴨп'],
	['Π', '∏ℿ𝚷𝛱𝜫𝝥𝞟ⲠПꛛ'],
	['Ϙ', '𐊭𐌒'],
	['ς', 'ϛ𝛓𝜍𝝇𝞁𝞻'],
	['Φ', '𝚽𝛷𝜱𝝫𝞥ⲪФՓቀᛰ𐊳'],
	['χ', 'ꭓꭕ𝛘𝜒𝝌𝞆𝟀ⲭ'],
	['ψ', '𝛙𝜓𝝍𝞇𝟁ѱ𐓹'],
	['Ψ', '𝚿𝛹𝜳𝝭𝞧ⲮѰ𐓑ᛘ𐊵'],
	['ω', '⍵ꞷ𝛚𝜔𝝎𝞈𝟂ⲱꙍ'],
	['Ω', 'Ω𝛀𝛺𝜴𝝮𝞨ᘯᘵ𐊶'],
	['ω̲', '⍹'],
	['ῴ', 'ώ'],
	['Ϭ', 'Ⳝ'],
	['ж̩', 'җ'],
	['Ж̩', 'Җ'],
	['И', '𝈋Ͷꚡ𐐥'],
	['Ѝ', 'Й'],
	['Ѝ̦', 'Ҋ'],
	['й', 'ѝ'],
	['й̦', 'ҋ'],
	['Ӄ', '𐒼'],
	['л̦', 'ӆ'],
	['љ', 'ꭠ'],
	['ꙩ', '𐓫'],
	['ⷬ', 'ᷮ'],
	['Ћ', '𐓍'],
	['Ӿ', '𝈂'],
	['Ѡ', '𝈢Ꮗᗯ'],
	['Ѡ҆҇', 'Ѽ'],
	['Ѡ·', 'ᣭ'],
	['Ꙍ', 'Ꞷ'],
	['ҷ', 'ӌ'],
	['Ҷ', 'Ӌ'],
	['Ҽ̨', 'Ҿ'],
	['ш', 'ⲽ'],
	['Ш', 'Ⲽ'],
	['Ъl', 'Ꙑ'],
	['Э', '℈'],
	['Ꙙ', '🜁𖼜'],
	['ⰿ', 'ꦒ'],
	['եւ', 'և'],
	['ձ', 'ኔ'],
	['մե', 'ﬔ'],
	['մի', 'ﬕ'],
	['մխ', 'ﬗ'],
	['մն', 'ﬓ'],
	['Ո', '∩⋂𝉅በᑎꓵ'],
	['Ո·', 'ᑚ'],
	["Ո'", 'ᑨ'],
	['վն', 'ﬖ'],
	['Ք', '₽'],
	['ՙ', '˓ʿ'],
	['א', 'ℵﬡ'],
	['אַ', 'אָאּ'],
	['אל', 'ﭏ'],
	['ב', 'ℶ'],
	['ג', 'ℷ'],
	['ד', 'ℸﬢ'],
	['ה', 'ﬣ'],
	['יִ', 'יּ'],
	['כ', 'ﬤ'],
	['ל', 'ﬥ'],
	['ם', 'ﬦ'],
	['ע', 'ﬠ'],
	['ר', 'ﬧ'],
	['שׁ', 'שׂשּ'],
	['שּׁ', 'שּׂ'],
	['ת', 'ﬨ'],
	['ء', 'ﺀ'],
	['ء͈', '۽'],
	['آ', 'ﺂﺁ'],
	['ٱ', 'ﭑﭐ'],
	['ب', '𞸁𞸡𞹡𞺁𞺡ﺑﺒﺐﺏ'],
	['بۛ', 'ݑ'],
	['بۢ', 'ࢶ'],
	['بٔ', 'ࢡ'],
	['بo', 'ﲠﳢ'],
	['بج', 'ﲜﰅ'],
	['بح', 'ﲝﰆ'],
	['بحى', 'ﷂ'],
	['بخ', 'ﲞﰇﳒﱋ'],
	['بخى', 'ﶞ'],
	['بر', 'ﱪ'],
	['بز', 'ﱫ'],
	['بم', 'ﲟﳡﱬﰈ'],
	['بن', 'ﱭ'],
	['بى', 'ﱮﰉﱯﰊ'],
	['ٻ', 'ﭔﭕﭓﭒېﯦﯧﯥﯤ'],
	['ڀ', 'ﭜﭝﭛﭚ'],
	['ݔ', 'ࢩݧ'],
	['ة', '⍥öﺔﺓۃ'],
	['ت', '𞸕𞸵𞹵𞺕𞺵ﺗﺘﺖﺕ'],
	['تo', 'ﲥﳤ'],
	['تج', 'ﲡﰋ'],
	['تجم', 'ﵐ'],
	['تجى', 'ﶠﶟ'],
	['تح', 'ﲢﰌ'],
	['تحج', 'ﵒﵑ'],
	['تحم', 'ﵓ'],
	['تخ', 'ﲣﰍ'],
	['تخم', 'ﵔ'],
	['تخى', 'ﶢﶡ'],
	['تر', 'ﱰ'],
	['تز', 'ﱱ'],
	['تم', 'ﲤﳣﱲﰎ'],
	['تمج', 'ﵕ'],
	['تمح', 'ﵖ'],
	['تمخ', 'ﵗ'],
	['تمى', 'ﶤﶣ'],
	['تن', 'ﱳ'],
	['تى', 'ﱴﰏﱵﰐ'],
	['ٺ', 'ﭠﭡﭟﭞ'],
	['ٿ', 'ﭤﭥﭣﭢ'],
	['ج', '𞸂𞸢𞹂𞹢𞺂𞺢ﺟﺠﺞﺝ'],
	['جح', 'ﲧﰕ'],
	['جحى', 'ﶦﶾ'],
	['جل جلlلo', 'ﷻ'],
	['جم', 'ﲨﰖ'],
	['جمح', 'ﵙﵘ'],
	['جمى', 'ﶧﶥ'],
	['جى', 'ﴝﴁﴞﴂ'],
	['ڃ', 'ﭸﭹﭷﭶ'],
	['ڄ', 'ﭴﭵﭳﭲ'],
	['چ', 'ﭼﭽﭻﭺ'],
	['ڇ', 'ﮀﮁﭿﭾ'],
	['ح', '𞸇𞸧𞹇𞹧𞺇𞺧ﺣﺤﺢﺡ'],
	['حۛ', 'څ'],
	['حٔ', 'ځݲ'],
	['حج', 'ﲩﰗ'],
	['حجى', 'ﶿ'],
	['حم', 'ﲪﰘ'],
	['حمى', 'ﵛﵚ'],
	['حى', 'ﴛﳿﴜﴀ'],
	['خ', '𞸗𞸷𞹗𞹷𞺗𞺷ﺧﺨﺦﺥ'],
	['خج', 'ﲫﰙ'],
	['خح', 'ﰚ'],
	['خم', 'ﲬﰛ'],
	['خى', 'ﴟﴃﴠﴄ'],
	['د', '𐋡𞸃𞺃𞺣ﺪﺩ'],
	['دؕ', 'ڈﮉﮈ'],
	['دۛ', 'ڎﮇﮆ'],
	['د̂', 'ۮ'],
	['د̤̣', 'ࢮ'],
	['ذ', '𞸘𞺘𞺸ﺬﺫ'],
	['ذٰ', 'ﱛ'],
	['ڊؕ', 'ڋ'],
	['ڌ', 'ﮅﮄ'],
	['ڍ', 'ﮃﮂ'],
	['ر', '𞸓𞺓𞺳ﺮﺭ'],
	['رؕ', 'ڑﮍﮌ'],
	['رۛ', 'ژﮋﮊ'],
	['ر̆', 'ڒ'],
	['ر̆̇', 'ࢹ'],
	['ر̂', 'ۯ'],
	['رٔ', 'ݬ'],
	['رٰ', 'ﱜ'],
	['رسول', 'ﷶ'],
	['رىlل', '﷼'],
	['ز', '𞸆𞺆𞺦ﺰﺯ'],
	['ز̂', 'ࢲ'],
	['ڗؕ', 'ݱ'],
	['س', '𞸎𞸮𞹎𞹮𞺎𞺮ﺳﺴﺲﺱ'],
	['سۛ', 'ش𞸔𞸴𞹔𞹴𞺔𞺴ﺷﺸﺶﺵ'],
	['س̂', 'ݾ'],
	['سo', 'ﴱﳨ'],
	['سۛo', 'ﴲﳪ'],
	['سج', 'ﲭﴴﰜ'],
	['سۛج', 'ﴭﴷﴥﴉ'],
	['سجح', 'ﵝ'],
	['سجى', 'ﵞ'],
	['سۛجى', 'ﵩ'],
	['سح', 'ﲮﴵﰝ'],
	['سۛح', 'ﴮﴸﴦﴊ'],
	['سحج', 'ﵜ'],
	['سۛحم', 'ﵨﵧ'],
	['سۛحى', 'ﶪ'],
	['سخ', 'ﲯﴶﰞ'],
	['سۛخ', 'ﴯﴹﴧﴋ'],
	['سخى', 'ﶨﷆ'],
	['سر', 'ﴪﴎ'],
	['سۛر', 'ﴩﴍ'],
	['سم', 'ﲰﳧﰟ'],
	['سۛم', 'ﴰﳩﴨﴌ'],
	['سمج', 'ﵡ'],
	['سمح', 'ﵠﵟ'],
	['سۛمخ', 'ﵫﵪ'],
	['سمم', 'ﵣﵢ'],
	['سۛمم', 'ﵭﵬ'],
	['سى', 'ﴗﳻﴘﳼ'],
	['سۛى', 'ﴙﳽﴚﳾ'],
	['ص', '𐋲𞸑𞸱𞹑𞹱𞺑𞺱ﺻﺼﺺﺹ'],
	['صۛ', 'ڞ'],
	['ص̤̣', 'ࢯ'],
	['صح', 'ﲱﰠ'],
	['صحح', 'ﵥﵤ'],
	['صحى', 'ﶩ'],
	['صخ', 'ﲲ'],
	['صر', 'ﴫﴏ'],
	['صلعم', 'ﷵ'],
	['صلى', 'ﷹﷰ'],
	['صلى lللo علىo وسلم', 'ﷺ'],
	['صم', 'ﲳﰡ'],
	['صمم', 'ﷅﵦ'],
	['صى', 'ﴡﴅﴢﴆ'],
	['ض', '𞸙𞸹𞹙𞹹𞺙𞺹ﺿﻀﺾﺽ'],
	['ضج', 'ﲴﰢ'],
	['ضح', 'ﲵﰣ'],
	['ضحى', 'ﵮﶫ'],
	['ضخ', 'ﲶﰤ'],
	['ضخم', 'ﵰﵯ'],
	['ضر', 'ﴬﴐ'],
	['ضم', 'ﲷﰥ'],
	['ضى', 'ﴣﴇﴤﴈ'],
	['ط', '𐋨𞸈𞹨𞺈𞺨ﻃﻄﻂﻁ'],
	['طۛ', 'ڟ'],
	['طح', 'ﲸﰦ'],
	['طم', 'ﴳﴺﰧ'],
	['طمح', 'ﵲﵱ'],
	['طمم', 'ﵳ'],
	['طمى', 'ﵴ'],
	['طى', 'ﴑﳵﴒﳶ'],
	['ظ', '𞸚𞹺𞺚𞺺ﻇﻈﻆﻅ'],
	['ظم', 'ﲹﴻﰨ'],
	['ع', '𞸏𞸯𞹏𞹯𞺏𞺯ﻋﻌﻊﻉ'],
	['عج', 'ﲺﰩ'],
	['عجم', 'ﷄﵵ'],
	['علىo', 'ﷷ'],
	['عم', 'ﲻﰪ'],
	['عمم', 'ﵷﵶ'],
	['عمى', 'ﵸﶶ'],
	['عى', 'ﴓﳷﴔﳸ'],
	['غ', '𞸛𞸻𞹛𞹻𞺛𞺻ﻏﻐﻎﻍ'],
	['غج', 'ﲼﰫ'],
	['غم', 'ﲽﰬ'],
	['غمم', 'ﵹ'],
	['غمى', 'ﵻﵺ'],
	['غى', 'ﴕﳹﴖﳺ'],
	['ف', '𞸐𞸰𞹰𞺐𞺰ﻓﻔﻒﻑڧ'],
	['فج', 'ﲾﰭ'],
	['فح', 'ﲿﰮ'],
	['فخ', 'ﳀﰯ'],
	['فخم', 'ﵽﵼ'],
	['فم', 'ﳁﰰ'],
	['فمى', 'ﷁ'],
	['فى', 'ﱼﰱﱽﰲ'],
	['ڡ', '𞸞𞹾ࢻٯ𞸟𞹟ࢼ'],
	['ڡۛ', 'ڤﭬﭭﭫﭪڨ'],
	['ڢۛ', 'ࢤ'],
	['ڦ', 'ﭰﭱﭯﭮ'],
	['ق', '𞸒𞸲𞹒𞹲𞺒𞺲ﻗﻘﻖﻕ'],
	['قح', 'ﳂﰳ'],
	['قلى', 'ﷱ'],
	['قم', 'ﳃﰴ'],
	['قمح', 'ﶴﵾ'],
	['قمم', 'ﵿ'],
	['قمى', 'ﶲ'],
	['قى', 'ﱾﰵﱿﰶ'],
	['ك', '𞸊𞸪𞹪ﻛﻜﻚﻙکﮐﮑﮏﮎڪ'],
	['كۛ', 'ڭﯕﯖﯔﯓݣ'],
	['كl', 'ﲀﰷ'],
	['كج', 'ﳄﰸ'],
	['كح', 'ﳅﰹ'],
	['كخ', 'ﳆﰺ'],
	['كل', 'ﳇﳫﲁﰻ'],
	['كم', 'ﳈﳬﲂﰼ'],
	['كمم', 'ﷃﶻ'],
	['كمى', 'ﶷ'],
	['كى', 'ﲃﰽﲄﰾ'],
	['ڬ', 'ݢ'],
	['گ', 'ﮔﮕﮓﮒࢰ'],
	['گۛ', 'ڴ'],
	['ڱ', 'ﮜﮝﮛﮚ'],
	['ڳ', 'ﮘﮙﮗﮖ'],
	['ل', '𞸋𞸫𞹋𞺋𞺫ﻟﻠﻞﻝ'],
	['لۛ', 'ڷ'],
	['ل̆', 'ڵ'],
	['لl', 'ﻼﻻ'],
	['لlٕ', 'ﻺﻹ'],
	['لlٴ', 'ﻸﻷ'],
	['لo', 'ﳍ'],
	['لآ', 'ﻶﻵ'],
	['لج', 'ﳉﰿ'],
	['لجج', 'ﶃﶄ'],
	['لجم', 'ﶺﶼ'],
	['لجى', 'ﶬ'],
	['لح', 'ﳊﱀ'],
	['لحم', 'ﶵﶀ'],
	['لحى', 'ﶂﶁ'],
	['لخ', 'ﳋﱁ'],
	['لخم', 'ﶆﶅ'],
	['لم', 'ﳌﳭﲅﱂ'],
	['لمح', 'ﶈﶇ'],
	['لمى', 'ﶭ'],
	['لى', 'ﲆﱃﲇﱄ'],
	['م', '𞸌𞸬𞹬𞺌𞺬ﻣﻤﻢﻡ'],
	['مۛ', 'ࢧ'],
	['م͈', '۾'],
	['مl', 'ﲈ'],
	['مج', 'ﳎﱅ'],
	['مجح', 'ﶌ'],
	['مجخ', 'ﶒ'],
	['مجم', 'ﶍ'],
	['مجى', 'ﷀ'],
	['مح', 'ﳏﱆ'],
	['محج', 'ﶉ'],
	['محم', 'ﶊ'],
	['محمد', 'ﷴ'],
	['محى', 'ﶋ'],
	['مخ', 'ﳐﱇ'],
	['مخج', 'ﶎ'],
	['مخم', 'ﶏ'],
	['مخى', 'ﶹ'],
	['مم', 'ﳑﲉﱈ'],
	['ممى', 'ﶱ'],
	['مى', 'ﱉﱊ'],
	['ن', '𞸍𞸭𞹍𞹭𞺍𞺭ﻧﻨﻦﻥ'],
	['نؕ', 'ݨ'],
	['ن̆', 'ݩ'],
	['نo', 'ﳖﳯ'],
	['نجح', 'ﶸﶽ'],
	['نجم', 'ﶘﶗ'],
	['نجى', 'ﶙﷇ'],
	['نح', 'ﳓﱌ'],
	['نحم', 'ﶕ'],
	['نحى', 'ﶖﶳ'],
	['نخ', 'ﳔﱍ'],
	['نر', 'ﲊ'],
	['نز', 'ﲋ'],
	['نم', 'ﳕﳮﲌﱎ'],
	['نمى', 'ﶛﶚ'],
	['نن', 'ﲍ'],
	['نى', 'ﲎﱏﲏﱐ'],
	['ۀ', 'ۂﮥﮤ'],
	['و', '𐋤𞸅𞺅𞺥ﻮﻭࢱ'],
	['وۛ', 'ۋﯟﯞ'],
	['و̓', 'ۇﯘﯗ'],
	['و̆', 'ۆﯚﯙ'],
	['و̂', 'ۉﯣﯢ'],
	['وٰ', 'ۈﯜﯛ'],
	['وٴ', 'ؤﺆﺅٶ'],
	['و̓ٴ', 'ٷﯝ'],
	['وسلم', 'ﷸ'],
	['ۅ', 'ﯡﯠ'],
	['ى', 'ٮ𞸜𞹼ں𞸝𞹝ﮟﮞࢽﯨﯩﻰﻯي𞸉𞸩𞹉𞹩𞺉𞺩ﻳﻴﻲﻱیﯾﯿﯽﯼےﮯﮮ'],
	['ىؕ', 'ٹﭨﭩﭧﭦڻﮢﮣﮡﮠ'],
	['ىۛ', 'پﭘﭙﭗﭖث𞸖𞸶𞹶𞺖𞺶ﺛﺜﺚﺙڽۑؿ'],
	['ىۛۢ', 'ࢷ'],
	['ى̆', 'ݖێ'],
	['ى̆̇', 'ࢺ'],
	['ى̂', 'ؽ'],
	['ىٔ', 'ࢨ'],
	['ىٰ', 'ﲐﱝ'],
	['ىo', 'ﳞﳱ'],
	['ىۛo', 'ﳦ'],
	['ىٴ', 'ئﺋﺌﺊﺉٸ'],
	['ىٴl', 'ﯫﯪ'],
	['ىٴo', 'ﲛﳠﯭﯬ'],
	['ىٴٻ', 'ﯸﯷﯶ'],
	['ىٴج', 'ﲗﰀ'],
	['ىٴح', 'ﲘﰁ'],
	['ىٴخ', 'ﲙ'],
	['ىٴر', 'ﱤ'],
	['ىٴز', 'ﱥ'],
	['ىٴم', 'ﲚﳟﱦﰂ'],
	['ىٴن', 'ﱧ'],
	['ىٴو', 'ﯯﯮ'],
	['ىٴو̓', 'ﯱﯰ'],
	['ىٴو̆', 'ﯳﯲ'],
	['ىٴوٰ', 'ﯵﯴ'],
	['ىٴى', 'ﯻﯺﱨﯹﰃﱩﰄ'],
	['ىج', 'ﳚﱕ'],
	['ىۛج', 'ﰑ'],
	['ىجى', 'ﶯ'],
	['ىح', 'ﳛﱖ'],
	['ىحى', 'ﶮ'],
	['ىخ', 'ﳜﱗ'],
	['ىر', 'ﲑ'],
	['ىۛر', 'ﱶ'],
	['ىز', 'ﲒ'],
	['ىۛز', 'ﱷ'],
	['ىم', 'ﳝﳰﲓﱘ'],
	['ىۛم', 'ﲦﳥﱸﰒ'],
	['ىمم', 'ﶝﶜ'],
	['ىمى', 'ﶰ'],
	['ىن', 'ﲔ'],
	['ىۛن', 'ﱹ'],
	['ىى', 'ﲕﱙﲖﱚ'],
	['ىۛى', 'ﱺﰓﱻﰔ'],
	['ۓ', 'ﮱﮰ'],
	['ⵀ', '𐊸'],
	['ⵂ', '⁞⸽⦙'],
	['ⵗ', '︙⁝⋮'],
	['ሆ', 'Մ'],
	['ቡ', 'Ռ'],
	['ኮ', 'Ի'],
	['ጣ', 'Պ'],
	['अा', 'आ'],
	['अाॆ', 'ऒ'],
	['अाे', 'ओ'],
	['अाै', 'औ'],
	['अॆ', 'ऄ'],
	['अॉ', 'ऑ'],
	['एॅ', 'ऍ'],
	['एॆ', 'ऎ'],
	['एे', 'ऐ'],
	['र्इ', 'ई'],
	['ऽ', 'ઽ'],
	['ꣻ', '𑇜'],
	['ऺ', '𑇋'],
	['ु', 'ુ'],
	['ू', 'ૂ'],
	['ॆ', 'ੋ'],
	['्', '੍્'],
	['অা', 'আ'],
	['ঋৃ', 'ৠৡ'],
	['ঘ', '𑒒'],
	['চ', '𑒔'],
	['জ', '𑒖'],
	['ঞ', '𑒘'],
	['ট', '𑒙'],
	['ড', '𑒛'],
	['ণ', '𑒪'],
	['ত', '𑒞'],
	['থ', '𑒟'],
	['দ', '𑒠'],
	['ধ', '𑒡'],
	['ন', '𑒢'],
	['প', '𑒣'],
	['ব', '𑒩'],
	['ম', '𑒧'],
	['য', '𑒨'],
	['র', '𑒫'],
	['ল', '𑒝'],
	['ষ', '𑒭'],
	['স', '𑒮'],
	['ঽ', '𑓄'],
	['া', '𑒰'],
	['ি', '𑒱'],
	['ে', '𑒹'],
	['ো', '𑒼'],
	['ৌ', '𑒾'],
	['্', '𑓂'],
	['ৗ', '𑒽'],
	['ੳੁ', 'ਉ'],
	['ੳੂ', 'ਊ'],
	['ਅਾ', 'ਆ'],
	['ਅੈ', 'ਐ'],
	['ਅੌ', 'ਔ'],
	['ੲਿ', 'ਇ'],
	['ੲੀ', 'ਈ'],
	['ੲੇ', 'ਏ'],
	['અા', 'આ'],
	['અાૅ', 'ઑ'],
	['અાે', 'ઓ'],
	['અાૈ', 'ઔ'],
	['અૅ', 'ઍ'],
	['અે', 'એ'],
	['અૈ', 'ઐ'],
	['ଅା', 'ଆ'],
	['அ', '௮'],
	['ஈ', 'ரா'],
	['ஈு', '௫'],
	['உ', '௨ഉ'],
	['உள', 'ஊ'],
	['உൗ', 'ഊ'],
	['எ', '௭'],
	['எவ', '௷'],
	['க', '௧'],
	['ச', '௪'],
	['சு', '௬'],
	['சூ', '௲'],
	['டி', 'ഺ'],
	['நீ', '௺'],
	['மீ', '௴'],
	['ய', '௰'],
	['ள', 'ௗ'],
	['ன', 'ை'],
	['ஷ', '௸'],
	['ி', 'ിീ'],
	['ெஈ', 'ொ'],
	['ெள', 'ௌ'],
	['ேஈ', 'ோ'],
	['అ', 'ಅ'],
	['ఆ', 'ಆ'],
	['ఇ', 'ಇ'],
	['ఋా', 'ౠ'],
	['ఌా', 'ౡ'],
	['ఒ', 'ಒ'],
	['ఒౌ', 'ಔ'],
	['ఒౕ', 'ఓಓ'],
	['జ', 'ಜ'],
	['ఞ', 'ಞ'],
	['ణ', 'ಣ'],
	['య', 'ಯ'],
	['ఱ', 'ಱ'],
	['ల', 'ಲ'],
	['ుా', 'ూ'],
	['ృా', 'ౄ'],
	['ഇൗ', 'ഈ'],
	['എെ', 'ഐ'],
	['ഒാ', 'ഓ'],
	['ഒൗ', 'ഔ'],
	['ഞ', 'ൡ'],
	['ദ്ര', '൫'],
	['നു', '൹ഌ'],
	['ന്', '൯ൻ'],
	['ന്ന', '൬'],
	['ന്മ', '൚'],
	['ര്', '൪ർ'],
	['വ്ര', '൮'],
	['ഹ്മ', '൶'],
	['ു', 'ൂൃ'],
	['െെ', 'ൈ'],
	['ජ', '෪'],
	['ද', '෫'],
	['𑐴𑑂𑐒', '𑐓'],
	['𑐴𑑂𑐘', '𑐙'],
	['𑐴𑑂𑐣', '𑐤'],
	['𑐴𑑂𑐩', '𑐪'],
	['𑐴𑑂𑐬', '𑐭'],
	['𑐴𑑂𑐮', '𑐯'],
	['𑖂', '𑗘𑗙'],
	['𑖃', '𑗚'],
	['𑖄', '𑗛'],
	['𑖲', '𑗜'],
	['𑖳', '𑗝'],
	['ข', 'ฃ'],
	['ค', 'ด'],
	['ฆ', 'ม'],
	['จ', 'ຈ'],
	['ช', 'ซ'],
	['ฎ', 'ฏ'],
	['ฑ', 'ท'],
	['บ', 'ບ'],
	['ป', 'ປ'],
	['ฝ', 'ຝ'],
	['พ', 'ພ'],
	['ฟ', 'ຟ'],
	['ภ', 'ฦ'],
	['ย', 'ຍ'],
	['ฯ', '។'],
	['า', 'ๅ'],
	['̊า', 'ำ'],
	['ิ', 'ិ'],
	['ี', 'ី'],
	['ึ', 'ឹ'],
	['ื', 'ឺ'],
	['ุ', 'ຸ'],
	['ู', 'ູ'],
	['เเ', 'แ'],
	['ຫນ', 'ໜ'],
	['ຫມ', 'ໝ'],
	['̊າ', 'ຳ'],
	['འུྂཿ', '༂'],
	['འུྂ༔', '༃'],
	['ར', 'ཪ'],
	['ཨོཾ', 'ༀ'],
	['ྲཱྀ', 'ཷ'],
	['ླཱྀ', 'ཹ'],
	['𑲪', '𑲲'],
	['ဂှ', 'ႁ'],
	['ဂာ', 'က'],
	['ဃှ', 'ၰ'],
	['ပှ', 'ၦ'],
	['ပာ', 'ဟ'],
	['ပာှ', 'ၯ'],
	['ၽှ', 'ၾ'],
	['သြ', 'ဩ'],
	['သြော်', 'ဪ'],
	['ႃ̊', '႞'],
	['អ', 'ឣ'],
	['ᦞ', '᧐'],
	['ᦱ', '᧑'],
	['ᩅ', '᪀᪐'],
	['ꨁ', '꩓'],
	['ꨣ', '꩖'],
	['ᬍ', '᭒'],
	['ᬑ', '᭓'],
	['ᬨ', '᭘'],
	['ꦝ', 'ꦣ'],
	['ᡜ', 'ᢖ'],
	['ᠵ', 'ᡕ'],
	['Ꮿ', 'ῶ'],
	['ᐁ·', 'ᐍ'],
	['ᐁᐠ', 'ᐫ'],
	['ᐄ·', 'ᐑ'],
	['ᐅ·', 'ᐓ'],
	['ᐅᐠ', 'ᐭ'],
	['ᐆ·', 'ᐕ'],
	['ᐊ·', 'ᐘ'],
	['ᐊᐠ', 'ᐮ'],
	['ᐋ·', 'ᐚ'],
	['ᐞᣟ', 'ᣝ'],
	['ᐡ', 'ᓑ'],
	['ᐩ', 'ᕀ'],
	['ᐲ·', 'ᐿ'],
	['ᐵ', '⍩'],
	['ᑏ·', 'ᑜ'],
	['ᑐ', '⸧⊃'],
	["ᑐ'", 'ᑩ'],
	['ᑐ/', '⟉'],
	['ᑐᑕ', '⫗'],
	['ᑕ', '⸦⊂'],
	['ᑕ·', 'ᑢ'],
	["ᑕ'", 'ᑪ'],
	['ᑖ·', 'ᑤ'],
	['ᑫ·', 'ᑵ'],
	["ᑫ'", 'ᒅ'],
	['ᑮ·', 'ᑹ'],
	['ᑰ·', 'ᑽ'],
	['ᒉ·', 'ᒓ'],
	['ᒋ·', 'ᒕ'],
	['ᒌ·', 'ᒗ'],
	['ᒎ·', 'ᒛ'],
	['ᒐ·', 'ᒝ'],
	['ᒑ·', 'ᒟ'],
	['ᒣ·', 'ᒭ'],
	['ᒦ·', 'ᒱ'],
	['ᒧ·', 'ᒳ'],
	['ᒨ·', 'ᒵ'],
	['ᒫ·', 'ᒹ'],
	['ᓂ·', 'ᣇ'],
	['ᓃ·', 'ᣉ'],
	['ᓄ·', 'ᣋ'],
	['ᓅ·', 'ᣍ'],
	['ᓭ·', 'ᓷ'],
	['ᓯ·', 'ᓹ'],
	['ᓰ·', 'ᓻ'],
	['ᓱ·', 'ᓽ'],
	['ᓲ·', 'ᓿ'],
	['ᓴ·', 'ᔁ'],
	['ᓵ·', 'ᔃ'],
	['ᔋb', 'ᔎ'],
	['ᔋᑕ', 'ᔍ'],
	['ᔋᒐ', 'ᔏ'],
	['ᔒ·', 'ᔜ'],
	['ᔓ·', 'ᔞ'],
	['ᔔ·', 'ᔠ'],
	['ᔕ·', 'ᔢ'],
	['ᔖ·', 'ᔤ'],
	['ᔫ·', 'ᔸ'],
	['ᔭ·', 'ᔺ'],
	['ᔮ·', 'ᔼ'],
	['ᕃ', 'ᘢ'],
	['ᕃ·', 'ᣠ'],
	['ᕆ', 'ᘣ'],
	['ᕊ', 'ᘤ'],
	['ᕌ·', 'ᕏ'],
	['ᕐb', 'ᖃ'],
	['ᕐḃ', 'ᖄ'],
	['ᕐd', 'ᖁ'],
	['ᕐP', 'ᕿ'],
	['ᕐᑫ', 'ᙯ'],
	['ᕐᑬ', 'ᕾ'],
	['ᕐᑮ', 'ᖀ'],
	['ᕐᑰ', 'ᖂ'],
	['ᕞ·', 'ᣣ'],
	['ᕦ·', 'ᣤ'],
	['ᕧ·', 'ᕩ'],
	['ᕫ·', 'ᣥ'],
	['ᖆ·', 'ᣨ'],
	['ᖕJ', 'ᖑ'],
	['ᖕᒉ', 'ᙰ'],
	['ᖕᒊ', 'ᖎ'],
	['ᖕᒋ', 'ᖏ'],
	['ᖕᒌ', 'ᖐ'],
	['ᖕᒎ', 'ᖒ'],
	['ᖕᒐ', 'ᖓ'],
	['ᖕᒑ', 'ᖔ'],
	['ᖖJ', 'ᙳ'],
	['ᖖᒋ', 'ᙱ'],
	['ᖖᒌ', 'ᙲ'],
	['ᖖᒎ', 'ᙴ'],
	['ᖖᒐ', 'ᙵ'],
	['ᖖᒑ', 'ᙶ'],
	['ᖗ·', 'ᣪ'],
	['ᖧ·', 'ᙷ'],
	['ᖨ·', 'ᙸ'],
	['ᖩ·', 'ᙹ'],
	['ᖪ·', 'ᙺ'],
	['ᖫ·', 'ᙻ'],
	['ᖬ·', 'ᙼ'],
	['ᖭ·', 'ᙽ'],
	['ᗡ', 'ꓷ'],
	['ᗴ·', 'ᣰ'],
	['ᘛ·', 'ᣲ'],
	['ᙆ', 'ᶻ'],
	['ᙠ', 'ꓭ'],
	['ᣔ', 'ᶺ'],
	['ᣖ', 'ᴾ'],
	['ᣟᐞ', 'ᣜ'],
	['ᣳ', 'ˡ'],
	['ᣴ', 'ʳ'],
	['ᣵ', 'ˢᣛ'],
	['ᚹ', 'ꚰ'],
	['ᚼ', 'ᛡ'],
	['ᚽ', '⍿ᛂ'],
	['ᛋ', '𝈿'],
	['ᛏ', '↑'],
	['ᛐ', '↿'],
	['ᛯ', 'ⵣ'],
	['ᛚ', '↾⨡'],
	['ᛜ', '⋄◇◊♢🝔𑢷𐊔'],
	['ᛜ̲', '⍚'],
	['ᛞ', '⋈⨝'],
	['ᛦ', '𐓐'],
	['ᛨ', '↕'],
	['𐲂', '𐳼'],
	['𐲥', '𐳺'],
	['ᄀ', 'ㄱᆨ'],
	['ᄀᄀ', 'ᄁㄲᆩ'],
	['ᄀᄂ', 'ᇺ'],
	['ᄀᄃ', 'ᅚ'],
	['ᄀᄅ', 'ᇃ'],
	['ᄀᄇ', 'ᇻ'],
	['ᄀᄉ', 'ᆪㄳ'],
	['ᄀᄉᄀ', 'ᇄ'],
	['ᄀᄎ', 'ᇼ'],
	['ᄀᄏ', 'ᇽ'],
	['ᄀᄒ', 'ᇾ'],
	['ᄂ', 'ㄴᆫ'],
	['ᄂᄀ', 'ᄓᇅ'],
	['ᄂᄂ', 'ᄔㅥᇿ'],
	['ᄂᄃ', 'ᄕㅦᇆ'],
	['ᄂᄅ', 'ퟋ'],
	['ᄂᄇ', 'ᄖ'],
	['ᄂᄉ', 'ᅛᇇㅧ'],
	['ᄂᄌ', 'ᅜᆬㄵ'],
	['ᄂᄎ', 'ퟌ'],
	['ᄂᄐ', 'ᇉ'],
	['ᄂᄒ', 'ᅝᆭㄶ'],
	['ᄂᅀ', 'ᇈㅨ'],
	['ᄃ', 'ㄷᆮ'],
	['ᄃᄀ', 'ᄗᇊ'],
	['ᄃᄃ', 'ᄄㄸퟍ'],
	['ᄃᄃᄇ', 'ퟎ'],
	['ᄃᄅ', 'ᅞᇋ'],
	['ᄃᄆ', 'ꥠ'],
	['ᄃᄇ', 'ꥡퟏ'],
	['ᄃᄉ', 'ꥢퟐ'],
	['ᄃᄉᄀ', 'ퟑ'],
	['ᄃᄌ', 'ꥣퟒ'],
	['ᄃᄎ', 'ퟓ'],
	['ᄃᄐ', 'ퟔ'],
	['ᄅ', 'ㄹᆯ'],
	['ᄅᄀ', 'ꥤᆰㄺ'],
	['ᄅᄀᄀ', 'ꥥퟕ'],
	['ᄅᄀᄉ', 'ᇌㅩ'],
	['ᄅᄀᄒ', 'ퟖ'],
	['ᄅᄂ', 'ᄘᇍ'],
	['ᄅᄃ', 'ꥦᇎㅪ'],
	['ᄅᄃᄃ', 'ꥧ'],
	['ᄅᄃᄒ', 'ᇏ'],
	['ᄅᄅ', 'ᄙᇐ'],
	['ᄅᄅᄏ', 'ퟗ'],
	['ᄅᄆ', 'ꥨᆱㄻ'],
	['ᄅᄆᄀ', 'ᇑ'],
	['ᄅᄆᄉ', 'ᇒ'],
	['ᄅᄆᄒ', 'ퟘ'],
	['ᄅᄇ', 'ꥩᆲㄼ'],
	['ᄅᄇᄃ', 'ퟙ'],
	['ᄅᄇᄇ', 'ꥪ'],
	['ᄅᄇᄉ', 'ᇓㅫ'],
	['ᄅᄇᄋ', 'ꥫᇕ'],
	['ᄅᄇᄑ', 'ퟚ'],
	['ᄅᄇᄒ', 'ᇔ'],
	['ᄅᄉ', 'ꥬᆳㄽ'],
	['ᄅᄉᄉ', 'ᇖ'],
	['ᄅᄋ', 'ᄛퟝ'],
	['ᄅᄌ', 'ꥭ'],
	['ᄅᄏ', 'ꥮᇘ'],
	['ᄅᄐ', 'ᆴㄾ'],
	['ᄅᄑ', 'ᆵㄿ'],
	['ᄅᄒ', 'ᄚㅀᄻᆶퟲ'],
	['ᄅᅀ', 'ᇗㅬ'],
	['ᄅᅌ', 'ퟛ'],
	['ᄅᅙ', 'ᇙㅭ'],
	['ᄅᅙᄒ', 'ퟜ'],
	['ᄆ', 'ㅁᆷ'],
	['ᄆᄀ', 'ꥯᇚ'],
	['ᄆᄂ', 'ퟞ'],
	['ᄆᄂᄂ', 'ퟟ'],
	['ᄆᄃ', 'ꥰ'],
	['ᄆᄅ', 'ᇛ'],
	['ᄆᄆ', 'ퟠ'],
	['ᄆᄇ', 'ᄜㅮᇜ'],
	['ᄆᄇᄉ', 'ퟡ'],
	['ᄆᄉ', 'ꥱᇝㅯ'],
	['ᄆᄉᄉ', 'ᇞ'],
	['ᄆᄋ', 'ᄝㅱᇢ'],
	['ᄆᄌ', 'ퟢ'],
	['ᄆᄎ', 'ᇠ'],
	['ᄆᄒ', 'ᇡ'],
	['ᄆᅀ', 'ᇟㅰ'],
	['ᄇ', 'ㅂᆸ'],
	['ᄇᄀ', 'ᄞㅲ'],
	['ᄇᄂ', 'ᄟ'],
	['ᄇᄃ', 'ᄠㅳퟣ'],
	['ᄇᄅ', 'ᇣ'],
	['ᄇᄅᄑ', 'ퟤ'],
	['ᄇᄆ', 'ퟥ'],
	['ᄇᄇ', 'ᄈㅃퟦ'],
	['ᄇᄇᄋ', 'ᄬㅹ'],
	['ᄇᄉ', 'ᄡㅄᆹ'],
	['ᄇᄉᄀ', 'ᄢㅴ'],
	['ᄇᄉᄃ', 'ᄣㅵퟧ'],
	['ᄇᄉᄇ', 'ᄤ'],
	['ᄇᄉᄉ', 'ᄥ'],
	['ᄇᄉᄌ', 'ᄦ'],
	['ᄇᄉᄐ', 'ꥲ'],
	['ᄇᄋ', 'ᄫㅸᇦ'],
	['ᄇᄌ', 'ᄧㅶퟨ'],
	['ᄇᄎ', 'ᄨퟩ'],
	['ᄇᄏ', 'ꥳ'],
	['ᄇᄐ', 'ᄩㅷ'],
	['ᄇᄑ', 'ᄪᇤ'],
	['ᄇᄒ', 'ꥴᇥ'],
	['ᄉ', 'ㅅᆺ'],
	['ᄉᄀ', 'ᄭㅺᇧ'],
	['ᄉᄂ', 'ᄮㅻ'],
	['ᄉᄃ', 'ᄯㅼᇨ'],
	['ᄉᄅ', 'ᄰᇩ'],
	['ᄉᄆ', 'ᄱퟪ'],
	['ᄉᄇ', 'ᄲㅽᇪ'],
	['ᄉᄇᄀ', 'ᄳ'],
	['ᄉᄇᄋ', 'ퟫ'],
	['ᄉᄉ', 'ᄊㅆᆻ'],
	['ᄉᄉᄀ', 'ퟬ'],
	['ᄉᄉᄃ', 'ퟭ'],
	['ᄉᄉᄇ', 'ꥵ'],
	['ᄉᄉᄉ', 'ᄴ'],
	['ᄉᄋ', 'ᄵ'],
	['ᄉᄌ', 'ᄶㅾퟯ'],
	['ᄉᄎ', 'ᄷퟰ'],
	['ᄉᄏ', 'ᄸ'],
	['ᄉᄐ', 'ᄹퟱ'],
	['ᄉᄑ', 'ᄺ'],
	['ᄉᅀ', 'ퟮ'],
	['ᄋ', 'ㅇᆼ'],
	['ᄋᄀ', 'ᅁᇬ'],
	['ᄋᄀᄀ', 'ᇭ'],
	['ᄋᄃ', 'ᅂ'],
	['ᄋᄅ', 'ꥶ'],
	['ᄋᄆ', 'ᅃ'],
	['ᄋᄇ', 'ᅄ'],
	['ᄋᄉ', 'ᅅᇱㆂ'],
	['ᄋᄋ', 'ᅇㆀᇮ'],
	['ᄋᄌ', 'ᅈ'],
	['ᄋᄎ', 'ᅉ'],
	['ᄋᄏ', 'ᇯ'],
	['ᄋᄐ', 'ᅊ'],
	['ᄋᄑ', 'ᅋ'],
	['ᄋᄒ', 'ꥷ'],
	['ᄋᅀ', 'ᅆᇲㆃ'],
	['ᄌ', 'ㅈᆽ'],
	['ᄌᄇ', 'ퟷ'],
	['ᄌᄇᄇ', 'ퟸ'],
	['ᄌᄋ', 'ᅍ'],
	['ᄌᄌ', 'ᄍㅉퟹ'],
	['ᄌᄌᄒ', 'ꥸ'],
	['ᄎ', 'ㅊᆾ'],
	['ᄎᄏ', 'ᅒ'],
	['ᄎᄒ', 'ᅓ'],
	['ᄏ', 'ㅋᆿ'],
	['ᄐ', 'ㅌᇀ'],
	['ᄐᄐ', 'ꥹ'],
	['ᄑ', 'ㅍᇁ'],
	['ᄑᄇ', 'ᅖᇳ'],
	['ᄑᄉ', 'ퟺ'],
	['ᄑᄋ', 'ᅗㆄᇴ'],
	['ᄑᄐ', 'ퟻ'],
	['ᄑᄒ', 'ꥺ'],
	['ᄒ', 'ㅎᇂ'],
	['ᄒᄂ', 'ᇵ'],
	['ᄒᄅ', 'ᇶ'],
	['ᄒᄆ', 'ᇷ'],
	['ᄒᄇ', 'ᇸ'],
	['ᄒᄉ', 'ꥻ'],
	['ᄒᄒ', 'ᅘㆅ'],
	['ᄼᄼ', 'ᄽ'],
	['ᄾᄾ', 'ᄿ'],
	['ᅀ', 'ㅿᇫ'],
	['ᅀᄇ', 'ퟳ'],
	['ᅀᄇᄋ', 'ퟴ'],
	['ᅌ', 'ㆁᇰ'],
	['ᅌᄆ', 'ퟵ'],
	['ᅌᄒ', 'ퟶ'],
	['ᅎᅎ', 'ᅏ'],
	['ᅐᅐ', 'ᅑ'],
	['ᅙ', 'ㆆᇹ'],
	['ᅙᅙ', 'ꥼ'],
	['ᅠ', 'ㅤ'],
	['ᅡ', 'ㅏ'],
	['ᅡー', 'ᆣ'],
	['ᅡᅩ', 'ᅶ'],
	['ᅡᅮ', 'ᅷ'],
	['ᅡ丨', 'ᅢㅐ'],
	['ᅣ', 'ㅑ'],
	['ᅣᅩ', 'ᅸ'],
	['ᅣᅭ', 'ᅹ'],
	['ᅣᅮ', 'ᆤ'],
	['ᅣ丨', 'ᅤㅒ'],
	['ᅥ', 'ㅓ'],
	['ᅥー', 'ᅼ'],
	['ᅥᅩ', 'ᅺ'],
	['ᅥᅮ', 'ᅻ'],
	['ᅥ丨', 'ᅦㅔ'],
	['ᅧ', 'ㅕ'],
	['ᅧᅣ', 'ᆥ'],
	['ᅧᅩ', 'ᅽ'],
	['ᅧᅮ', 'ᅾ'],
	['ᅧ丨', 'ᅨㅖ'],
	['ᅩ', 'ㅗ'],
	['ᅩᅡ', 'ᅪㅘ'],
	['ᅩᅡ丨', 'ᅫㅙ'],
	['ᅩᅣ', 'ᆦ'],
	['ᅩᅣ丨', 'ᆧ'],
	['ᅩᅥ', 'ᅿ'],
	['ᅩᅥ丨', 'ᆀ'],
	['ᅩᅧ', 'ힰ'],
	['ᅩᅧ丨', 'ᆁ'],
	['ᅩᅩ', 'ᆂ'],
	['ᅩᅩ丨', 'ힱ'],
	['ᅩᅮ', 'ᆃ'],
	['ᅩ丨', 'ᅬㅚ'],
	['ᅭ', 'ㅛ'],
	['ᅭᅡ', 'ힲ'],
	['ᅭᅡ丨', 'ힳ'],
	['ᅭᅣ', 'ᆄㆇᆆ'],
	['ᅭᅣ丨', 'ᆅㆈ'],
	['ᅭᅥ', 'ힴ'],
	['ᅭᅩ', 'ᆇ'],
	['ᅭ丨', 'ᆈㆉ'],
	['ᅮ', 'ㅜ'],
	['ᅮᅡ', 'ᆉ'],
	['ᅮᅡ丨', 'ᆊ'],
	['ᅮᅥ', 'ᅯㅝ'],
	['ᅮᅥー', 'ᆋ'],
	['ᅮᅥ丨', 'ᅰㅞ'],
	['ᅮᅧ', 'ힵ'],
	['ᅮᅧ丨', 'ᆌ'],
	['ᅮᅮ', 'ᆍ'],
	['ᅮ丨', 'ᅱㅟ'],
	['ᅮ丨丨', 'ힶ'],
	['ᅲ', 'ㅠ'],
	['ᅲᅡ', 'ᆎ'],
	['ᅲᅡ丨', 'ힷ'],
	['ᅲᅥ', 'ᆏ'],
	['ᅲᅥ丨', 'ᆐ'],
	['ᅲᅧ', 'ᆑㆊ'],
	['ᅲᅧ丨', 'ᆒㆋ'],
	['ᅲᅩ', 'ힸ'],
	['ᅲᅮ', 'ᆓ'],
	['ᅲ丨', 'ᆔㆌ'],
	['ᆞ', 'ㆍ'],
	['ᆞᅡ', 'ퟅ'],
	['ᆞᅥ', 'ᆟ'],
	['ᆞᅥ丨', 'ퟆ'],
	['ᆞᅮ', 'ᆠ'],
	['ᆞᆞ', 'ᆢ'],
	['ᆞ丨', 'ᆡㆎ'],
	['へ', 'ヘ'],
	['〼', '⍁⧄'],
	['ꁊ', '꒞'],
	['ꁐ', '꒬'],
	['ꃀ', '꒜'],
	['ꄲ', '꒨'],
	['ꉙ', '꒿'],
	['ꊱ', '꒾'],
	['ꋍ', '꒔'],
	['ꎫ', '꓀'],
	['ꎵ', '꓂'],
	['ꎿ', '꒺'],
	['ꏂ', '꒰'],
	['ꑘ', '꒧'],
	['ꓕ', '⊥⟂𝈜Ʇ'],
	['ꓤ', 'Ꞟ'],
	['ꓨ', '⅁'],
	['ꓶ', '⅂𝈕𝈫𖼦𐐑'],
	['𖼀', '⅃'],
	['𑫥𑫯', '𑫦'],
	['𑫥𑫥', '𑫨'],
	['𑫥𑫥𑫯', '𑫩'],
	['𑫥𑫥𑫰', '𑫪'],
	['𑫥𑫰', '𑫧'],
	['𑫳𑫯', '𑫴'],
	['𑫳𑫳', '𑫶'],
	['𑫳𑫳𑫯', '𑫷'],
	['𑫳𑫳𑫰', '𑫸'],
	['𑫳𑫰', '𑫵'],
	['𑫫𑫯', '𑫬'],
	['𑫫𑫫', '𑫭'],
	['𑫫𑫫𑫯', '𑫮'],
	['𐊨', '⊕⨁🜨Ꚛ'],
	['𐊼', '▽𝈔🜄'],
	['𐐺', 'ꞛ'],
	['𐐒', 'Ꞛ'],
	['𐒆', '𐒠'],
	['𐎂', '𐏑'],
	['𐎓', '𐏓'],
	['𐎚', '𒀸'],
	['𐦞', '𓋹'],
	['卄', '〹'],
	['不', '不'],
	['丽', '丽'],
	['並', '並'],
	['丨', '⎜⎟⎢⎥⎪⎮㇑ᅵㅣ⼁'],
	['丨ー', 'ᆜ'],
	['丨ᅡ', 'ᆘ'],
	['丨ᅣ', 'ᆙ'],
	['丨ᅣᅩ', 'ힽ'],
	['丨ᅣ丨', 'ힾ'],
	['丨ᅧ', 'ힿ'],
	['丨ᅧ丨', 'ퟀ'],
	['丨ᅩ', 'ᆚ'],
	['丨ᅩ丨', 'ퟁ'],
	['丨ᅭ', 'ퟂ'],
	['丨ᅮ', 'ᆛ'],
	['丨ᅲ', 'ퟃ'],
	['丨ᆞ', 'ᆝ'],
	['丨丨', 'ퟄ'],
	['串', '串'],
	['丸', '丸'],
	['丹', '丹'],
	['乁', '乁'],
	['乙', '㇠⼄'],
	['乚', '㇟⺃'],
	['乛', '㇖⺂'],
	['亀', '⻲'],
	['亂', '亂'],
	['亅', '㇚⼅'],
	['了', '了'],
	['二', 'ニ⼆'],
	['𠄢', '𠄢'],
	['亠', '⼇'],
	['亮', '亮'],
	['人', '⼈'],
	['亻', 'イ⺅'],
	['什', '什'],
	['仌', '仌'],
	['令', '令'],
	['你', '你'],
	['併', '倂倂'],
	['侀', '侀'],
	['來', '來'],
	['例', '例'],
	['侮', '侮侮'],
	['侻', '侻'],
	['便', '便'],
	['値', '值'],
	['倫', '倫'],
]);

let a = '';
for (let [char, chars] of characters.entries()) {
    let nah = [];
    const other = otherCharacters.get(char);
    if (!other) continue;
    for (const char of other) {
        if (!chars.includes(char)) {
            nah.push(char);
        }
    }
    a += `${char} ${nah.join('')}`
    a += '\n'
}
writeFileSync('./_______a_________', a)

console.log("No issues.")