const View = {
  renderCourseList(containerId, courses, highlightedIds, clickable = true) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    courses.forEach((course, index) => {
      const div = document.createElement('div');
      div.classList.add('course-item');

      const isHighlighted = highlightedIds.has(course.courseId);

      if (!isHighlighted && index % 2 === 0) {
        div.classList.add('alt');
      }

      if (isHighlighted) {
        div.classList.add('highlighted');
      }

      const type = course.required ? 'Compulsory' : 'Elective';
      const typeClass = course.required ? 'compulsory' : 'elective';

      div.innerHTML = `
        <div class="course-name">${course.courseName}</div>
        <div class="course-type ${typeClass}">Course Type : ${type}</div>
        <div class="course-credit">Course Credit : ${course.credit}</div>
      `;

      if (clickable) {
        div.addEventListener('click', () => Controller.handleToggleCourse(course.courseId));
      }

      container.appendChild(div);
    });
  },

  clear(containerId) {
    document.getElementById(containerId).innerHTML = '';
  },

  updateTotalCredit(total) {
    document.getElementById('total-credit').textContent = total;
  },

  updateSelectButton(disabled) {
    document.getElementById('select-btn').disabled = disabled;
  }
};