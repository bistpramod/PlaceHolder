// a constant database 

let courses = [
  { id: 1, name: "Math", teacher: "Mr. Sharma" },
  { id: 2, name: "Science", teacher: "Mrs. Gurung" },
];
// check the status 
export const getCourses = (req, res) => {
  res.status(200).json({
    message: "All courses fetched",
    data: courses,
  });
};
// finding  out 
export const getCourseById = (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.status(200).json({
    message: "Course found",
    data: course,
  });
};

export const createCourse = (req, res) => {
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
};

export const updateCourse = (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  course.name = req.body.name || course.name;
  course.teacher = req.body.teacher || course.teacher;

  res.status(200).json({
    message: "Course updated",
    data: course,
  });
};

export const deleteCourse = (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  courses = courses.filter((c) => c.id !== id);

  res.status(200).json({
    message: "Course deleted",
  });
};