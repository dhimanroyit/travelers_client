import React from 'react';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ManageServiceItem({title, description}) {
  return (
    <div className="px-5 py-1.5 grid grid-cols-3">
      <div>{title}</div>
      <div>{description}</div>
      <div className="space-x-3">
        <button className="p-2 bg-green-500 text-white rounded-md"><FontAwesomeIcon icon={faEdit} /></button>
        <button className="p-2 bg-red-500 text-white rounded-md"><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>
    </div>
  )
}

export default ManageServiceItem
