'use client'
import React from 'react'
import Link from 'next/link'


const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/footer/footer.webp')", color: '#fff' }}>
    {/* Removed blue overlay as requested */}

    <div className="relative z-10">
      <div className="max-w-[860px] mx-auto px-2 sm:px-6 pt-14 pb-8 text-center">
        <h2 
          className="text-[21px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wide mb-2 text-white whitespace-nowrap sm:whitespace-normal" 
          style={{ fontFamily: F_JOST }} 
          data-aos="fade-in"
        >
          About The Developer
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
          Landmark 50-Acre Luxury Township — Bengaluru Airport Road, Bangalore
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <span style={{ width: '36px', height: '2.5px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px' }} />
        </div>
        <p style={{ fontSize: '15px', color: '#fff', fontFamily: 'var(--font-poppins), sans-serif', lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}
          data-aos="fade-in" data-aos-delay="100">
          Sattva Group presents Sattva City, Bangalore&apos;s premier luxury integrated township on Bengaluru Airport Road, near the toll gate, offering luxurious 3.5 BHK apartments across a sprawling 50-acre master-planned development. Thoughtfully curated with 84% open green spaces, four grand state-of-the-art clubhouses, an indoor temperature-controlled pool, and over 250+ world-class lifestyle amenities — Sattva City brings you a place where the city&apos;s convenience meets a quieter, lighter, and truly elevated way of living.
        </p>
        
        {/* RERA Block */}
        <div className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3.5 sm:px-6 py-3 sm:py-2.5 rounded border border-white/10 bg-white/5 max-w-full overflow-hidden shadow-sm">
          <span className="text-[13px] sm:text-[14px] text-[#aaa] font-normal whitespace-nowrap" style={{ fontFamily: F_SANS }}>RERA No :</span>
          <strong className="text-[12.5px] sm:text-[15px] text-white font-bold tracking-wider text-center break-all sm:break-normal max-w-full" style={{ fontFamily: F_JOST }}>PRM/KA/RERA/1251/472/PR/270226/008494</strong>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
        <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
          &copy; 2026 Sattva City. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          
          <span style={{ color: '#444' }}>|</span>
          <Link href="/privacy-policy" style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_SANS }}>
            Privacy Policy
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '10.5px', color: '#999', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
          <strong style={{ color: '#bbb' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
