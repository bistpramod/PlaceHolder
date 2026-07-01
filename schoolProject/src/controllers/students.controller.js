

// temporary array
let students = [
  { id: 1, name: "java", grade: "10" },
  { id: 2, name: "python", grade: "9" },
];

// GET all students
export const getStudents = (req, res) => {
  res.status(200).json({
    message: "All students fetched",
    data: students,
  });
};

// GET single student
export const getStudentById = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json({
    message: "Student found",
    data: student,
  });
};

// create  student
export const createStudent = (req, res) => {
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
};

// update the  student
export const updateStudent = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = req.body.name || student.name;
  student.grade = req.body.grade || student.grade;

  res.status(200).json({
    message: "Student updated",
    data: student,
  });
};

// delete student
export const deleteStudent = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  students = students.filter((s) => s.id !== id);

  res.status(200).json({
    message: "Student deleted",
  });
};