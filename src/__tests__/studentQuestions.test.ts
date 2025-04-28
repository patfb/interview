import { describe, expect, it } from "@jest/globals";
import { students } from "../data/students";
import {
  getAverageByTeam,
  getAverageGradeOfAllStudents,
  getAverageGradeOfEachTeam,
  getStudentsWithHighestSingleGrade,
} from "../studentQuestions";

describe("interview", () => {
  describe("#1 getAverageGrade", () => {
    it("should get the average grade from all students", () => {
      expect(getAverageGradeOfAllStudents(students)).toStrictEqual(80.6);
    });
  });

  describe("#2 getAverageGradeOfEachTeam", () => {
    it("should get the average grade from the apple team and the banana team", () => {
      expect(getAverageGradeOfEachTeam(students)).toStrictEqual({
        apple: 80.2,
        banana: 81,
      });
    });
  });

  describe("#3 getAverageByTeam", () => {
    it("should get the average grade for each team even when we don't know how many teams there are", () => {
      expect(getAverageByTeam(students)).toStrictEqual([
        {
          name: "apple",
          average: 80.2,
        },
        {
          name: "banana",
          average: 81,
        },
      ]);
    });
  });

  describe("#4 getStudentWithHighestSingleGrade", () => {
    it("should return the student with the highest single grade (not the highest average grade)", () => {
      expect(getStudentsWithHighestSingleGrade(students)).toStrictEqual([
        {
          grades: [95, 54, 69, 99, 73],
          name: "Linux Torvalds",
          team: "apple",
        },
        {
          grades: [88, 99, 78, 84, 81],
          name: "Margaret Hamilton",
          team: "banana",
        },
      ]);
    });
  });
});
