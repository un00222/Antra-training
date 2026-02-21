const Model = {
  courses: [],
  selectedCourses: [],     
  confirmedCourses: [],   
  totalCredit: 0,
  confirmed: false,

  async fetchCourses() {
    try {
      const response = await fetch('http://localhost:4232/courses');
      if (!response.ok) throw new Error();
      this.courses = await response.json();
    } catch {
      this.courses = [
        { courseId: 1, courseName: "Calculus", required: true, credit: 3 },
        { courseId: 2, courseName: "Data Structures", required: true, credit: 3 },
        { courseId: 3, courseName: "System Design", required: true, credit: 3 },
        { courseId: 4, courseName: "Cyber Security", required: false, credit: 3 },
        { courseId: 5, courseName: "Web Design", required: false, credit: 2 },
        { courseId: 6, courseName: "Mobile Application Development", required: true, credit: 3 },
        { courseId: 7, courseName: "Cryptography", required: false, credit: 1 },
        { courseId: 8, courseName: "Block Chain Fundamentals", required: true, credit: 2 },
        { courseId: 9, courseName: "GUI Design", required: false, credit: 2 },
        { courseId: 10, courseName: "Game Design", required: false, credit: 3 }
      ];
    }
  },  

  toggleCourse(courseId) {
    const course = this.courses.find(c => c.courseId === courseId);
    if (!course) return { success: false, reason: "not_found" };

    const idx = this.selectedCourses.findIndex(c => c.courseId === courseId);

    if (idx !== -1) {
      this.selectedCourses.splice(idx, 1);
      this.totalCredit -= course.credit;
      return { success: true };
    }

    if (this.totalCredit + course.credit > 18) {
      return { success: false, reason: "overload" };
    }

    this.selectedCourses.push(course);
    this.totalCredit += course.credit;
    return { success: true };
  },

  confirmSelection() {
    this.confirmedCourses = [...this.selectedCourses];

    const confirmedIds = new Set(this.selectedCourses.map(c => c.courseId));

    this.courses = this.courses.filter(c => !confirmedIds.has(c.courseId));

    this.confirmed = true;
  }
};