import express from "express";

const router = express.Router();

// dummy database
let courses = [
  { id: 1, name: "Math", teacher: "Mr. Sharma" },
  { id: 2, name: "Science", teacher: "Mrs. Gurung" },
];

// GET all courses
router.get("/", (req, res) => {
  res.status(200).json({
    message: "All courses fetched",
    data: courses,
  });
});

// GET single course by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    res.status(404).json({ message: "Course not found" });
    return;
  }

  res.status(200).json({
    message: "Course found",
    data: course,
  });
});

// POST add a new course
router.post("/", (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
    teacher: req.body.teacher,
  };

  courses.push(newCourse);

  res.status(201).json({
    message: "Course added",
    data: newCourse,
  });
});

// PUT update a course
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    res.status(404).json({ message: "Course not found" });
    return;
  }

  course.name = req.body.name || course.name;
  course.teacher = req.body.teacher || course.teacher;

  res.status(200).json({
    message: "Course updated",
    data: course,
  });
});

// DELETE a course
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    res.status(404).json({ message: "Course not found" });
    return;
  }

  courses = courses.filter((c) => c.id !== id);

  res.status(200).json({
    message: "Course deleted",
  });
});

export default router;
