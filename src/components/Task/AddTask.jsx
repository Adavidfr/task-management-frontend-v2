import React from "react";

export default function AddTask({ onClose }) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
      {/* Botón X para cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        ×
      </button>

      {/* Título */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Task</h2>

      {/* Formulario */}
      <form className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-200 text-gray-500 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Description
          </label>
          <textarea
            className="w-full p-2 rounded bg-gray-200 text-gray-500 focus:outline-none"
            rows="3"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Tags
          </label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-200 text-gray-500 focus:outline-none"
            placeholder="e.g. Work, Urgent"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Deadline
          </label>
          <input
            type="date"
            className="w-full p-2 rounded bg-gray-200 text-gray-500 focus:outline-none"
          />
        </div>

        {/* Botón Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
