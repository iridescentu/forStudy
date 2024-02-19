[선생님 git에 파일 있음 - MovieShop]


### React-Router-Dom이 사용하는 컴포넌트
* BrowserRouter
* Routes
* Route
* Outlet

1. 페이지 변경을 위해 사용하는 것들
	* Link, NavLink
		→ 링크 태그(<a>) 대신에 사용됨 (React-Router-Dom은 a 태그를 사용할 수 없음)
		→ 유저가 클릭을 해야만 페이지가 이동됨
	* useNavigate
		→ 자바스크립트 함수 안에서 자동으로 페이지를 이동시킬 때 사용
	* Navigate
		→ JSX 안에서 자동으로 페이지를 이동시킬 때 사용
			ex)
				<>
					{ 조건 ? <Navigate to="/login" />}
						: <Navigate to="/dashboard" />
				<>


2. 페이지 간의 정보 이동은 어떻게 할까? (아래의 두 가지 방법 참고)
	1) http://localhost:8080/api/user/steve12 → 저장해야 할 정보가 하나일 때는 이 방법 사용
		* PathVariable 문법 → useParams를 이용하여 steve12를 읽어온다
		* MovieShop.js에서 Line 50의 path=":id"와 steve12는 다른 것임
		* path=":id"는 페이지, steve12는 정보
	2) http://localhost:8080/api/user/search?userId=steve12 → 저장해야 할 정보가 여러 개일 때는 이 방법 사용
		* Parameter 문법 → useLocation을 이용하여 steve12를 읽어온다
		* MovieShop의 Search.js의 Line 42부터 참고
		* 검색 기능에서 keyword로 찾을 때 Search.js의 keyword 부분을 참고하면 좋음
	
	* 위처럼 api가 붙은 것은 RestAPI임