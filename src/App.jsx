import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import EnquiryForm from './components/EnquiryForm'

function App() {
  const [info, setInfo] = useState(null)
  const [products, setProducts] = useState([])

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const [iRes, pRes] = await Promise.all([
          fetch(`${baseUrl}/api/info`),
          fetch(`${baseUrl}/api/products`),
        ])
        const i = await iRes.json()
        const p = await pRes.json()
        setInfo(i)
        setProducts(p)
      } catch (e) {
        setInfo({
          name: 'Jay Beny Trading Co',
          tagline: 'Cement • TMT Rebar • All Building Materials',
          location: 'Gossainpur, Bagdogra',
          phones: ['9800014161', '9832030002'],
          whatsapp: '9800014161',
          categories: ['Cement', 'TMT Rebar', 'Bricks & Blocks', 'Sand & Aggregates']
        })
        setProducts([])
      }
    }
    load()
  }, [])

  const submitLead = async (data) => {
    const res = await fetch(`${baseUrl}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      const t = await res.text()
      throw new Error(t || 'Failed to submit')
    }
    return res.json()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero info={info} />
      <ProductGrid products={products} />
      <EnquiryForm onSubmit={submitLead} />

      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} Jay Beny Trading Co • Gossainpur, Bagdogra • Ph: 9800014161 / 9832030002
      </footer>
    </div>
  )
}

export default App
