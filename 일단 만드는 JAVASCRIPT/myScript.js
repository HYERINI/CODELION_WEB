//로또 번호 1~45까지의 정수 랜덤 출력해주는 코드

var ball1 = parseInt(Math.random() * 45 + 1);
var ball2 = parseInt(Math.random() * 45 + 1);

document.write(ball1);
document.write('\n');
document.write(ball2);