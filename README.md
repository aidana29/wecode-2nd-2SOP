# 호주 스킨케어 브랜드 AESOP 클론 프로젝트
회원가입 및 로그인, 카테고리 및 제품 페이지, 카트, 결제

## 개발 인원 및 기간
개발기간: 2023/09/18 - 2023/10/06

**FE**

 NAME | GITHUB |
| :-----: | :---: | 
|  조영준 | https://github.com/JYJ-Eidos   | 
| 박지원 | https://github.com/Jiiiwon1020 | 
| 권순우 | https://github.com/soonwoooo | 

BE:

| NAME | GITHUB |
| ------------- | ------------- |
| 박준우  | https://github.com/Wanderer94  |
| 김정연  | https://github.com/GardenGK |
| 다나  | https://github.com/aidana29  |
| 이호영  | https://github.com/hoyoungl |

백엔드 GitHub 링크: https://github.com/wecode-bootcamp-korea/49-2nd-2SOP-backend

프론트엔드 GitHub 링크: https://github.com/wecode-bootcamp-korea/49-2nd-2SOP-frontend

## 프로젝트 선정 이유
이커머스 웹사이트 기능: 기본적인 기능들인 회원가입, 로그인, 제품 페이지, 장바구니, 주문, 결제 등을 연습할 수 있습니다.

제품 및 카테고리 관리: Aesop은 마케팅보다 제품에 중점을 둔 브랜드로 알려져 있어 제품 및 카테고리 페이지가 풍부한 정보를 담고 있습니다. 이 클론 프로젝트를 통해 다양한 카테고리와 
제품 종류의 데이터를 어떻게 효율적으로 분리하고 저장할지, 그리고 이를 시각적으로 어떻게 표현할지에 대한 연습이 가능합니다.

디자인 영감: 이솝은 미니멀하고 세련된 디자인으로 유명합니다. 웹사이트를 클론함으로써 디자인 영감을 얻어 시각적으로 매력적이고 사용자 친화적인 인터페이스를 개발하는 데 도움이 됩니다.

## 데모 영상


https://github.com/wecode-bootcamp-korea/49-2nd-2SOP-backend/assets/45601439/cf89ff5d-7d63-44ab-94b6-8fdd52938d23



## 적용 기술
Front-End : <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 

Back-End :  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
   <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
   <img src="https://img.shields.io/badge/.env-ECD53F?style=for-the-badge&logo=.env&logoColor=white">

Common : 
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
   <img src="https://img.shields.io/badge/trello-0052CC?style=for-the-badge&logo=trello&logoColor=white">
  
   


## 구현 기능
**공통**

회원가입
이솝 웹사이트 회원가입 절차

필수데이터: firstname, lastname, 이메일, 비밀번호, 이용약관 체크
엔드포인트: https://www.2sop.com/signUp

**로그인**

이솝 웹사이트 로그인 절차

필수데이터: 이메일, 비밀번호, (성공시) token
엔드포인트: https://www.2sop.com/signIn

**메인페이지**

웹사이트 메인 페이지
엔드포인트: https://www.2sop.com/product

**중간페이지**

향수와 헤어 카테고리 페이지
엔드포인트: https://www.2sop.com/product/{category}

**상세페이지**

제품 상세 페이지**
엔드포인트: https://www.2sop.com/product/{category}/{secondCategory}/{productId}

**장바구니**

제품 추가/삭제, 수량 조정 가능
엔드포인트: https://www.2sop.com/cart

**주문**

배송지 정보, 받는 사람 정보 입력하는 페이지
엔드포인트: https://www.2sop.com/order

**결제**

회원가입 시 제공된 포인트로 결제
엔드포인트: https://www.2sop.com/paymentcheck

### Reference
이 프로젝트는 이솝 사이트를 참조하여 학습목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
