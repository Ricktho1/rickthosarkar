import { describe, expect, it } from "vitest";
import { stats } from "../components/Hero";
import { experiences } from "../components/Experience";
import { projects } from "../components/Projects";
import { highlightedRoles } from "../components/Memberships";
import { researchPaper } from "../components/Research";
import resume from "../assets/resume.pdf.asset.json";

describe("current technical resume", () => {
  it("retains exactly three internships", () => {
    expect(experiences).toHaveLength(3);
    expect(stats.find(stat => stat.label === "Internships")?.value).toBe("3");
  });
  it("records the four current projects including Flipkart", () => {
    expect(projects).toHaveLength(4);
    expect(projects.find(project => project.organization === "Flipkart Grid 5.0")?.period).toBe("Sep 2023 – Nov 2023");
  });
  it("records the Robocon stage outcomes without claiming a win", () => {
    expect(projects.find(project => project.organization === "Team Robocon 2024, IIT (BHU)")?.outcome).toBe("Qualified Stage 1 of Robocon 2024, represented IIT (BHU) in Stage 2 and exhibited the bot in Stage 3.");
  });
  it("uses the current completed leadership term", () => {
    expect(highlightedRoles.find(role => role.role === "Joint General Secretary")?.period).toBe("Jul 2025 – Jul 2026");
    expect(stats.find(stat => stat.label === "Students Represented")?.value).toBe("5,000+");
  });
  it("does not treat the research paper as published", () => {
    expect(researchPaper.status).toBe("Under Review");
    expect(researchPaper.journal).toBe("IEEE Transactions in AI");
  });
  it("opens an uploaded PDF asset rather than the old Drive resume", () => {
    expect(resume.content_type).toBe("application/pdf");
    expect(resume.url).toMatch(/^\/__l5e\/assets-v1\/.+\/Ricktho-Sarkar-Resume\.pdf$/);
  });
});