팀 명 : 아이삼

팀 원 : 공한나, 김나은, 안서희

팀 리더 : 안서희

깃 관리자 : 김나은

기술 리더 : 공한나

----
## 240521
로딩 페이지 디자인 및 구현 작업<br>
커서 수정<br>
메인페이지 메인 화면 배경 추가

## 240518-240519
메인페이지 .dragable 사용하여 드래그 이벤트 추가<br>
메인페이지 pc, tablet  css 작업

## 240517
메인페이지 css 작업 마무리<br>
서브페이지 shop css 작업

## 240516
 메인페이지 html, css 작업 마무리 중 여러번 수정.<br>
 메인페이지 js,jQuery 작업
 서브페이지 brand html, css 작업 완료<br>
 서브페이지 community html,css 작업중<br>
 svg가 그려지는 효과 학습 후 적용을 목표로 함.

## 240515
 메인페이지 html, css 작업 거의 완료.<br>
 모바일 공통 헤더와푸터 작업 완료<br>
 서브페이지 작업 중<br> 
 메인페이지 pc와 tablet 작업을 목표로 함.

## 240514
github organization 생성.</br>
메인페이지와 서브페이지 디자인 마무리 및 코드분석.</br>
스타일 가이드와 css변수 제작, 필요 자료 수집.</br>
다음날인 16일까지 각자 맡은 서브 페이지 html과 css 작업
+공통 헤더와 푸터 작업을 목표로 함.

----
## 기술 작성

***svg가 그려지는 효과*** <br>
svg태그에는 path 엘리먼트가 있어, 선과 곡선, 호 등 다양한 형태를 그릴 수 있음.

stroke-dasharray: 점선을 만드는 간격을 의미 (값을 부여한 만큼 점선의 길이가 늘어남)
<path d="패스 데이터" pathlength="길이">

stroke-dashoffset: svg을 나타낼 지점 지정

*svg에 애니메이션 효과 주기*
 1. stroke-dasharray 설정<br>
              1. stroke-dasharray을 최대값으로 설정.

2. stroke-offset 설정<br>
              1. stroke-offset을 stroke-dasharray와 같은 값으로 설정.<br>
              2. stroke-offset == stroke-dasharray인 경우 그림이 보이지 않음.

3. keyframe으로 애니메이션 추가<br>
              1. stroke-offset을 사용하여 어떤 지점에서 시작할지 애니메이션으로 설정.<br>
	2.0% { stroke-offset == stroke-dasharray의 최대값 -> 안보이는 상태 }<br> 
	  50% { stroke-offset == 0 -> 그림이 다 나타난 상태 }<br>
	  100% {  stroke-offset == -(stroke-dasharray) -> 반대로 그려지는 상태 } 


***.draggable()*** <br>
.draggable(): 지정된 요소를 드래그 할 수 있게 만듦.<br>

기본 형태
<script>
$('옮길 요소').draggable();
</script>