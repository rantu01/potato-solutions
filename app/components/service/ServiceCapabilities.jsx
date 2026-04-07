"use client";
import React, { useState } from 'react';

export default function ServiceCapabilities() {
  // কোন ট্যাবটি বর্তমানে সিলেক্ট করা আছে তা ট্র্যাক করার জন্য স্টেট
  const [activeTab, setActiveTab] = useState('Brand Awareness');

  const tabs = ['Brand Awareness', 'Business Development', 'Customer Management'];

  // ট্যাব অনুযায়ী ডাটা
  const capabilityData = {
    'Brand Awareness': [
      { feature: 'Visual Content', detail: 'Custom graphics and video shorts for IG/TikTok', cadence: 'Daily' },
      { feature: 'Copywriting', detail: 'Strategic captions and blog post drafting', cadence: '3x Weekly' },
      { feature: 'Ad Creatives', detail: 'A/B tested visual sets for Meta and Google', cadence: 'Bi-Weekly' },
    ],
    'Business Development': [
      { feature: 'Lead Research', detail: 'Targeted account list building and verification', cadence: 'Daily' },
      { feature: 'Cold Outreach', detail: 'Personalized email and LinkedIn sequencing', cadence: 'Daily' },
      { feature: 'CRM Management', detail: 'Pipeline tracking and data hygiene', cadence: 'Weekly' },
    ],
    'Customer Management': [
      { feature: 'Success Reporting', detail: 'KPI tracking and performance analysis', cadence: 'Monthly' },
      { feature: 'Account Growth', detail: 'Upsell strategy and retention planning', cadence: 'Weekly' },
      { feature: 'Community Management', detail: 'Engagement and comment moderation', cadence: 'Daily' },
    ]
  };

  return (
    <section className="bg-[#fdfaf6] py-24 px-6 md:px-16">
      <div className="container mx-auto ">
        
        {/* Header */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#2d3748] mb-16">
          Service Capabilities
        </h2>

        {/* Tab Container */}
        <div className="bg-white rounded-[32px] shadow-sm overflow-hidden border border-gray-50">
          
          {/* Tab Headers */}
          <div className="flex flex-col md:flex-row bg-[#edeae4]/30 border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-5 text-sm md:text-base font-bold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-white text-[#c22d2d] shadow-[0_-4px_0_inset_#c22d2d]' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table Content */}
          <div className="p-6 md:p-10 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-sm uppercase tracking-wider">
                  <th className="pb-6 font-semibold">Feature</th>
                  <th className="pb-6 font-semibold">Execution Detail</th>
                  <th className="pb-6 font-semibold text-right">Cadence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {capabilityData[activeTab].map((item, index) => (
                  <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 text-[#2d3748] font-bold md:text-lg">{item.feature}</td>
                    <td className="py-6 text-gray-500 text-sm md:text-base pr-4">{item.detail}</td>
                    <td className="py-6 text-gray-500 text-sm md:text-base text-right font-medium italic">
                      {item.cadence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}