import React from 'react'

export default function Hero({ info }) {
  const phones = info?.phones || []
  const whatsapp = info?.whatsapp || phones[0]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.5),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 lg:py-28 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {info?.name || 'Jay Beny Trading Co'}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-100">
              {info?.tagline || 'Cement • TMT Rebar • All Building Materials'}
            </p>
            <p className="mt-2 text-blue-100">{info?.location || 'Gossainpur, Bagdogra'}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 px-4 py-2 ring-1 ring-inset ring-white/30 transition">
                  <span className="font-semibold">Call</span>
                  <span className="font-mono">{p}</span>
                </a>
              ))}
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-600 px-4 py-2 transition shadow"
                >
                  WhatsApp Enquiry
                </a>
              )}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 ring-1 ring-white/20">
              <h3 className="text-xl font-semibold mb-4">Fast delivery across Siliguri & nearby</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-blue-100">
                {(info?.categories || []).slice(0,6).map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/80" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
