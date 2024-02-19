* 틈틈이 저장 필수 → 유니티 프로그램 먹통돼서 꺼지면 그동안 한 것들 다 날아감
* 3D 엔진의 필수 요소
	1. 빛과 그림자 → 렌더링
	2. 물리적 현상 구현 (중력, 마찰, 무게)

* Layer
* Tag
* 꼭 필요한 것만 public 붙이기(죄다 붙이고 다니면 오류 날 수 있음)
* 새로운 컴포넌트를 만들 때는 꼭 그 컴포넌트의 transform을 reset 해 주는 게 좋음
* Seamless → 계속해서 이어질 수 있는 이미지 조각

* Prefab
	1. 재사용을 위해

* void Start - 시작 시점에 모든 mono behavior의 상속자들을 초기화함
* void Update - 프레임마다 업데이트(화면에 보여 주는 것 + 유저의 input 이벤트)
* void FixedUpdate - 물리 관련 계산 업데이트
* OnTriggerEnter2D - Colider
	* Colider 2D가 자기 말고 다른 무언가와 부딪히면 이 코드가 불림
	* collision이라는 것으로 부딪힌 상대의 정보를 불러옴
	* .gameObject.tag → gameObject의 tag를 부를 수 있음
	* `private void OnTriggerEnter2D(Collider2D collision) { if(collision.gameObject.tag == "Goal") { Goal(); // 골 } else if (collision.gameObject.tag == "Dead") { GameOver(); // 게임 오버 }}`
	* 위 코드를 예로 들면 collision.gameObject.tag == "Goal" → gameObject 태그가 Goal일 때. collision.gameObject.tag == "Dead" → gameObject 태그가 Dead일 때.
* Material
	* Friction: 마찰력(0: 마찰 없음 / 1: 마찰 강함)
	* Bounciness: 탄성
* static
	* `public static string gameState = "playing";` → static으로 선언한 것은 single term이 되어 새로운 gameState를 만들 수 없게 됨
	* 상태 관리에 사용되는 상태값은 대부분 static으로 관리함
	* 상태 변수들은 관리를 잘해 줘야 함
* canvas
	* Render Mode: Screen Space - Overlay
		* 안개 효과 같은 걸 게임 안에서 주고 싶다, 화면에 필터를 적용하고 싶다
	* Render Mode: Screen Space - camera
		* 캔버스와 게임 화면이 똑같아짐
		* 캔버스가 게임 화면보다 크게 보이지만 캔버스의 좌측 상단에 무언가를 배치하면 똑같이 게임 화면의 좌측 상단에 표시가 됨
* return 코드
	* 아래의 return 코드처럼 조건이 정해져 있는 return 코드는 코드의 가장 위쪽에 넣어 줘야 함```
```
if (gameState != "playing")
        {
        return;
        }
```

* Rigidbody2D의 Body Type
	* Static - 절대 변형되지 않는 것(Dynamic과 Static을 번갈아 쓰기 위해 쓰는 것이 Static)

* 이동 거리 / 걸린 시간 = 초당 이동 거리
	* ex) 5 / 5sec = 1 초에 1만큼 이동
* 1 초에 몇 프레임이 동작하는가?
	* 1 / 0.02 = 50 프레임
* 1 초에 가는 이동 거리 / 프레임 수 = 1 프레임당 이동 거리
	* 1 / 50
* 한 프레임당 이동 거리가 클수록 속도가 빠른 것(거속시)

* Invoke(a, b) → b에 있는 것을 실행하고 a를 실행해라