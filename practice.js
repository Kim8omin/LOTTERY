//전체숫자 45개 중에서 7개의 숫자를 랜덤으로 뽑는 것을 두가지 방식으로 나열 (for문, 배열 메서드 사용)

const list =[]

//1. 45까지의 숫자를 배열에 담기
for (n=1 ; n<=45; n+=1) {
    list.push(n)
}
console.log(list);

//2. 7개의 숫자 랜덤으로 뽑기 (for문)

const listRandom =[]

for (n=1; n<=7; n+=1) {
const num=Math.floor(Math.random()*45+1)
listRandom.push(num);
};
console.log(listRandom);

//3. 7의 숫자 랜덤으로 뽑기(배열메서드) 
//const a= Array(45).fill().map((v,i)=>i+1); (45까지의 undefined 요소로 채워진 배열->45까지 담았다.)

//45개의 숫자가 들어간 배열만들기 

const fourtyFive=Array(45).fill().map((v,i)=>i+1);
console.log(fourtyFive);
//그 45개의 숫자 중에서 하나를 뽑기 
const random=Math.floor(Math.random()*fourtyFive.length);
console.log(random);

/*const three=fourtyFive.splice(2,3);
const randomThree=fourtyFive.splice(random,3);
console.log(three); //[3,4,5]
console.log(randomThree); //[40,41,42]
console.log(randomThree); //[40,41,42]
const emptyBox =[1];

for (let i=0; i<randomThree.length; i++){
    emptyBox.push(randomThree[i]);
}

console.log(emptyBox);

/*45개의 숫자 중에서 랜덤하게 숫자 하나를 뽑아 그 하나를 인덱스로 주어서 45개 중 해당 인덱스의 값을 지우고 
splice로 튀어나온 값은 다른 배열에 저장해서 그걸 다시 빈 배열에 저장해주기, 그걸 45번 반복하기 */

const emptyBox=[];

const 나튀어나옴= fourtyFive.splice(random,1);
console.log(random);
console.log(나튀어나옴);
console.log(fourtyFive);
emptyBox.push(나튀어나옴[0]);

console.log(emptyBox);