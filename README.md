# study-javascript

Java 개발자라 node.js 보다는 thymeleaf, javascript, jquery를 사용할일이 매우 많다. node.js를 거의 실제로 사용할 기회가 없었지만, 이번 기회에 어떻게 기회가 생겼다. 연동한다고 해봐야 그리 거창한 것을 하는 것이 아니고 초기에는 실시간 데이터를 받는 대로 그대로 출력하는 단순한 앱으로 시작할 거고, 조금씩 java 개발, MongoDB 인스턴스 유지보수 작업을 병행하면서 데이터 뷰어 기능을 추가해 나갈 예정이다.<br>

이왕 Node.js 기반 데이터 뷰어 개발을 하게 됐으니, Nodejs 기본 개념도 일단 정리해두자. 싶어서 정리를 시작했다. 다음주 or 다다음주 부터는 정리를 못할수도 있겠다. 한달 뒤에 돌아와서 몇가지 개념을 더 추가하겠지. <br>

데이터 뷰어라고 해서 거창한건 아니다. 그리드 몇개 띄우고 필드명/타입/값을 띄우고, RabbitMQ 연동하고 MongoDB에 데이터를 쌓는 역할이다. Vue.js 이런거도 일단은 안쓸거다. 시간이 없다. 겁나 빨리 만들어서 데이터 확인하고 검증하고 그래야 한다.  스터디할 시간, 예쁘게 만들고 주접떨 시간 따위 아직 없다. 그냥 일단 데이터가 정확하게 보여야 한다. 그리고 하다가 열받으면 프로젝트 접어버릴수도 있다. 그래서 node.js 를 선택했다.<br>

<br>

**굳이 Node.js, MongoDB를 선택한 이유**<br>

없던 필드가 테이블에 컬럼으로 추가되야 하는 경우가 있는데, 이런 경우에 NoSQL이 그나마 적절한 선택이다. 그리고 Node.js 를 선택한건 큰 이유가 없다. SpringBoot 로 개발하기보다는 Node.js 가 아주 쬐끔 더 적절하고, 사내에 RabbitMQ 데이터를 받는 소비자 서버 애플리케이션을 구축해놔야 이번 프로젝트 내의 MQ 기능을 예제로 해서 웹 팀에서도 배껴쓸 수 있겠다 싶었다. 그래서 일단 개발을 시작했다. 개발할 내용이 그리 많지는 않다. 온 디맨드로 계속 기능을 추가해 나가고, Node js 를 쓰면서 찾아본 내용들을 여기에 정리해둬야 겠다 싶다.<br>

<br>

## 참고자료

참고하는 자료가 추가될때마다 추가 예정

- [실시간 모니터링 시스템을 만들며 정복하는 MEVN](http://www.yes24.com/Product/Goods/104208010)

<br>

## 목차

- essential

  - [화살표함수](https://github.com/gosgjung/study-javascript/blob/main/1-%ED%99%94%EC%82%B4%ED%91%9C%ED%95%A8%EC%88%98.md)
- Promise
    - Promise 에러 핸들링 - (1) Promise의 3가지 상태
  - Promise 에러 핸들링 - (2) then, catch
    - Promise.all = 여러가지 Promise 를 한꺼번에 해결
-  [Async, Await](https://github.com/gosgjung/study-javascript/blob/main/3-Async%2CAwait.md)
  - 이터러블, 이터레이터, 제너레이터(ES6)
- 모듈화 - ESM과 CJS
- 예제기반
- VSCode 사용팁
  - 



