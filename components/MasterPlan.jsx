'use client'
import React, { useState, useEffect } from 'react'
import { masterplanImages } from '../lib/images'

const plans = [
  { 
    label: '3.5 BHK Residence', 
    img: masterplanImages.bhk35 || '/images/masterplan/3.5floorplan.webp',
    details: {
        saleable: '2,412 Sq.Ft.',
        carpet: '1,525 Sq.Ft.'
    }
  },
  { 
    label: '4 BHK + 4T Residence', 
    img: masterplanImages.bhk4 || '/images/masterplan/4BHK+4Tfloorplan.webp',
    details: {
        saleable: '2,975 Sq.Ft.',
        carpet: '1,863 Sq.Ft.'
    }
  },
  { 
    label: '4 BHK Duplex Penthouse', 
    img: masterplanImages.penthouse4 || '/images/masterplan/4BHK+4T2floorplan.webp.webp',
    details: {
        saleable: '6,266 Sq.Ft.',
        carpet: '3,730 Sq.Ft.'
    }
  },
]

const MasterPlan = ({ setIsOpen }) => {
  const [activeTab, setActiveTab] = useState('master')
  const [lightboxImg, setLightboxImg] = useState(null)

  useEffect(() => {
    if (!lightboxImg) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImg(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImg])

  return (
    <section id="masterplan" className="relative py-20 bg-[#f4ebe4] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center" data-aos="fade-up" data-aos-duration="1000">
          <h2
            className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}
          >
            Site & Floor Plans
          </h2>
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-2 mb-8">
            <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
            <div className="w-2 h-2 rounded-full bg-[#7d9b93] mx-3"></div>
            <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center items-center">
            <button 
              onClick={() => setActiveTab('master')}
              className={`px-8 py-3 text-[17px] font-medium transition-all border border-[#000242] ${activeTab === 'master' ? 'bg-[#000242] text-white' : 'bg-transparent text-[#000242]'}`}
            >
              Master Plan
            </button>
            <button 
              onClick={() => setActiveTab('floor')}
              className={`px-8 py-3 text-[17px] font-medium transition-all border border-l-0 border-[#000242] ${activeTab === 'floor' ? 'bg-[#000242] text-white' : 'bg-transparent text-[#000242]'}`}
            >
              Floor Plan
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-[1240px] mx-auto">
          {activeTab === 'master' && (
            <div className="w-full max-w-[820px] mx-auto bg-white rounded-md overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] p-4" data-aos="zoom-in" data-aos-duration="1000">
              <div onClick={() => setLightboxImg(masterplanImages.masterPlan)} className="cursor-pointer block relative overflow-hidden group bg-[#fdfbf7]">
                <img 
                  src={masterplanImages.masterPlan} 
                  alt="Master Plan" 
                  className="w-full h-auto mx-auto transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
          )}

          {activeTab === 'floor' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1240px] mx-auto">
              {plans.map((plan, idx) => (
                <div key={idx} className="w-full bg-white rounded-md overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={idx * 100}>
                  <div onClick={() => setLightboxImg(plan.img)} className="cursor-pointer relative h-[260px] overflow-hidden group bg-[#fdfbf7] flex items-center justify-center p-4">
                    <img 
                      src={plan.img} 
                      alt={plan.label} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6 text-center border-t border-gray-100 bg-white flex-1 flex flex-col justify-center">
                    <h4 className="text-[20px] sm:text-[22px] text-[#000242] font-semibold mb-3">{plan.label}</h4>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[15px] text-gray-600"><span className="font-semibold text-gray-800">Saleable Area </span>: {plan.details.saleable}</p>
                      <p className="text-[15px] text-gray-600"><span className="font-semibold text-gray-800">Carpet Area </span>: {plan.details.carpet}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightboxImg(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[10000] p-2 bg-black/40 rounded-full"
            onClick={() => setLightboxImg(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div className="relative w-full max-w-[95vw] max-h-[90vh] flex items-center justify-center">
            <img 
              src={lightboxImg} 
              alt="Plan Preview" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded bg-white p-2 md:p-4"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default MasterPlan

