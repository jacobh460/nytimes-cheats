# New York Times Cheat Collection
Some [nytimes](https://www.nytimes.com/crosswords) cheats

<a href="javascript:(function()%7B%2F*Jacob%20H%202023*%2F%0A%2F*https%3A%2F%2Fwww.nytimes.com%2Fgames%2Fwordle%2Findex.html*%2F%0A(function()%0A%7B%0A%20%20%20%20function%20submit(a)%7B%0A%20%20%20%20%20%20%20%20a%20%3D%20a.toLowerCase()%3B%0A%20%20%20%20%20%20%20%20for%20(const%20ch%20of%20a)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20window.dispatchEvent(new%20KeyboardEvent('keydown'%2C%20%7Bkey%3A%20ch%7D))%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20window.dispatchEvent(new%20KeyboardEvent('keydown'%2C%20%7Bkey%3A%20'Enter'%7D))%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20getDate()%7B%0A%20%20%20%20%20%20%20%20const%20date%20%3D%20new%20Date()%3B%0A%20%20%20%20%20%20%20%20return%20%60%24%7Bdate.getFullYear()%7D-%24%7B(date.getMonth()%2B1).toString().padStart(2%2C'0')%7D-%24%7Bdate.getDate().toString().padStart(2%2C%20'0')%7D%60%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20(function()%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20fetch(%60https%3A%2F%2Fwww.nytimes.com%2Fsvc%2Fwordle%2Fv2%2F%24%7BgetDate()%7D.json%60)%0A%20%20%20%20%20%20%20%20.then((body)%20%3D%3E%20body.json())%0A%20%20%20%20%20%20%20%20.then((data)%20%3D%3E%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20submit(data.solution)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)()%3B%0A%7D)()%3B%7D)()%3B">Wordle</a>