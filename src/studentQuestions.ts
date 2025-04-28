import type { Student, TeamAverage } from "./types";

// 1. Get the average grade from the entire class
const getAverageGradeOfAllStudents = (students: Student[]) => {
  const allGrades = students.reduce((accumulator, currentValue) => {
    const updated = [...accumulator, ...currentValue.grades];
    return updated;
  }, [] as number[]);

  const total = allGrades.reduce((sum, grade) => sum + grade, 0);
  return allGrades.length > 0 ? total / allGrades.length : 0;
};

// 2. Get the average grade of each of the 2 teams
const getAverageGradeOfEachTeam = (students: Student[]) => {
  const _getAverageGrade = (grades: number[]) => {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return grades.length > 0 ? total / grades.length : 0;
  };

  const appleTeam: number[] = [];
  const bananaTeam: number[] = [];

  students.forEach((student) => {
    if (student.team === "apple") {
      appleTeam.push(...student.grades);
    }

    if (student.team === "banana") {
      bananaTeam.push(...student.grades);
    }
  });

  const appleAverage = _getAverageGrade(appleTeam);
  const bananaAverage = _getAverageGrade(bananaTeam);

  return { apple: appleAverage, banana: bananaAverage };
};

// 3. Get the average grade for each team when we're not sure how many teams there are
const getAverageByTeam = (students: Student[]) => {
  const _getAverageGrade = (grades: number[]) => {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return grades.length > 0 ? total / grades.length : 0;
  };

  const teams = new Map<string, Student[]>();

  students.forEach((student) => {
    if (teams.has(student.team)) {
      const currentTeam = teams.get(student.team) as Student[];
      const updatedTeam = [...currentTeam, student];
      teams.set(student.team, updatedTeam);
    } else {
      teams.set(student.team, [student]);
    }
  });

  const result: TeamAverage[] = [];

  teams.forEach((value, key) => {
    const allGrades = value.reduce((accumulator, currentValue) => {
      const updated = [...accumulator, ...currentValue.grades];
      return updated;
    }, [] as number[]);

    const averageGrade = _getAverageGrade(allGrades);

    result.push({ name: key, average: averageGrade });
  });

  return result;
};

// 4. ? maybe move up
const getStudentWithHighestSingleGrade = (students: Student[]) => {
  let maxGrade: Student;
};

export {
  getAverageGradeOfAllStudents,
  getAverageGradeOfEachTeam,
  getAverageByTeam,
};
