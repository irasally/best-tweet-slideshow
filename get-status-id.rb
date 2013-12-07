File.open('data/statusIds', 'w')
File.open(ARGV[0]).each_line {|line|
  res = line.scan(/.*\/status\/(\d+)/)
  File.open('data/statusIds', 'a').puts(res[0][0])
}
