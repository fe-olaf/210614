// +, -, /, *

/**
 * string 연산의 경우 + 보다는 `` (backtick) 을 이용하자
 * 
 * `${}` => ${} 내부는 자바스크립트 영역이된다.
 */
const name = '올' + '라프'
console.log(name + '.log')

const firstName = '올'
const lastName = '라프'
const name = `${firstName}${lastName}`

/* falsy 한 값들
 * 조건문에서 false 로 판단되는 값들 (0, undefined, null, '') 
 * 그 외 값들은 true 로 판별된다
 */
const result = 0

// result === 0 과 같이 비교할 필요가 없다.
if(!result) {
    console.log('실패')
}

// ==, ===
// == 값의 비교 (사용 X !!)
// === 값  + 타입 비교
console.log(5 == '5') // true
console.log(5 === '5') // false