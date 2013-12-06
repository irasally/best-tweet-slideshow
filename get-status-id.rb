File.open('data/statusIds', 'w')
File.open('/Users/irasally/Documents/bookmarks_13_12_07.html').each_line {|line|
  res = line.scan(/.*\/status\/(\d+)/)
  File.open('data/statusIds', 'a').puts(res[0][0])
}
