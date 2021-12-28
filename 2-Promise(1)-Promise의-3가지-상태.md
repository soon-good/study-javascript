# Promise의 3가지 상태

오늘부터 다시 빡공모드다.... 는 아니고 다음주부터 빡공모드 ㄱㄱ싱이다. <br>

이번주 데이터 API 연동 개발 중인게 있어서 이번주에 그걸 끝낸 후에 안정화 기간동안 잠시 2주동안 빡공 가능할 듯하다!!! 힘내자..<br>

<br>

## 참고자료

- [실시간 모니터링 시스템을 만들며 정복하는 MEVN](https://ridibooks.com/books/3780000133)
- [MDN - Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - 자세한 내용은 MDN이 가장 자세하다.

<br>

## Promise 사용 예

자취하느라 요즘 라면을 정말 어마무시하게 많이 먹는다. 그래서 예제도 라면 끓이기 예제다. 당분간 월급이 줄어들기에 일단은 자취방 생활 접고 본가로 들어가게 될 예정인데, 이때부터는 집밥과 두부만 먹는 건강한 생활을 해야겠다..<br>

```javascript
const ramen_making = (c = "물을 끓인다") => {
    return new Promise((resolve, reject) => {
        const errorMessage = "가스렌지 이상. 전방에 까스 까스 까스"
        // 비동기 함수 사용 로직
        throw new Error(errorMessage)
        reject(new Error(errorMessage))
        setTimeout(()=>{
            resolve([완료] `${c}`)
        }, 1000)
    })
}
ramen_making().then(ret => {
    return ramen_making('스프넣기 ')
}).then(ret =>{
    console.log(ret)
}).catch(e =>{
    console.log(`[에러발생] ${e}`)
})
```

<br>

출력결과

```
[에러발생] Error: 가스렌지 이상. 전방에 까스 까스 까스
```

<br>

위의 예제 실행한 것을 보면 스프를 넣기 전에 에러가 나서 물 끓이는 것을 멈췄다.<br>

Promise 는 이렇게 비동기함수의 실행을 변수에 저장해두고, 체이닝으로 연결해 순서대로 실행할 수 있다는 장점이 있다.<br>

<br>

## Promise의 3가지 상태

- pending

- - 함수처리가 완료되지 않은 상태
  - Promise 를 정의했을때 생긴다.
  - 물을 끓인다가 완료도기 전까지의 상태가 pending

- fulfilled

- - 함수 처리가 완료되어 'promise' 결과값을 리턴하는 상태
  - resolve 메서드에 의해 발생되는 상태
  - 위의 코드에서는 resolve() 메서드가 실행 되었을 때의 상태가 fulfilled

- rejected

- - 함수의 처리가 실패했을때의 상태
  - regject 메서드 또는 에러를 통해 발동된다.
  - "가스렌지 이상. 전방에 까스 까스 까스" 가 발생한 상태
  - 위의 예제에서는 catch 로 에러를 처리하고 있다.

Promise 로 에러를 처리하는 방법은 then, catch 이렇게 두가지 방식이 있다. Then, catch 는 이어지는 다른 문서에서 정리할 예정이다.<br>

<br>

