* ERD 그려 주는 것: workbench - Database - Reverse Engineer
	* 혹은 DBeaver 사용해 봐도 됨

* Spring Boot Starter Validation 설치
	* https://mvnrepository.com/ > validation 검색 > Spring Boot Starter Validation 선택 > 3.2.0 버전 선택(만약 내가 모르겠는 에러가 발생한다면 이 버전을 낮춰 보면 됨) > 버전 선택 후 현재 우리가 Maven을 사용하기 때문에 Maven 코드의 `<dependency></dependency>` 를 복사해서 pom.xml의 `<dependencies></dependencies>` 사이에 넣어 줌.
		* 만약, pom.xml에 붙여넣은 코드의 version에 에러가 뜬다면 `<version></version>` 코드만 지워 주면 됨
* Spring Boot Starter Security 설치
	* https://mvnrepository.com/ >Spring Boot Starter Security 검색 > Spring Boot Starter Security 선택 > 3.1.5 버전 선택 > 버전 선택 후 현재 우리가 Maven을 사용하기 때문에 Maven 코드의 `<dependency></dependency>` 를 복사해서 pom.xml의 `<dependencies></dependencies>` 사이에 넣어 줌.
		* 만약, pom.xml에 붙여넣은 코드의 version에 에러가 뜬다면 `<version></version>` 코드만 지워 주면 됨

* Generic Method → BaseRespone.java 파일에서 사용
	* 참고 사이트
		* https://limkydev.tistory.com/59
		* https://st-lab.tistory.com/153

1. discord > com.dw.discord 안에 7 개의 package를 만듦
```
com.dw.discord.controller
com.dw.discord.dto
com.dw.discord.enumstatus
com.dw.discord.exception
com.dw.discord.model
com.dw.discord.repository
com.dw.discord.service
```
2. com.dw.discord.model 안에 Member라는 class를 만듦
	1. Member.java에 필요한 코드들을 써 줌(코드 참조)
3. com.dw.discord.enumstatus 안에 Gender라는 enum을 만듦
	1. Gender.enum에 필요한 코드들을 써 줌(코드 참조)
4. com.dw.discord.model 안에 Board라는 class를 만듦(게시판 기능을 위해)
	1. Board.java에 필요한 코드들을 써 줌(코드 참조)
5. com.dw.discord.dto 안에 MemberDto라는 class를 만들어 줌

* CORS(Cross-Origin Resource Sharing)
	* 참고 사이트: https://hannut91.github.io/blogs/infra/cors
	* CORS란?
		* ```브라우저에서는 보안적인 이유로 `cross-origin` HTTP 요청들을 제한합니다. 그래서 `cross-origin` 요청을 하려면 서버의 동의가 필요합니다. 만약 서버가 동의한다면 브라우저에서는 요청을 허락하고, 동의하지 않는다면 브라우저에서 거절합니다.
		* ```이러한 허락을 구하고 거절하는 메커니즘을 HTTP-header를 이용해서 가능한데, 이를 CORS(Cross-Origin Resource Sharing)라고 부릅니다.
		* ```그래서 브라우저에서 `cross-origin` 요청을 안전하게 할 수 있도록 하는 메커니즘입니다.
	* cross-origin이란 아래 중 한 가지라도 다른 경우를 말한다
		* ```1. 프로토콜 - http와 https는 프로토콜이 다르다.
		* ```2. 도메인 - domain.com과 other-domain.com은 다르다.
		* ```3. 포트 번호 - 8080 포트와 3000 포트는 다르다.
	* CORS는 왜 필요할까?
		* ```CORS가 없이 모든 곳에서 데이터를 요청할 수 있게 되면, 다른 사이트에서 원래 사이트를 흉내 낼 수 있게 됩니다. 예를 들어서 기존 사이트와 완전히 동일하게 동작하도록 하여 사용자가 로그인을 하도록 만들고, 로그인했던 세션을 탈취하여 악의적으로 정보를 추출하거나 다른 사람의 정보를 입력하는 등 공격을 할 수 있습니다. 이렇나 공격을 할 수 없도록 브라우저에서 보호하고, 필요한 경우 에만 서버와 협의하여 요청할 수 있도록 하기 위해서 필요합니다.