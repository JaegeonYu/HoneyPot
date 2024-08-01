FROM openjdk:17-jdk-alpine

COPY ./app.jar app.jar

ENTRYPOINT ["java","-jar" ,"-Duser.timezone=Asia/Seoul","app.jar"]