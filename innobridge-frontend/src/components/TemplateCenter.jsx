import React from 'react';

export default function TemplateCenter() {
  const templates = [
    { title: "Standard Problem Statement Formulation Template", authority: "MSINS & Directorate of IT", code: "GoM-GR-2026-T1" },
    { title: "Model Pilot Sandbox Agreement for Startups", authority: "Industries Dept & Law & Judiciary", code: "GoM-AGR-PILOT-v2" },
    { title: "IP Co-Creation & Data Governance Clause", authority: "Department of IT", code: "GoM-IP-RULES-2024" },
    { title: "Exemption Certificate Framework for Turnover/Prior Experience", authority: "Finance Dept, Govt of Maharashtra", code: "GoM-FIN-EXEMP-09" }
  ];

  return (
    <div className="desktop-view">
      <div className="page-header-desktop">
        <div>
          <h2>Government Resolution (GR) & Legal Template Center</h2>
          <p>Standardized document templates for department procurement officers and startups.</p>
        </div>
      </div>

      <div className="template-grid-desktop">
        {templates.map((tpl, i) => (
          <div key={i} className="template-card">
            <span className="tpl-code">{tpl.code}</span>
            <h3>{tpl.title}</h3>
            <p className="tpl-auth">Issuing Nodal Body: {tpl.authority}</p>
            <button className="btn-secondary" onClick={() => alert(`Downloading official ${tpl.code} document template.`)}>
              ⬇ Download Approved Template (DOCX/PDF)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}