
## AWS 배포 사이트 : https://www.petmemoir.store/
![notion용](https://github.com/sonincheon/Doggo-frontend/assets/142462485/c23a0c72-e634-4726-a5ac-dff07aef02aa)
![notion용2](https://github.com/sonincheon/Doggo-frontend/assets/142462485/7b5170f2-9ee8-4909-a375-88005d807c9a)
---
## 손인천 담당 기능 요약 ##

1. 헤더, 푸터 및 기본세팅
  - GlobalStyle을 사용하여 css 리셋 적용 및 스웨거 및 junit 테스트 세팅
  - Route로 각 팀원들 구역 설정 및 Outlet 활용하여 헤더푸터 및 어드민
    페이지 구역 설정
  - 토큰의 회원정보를 가져와 로그인 상태에 따른 헤더 변화 및 스크롤
    이벤트시 동적인 효과 부여
  - 개인정보처리방침,이용약관책임 등등 모달을 만들어 푸터의 해당 컨텐츠
    클릭시 모달오픈 구현
  - 모바일 반응형(768px)시, 햄버거 메뉴 및 모바일메뉴 구현
    
2. Axios 인스턴스 및 JWT토큰 관리
  - 토큰 시간 설정, access토큰 1시간, refresh토큰 1일로 설정 
  - 로그인시, access토큰 refresh토큰 발급확인 및 토큰 payload의 정보
    (id & email) return 하는 Axios 생성  
  - Axios 인스턴스를 활용하여 401에러시 refresh토큰으로 access토큰
    자동으로 생성 기능 구현
  - Spring Security를 보안필터중 SecurityFilterChain 사용하여 특정
    URL 경로 또는 요청 권한 부여
  - private layout 새하얀 더미 페이지를 만들어 useEffect를 통해 회원
    상태 아닐시 바로 로그인 페이지로 이동

3. 일정 캘린더 + 애완동물 수행능력 및 일기 페이지
  - React-Calander 라이브러리를 사용하여 캘런더 구현, 라이브러리 내부기능
    tileContent을 이용하여, 퀘스트 수행에대한 퍼센트를 집계하여, 해당 회원
    애완동물들을 맵<날짜,퀘스트률>집계 및 일기 정보를 맵<날짜,일기>집계하여
    tileContent에 집계
  - 회원별 애완동물 리스트를 풀러와 퀘스트률을 리액트 시각화로 표현
  - 모바일 반응형시, 상세내용을 모달형식으로 사용, 캘린더의 날짜를
    클릭함으로서 상세내용만 표시

4. 구독 결제 페이지
  - 총 4페이지로 구성 구독페이지, 판매 상세페이지(결제포함), 결제중 더미페
    이지, 결제완료 페이지, 결제내역페이지 구성
  - 결제 Toss API 테스트버전 사용, Context-API로 전역관리하여 결제후 더미
    페이지를 걸쳐 결제완료 페이지로 이동 구현
  - 상세페이지에 전체 약관 동의 구현, 필수 & 선택으로 나누어 필수가 모두
    선택이 되어야 결제시도가 가능하게 구현 및 약관별 동의 모달 오픈 구현
  - 결제 내역 페이지에서 수정 및 취소가 가능하여 기본적인 상품 CRUD 구현 
  - 구독페이지에서 모바일 반응형시, slik 라이브러리를 이용한 슬라이드화면으로
    변환 및 페이지 기본 설명 레이아웃 구현

5. 배포(AWS) 및 EXPO 빌드 구현
  - 가비아에서 도메인을 구매하고, AWS EC2 인스턴스를 생성한 후 Route 53을
    사용하여 호스팅 영역을 구성, AWS EC2로 인스턴스 설정후 시작하여 우분투
    서버를 열어 MySQL을 설치한 후에 설정 및 파일질라를 사용하여 통합된 JAR
    파일을 서버로 이동시켜 실행합니다.
  - 하단 탭바를 REACT-NATIVE를 사용, 웹뷰를 이용하여 기능을 구현하고 EXPO로
    빌드하여 EXPO GO 앱으로 실시간 확인및 구글 콘솔 테스트 및 평가 진행
  - 배포 사이트 : https://www.petmemoir.store/

    내 블로그 (배포) : https://cheonsdev.tistory.com/3
    
    내 블로그 (EXPO) : https://cheonsdev.tistory.com/12

6. 리더로서의 역할
  - 프로젝트 일정을 엄격히 관리 및 에자일 방법론 적용(3DAY 회의)
  - 종합테스트를 통한 피드백 및 수정

---
## 정벼리 담당 기능 요약 ##

1. 공공기관API를 활용한 날씨 + 산책지수 표현
 - 기상청API허브에서 제공하는 텍스터 형태의 날씨정보(단기&중기)를 
    스프링에서 가공
 - 공공데이터 포탈에서 제공하는 실시간&시간단위 날씨정보를 Flask에서 가공
 - PostConstruct와 스케쥴러를 통해 서버가동 혹은 지정된 시간마다 최신화
 - React의 geoLocation을 통해 현재위치의 x,y 값을 획득 KakaoApi의 
   제공후 도로명 주소를 받아옴
 - 도로명주소 데이터를 활용하여 해당 도로명주소가 속한 도시의 실시간 
   날씨정보와 시간단위 날씨정보를 return 받음
 - 대한민국 각 대표도시의 일주일간 오전/오후의 날씨 정보를 return 받음
 - Promise 함수를 사용하여 각 데이터로 인한 렌더링이 동시에 일어나게함
 - 모바일 화면에서는 소형화 및 요약된 정보 확인

2. BeautifulSoup과 Flask 서버를 통한 유기동물정보 크롤
 - 국가동물보호정보시스템에서 공고중인 모든 유기동물 정보를 스케쥴러에 
   등록된 시간에 맞춰 크롤링 
  (https://www.animal.go.kr/front/awtis/public/publicList.do)
 - 리액트의 geoLocation -> 카카오API를 통해 받은 도로명주소를 확인하여 
   사용자가 속한 지역의 유기동물정보들만을 CSS 키프레임을 사용하여 
   부드럽게 렌더링
 - 렌더링 된 각 아이템들을 클릭하면 국가동물보호정보시스템의 
   상세정보페이지로 이동함

3. 견종/묘종 정보 열람 페이지

 - API Ninjas(https://api-ninjas.com/)에서 무료로 제공하는 견종/묘종 
   정보를 while문을 통해 모든 견종/묘종 정보를 요청하여 Spring 서버로 
   가져온뒤 한글화하여 JPA를 사용하여 MySQL에 보관
 - React의 Axios API 요청이 들어오면 가나다순으로 정렬, page, size를 
   적용하여 return 하여 무한스크롤 기능을 가능하게함
 - React 측에서 페이지 크기 값을 얻고 useRef를 사용하여 아이템의 10% 
   이상을 지나치면 자동적으로 api 요청을 하여 무한스크롤 기능을 구현
 - 검색기능의 경우 "테리어" 라고 입력시에 %테리어%로 LIKE 절 쿼리 return 
   값을 받아와 결과값 렌더링, 데이터가 없을시 안내문구 출력
 - 고양이 정보의 경우 이미지 사이즈가 5메가바이트를 넘는경우를 확인하여 
   이미지를 바이트단위로 쪼개어 가공하는 이미지 리사이저 메서드 클래스를 
   생성 (적용은 하지 못함)

4. 이외의 활동
 - 메인페이지에서 ReactSlick 라이브러를 사용하여 해당 어플리케이션의 
   소개문구 및 이미지들을 주기적으로 보여주는 섹션 단위의 컴포넌트구현
 - AboutUs 컴포넌트 구현 (단독으로 구현한 컴포넌트라 배포시에는 
    누락하였음)
 - 콜백지옥, 프롭스 드릴링과같이 반복된 getter&setter 사용으로 Dry 원칙과
   유지보수성이 저해되는게 확인되어 Builder 패턴, ObjectMapper, Jackson   
   어노테이션들을 적극적으로 사용하여 팀원들에게 전파하였음
 - 반복된 API요청 로직(날짜관련)을 추상화 클래스로 리팩토링하여 코드를 줄임

확인사항

멍냥멍냥 프론트엔드(https://github.com/sonincheon/Doggo-frontend)

멍냥멍냥 백엔드(https://github.com/sonincheon/DoggoEx)

멍냥멍냥 플라스크(https://github.com/sonincheon/DoggoFlask)

멍냥멍냥 통합(https://github.com/sonincheon/DoggoTotals)

인사담당관님의 피드백을 환영합니다!
