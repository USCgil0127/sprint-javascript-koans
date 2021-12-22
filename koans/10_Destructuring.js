//  구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식 
describe('구조 분해 할당(Destructing Assignment)에 관해서', () => {
  it('배열을 분해합니다', () => {
    const array = ['code', 'states', 'im', 'course']

    // 구조 분해 할당은 항상 맨 마지막에 해야한다.
    const [first, second] = array
    expect(first).to.eql( 'code' )
    expect(second).to.eql( 'states' )

    const result = []
    function foo([first, second]) {
      result.push(second)
      result.push(first)
    }

    foo(array)
    expect(result).to.eql(['states', 'code'])
  })

  it('rest/spread 문법을 배열 분해에 적용할 수 있습니다', () => {
    const array = ['code', 'states', 'im', 'course']
    const [start, ...rest] = array
    expect(start).to.eql( 'code' )
    expect(rest).to.eql([ 'states', 'im', 'course' ])

    // 다음과 같은 문법은 사용할 수 없습니다. 할당하기 전 왼쪽에는, rest 문법 이후에 쉼표가 올 수 없습니다.
    // const [first, ...middle, last] = array
    // 구조 분해 할당은 항상 맨 마지막에 해야한다.
  })

  // 솔직히, 이건 작동하게 하면 안 되는 거 아닌가??
  it('객체의 단축(shorthand) 문법을 익힙니다', () => {
    const name = '김코딩'
    const age = 28

    const person = {
      name,
      age,
      level: 'Junior',
    }
    expect(person).to.eql( { name: '김코딩', age: 28, level: 'Junior' } )
  })

  // *******이 부분을 항상 햇갈렸으니 숙지하자!
  it('객체를 분해합니다', () => {
    const student = { name: '박해커', major: '물리학과', other: 12 }

    // 해당 키값을 { 키값 } 으로 감싸면, 그 value 값을 받아 올 수 있다.
    const { name } = student
    expect( name ).to.eql('박해커')
  })


  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #1', () => {
    const student = { name: '최초보', major: '물리학과', other: 12 }
    const { name, ...args } = student

    expect(name).to.eql( '최초보' )
    // name을 제외한 나머지 부분의 객체만을 새로운 객체로 만든다.
    expect(args).to.eql( { major: '물리학과', other: 12 } )
  })

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #2', () => {
    const student = { name: '최초보', major: '물리학과', lesson: '양자역학', grade: 'B+' }

    // lesson: course로 순서에 상관없이 lesson의 value값을 받아올 수 있다는 게 신기했다.
    // 여기서 lesson을 선언 되지 않았다.
    function getSummary({ name, lesson: course, grade }) {
      return `${name}님은 ${grade}의 성적으로 ${course}을 수강했습니다`
    }

    expect(getSummary(student)).to.eql( '최초보님은 B+의 성적으로 양자역학을 수강했습니다' )
  })

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #3', () => {
    const user = {
      name: '김코딩',
      company: {
        name: 'Code States',
        department: 'Development',
        role: {
          name: 'Software Engineer'
        }
      },
      age: 35
    }

    const changedUser = {
      ...user,
      name: '박해커',
      age: 20
    }

    const overwriteChanges = {
      name: '박해커',
      age: 20,
      ...user
    }

    // 이거 헷갈리니까 다시 한 번 보자
    const changedDepartment = {
      ...user,
      company: {
         ...user.company,
        department: 'Marketing'
      }
    }
    /////////////

    expect(changedUser).to.eql( {
      name: '박해커',
      company: {
        name: 'Code States',
        department: 'Development',
        role: {
          name: 'Software Engineer'
        }
      },
      age: 20
    } )

    expect(overwriteChanges).to.eql( {
      name: '김코딩',
      company: {
        name: 'Code States',
        department: 'Development',
        role: {
          name: 'Software Engineer'
        }
      },
      age: 35
    } )

    // 이거 헷갈리니까 꼭 다시 보자
    expect(changedDepartment).to.eql( {
      name: '김코딩',
      company: {
        name: 'Code States',
        department: 'Marketing',
        role: {
          name: 'Software Engineer'
        }
      },
      age: 35
    } )
  })


})

// https://www.youtube.com/watch?v=lV7ulA7R5Nk&t
// https://www.youtube.com/watch?v=lekNM8ldxno