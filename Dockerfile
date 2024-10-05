# 1. 노드버전 설정
FROM node:20.16.0

# 2. 프론트 디렉토리 설정
WORKDIR /apps/frontend

# 3. 의존성 복사후 먼저 설치
COPY ./frontend/package*.json ./frontend/yarn.lock ./
RUN yarn install

# 4. 코드복사
COPY ./frontend/ .
RUN yarn build

# 5. 백엔드 디렉토리 설정
WORKDIR /apps/backend

# 6. 의존성 복사후 먼저 설치
COPY ./backend/package*.json ./backend/yarn.lock ./
RUN yarn install

# 7. 코드복사
COPY ./backend/ .

# 8. 마이그레이션 실행 
# RUN ["yarn", "migration:run"]

# 9. 컨테이너가 사용할 포트 설정
EXPOSE 3001

# 10. 애플리케이션 실행
CMD ["yarn", "dev"]
