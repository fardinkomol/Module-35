// const student = {
//     name: 'Andrew tate',
//     money: 5000,
//     study: 'Math',
//     subject: ['calculus', 'algebra', 'geometry'],
//     exam: function(){
//         console.log(this.name, 'is perticipating in the exam');
//     }
// }
// student.exam();
const student = {
    name: 'Andrew tate',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participating in the exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is participating ion the exam ${subject}`
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount-tips;
        return this.money;
    }    
}
const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDay(900,100);
console.log(remaining);
const bakiTaka = student.treatDay(500,50);
console.log(bakiTaka);

