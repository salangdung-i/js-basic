// Q1. make a string out of an array
// join
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();   // κ΅¬λΆμ 
    console.log(result);
}
  
  // Q2. make an array out of a string
  // split
  {
    const fruits = 'π, π₯, π, π';
    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // reverse : λ°°μ΄ μμ²΄λ₯Ό λ³νμν€κ³ , λ¦¬ν΄κ°λ λ³νλ¨
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  // splice(μ§μΈ μμ μΈλ±μ€, μ­μ ν  κ°―μ) return
  // slice 
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result = students.find((student) => student.score === 90);
    console.log(result);

    students.forEach((student) => {
        if(student.score == 90) {
            console.log(student.name);
        }
    });
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // map 
  {
      const result = students.map((student) => student.score);
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  // some : μ‘°κ±΄μ νλλΌλ λ§μ‘±νλ©΄ true
  // every : λͺ¨λ μ‘°κ±΄μ λ§μ‘±ν΄μΌν¨
  {
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
  }
  
  // Q9. compute students' average score
  // reduce
  {
    console.clear();
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(`result: ${result/students.length}`);

  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students
      .map(student => student.score)
      .filter((score) => score >= 50)
      .join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join()
    console.log(result);
  }