import { describe, it, expect } from "@jest/globals";

import {
  getAverageByTeam,
  getAverageGradeOfAllStudents,
  getAverageGradeOfEachTeam,
} from "../studentQuestions";
import { students } from "../data/students";

// 1)

// what is the average grade of all students class?
// which student had the highest grade overall?
// which team had the highest average grade
// which student had the lowest single grade?
// which student on each team had the lowest single grade?
// how many teams are there?

// see how they group data together

// 2) Make it more difficult by making the data bad
// - see if they sanitizze the data at the start

// data might be bad

describe("interview", () => {
  describe("getAverageGrade", () => {
    it("should get the average grade from all students", () => {
      expect(getAverageGradeOfAllStudents(students)).toStrictEqual(79.5);
    });
  });

  describe("getAverageGradeOfEachTeam", () => {
    it("should get the average grade from the apple team and the banana team", () => {
      expect(getAverageGradeOfEachTeam(students)).toStrictEqual({
        apple: 80.2,
        banana: 78.8,
      });
    });
  });

  describe("getAverageByTeam", () => {
    it.only("should get the average grade for each team even when we don't know how many teams there are", () => {
      expect(getAverageByTeam(students)).toStrictEqual([
        {
          name: "apple",
          average: 80.2,
        },
        {
          name: "banana",
          average: 78.8,
        },
      ]);
    });
  });

  describe("getStudentWithHighestSingleGrade", () => {
    it("should return the student with the highest single grade (not the highest average grade)", () => {});
  });
});
