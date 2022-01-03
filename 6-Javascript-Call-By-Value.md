

## 참고자료



<br>

## Javascript 의 call by value

함수의 파라미터로 변수를 넘겨질때 자바스크립트는 기본적으로 call by value 방식을 사용한다. 오늘은 여기에 대해 알아보려 한다.<br>

Javascript 에서 함수에 넘기는 파라미터를 넘길때 사용하는 방식은 기본형, 참조형 타입 모두 call by value 방식을 사용한다. call by value 를 사용할 때 참조형의 경우 `주소값` 이 복사된다. 따라서 함수의 바깥에서 어떤 객체의 값이 변경되고, 해당 객체의 주소를 함수 내에서 잡고 있는다면, 변경된 값이 함수 내부에서도 사용된다.<br>

아래는 예제다!!!

### 단순 변수 전달 (객체, 배열, 변수)

예제

```javascript
// 1)
const init_ramen_price = (ramen) => {
    ramen = null
}

let ramen = {"신라면": 1300}
init_ramen_price(ramen) // null로 초기화하는 시도를 했다. 하지만 결과는 아래와 같다.
console.log(ramen) 			// { '신라면': 1300 }


// 2)
const init_fruits = (fruits) => {
    fruits = null
}

let fruits = []
init_fruits(fruits) // 배열 타입 역시 null 로 초기화하려는 시도를 했다. 하지만 결과는 아래와 같다.
console.log(fruits)	// []


// 3)
const swap = (left,right) =>{
    let temp = left
    left = right
    right = temp
}

let a = 1
let b = 2
swap(a, b)
console.log('a = ' + a + ", b = " + b)		// a = 1, b = 2 (값이 안바뀌었다)
```

<br>

출력결과

```plain
{ '신라면': 1300 }
[]
a = 1, b = 2
```

<br>

함수 내에 매개변수르 전달할 때 복사본이 전달된다. 하지만, 함수 안으로는 복사본이 전달되기에 함수 내부에서 새로 초기화를 해도 함수 바깥의 해당 변수의 값을 바꾸지 않는다. 즉, 함수 내부에 복사된 값만 변경하고 끝난다.<br>

<br>

### 객체 내의 필드 전달

객체 자체를 함수의 파라미터로 전달할 때는 값이 복사되어 전달되었다. 하지만, 객체 내의 필드, 즉 객체의 속성을 전달 할때는 이야기가 달라진다. 예제를 먼저 돌려보자.

예제

```javascript
const ramen = {'price': 1900}
const make_price_double = (obj)=>obj.price = obj.price * 2
make_price_double(ramen)

console.log(ramen)
```

<br>

출력결과

```plain
{ price: 3800 }
```

<br>

이거에 대한 설명은 내일... 글이 길어져서,.









