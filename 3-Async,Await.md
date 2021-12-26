# Async, Await

promise 는 async와 await 을 이용해 더 깔끔하게 정리할 수 있다.<br>

<br>

## await 과 async란? 

**`await`**<br>

= "이 promise 를 반환하는 값을 기다려"<br>

= Promise 를 반환하는 함수가 완료되었을때, 그 다음 줄의 로직이 실행된다.<br>

= await 는 async 안에서만 써야 한다.<br>

= then 을 쓰는 것에서 벗어나 async 변수명 과 같은 형식으로 로직을 구현 가능하다.<br>

= 변수선언식과 같은 모양을 동기적으로 선언/정의할 수있게 된다.<br>

= try/catch 로 에러를 잡을 수 있게 되어 디버깅하기 쉬워진다는 장점이 있다.<br>

<br>

**`async`**<br>

= Promise 의 resolved 된 값을 반환한다.<br>

<br>

**`async/await 을 사용하는 목적`**<br>

= 여러개의 Promise 들을 가독성이 좋도록 조합할 수 있고, Promise의 결괏값으로 생성된 변수들을 간단하게 표현하려 하는 것이 목적이다.<br>

<br>

## 예제

```javascript
const kor_message = () => {
    return new Promise((resolve, reject) => {
        const delay = 1000
        setTimeout(()=>{
            console.log('안녕하세요')
            resolve(delay)
        }, delay)
    })
}
const eng_message = () => {
    return new Promise((resolve, reject) => {
        const delay = 1000
        setTimeout(()=>{
            console.log('Hello')
            resolve(delay)
        },delay)
    })
}
const china_message = () => {
    return new Promise((resolve, reject) => {
        const delay = 1000
        setTimeout(()=>{
            console.log('니하오')
            resolve(delay)
        })
    })
}
const heavyJob = () => {
    setTimeout(()=>{
        console.log('HeavyJob')
    }, 5000)
}
const runGreetingSync = () => {
    kor_message()
    eng_message()
    china_message()
}
const runGreetingsAsync = async () => {
    await kor_message()
    await eng_message()
    await china_message()
}
console.log('=====================')
// heavyJob()
// runGreetingSync()
heavyJob()
runGreetingsAsync()
console.log('=====================')
```

<br>

## 출력결과

```
=====================
=====================
안녕하세요
Hello
니하오
HeavyJob
```

<br>

