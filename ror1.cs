#ЗАДАНИЕ 1
sum = (a, b) -> a + b

#ЗАДАНИЕ 2
weekday = (date) ->
  WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  day = date.getDay()
  WEEKDAYS[day-1]

#ТЕСТ ЗАДАНИЯ 1
a = +prompt "enter number a"
b = +prompt "enter number b"
alert "Сумма будет = #{sum(a,b)}"

#ТЕСТ ЗАДАНИЯ 2
today = new Date
alert "Сегодня: #{today}, а день недели #{weekday(today)}"

