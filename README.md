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

docker-compose -f docker-compose.production.yml up --build
