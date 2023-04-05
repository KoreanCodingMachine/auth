/*

표현식 -> 값으로 평가될 수 있는 문 ,
표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조 (값으로 치환)

리터럴 표현식
10
'hello'

식별자 표현식 (선언이 이미 존재한다고 가정)
sum
person.name
arr[1]

연산자 표현식
10 + 20
sum = 10  (true)
sum !== 10 (false)

함수/메서드 호출 표현식 (선언이 이미 존재한다고 가정)
square()
person.getName()

*/

/*
   문 -> 프로그램을 구성하는 기본 단위이자 최소 실행 단위
   토큰 -> 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소

   변수 선언문
   var x

   할당문
   x = 5

   함수 선언문
   function foo(){}

   조건문
   if(x>1) {console.log(x)}

   반복문
   for(let i=1;i<=10;i++) {console.log(i)}

*/

// 표현식인 문 vs 표현식이 아닌 문

// 표현식인 문은 값으로 평가되므로 변수에 할당할 수 있지만
// 표현식이 아닌 문은 값으로 평가 할 수 없으므로 변수에 할당하면 에러가 난다

// let foo = let x -> 표현식이 아닌 문임으로 변수에 할당 x

let x // 변수 선언문은 표현식이 아닌 문이다.

x = 100 // 할당문은 그 자체가 표현식이지만 , 완전한 문이기도 하다. 즉 할당문은 표현식인 문이다.

let foo = x // 표현식인 문은 값처럼 사용할 수 있다.

/*

완료값

크롬 개발자 도구에서 표현식이 아닌 문을 실행하면 언제나 undefined를 출력한다.
이를 완료값이라 한다. 완료 값은 표현식의 평가 결과가 아니다.
따라서 다른 값과 같이 변수에 할당할 수 없고 참조할 수도 없다.

크롬 개발자 도구에서 표현식인 문을 실행하면 언제나 평가된 값을 반환한다.
*/

const str = 'hello'
str[0] = 'H'
console.log(str) // 'hello'  , immutable 한번 생성된 문자열은 read only 속성으로 변경할 수 없다.

let key = Symbol('key');
console.log(typeof key); // symbol
console.log(key)

let obj = {};
obj[key] = 'value';
console.log(obj[key]); // value