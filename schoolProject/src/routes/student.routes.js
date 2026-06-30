import express from "express";

const router = express.Router();

// temporary array to act like a database
let students = [
  { id: 1, name: "java", grade: "10" },
  { id: 2, name: "python", grade: "9" },
];

// GET all students
router.get("/", (req, res) => {
  res.status(200).json({
    message: "All students fetched",
    data: students,
  });
});

// GET single student by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    res.status(404).json({ message: "Student not found" });
    return;
  }

  res.status(200).json({
    message: "Student found",
    data: student,
  });
});

// POST add a new student
router.post("/", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    grade: req.body.grade,
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added",
    data: newStudent,
  });
});

// PUT update a student
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    res.status(404).json({ message: "Student not found" });
    return;
  }

  student.name = req.body.name || student.name;
  student.grade = req.body.grade || student.grade;

  res.status(200).json({
    message: "Student updated",
    data: student,
  });
});

// DELETE a student
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    res.status(404).json({ message: "Student not found" });
    return;
  }

  students = students.filter((s) => s.id !== id);

  res.status(200).json({
    message: "Student deleted",
  });
});

export default router;
