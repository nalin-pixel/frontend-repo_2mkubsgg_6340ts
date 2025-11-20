import React, { useState } from 'react'

export default function EnquiryForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', phone: '', requirement: '', quantity: '', location: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await onSubmit(form)
      setStatus({ ok: true, msg: "Thanks! We'll call you shortly." })
      setForm({ name: '', phone: '', requirement: '', quantity: '', location: '', message: '' })
    } catch (err) {
      setStatus({ ok: false, msg: err.message || 'Failed to submit' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-gray-50/60 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Request a Call Back</h2>
        <p className="text-gray-600 mt-1">Share your requirement. We respond quickly.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" required className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="requirement" value={form.requirement} onChange={handleChange} placeholder="Material (e.g., Ultratech Cement, 12mm TMT)" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
          <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity (e.g., 50 bags, 1 truck)" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Site location (area)" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any notes" rows="3" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />

          <div className="md:col-span-2 flex items-center gap-3">
            <button disabled={loading} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Enquiry'}
            </button>
            {status && (
              <span className={status.ok ? 'text-emerald-600' : 'text-red-600'}>
                {status.msg}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
