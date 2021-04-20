import React from 'react'
import ManageServiceItem from './ManageServiceItem/ManageServiceItem'

function ManageServices() {
  return (
    <section className="bg-white rounded-xl p-7 m-6">
      <div className="px-5 py-1.5 bg-gray-200 rounded-lg grid grid-cols-3">
        <h3>Service Title</h3>
        <h3>Description</h3>
        <h3>Action</h3>
      </div>
      <div className="mt-3 space-y-3">
        <ManageServiceItem title="dalsdfa" description="lalsdkfjalkdsf" />
        <ManageServiceItem title="dalsdfa" description="lalsdkfjalkdsf" />
      </div>
    </section>
  )
}

export default ManageServices
