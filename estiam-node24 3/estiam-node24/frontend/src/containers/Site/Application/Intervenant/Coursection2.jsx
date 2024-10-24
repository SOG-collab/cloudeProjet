import React, { useState, useEffect } from 'react';
import Calendar from './Calendar'; // Assurez-vous que le chemin d'importation est correct

function CourseSection2({ onCoursesChange }) { 
  const [courses, setCourses] = useState([
    { id: 1, name: 'Cours Exemple', time: '09:00 - 10:30', room: 'A', level: 'Première Année', date: '2024-08-26', students: 20 },
  ]);

  const [editingCourse, setEditingCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    id: null,
    name: '',
    time: '',
    room: '',
    level: '',
    date: '',
    students: 0
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (onCoursesChange) {
      onCoursesChange(courses); 
    }
  }, [courses, onCoursesChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCourse) {
      // Update existing course
      setCourses(courses.map(course =>
        course.id === newCourse.id ? newCourse : course
      ));
      setEditingCourse(null);
    } else {
      // Add new course
      setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
    }
    setNewCourse({ id: null, name: '', time: '', room: '', level: '', date: '', students: 0 });
    setIsFormVisible(false);
  };

  const handleEdit = (course) => {
    setNewCourse(course);
    setEditingCourse(true);
    setIsFormVisible(true);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (isFormVisible) {
      setNewCourse({ id: null, name: '', time: '', room: '', level: '', date: '', students: 0 });
      setEditingCourse(null);
    }
  };

  const markedDates = courses.map(course => new Date(course.date));

  const isMarkedDate = (date) => {
    return markedDates.some(markedDate => 
      date.getFullYear() === markedDate.getFullYear() &&
      date.getMonth() === markedDate.getMonth() &&
      date.getDate() === markedDate.getDate()
    );
  };

  return (
    <section className="w-full max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Mes Cours</h2>
      <button
        onClick={handleToggleForm}
        className={`bg-${isFormVisible ? 'red' : 'blue'}-700 text-white px-4 py-2 rounded mb-4 hover:bg-${isFormVisible ? 'red' : 'blue'}-800`}
      >
        {isFormVisible ? 'Fermer le Formulaire' : 'Ajouter un Cours'}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{editingCourse ? 'Modifier le Cours' : 'Ajouter un Cours'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newCourse.name}
              onChange={handleChange}
              placeholder="Nom du Cours"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="time"
              value={newCourse.time}
              onChange={handleChange}
              placeholder="Horaires"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="room"
              value={newCourse.room}
              onChange={handleChange}
              placeholder="Salle"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="level"
              value={newCourse.level}
              onChange={handleChange}
              placeholder="Niveau"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={newCourse.date}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="number"
              name="students"
              value={newCourse.students}
              onChange={handleChange}
              placeholder="Nombre d'Étudiants"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            {editingCourse ? 'Mettre à jour' : 'Ajouter'}
          </button>
        </form>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <div
            key={course.id}
            className="bg-blue-100 p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleEdit(course)}
          >
            <h3 className="text-xl font-semibold">{course.name}</h3>
            <p>Horaires: {course.time}</p>
            <p>Date: {course.date}</p>
            <p>Nombre d'Étudiants: {course.students}</p>
            <button onClick={(e) => { e.stopPropagation(); handleDelete(course.id); }} className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600">
              Supprimer
            </button>
          </div>
        ))}
      </div>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={({ date }) => 
          isMarkedDate(date) ? 'marked-date' : null
        }
      />
    </section>
  );
}

export default CourseSection2;

