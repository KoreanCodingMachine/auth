/*

   1.Promise 란?

    Promise는 비동기 작업 및 그 결과 값의 최종 완료 (또는 실패)를 나타내는 js 객체이다.

    Promise에는 2가지 상태가 있다.

    1.pending : initial state (대기 상태)

    2.settled : fulfilled or rejected (이행 혹은 실패)

    promise가 한번 settled 상태가 되면 , 그 상태는 변할 수 없다.
    then(),catch() 메서드를 이용해서 promise의 결과를 핸들링 할 수 있다.

    2.Promise를 사용하는 경우

    2-1.fetch() 를 사용하여 API에서 데이터를 검색하고 그 결과를 promise로 반환한다.
    (데이터 수신시 then() , catch()로 분기 처리)

    2-2.Promise.all()을 사용해 여러 비동기 작업을 병렬로 처리할 때
    (여러 API에서 데이터를 가져와 화면에 표시하려는 경우 모든 데이터가 수신될 때까지 기다림)


    3.Promise 의 동작 방식

    동기란? 코드가 순차적으로 실행하는 방식을 의미한다.
    직렬적으로 태스크(task)를 수행한다. 즉, 태스크는 순차적으로 실행되며
    어떤 작업이 수행 중이면 다음 작업은 대기하게 된다.

    비동기란? 병렬적으로 태스크(task)를 수행한다. 즉 태스크가 종료되지 않은 상태라도
    대기하지 않고 다음 태스크를 실행한다.
    예를 들어 서버에서 데이터를 fetching할 때 서버로부터 데이터가 응답될 때까지 대기하지 않고
    즉시 다음 작업을 실행한다. , 이후 서버로 부터 데이터가 응답되면 이벤트가 발생하고
    이벤트 핸들러가 데이터를 가지고 수행할 태스크를 계속해 수행한다.

*/

// 비동기 예시 , setTimeout()은 대표적인 비동기 동작 방식이다.
function func1() {
    console.log('func1');
    func2();
}

function func2() {
    setTimeout(function() {
        console.log('func2');
    }, 0);

    func3();
}

function func3() {
    console.log('func3');
}

func1();

/*
    실행 순서
    func1()을 호출하면 콜 스택에 func1()이 쌓인다.
    이후 func1 함수는 func2()를 호출함으로 콜 스택에 func2()가 쌓인다.
    func2()는 비동기 함수(setTimeOut) 과 func3()를 호출하는데
    비동기 함수가 종료될 때 까지 기다리지 않고 func3()를 콜스택에 쌓는다.
    비동기 함수는 webApI로 옮겨지고 setTimeOut의 호출 시간이 종료되면
    콜백이 이벤트 큐에 등록된다.
    그 다음 스택에 쌓인 순서대로 호출되어지고 콜 스택이 비어지게 되면 이벤트 큐에
    등록되어 있던 콜백이 실행된다.


    즉 위 코드는
    func1() 호출 // 콜 스택 func1()
    func1() 은 func2()를 호출함으로 // 콜 스택 func1() , func2()
    func2() 는 setTimeout() 과 func3()를 호출하는데 이 때 비동기 함수는
    Web API로 이동하고 콜 스택에는 func3()만 쌓인다. // 콜 스택 func1() , func2() , func3()
    Web API에 있는 비동기 함수의 타이머가 종료되면 해당 콜백은 이벤트 큐에 등록되어지고
    콜 스택이 비어있을때 실행된다.

    그래서 콜 스택에 저장되어있는 func3() -> func2() -> func1()이 실행되어지고
    마지막에 남아있는 콜백을 실행하게 된다.

    이 때 콜 스택에서 빠지게 됬을 때 그 함수를 호출한 지점으로 돌아가서 해당 블록이
    종료 되어야 콜 스택에서 빠지게 된다는것을 주의해야한다.

    그래서 콘솔에 func3 , func1 , func2 이렇게 실행되는 것이다.

    만약 func1 의 코드 내부를 순서를 바꾼다면?

    func1 func3 func2 순서로 콘솔에 찍힘



 */