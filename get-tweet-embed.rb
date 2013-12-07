require 'open-uri'
require 'json'
File.open('data/tweetData.json', 'w').puts('[')

idx = 0
File.open('data/statusIds').each_line {|line|
  id = line.strip
  url = "https://api.twitter.com/1/statuses/oembed.json?id=#{id}"
  p id
  res = JSON.parse(open(url).read)
  data = res["html"]
  screenName = res["author_url"].scan(/.*\/twitter.com\/(\w+)/)[0][0]
  embed = { :id => id.strip, :screenName => screenName, :embedData => data}.to_json
  if idx == 0
    File.open('data/tweetData.json', 'a').puts(embed)
  else
    File.open('data/tweetData.json', 'a').puts( "," + embed)
  end
  idx = idx + 1
}
File.open('data/tweetData.json', 'a').puts(']')
