import { computeAverage, isPassing } from './gradeUtils.js';

const enrollees = [
  { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
  { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
  { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
  { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
  { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 },
];

function getEnrollees() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(enrollees);
    }, 1000);
  });
}

async function generateReport() {
  try {
    const data = await getEnrollees();

  const results = data.map((enrollee) => {
      const { name, prelim, midterm, final } = enrollee;
      const average = computeAverage(prelim, midterm, final);
      const status = isPassing(average) ? "PASSING" : "PROBATION";
      return { name, average, status };
    });

    const passing = results.filter((r) => r.status === "PASSING");

    const classAverage =
      results.reduce((sum, r) => sum + r.average, 0) / results.length;

         console.log("=== IT313 Enrollment Eligibility Report ===");
    results.forEach((r) => {
      console.log(`${r.name} - Average: ${r.average.toFixed(2)} - ${r.status}`);
    });
    console.log(`Class Average: ${classAverage.toFixed(2)}`);
    console.log(`Passing: ${passing.length} / ${results.length}`);

     } catch (error) {
    console.log("Failed to fetch enrollee data:", error.message);
  }
}

generateReport();
