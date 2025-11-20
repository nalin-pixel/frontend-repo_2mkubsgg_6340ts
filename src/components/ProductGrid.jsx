import React from 'react'

export default function ProductGrid({ products }) {
  const grouped = products.reduce((acc, p) => {
    const k = p.category || 'Others'
    acc[k] = acc[k] || []
    acc[k].push(p)
    return acc
  }, {})

  const categories = Object.keys(grouped)

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Products</h2>
      <p className="text-gray-600 mt-1">Indicative items. Call for best price and availability.</p>

      <div className="mt-8 space-y-10">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{cat}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grouped[cat].map((p, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow border border-gray-100 p-5 flex flex-col">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{p.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{p.brand || ''} {p.grade ? `• ${p.grade}` : ''}</p>
                    {p.description && <p className="text-sm text-gray-700 mt-2">{p.description}</p>}
                  </div>
                  <div className="pt-4 text-sm text-gray-500 flex items-center justify-between">
                    <span>Unit: {p.unit}</span>
                    <span className="font-medium text-gray-800">{p.in_stock ? 'In Stock' : 'Ask'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
