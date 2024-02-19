* WAS 참고 사이트 https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html
* Token이 없었을 때

* #Data Packet: 인터넷으로 전송되는 모든 데이터들을 data packet이라고 함

* ### #Servlet:
	* Servlet 아래에는 미니언처럼 여러 개의 Servlet이 있고 그 여러 개의 Servlet들을 관리해 주는 아파치, 아파치 아래에 Tomcat이라는 웹 서버가 있다.
		* 결국, 아파치 → Tomcat → Servlet → Spring
	* #Tomcat(웹 서버의 한 종류)의 역할: Data packet parsing
		* SPA가 요청한 페이지를 넘겨줌
		* Tomcat에서 Controller를 거쳐 Spring으로 정보를 넘겨줌
	* #WAS (Web Application Server): DB 조회나 다양한 로직 처리를 요구하는 동적인 콘텐츠를 제공하기 위해 만들어진 Application Server.
		* HTTP를 통해 컴퓨터나 장치에 애플리케이션을 수행해 주는 미들웨어(소프트웨어 엔진)임.
		* Web Container 혹은 Servlet Container라고도 함
			* Container란 JSP, Servlet을 실행시킬 수 있는 소프트웨어를 말함
			* 즉, WAS는 JSP, Servlet 구동 환경을 제공함
		* Tomcat → Controller → Service(JAVA)  ⇆ JAVA⇆  Repository(JPA)  ⇆SQL⇆ MySQL(DB)
			* Controller와 Service 사이에 DTO가 있음 (JPA와 Table 사이에도 DTO가 존재하나 지금 우리는 사용하지 않음)
			* Controller: 요청 확인 + Service로 일 배분
			* Service: 요청을 Controller로 보내 Controller가 그 요청을 확인 후 Service에서 필요한 함수를 호출해 일을 배분해 줌
			*  ⇆ = Transaction
	* Spring

* ### #DTO:
	* Data Transfer Object, 데이터 전송 객체
	* DTO란 프로세스 간에 데이터를 전달하는 객체를 의미함. 말 그대로 데이터를 전송하기 위해 사용하는 객체라서 그 안에 비즈니스 로직 같은 복잡한 코드는 없고 순수하게 전달하고 싶은 데이터만 담겨 있음.
	* Model: 특정한 일을 하는 건 아니지만 특정한 객체의 정보를 정의해 주는 역할을 함
		* Model을 JPA가 가지면 Table이 됨
* Token: 
* Protocol/인증: 프론트엔드에서 함. 백엔드의 일이 아님

* ### #Build란?
```
서버에 기능을 추가하려면 개발자가 로컬 PC에서 개발을 하고 테스트까지 진행한 뒤에 문제가 없을 경우 사용자가 사용할 수 있도록 수정된 코드를 실서버에 반영해야 함. 서버에 반영하는 것을 "배포"라고 하고 배포(Deploy)하기 위한 과정을 "빌드"라고 함.

소스 코드 파일을 컴퓨터에서 실행할 수 있는 독립적인 형태로 변환하는 과정과 그 결과를 말함. 예를 들어, JAVA 프로젝트를 진행한다면 개발자가 작성한 A.java와 여러 가지 정적 파일 등에 해당하는 resource가 존재함. 빌드를 한다면 소스코드를 컴파일해서 .class로 변환하고, resource를 .class에서 참조할 수 있는 적절한 위치로 옮긴 후 META-INF와 MAINFEST.MF들을 하나로 압축하는 과정을 의미함.
컴파일은 빌드의 부분집합이라고 생각하면 됨.
또한, 빌드 과정을 도와주는 도구를 Build Tool이라고 함.
즉, 컴파일된 코드를 실제 실행할 수 있는 상태로 만드는 일을 Build라는 개념으로 생각하면 됨.
```

* ### #JWT 토큰의 구성
	1. #Header(헤더)
		* Token의 유형을 설명한다.
			* ex) "Payload는 Base64로 인코딩되어 있다."
	2. #Payload(페이로드)
		* User ID
		* 권한(user / admin)
		* Lifetime
			* ex) 2023.12.19.00.00에 만료
	3. #Signature(서명)
		* Header와 Payload를 합쳐 암호화 기술로 암호화시킨 부분.
		* 만약, 해커가 1과 2를 알고 있다고 해도 3에 있는 'key'로 암호를 해독하기까지 시간이 오래 걸리기 때문에(+ 2의 Lifetime이 웬만하면 짧기 때문에 그 Lifetime 동안 암호를 해독하지 못하도록) 3의 Signature로 암호화를 시키는 것이다.

* ### #권한설정
	* 권한의 이름은, 반드시 'ROLE_'로 시작해야 한다.
		* ex) ROLE_ADMIN, ROLE_USER, etc.
		* Workbench에 아래의 두 코드를 넣어 주기.
			* `insert into authority (authority_name) values ('ROLE_ADMIN');`
			* `insert into authority (authority_name) values ('ROLE_USER');`
		* ![[Pasted image 20231218155207.png]]
			* 위의 이미지에서 user_id가 1인 user가 admin이라면 admin과 user 권한을 전부 가지고 있을 것이다. 그렇기 때문에 테이블에 표시될 때는 1 admin, 1 user → 이렇게 두 줄을 차지하고 있을 것이다.
			* 만약, user_id가 2인 user가 admin이 아닌 그저 user 권한만을 가지고 있을 경우에는 2 user → 이렇게 한 줄만 차지하고 있을 것이다.

* ### #인증절차 ※중요※
	* ```Authentication authentication = authenticationManagerBuilder.getObject()
			.authenticate(authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authentication);```
		1. 사용자가 로그인 시도를 하면 authenticationToken 생성한다.
		2. 인증을 관리하는 AuthenticationManager가 authenticationToken을 받는다.
		3. AuthenticationManager는 인증 절차를 AuthenticationProvider에게 위임한다.
		4. AuthenticationProvider는 전달받은 authenticationToken의 사용자명(principal)을 추출하고, 이를 기반으로 UserDetailService의 "loadUserByUsername" 메소드를 호출한다.
		5. UserDetailService의 "loadUserByUsername" 메소드는 DB로부터 사용자 정보를 조회하여 UserDetails 객체로 변환한다.
		6. 최종적으로 AuthenticationProvider는 UserDetails 객체와 authenticationToken을 비교하여 실제 인증을 수행한다.
		7. 이해를 돕기 위한 이미지들
			1. ![[Pasted image 20231218164151.png]]
				1. 출처: https://www.toptal.com/spring/spring-security-tutorial
			2. ![[Pasted image 20231218164452.png]]
				1. 출처: https://veluxer62.github.io/tutorials/spring-security-with-jwt/
			3. ![[Pasted image 20231218164722.png]]
				1. 출처: https://ksh-coding.tistory.com/60

