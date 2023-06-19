const list=Array(45).fill().map((v,i)=> i+1); //45개의 숫자 배열 만들기
const empty = [];

while (list.length>0) {
const random=Math.floor(Math.random()*list.length)//0~44 인덱스
const picked= list.splice(random,1); //인덱스에 해당하는 숫자 한개 튀어나옴, list에서 제거
empty.push(picked[0]);//empty라는 배열에 튀어나온 숫자 한개 저장
}//while 문으로 돌아감
console.log(empty);

const sevenballs=empty.slice(0,6);//6개의 숫자를 뽑음
console.log(sevenballs);

const sortedBalls=sevenballs.sort((a,b)=>a-b); //오름차순으로 정렬 
console.log(sortedBalls);

//6개의 숫자가 뽑혔음. 

const bonus = empty[6]
console.log(bonus); //보너스 공 

const $result=document.querySelector('#result'); //html result와 연결

for (let i=0;i<sortedBalls.length ;i++) {
setTimeout (()=> {
 const $ball=document.createElement('div');
 $ball.className='ball'; //css ball과 연결 
 $ball.textContent=sortedBalls[i] //ball 안에 내용담기 
 $result.appendChild($ball) //div 내용을 result에 붙이기 
}, 1000*(i+1)); //1초 마다 
}

const $bonus=document.querySelector('#bonus'); //html bonus와 연결

setTimeout(()=>{
 const $ball =document.createElement('div');
 $ball.className='ball';
 $ball.textContent=bonus;
 $bonus.appendChild($ball);
},7000); //보너스 숫자 추가 