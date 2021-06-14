/**
 * <Type>
 * 대분류 
 * 1. 원시 타입 -  string, number, bool, null, undefined +@ symbol
 * 2. 객체 (Object)
 */ 

const 문자열 = 'string'
const 숫자 = 10

/*
 * typeof 를 이용하여 타입을 체크 할 수 있다.
 * ex. typeof 문자열 === 'string'
 */


/**
 * 두 가지의 값을 받아 더해주는 함수
 * -> 숫자를 받아 숫자를 리턴하는 함수를 의도
 * -> but. 사용하면서 의도와 다르게 사용이 가능 
 *    ex. string + string
 */
function foo(a, b) {
    // typeof 를 이용하여 타입을 체크 -> 의도한대로 동작 유도 가능
    if (typeof a !== 'number') {
        // error
        return 
    }

    return a + b
}

/**
 * 위와 같은 문제로 TypeScript 의 사용성 증가
 * 
 * 
 * function foo2(a: number, b: number): number {
 *   return a + b
 * }   
 */


/**
 * null vs undefined
 * 
 * null -> 아무것도 존재하지 않는 상태 
 * undefined -> 선언만 되어있고, 값이 할당되지 않은 상태 
 * ex. var a;
 */