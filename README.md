# play_spot_app

# Rubocop

bundle exec rubocop -a

# ライプラり導入

docker-compose run --rm front sh -c "yarn add --save-dev ・・・"

# Docker コンテナの中に入る

$ docker-compose exec web bash

# 入れたら以下のコマンドを実行して IP アドレスを取得

$ cat /etc/hosts | awk 'END{print $1}' | sed -e 's/[0-9]\+$/1/g'
