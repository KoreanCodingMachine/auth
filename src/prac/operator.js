let x = 5, result;

// 선대입 후증가 (Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후대입 (Prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선대입 후감소 (Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5

// + 단항 연산자는 숫자타입이 아닌 피연산자를 숫자 타입으로 변환한다.

console.log(typeof +'10') // number
console.log(+true) // 1
console.log(+false) // 0

// - 단항 연산자는 마찬가지로 숫자타입이 아닌 피연산자를 숫자타입으로 변환한다.
// 이때 부호를 반전한 값으로 생성해서 반환한다.

console.log(-'10') // -10
console.log(-true) // -1
console.log(-false) // -0

// 일치비교연산 (===)에서 주의할것은 NaN이다.
console.log(NaN === NaN) // false

// NaN인지 아닌지 판별하기 위해서는 isNaN()을 이용해야 한다.
console.log(isNaN(NaN)) // true

// 0 과 -0은 같다.
console.log(0 === -0) // true

// null 은 typeof 연산의 결과가 object이다.
console.log(typeof null) // object

// null의 타입을 비교할때는 ===으로 비교한다.
let foo = null;
console.log(typeof foo === null); // false
console.log(foo === null);        // true

// 쉼표 연산자
// 쉼표(,) 연산자는 왼쪽 피연산자부터 차례대로 피연산자를 평가하고
// 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환한다.

let a,b,c
let abc = (a = 1, b=2,c=3)

console.log(abc)