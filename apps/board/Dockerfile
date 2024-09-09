# 1. 특정 Node.js 버전을 기반으로 설정
FROM node:latest

# 2. 작업 디렉토리 설정
WORKDIR /apps/board

# 3. package.json과 yarn.lock 파일을 복사
COPY package*.json yarn.lock ./

# 4. 의존성 설치
RUN yarn install

# 5. 애플리케이션 소스 코드 복사
COPY . .

# 6. 마이그레이션 실행

# RUN ["yarn", "migration:run"]

# 7. 컨테이너가 사용할 포트 설정
EXPOSE 3001

# 8. 애플리케이션 실행
CMD ["yarn", "start:dev"]


