# Sprint-javascript-koans

## Getting Started
Koans를 브라우저에서 실행하는 것으로 과제를 시작할 수 있습니다.
- 파일 브라우저를 이용해 JavaScript Koans 폴더로 들어가 KoansRunnner.html을 더블클릭합니다. VS Code에서 Open In Browser 기능을 이용해도 좋습니다.
- 첫번째 에러는 koans/01_Introduction.js 에서 볼 수 있습니다. 첫번째 테스트를 수정하고 브라우저를 새로고침하세요. 모든 테스트가 통과할 때까지 반복하시면 됩니다. (테스트가 통과되면 녹색으로 변합니다.)

## Bare Minimum Requirements
브라우저에서 KoansRunner.html을 열어보면 확인할 수 있는 통과하지 못한 테스트가 여럿 들어있습니다. 테스트 파일들은 /koans에 있습니다. koans/01_Introduction.js 부터 문제를 풀어주시면 되겠습니다.

1. 이 파일들의 모든 테스트가 통과되도록 하세요.
학습 완료한 주제는 8/8개, 학습 완료한 Koans들은 40/40개이어야 합니다. 전부 초록색이 뜨더라도, 해당 갯수가 다르다면 문법 에러를 의심해보세요!
문법 에러는 개발자 콘솔 창에서 확인할 수 있습니다. 
   - 01_Introduction.js, 02_Types-part1.js, 03_LetConst.js, 04_Scope.js, 05_Types-part2.js, 06_Array.js, 07_Object.js, 08_SpreadSyntax.js
   
## Advanced Challenge

Koans는 고민 없이 풀면, 큰 어려움 없이 전부 다 풀 수 있습니다. 답이 미리 제시되어 있기 때문입니다. Koans는 불교에서 유래된 단어로, 결론을 내리기 전에 이게 왜 맞는지 깊게 고민한다는 의미를 가지고 있다고 합니다. 정답만 쉽게 작성하셨다면, 그게 왜 정답인지 고민해보는 시간이 필요하겠죠? Koans 문제 사이사이에는 따로 설명드리지 않은 개념에 대해서 문제가 나오는 경우가 있습니다. 혹시 아래의 주제에 대해서 궁금하다면 찾아보고 혼자 공부해보셔도 좋습니다 :)

- [Array가 reference type이라는 것을 이해할 수 있다.](https://www.javascripttutorial.net/javascript-data-types/)
- [scope](https://velog.io/@gil0127/JS-%EC%8A%A4%EC%BD%94%ED%94%84-Scope)와 [closure](https://velog.io/@gil0127/JS-%ED%81%B4%EB%A1%9C%EC%A0%80)에 대해서 이해할 수 있다.
- [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)와 rest parameter에 대해서 이해할 수 있다.
- Koans는 Mocha, Chai를 기반으로 테스트를 작성했습니다. 이 두가지 프레임워크에 대해 스스로 공부해보세요.

-------------

# 스프린트를 진행하면서 배운점

```js

const poppedValue = arr.pop();
    // 여기에는 지워진 value가 할당 된다.

```

```js

'mastermind' in megalomaniac
// megalomaniac라는 객체에 mastermind 라는 키 값이 존재하는지 true/false로 알 수 있다.

```

- Rest Parameter는 무엇을 넣은 배열로 만들어 버린다.
```js
// 단, rest parameter는 다른 매개 변수와 함께 사용할 경우 반드시 마지막에 사용해야 한다.
    function getAllParams(required1, required2, ...args) {
      return [required1, required2, args];
    }
```

```js
Object.keys(Obj1);
// Obj1의 키 값들을 배열로 뽑아 낼 수 있다.

Object.values(Obj1);
// Obj1의 value값들을 배열로 뽑아 낼 수 있다.
```

```js

// 솔직히, 이건 작동하게 하면 안 되는 거 아닌가?? 싶지만 일단 되니 알아두자...

  it('객체의 단축(shorthand) 문법을 익힙니다', () => {
    const name = '김코딩'
    const age = 28

    const person = {
      name,
      age,
      level: 'Junior',
    }
    
    const person2 = {
      name,
      age,
      level: 'Junior2',
    }
    
    expect(person).to.eql( { name: '김코딩', age: 28, level: 'Junior' } );
    
  	expect(person2).to.eql( { name: '김코딩', age: 28, level: 'Junior2' } );
```
