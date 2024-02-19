* useQuery 대신에 async/await를 사용해 보자!
	* 선생님이 깃허브에 코드 올려 주실 예정
### async/await
* await + 비동기 함수(fetch)
	1) await 키워드는 뒤에 호출하는 함수가 반드시 Promise를 리턴하는 함수여야 한다.
	2) await는 비동기 함수가 일을 다 처리할 때까지 process를 멈춘다.
	3) await는 반드시 async 키워드가 붙은 함수 내에서만 사용할 수 있다.
		ex) ```
			async function asyncTest() {
				const data = await timeDelay(3000);
			} 