describe('Spread syntax에 대해 학습합니다.', function () {
  it('전개 문법(spread syntax)을 학습합니다.', function () {
    const spread = [1, 2, 3];
    // TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread를 지우지 않고 해결할 수 있습니다.
    const arr = [0, ...spread, 4];
    expect(arr).to.deep.equal([0, 1, 2, 3, 4]);
  });

  it('빈 배열에 전개 문법을 사용할 경우, 아무것도 전달되지 않습니다.', function () {
    const spread = [];
    // TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread를 지우지 않고 해결할 수 있습니다.
    const arr = [0, spread, 1];
    expect([0, 1]).to.deep.equal([0, 1]);
  });

  it('여러 개의 배열을 이어붙일 수 있습니다.', function () {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const concatenated = [ arr1, arr2];
    expect(concatenated).to.deep.equal([ [0, 1, 2], [3, 4, 5] ]);
    // 아래 코드도 같은 동작을 수행합니다.
    //  arr1.concat(arr2);
  });

  it('여러 개의 객체를 병합할 수 있습니다.', function () {
    const fullPre = {
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
    };

    const me = {
      time: '0156',
      status: 'sleepy',
      todos: ['coplit', 'koans'],
    };

    const merged = { ...fullPre, ...me };
    // 변수 'merged'에 할당된 것은 'obj1'과 'obj2'의 value일까요, reference일까요?
    // 만약 값(value, 데이터)이 복사된 것이라면, shallow copy일까요, deep copy일까요?

    expect(merged).to.deep.equal({
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
      time: '0156',
      status: 'sleepy',
      todos: ['coplit', 'koans'],
    });
  });

  it('Rest Parameter는 함수의 인자를 배열로 다룰 수 있게 합니다.', function () {
    // 자바스크립트는 (named parameter를 지원하지 않기 때문에) 함수 호출 시 인자의 순서가 중요합니다.
    function returnFirstArg(firstArg) {
      return firstArg;
    }
    // 첫번째 인자만 받기 때문에 나머지 인자는 전부 무시함
    expect(returnFirstArg('first', 'second', 'third')).to.equal( 'first' );

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }
    expect(returnSecondArg('only give first arg')).to.equal(undefined);
    // rest parameter는 여러개의 인수를 전달 받아 배열로 변환한다.
    // 단, rest parameter는 다른 매개 변수와 함께 사용할 경우 반드시 마지막에 사용해야 한다.
    // https://curryyou.tistory.com/236
    // rest parameter는 spread syntax를 통해 간단하게 구현됩니다.
    function getAllParamsByRestParameter(...args) {
      return args;
    }

    // arguments를 통해 '비슷하게' 함수의 인자들을 다룰 수 있습니다. (spread syntax 도입 이전)
    // arguments는 모든 함수의 실행 시 자동으로 생성되는 '객체'입니다.
    function getAllParamsByArgumentsObj() {
      return arguments;
    }

    const restParams = getAllParamsByRestParameter('first', 'second', 'third');
    const argumentsObj = getAllParamsByArgumentsObj('first', 'second', 'third');

    expect(restParams).to.deep.equal(['first','second','third']);

    // argumentsObj 라는 객체의 키들을 배열로 출력해준다.
    // 배열도 객체이기 때문에, 배열로 얼마든지 활용가능
    // 문자열도 인덱스가 있기 때문에, 인덱스가 담긴 배열이 return된다.
    // 좌우지간, 이것은 객체의 키값을 배열로 뽑아 낼때, 사용함
    // ['first','second','third']의 인덱스 값이 key처럼 뽑힌 거임
    expect(Object.keys(argumentsObj)).to.deep.equal(['0','1','2']);
    // 이것은 객체의 value값을 배열로 뽑아낼 때 사용함
    expect(Object.values(argumentsObj)).to.deep.equal( ['first','second','third'] );

    // argumetns와 rest parmeter를 통해 배열로 된 인자(args)의 차이를 확인하시기 바랍니다.
    expect(restParams === argumentsObj).to.deep.equal( false );
    expect(typeof restParams).to.deep.equal( 'object' );
    expect(typeof argumentsObj).to.deep.equal( 'object' );
    expect(Array.isArray(restParams)).to.deep.equal( true );
    expect(Array.isArray(argumentsObj)).to.deep.equal( false );

    const argsArr = Array.from(argumentsObj);
    expect(Array.isArray(argsArr)).to.deep.equal( true );
    expect(argsArr).to.deep.equal( ['first','second','third'] );
    // 둘은 같은 배열처럼 보이지만, 주소값이 다르다.
    expect(argsArr === restParams).to.deep.equal( false );
  });

  it('Rest Parameter는 인자의 수가 정해져 있지 않은 경우에도 유용하게 사용할 수 있습니다.', function () {
    function sum(...nums) {
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
      }
      return sum;
    }
    // 이렇게 Rest Parameter는 무엇을 넣은 배열로 만들어 버린다.
    expect(sum(1, 2, 3)).to.equal( 6 );
    expect(sum(1, 2, 3, 4)).to.equal( 10 );
  });

  it('Rest Parameter는 인자의 일부에만 적용할 수도 있습니다.', function () {
    // rest parameter는 항상 배열입니다.
    // 단, rest parameter는 다른 매개 변수와 함께 사용할 경우 반드시 마지막에 사용해야 한다.
    function getAllParams(required1, required2, ...args) {
      return [required1, required2, args];
    }
    // 굉장히 흥미로운 결과네
    // required2는 들어가지 않은 매개변수라서 undefined로 뜨고
    // ...args는 들어가지지는 않았지만 배열도 변환되기 때문에 빈 배열로 뜬다.
    expect(getAllParams(123)).to.deep.equal( [123, undefined, [] ] );

    function makePizza(dough, name, ...toppings) {
      const order = `You ordered ${name} pizza with ${dough} dough and ${toppings.length} extra toppings!`;
      return order;
    }
    // 문자화 시키면 undefined도 문자화가 된다.
    expect(makePizza('original')).to.equal('You ordered undefined pizza with original dough and 0 extra toppings!');
    expect(makePizza('thin', 'pepperoni')).to.equal( 'You ordered pepperoni pizza with thin dough and 0 extra toppings!' );
    expect(makePizza('napoli', 'meat', 'extra cheese', 'onion', 'bacon')).to.equal( 'You ordered meat pizza with napoli dough and 3 extra toppings!' );
  });
});
