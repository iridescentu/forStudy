* 보안 라이브러리
* Spring Security에서 중요한 두 가지
	* #stability: `안정성
	* #security: `보안성
* #deprecated: `경고 메시지로 이 단어가 뜰 시에는 '더 이상 지원하지 않는 기능이다'라는 것을 알려 주는 것

* ### #SecurityConfig 클래스
```
	@Configuration
		SecurityConfig
			환경 설정
```
	* SecurityConfig가 하는 일들 중 중요한 것들
		1. Rest API 설정 - 보안 여부 설정, 가입 관련 요청 등은 보안을 적용시키지 않아야 한다.
			  ex) 가입 요청은 보안 X
		2. Session / Token - 둘 중 어느 것을 사용할 것인지. 기본 설정은 Session이다.
		3. 예외(exception) 설정 - 보안 실패의 경우, 기존의 응답 형식을 유지할 수 있도록 설정한다.

* application.properties 코드 설명
```
	jwt.header // 토큰의 위치 설명
	jwt.secret // 문자를 Base64로 인코딩한 결과
	jwt.token-validity-in-seconds // 토큰의 lifetime(제한 시간)
	logging.level.com.dw.discord.jwtauthority.jwt.*=DEBUG
	// DEBUG로 설정하면 DEBUG 레벨, INFO로 설정하면 INFO 레벨.
	// logging.level 뒤의 com.dw.discord.jwtauthority.jwt = 패키지명
	// 패키지명의 .*는 전체를 선택하겠다는 뜻이다.
```