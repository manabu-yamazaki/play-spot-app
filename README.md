# play_spot_app

# Rubocop

bundle exec rubocop -a

# ライブラリ導入

docker-compose run --rm front sh -c "yarn add --save-dev ・・・"

# Docker コンテナの中に入る

docker-compose exec web bash

# 入れたら以下のコマンドを実行して IP アドレスを取得

cat /etc/hosts | awk 'END{print $1}' | sed -e 's/[0-9]\+$/1/g'

# ec2

ssh activityspot

RUBY_BUILD_SKIP_MIRROR=1 rbenv install -V 3.0.6
TMPDIR="${PWD}/tmp" RUBY_BUILD_SKIP_MIRROR=1 rbenv install -v 3.0.6

# 開発環境

## イメージのビルド

docker-compose build

## コンテナ立ち上げ

docker-compose up
docker-compose up --build

## 本番環境イメージのビルド

docker-compose -f docker-compose.production.yml build

## 本番環境イメージを AWS ECR にプッシュ

aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 788422463177.dkr.ecr.ap-northeast-1.amazonaws.com
docker push 788422463177.dkr.ecr.ap-northeast-1.amazonaws.com/play-spot-repository_api:latest
docker push 788422463177.dkr.ecr.ap-northeast-1.amazonaws.com/play-spot-repository_web:latest

# 本番環境

## credentials.yml 編集

※直接.enc 編集は禁止
Docker コンテナに入って以下コマンドを実行
EDITOR='vim' rails credentials:edit

sudo scp -i ~/.ssh/activity_spot.pem config/master.key ec2-user@35.76.55.169:/home/ec2-user
sudo mv master.key /play-spot-app/backend/config

## 本番環境イメージを AWS ECR からプル

aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 788422463177.dkr.ecr.ap-northeast-1.amazonaws.com
docker pull 788422463177.dkr.ecr.ap-northeast-1.amazonaws.com/play-spot-repository_api:latest
docker pull 788422463177.dkr.ecr.ap-northeast-1.amazonaws.com/play-spot-repository_web:latest
docker-compose -f docker-compose.production.yml pull

## コンテナ立ち上げ

docker run -d --name api -p 3001:3000 788422463177.dkr.ecr.ap-northeast-1.amazonaws.com/play-spot-repository_api
docker run -d --name web -p 4000:3000 788422463177.dkr.ecr.ap-northeast-1.amazonaws.com/play-spot-repository_web
docker-compose -f docker-compose.production.yml up

# RDS のデータベース確認

docker exec -it {コンテナ ID} bash
service mysql start
mysql -u root -h {RDS のエンドポイント} -p
mysql -u root -h activityspot-db-instance.cg6lcqourgdq.ap-northeast-1.rds.amazonaws.com -p

docker system df
df -h
docker ps -a
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker inspect コンテナ ID | grep -A9 Mounts
