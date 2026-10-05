// src/exercise.ts
interface Student {
    name: string;
    age: number;
    score: number;
}

const students: Student[] = [
    { name: "Andi", age: 20, score: 85 },
    { name: "Budi", age: 19, score: 70 }
];

// Tampilkan data di console
console.log("Daftar mahasiswa:");
students.forEach(s => {
    console.log(`${s.name} (umur ${s.age}) – nilai: ${s.score}`);
});
