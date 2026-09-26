// Change PORT to your Spring Boot backend port (e.g., 8080)
const API_BASE_URL = "http://localhost:8080/api";

export const apiService = {
  // Fetch active government challenges
  getChallenges: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/challenges`);
      if (!response.ok) throw new Error("Failed to fetch challenges");
      return await response.json();
    } catch (error) {
      console.warn("Using mock data due to backend disconnect:", error);
      return [
        {
          id: 1,
          title: "AI-based Traffic Management System",
          department: "Ministry of Road Transport",
          budget: "₹25,00,000",
          deadline: "2026-10-15",
          stage: "Open for Proposals",
          description: "Develop dynamic traffic signal controls using real-time camera feeds to minimize urban congestion.",
          category: "Smart Cities"
        },
        {
          id: 2,
          title: "Automated Crop Disease Detection Sandbox",
          department: "Department of Agriculture",
          budget: "₹15,00,000",
          deadline: "2026-11-01",
          stage: "Pilot Phase",
          description: "Satellite and drone image analytics tool to detect early-stage pest infestations for small farm holdings.",
          category: "Agritech"
        }
      ];
    }
  },

  // Submit startup proposal
  submitProposal: async (proposalData) => {
    const response = await fetch(`${API_BASE_URL}/proposals`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(proposalData)
    });
    return response.ok;
  },

  // Fetch active pilots & milestone statuses
  getPilots: async () => {
    return [
      {
        id: "PLT-882",
        startupName: "AgriVision AI Solutions",
        challengeTitle: "Automated Crop Disease Detection Sandbox",
        department: "Dept. of Agriculture",
        currentStage: "Stage 2: Field Trial",
        progressPercentage: 65,
        milestones: [
          { name: "Algorithm Prototype Validation", status: "Completed", payout: "₹3,00,000", date: "2026-06-10" },
          { name: "Field Pilot (50 Hectares Testbed)", status: "In Progress", payout: "₹7,00,000", date: "2026-09-30" },
          { name: "Scaling & Integration Readiness", status: "Pending", payout: "₹5,00,000", date: "2026-12-15" }
        ]
      }
    ];
  }
};