# then, catch 로 에러 핸들링

오늘도 밤샘 모니터링 중이다. 당분간 뭔가 결과가 나올때까진 이번 주는 달릴것 같다... 얼렁 끝내야지.<br>

자꾸 effective java 를 정리할 때마다 내가 일으킨거든, 다른 사람이 장애를 일으킨거든 어떻게든 장애가 한번씩은 났었다. 징크스다. 회사 단톡방 메시지 확인할 때도 장애가 난다. 그래서 요즘 단톡방도 2주에 한번씩 읽고 있다ㅋㅋ 이번주 개발 중인 데이터 API 연동작업 때문에 effective java 정리도 이번주에는 가급적 안하고 에버노트에 정리해두거나 그럴 예정이다. <br>

얼른 마무리짓고 정리 다시 시작해야지.<br>

<br>

## 참고자료

- [실시간 모니터링 시스템을 만들며 정복하는 MEVN](https://ridibooks.com/books/3780000133)
- [MDN - Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - then](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

<br>

## case 1) promise 안에서 에러 throw

Promise 로 에러를 처리하는 방법은 then, catch 이렇게 두가지 방식이 있다. 두가지 방식은 각각 따로 문서에 정리하고 있다. 이번 문서에서는 그 중 then 으로 에러를 처리하는 방식에 대해 정리<br>

```javascript
const boil_water = () => {
    return new Promise((resolve, reject) => {
        console.log('물 끓이기')
        resolve(1001)
    })
}

const soup_append = param => {
    return new Promise((resolve, reject) => {
        throw "어이쿠, 물에 이상한 기름이 섞여있네"
        resolve(param + 1)
    })
}

boil_water()
    .then(soup_append)
    .then(result => {
        console.log(result)
    }, reason => {
        console.log(`실패 :: 원인 = ${reason}`)
    })
```

<br>

출력결과

```
물 끓이기
실패 :: 원인 = 어이쿠, 물에 이상한 기름이 섞여있네
```

<br>

출력결과에서 원리를 파악해보자. 일단 일반적으로 인터넷으로 문서를 찾아보면  `then` function 의 구조는 보통 아래와 같은 모습이다.<br>

> then ( resolve, reject )<br>
>
> = 더 자세한 원형은 아래와 같다<br>
>
> = p.then(onFulfilled [, onRejected])<br>

<br>

then 함수 내에는 resolve 함수, reject 함수를 인자로 받을 수 있는데, resolve 는 정상적으로 수행될때 수행되는 함수이고, reject는 에러가 발생되었을때 promise가 실행하는 함수다.

`case 1)` 에서는 reject 에 해당하는 인자로 전달한 함수에 대한 처리를 추가했다.

<br>

## case 2) then 내에서 에러 throw

UnhandledPromiseRejection 가 나타나는 예제다.<br>

then 에서 에러를 발생시키면, 이때의 에러는 onFulfilled 상태에서 발생한 에러다. rejected 상태에서의 에러로 분류되지 않는다. rejected 상태에서의 에러로 분류되지 않고 onFufiiled 상테에서의 에러로 분류되기에 `UnhandledPromiseRejectionWarning` 을 낸다. <br>

(onFulfiiled 상태에서의 에러는 rejected 되었을 때의 핸들러가 처리하지 못한다.)<br>

```javascript
const boil_water = () => {
    return new Promise((resolve, reject) => {
        console.log('물 끓이기')
        resolve(1001)
    })
}

const soup_append = param => {
    return new Promise((resolve, reject) => {
        resolve(param + 1)
    })
}

boil_water()
    .then(soup_append)
    .then(result => {
        throw "어이쿠, 물에 이상한 기름이 섞여있네"
        console.log(result)
    }, reason => {
        console.log(`실패 :: 원인 = ${reason}`)
    })
```

<br>

출력결과

```plain
물 끓이기
node:internal/process/promises:246
          triggerUncaughtException(err, true /* fromPromise */);
          ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "어이쿠, 물에 이상한 기름이 섞여있네".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
```

<br>

## case 3) catch 를 사용한 에러 핸들링 (onFulfiled 상태에서의 에러 핸들링)

onFulfilled 상태에서 에러를 핸들링하려면 catch 구문 내에 해당 에러를 처리하게끔 해주면 된다. 즉, then 구문 내에서 특정 로직을 실행하다가 발생한 에러는 catch 구문에서 핸들링하도록 추가해주면 된다.<br>

```javascript
const boil_water = () => {
    return new Promise((resolve, reject) => {
        console.log('물 끓이기')
        resolve(1001)
    })
}

const soup_append = param => {
    return new Promise((resolve, reject) => {
        resolve(param + 1)
    })
}

boil_water()
    .then(soup_append)
    .then(result => {
        throw "어이쿠, 물에 이상한 기름이 섞여있네"
        console.log(result)
    })
    .catch(reason => {
        console.log(`실패 :: 원인 = ${reason}`)
    })
    .finally(data => {
        console.log('finally block ===')
    })
```

출력결과

```plain
물 끓이기
실패 :: 원인 = 어이쿠, 물에 이상한 기름이 섞여있네
finally block ===
```



