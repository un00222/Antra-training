const Controller = {
  async init() {
    await Model.fetchCourses();
    this.render();
  },

  render() {
    const selectedIds = new Set(Model.selectedCourses.map(c => c.courseId));
    View.renderCourseList('available-list', Model.courses, selectedIds, !Model.confirmed);
 
    if (!Model.confirmed) {
      View.clear('selected-list');
    } else {
      const confirmedIds = new Set(Model.confirmedCourses.map(c => c.courseId));
      View.renderCourseList('selected-list', Model.confirmedCourses, confirmedIds, false);
    }

    View.updateTotalCredit(Model.totalCredit);
    View.updateSelectButton(Model.selectedCourses.length === 0 || Model.confirmed);
  },

  handleToggleCourse(courseId) {
    if (Model.confirmed) return;

    const result = Model.toggleCourse(courseId);

    if (!result.success && result.reason === 'overload') {
      alert('You can only choose up to 18 credits in one semester');
      return;
    }

    this.render();
  },

  handleSelectButton() {
    const ok = confirm(
      `You have chosen ${Model.totalCredit} credits for this semester. You cannot change once you submit. Do you want to confirm?`
    );

    if (ok) {
      Model.confirmSelection();
      this.render();
      document.getElementById('success-msg').style.display = 'block';
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Controller.init();
  document.getElementById('select-btn').addEventListener('click', () => {
    Controller.handleSelectButton();
  });
});