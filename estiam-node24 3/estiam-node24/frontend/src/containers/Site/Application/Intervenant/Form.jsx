import React, { useState } from 'react';

function AvailabilityForm() {
  const [availability, setAvailability] = useState('');
  const [availabilityList, setAvailabilityList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit existing item
      const updatedList = availabilityList.map((item, index) =>
        index === editIndex ? availability : item
      );
      setAvailabilityList(updatedList);
      setEditIndex(null);
    } else {
      // Add new item
      setAvailabilityList([...availabilityList, availability]);
    }
    setAvailability('');
  };

  const handleEdit = (index) => {
    setAvailability(availabilityList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = availabilityList.filter((_, i) => i !== index);
    setAvailabilityList(updatedList);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 mb-4">
        <label className="block text-gray-700 mb-2">Disponibilités:</label>
        <input
          type="text"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
          placeholder="Ex: Lundi 26/08/2024 : 10h-12h"
        />
        <button type="submit" className={`bg-blue-800 text-white p-2 rounded ${editIndex !== null ? 'bg-yellow-500' : 'bg-blue-800'}`}>
          {editIndex !== null ? 'Modifier' : 'Mettre à jour'}
        </button>
      </form>
      <ul className="list-none p-0">
        {availabilityList.map((item, index) => (
          <li key={index} className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded shadow-sm">
            <span>{item}</span>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(index)} className="text-blue-600 hover:underline">Modifier</button>
              <button onClick={() => handleDelete(index)} className="text-red-600 hover:underline">Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailabilityForm;
