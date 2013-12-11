best-tweet-slideshow
====================

特定のtweetをスライドショー表示するhtml

data/tweetData.json に保存されたtweetを自動スライドショーで表示します
data/tweetData.json を作成するためにはstatusIDの一覧(data/statusIds)が必要です。


[get-status-id.rb]
chromeからエクスポートしたbookmarkの該当行からtwitterのstatusIDを取り出し、
data/statusIdsを生成するために作ったもの
```
ruby get-status-id.rb [bookmark file path]
```

[get-tweet-embed.rb]
twitterAPIを使ってtweetのembedDataを取得するスクリプト。</br>
急ごしらえなのでAPI1.0を使っています...


js/app.js
```
$('.bxslider').bxSlider
```
この引数でスライドショーのオプションを変更できます。
詳細は
[bxslider](http://bxslider.com/) で確認できます。


アイコンの変更にあわせて背景画像を切替る処理は負荷がかかるので、ローカルに画像をキャッシュしています。
