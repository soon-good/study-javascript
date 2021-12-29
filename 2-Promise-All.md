오늘은 조금 늦었다. 새벽 두시 반에 일어나서 ㅈ됐다(=잘됐다.ㅋㅋ). 하면서 일어나면서 어떻게든 일을 시작했다. <br>

웹 소켓 트래픽 처리 로직을 작성하느라 고생하던 로직이 웹소켓 생성자 측에서는 어느정도 완성된것 같다. 실시간 데이터는 야후파이낸스보다 빠르다.... 사용자가 많아지면 더 늦추겠지. 자료구조도 더 단순화하고.<br>

오늘은 데이터를 바이패스 해주는 데이터 단에서의 처리를 시작하게 될듯하다. 잘돼라 쫌!!! ㅋㅋ<br>

<br>

## Promise.all ?

Promise p1, Promise p2, Promise p3 가 있다고 하자. Promise.all 로 p1,p2,p3 을 실행시키면 이 p1, p2, p3 를 모두 동시에 한번에 순서와 상관없이 모두 풀어놓고, p1,p2,p3 모두가 완료될때 완료처리를 한다. <br>

<br>

## 예제

```javascript
const making_ramen = (product, ret) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`[라면뿌시기] :: ${product}`)
            console.log(new Date())
            resolve(ret)
        }, 1000)
    })
}

const promises = [
    making_ramen('신라면', 1),
    making_ramen('짜파게티', 2),
    making_ramen('새우탕면', 3),
    making_ramen('꼬꼬면', 4),
    making_ramen('그만처먹어', 5),
]

Promise.all(promises)
    .then(data => {
        console.log(data)
    })
```

<br>

출력결과

```plain
[라면뿌시기] :: 신라면
2021-12-23T00:44:40.124Z
[라면뿌시기] :: 짜파게티
2021-12-23T00:44:40.125Z
[라면뿌시기] :: 새우탕면
2021-12-23T00:44:40.125Z
[라면뿌시기] :: 꼬꼬면
2021-12-23T00:44:40.125Z
[라면뿌시기] :: 그만처먹어
2021-12-23T00:44:40.126Z
[ 1, 2, 3, 4, 5 ]
```



