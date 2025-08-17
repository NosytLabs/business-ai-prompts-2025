# 📊 Project Management Prompts

**12 specialized prompts for planning, executing, and tracking projects.**

---

## 1. Project Plan Outline Generator

**Use Case**: Creating a comprehensive project plan for a new initiative.

```
Create a detailed project plan outline for a project.

Project Details:
- Project Name: [Project Name]
- Project Goal: [What is the single, measurable goal of the project? (e.g., Launch the new mobile app by Q4)]
- Key Stakeholders: [List the main people involved]
- Project Scope (In/Out): [What is included and explicitly excluded from the project?]
- High-Level Timeline: [e.g., 3 months, Q3-Q4 2025]
- Estimated Budget: [High-level budget]

Generate a project plan outline that includes the following sections:
1.  Executive Summary
2.  Goals and Objectives
3.  Scope Statement
4.  Deliverables
5.  Milestones and Timeline (with key dates)
6.  Resource Plan (Team roles and responsibilities)
7.  Risk Assessment and Mitigation Plan
8.  Communication Plan
9.  Budget
10. Success Metrics
```

**Example Output**:
```
**Project Plan: New Mobile App Launch**

**1. Executive Summary:**
This document outlines the plan for developing and launching our new mobile application for iOS and Android. The project aims to increase customer engagement by providing a dedicated mobile experience...

**2. Goals and Objectives:**
- **Goal:** Launch the app to the Apple App Store and Google Play Store by December 1st, 2025.
- **Objectives:** Achieve 10,000 downloads in the first month. Secure a 4.5+ star rating...
```

---

## 2. Risk Assessment Matrix Creator

**Use Case**: Identifying and assessing potential risks for a project.

```
Create a risk assessment matrix for a project.

Project Context:
- Project Name: [Project Name]
- Key Project Phases: [e.g., Design, Development, Testing, Launch]

Identify at least 5 potential risks. For each risk, provide:
- **Risk Description:** A clear description of the risk.
- **Likelihood:** (Low, Medium, High) - The probability of the risk occurring.
- **Impact:** (Low, Medium, High) - The potential impact on the project if the risk occurs.
- **Risk Score:** (Calculated from Likelihood x Impact)
- **Mitigation Strategy:** A specific plan to reduce the likelihood or impact of the risk.
- **Owner:** The person responsible for monitoring the risk.

Present this information in a structured table format.
```

**Example Output**:
```
**Risk Assessment for "Website Redesign" Project**

| Risk Description | Likelihood | Impact | Mitigation Strategy | Owner |
|---|---|---|---|---|
| Key designer resigns mid-project | Low | High | Ensure all design files are shared and documented weekly. | Project Manager |
| Scope creep from marketing team | High | Medium | Implement a formal change request process; require all new requests to be approved by the project sponsor. | Project Manager |
| Delay in content delivery from client | Medium | Medium | Set clear content deadlines in the project plan and send weekly reminders. | Account Manager |
```

---

## 3. Project Status Report Drafter

**Use Case**: Writing a clear and concise weekly or bi-weekly project status report.

```
Draft a project status report for the past [Week/Two Weeks].

Report Details:
- Project Name: [Project Name]
- Reporting Period: [e.g., Week of Oct 13, 2025]
- Overall Status: [On Track / At Risk / Off Track] - Use a color code (Green/Yellow/Red).
- Key Accomplishments This Period: [List 3-5 completed tasks or milestones]
- Upcoming Priorities Next Period: [List the main focus for the next 1-2 weeks]
- Blockers or Issues: [List any challenges impeding progress and what is being done]
- Budget Update: [Spent vs. Budgeted]

Structure the report to be easily digestible for busy stakeholders. Start with the overall status for a quick overview.
```

**Example Output**:
```
**Subject: Project Status: New Mobile App - 🟢 ON TRACK**

**Reporting Period:** July 15-21, 2025

**Overall Status: 🟢 ON TRACK**

**Accomplishments This Period:**
- Completed user authentication feature.
- Finalized database schema.
- Onboarded new junior developer.

**Priorities for Next Period:**
- Begin work on the main dashboard UI.
- Conduct first round of user testing with wireframes.

**Blockers:**
- None at this time.

**Budget:**
- Spent: $50,000 / $150,000 (33%)
- Burn rate is aligned with project timeline.
```

---

## 4. Work Breakdown Structure (WBS) Generator

**Use Case**: Breaking down a large project into smaller, manageable components.

```
Create a Work Breakdown Structure (WBS) for a project.

Project Information:
- Project Name: [Project Name]
- Major Deliverables: [List the 3-5 main outputs of the project]

For each major deliverable, break it down into smaller work packages or tasks. Structure the output as a hierarchical list (e.g., using indentation or numbered lists) to show the relationship between deliverables and tasks.

Example:
1.0 Website Redesign
  1.1 Discovery & Planning
    1.1.1 Stakeholder Interviews
    1.1.2 Create Project Plan
  1.2 UX/UI Design
    1.2.1 Wireframes
    1.2.2 Mockups
```

**Example Output**:
```
**Project: Q4 Marketing Campaign**

1.0 **Campaign Planning**
    1.1 Define Goals & KPIs
    1.2 Audience Segmentation
    1.3 Budget Allocation
2.0 **Creative Development**
    2.1 Write Ad Copy
    2.2 Design Visual Assets
    2.3 Produce Video Content
3.0 **Campaign Launch**
    3.1 Configure Ad Platforms
    3.2 Schedule Social Media Posts
    3.3 "Go Live"
4.0 **Reporting & Analysis**
    4.1 Weekly Performance Reports
    4.2 A/B Test Analysis
    4.3 Final Campaign ROI Report
```

---

## 5. Stakeholder Communication Plan

**Use Case**: Planning how to communicate with project stakeholders effectively.

```
Create a stakeholder communication plan for a project.

Project Details:
- Project Name: [Project Name]
- Key Stakeholders: [List of stakeholders, e.g., "CEO", "Marketing Team Lead", "Lead Engineer"]

For each stakeholder or stakeholder group, define:
- **Communication Goal:** What do they need to know?
- **Information to be Communicated:** (e.g., Project status, budget updates, risks)
- **Communication Method:** (e.g., Email, Weekly Meeting, Status Report)
- **Frequency:** (e.g., Daily, Weekly, Bi-weekly, As needed)
- **Owner:** Who is responsible for the communication?

Present this in a structured table.
```

**Example Output**:
```
| Stakeholder | Info Needed | Method | Frequency | Owner |
|---|---|---|---|---|
| **CEO** | High-level summary of progress, risks, and budget. | Email | Bi-weekly | Project Manager |
| **Marketing Team** | Detailed updates on project timeline and feature changes that affect their campaigns. | Weekly Project Meeting | Weekly | Project Manager |
| **Lead Engineer** | Daily discussion of technical challenges and blockers. | Daily Standup | Daily | Tech Lead |
| **All Employees** | Major milestone announcements. | Company-wide Slack Channel | As needed | Project Manager |
```

---

## 6. Project Kickoff Meeting Agenda

**Use Case**: Structuring the agenda for a project kickoff meeting to ensure alignment and a strong start.

```
Create a detailed agenda for a project kickoff meeting.

Project Name: [Project Name]
Meeting Duration: [e.g., 60 minutes, 90 minutes]
Attendees: [List all key stakeholders, team members, and clients]

The agenda should include the following sections with time allocations:
1.  **Introductions (5 min):** [Team members introduce themselves and their roles.]
2.  **Project Background & Vision (15 min):** [Project sponsor or manager presents the "why" behind the project.]
3.  **Goals & Objectives Review (10 min):** [Review the specific, measurable goals of the project.]
4.  **Scope & Deliverables (10 min):** [Clearly define what is in and out of scope.]
5.  **Roles & Responsibilities (5 min):** [Clarify who is responsible for what.]
6.  **Timeline & Key Milestones (5 min):** [Present the high-level project timeline.]
7.  **Communication Plan (5 min):** [Explain how the team will communicate.]
8.  **Q&A Session (10 min):** [Open the floor for questions.]
9.  **Next Steps (5 min):** [Define immediate next steps and who owns them.]
```

---

## 7. RACI Chart Creator

**Use Case**: Defining and documenting project roles and responsibilities to avoid confusion.

```
Create a RACI chart for a [Project Name] project.

Key Tasks/Deliverables:
- [Task 1, e.g., "Develop Ad Copy"]
- [Task 2, e.g., "Design Visuals"]
- [Task 3, e.g., "Approve Budget"]
- [Task 4, e.g., "Launch Campaign"]

Team Members/Roles:
- [Role 1, e.g., "Project Manager"]
- [Role 2, e.g., "Copywriter"]
- [Role 3, e.g., "Designer"]
- [Role 4, e.g., "Marketing Director"]

Create a matrix with tasks as rows and roles as columns. For each cell, assign one of the following RACI codes:
- **R:** Responsible (Does the work)
- **A:** Accountable (Owns the work)
- **C:** Consulted (Provides input)
- **I:** Informed (Is kept up-to-date)
```

---

## 8. Project Budget Tracker

**Use Case**: Creating a template to track project expenses against the budget.

```
Create a project budget tracking template.

Project Name: [Project Name]
Total Budget: [$ Amount]

The template should be a table with the following columns:
- **Category:** [e.g., "Software Licenses", "Contractors", "Marketing Spend", "Hardware"]
- **Budgeted Amount:** [The planned amount for that category.]
- **Actual Spent:** [The actual amount spent to date.]
- **Variance:** [The difference between Budgeted and Actual.]
- **% of Budget Used:** [The percentage of the category budget that has been spent.]
- **Notes:** [For any explanations of variance.]

The template should also include a summary section at the top showing Total Budget, Total Spent, and Total Remaining.
```

---

## 9. Lessons Learned Session Facilitator

**Use Case**: Creating a framework to facilitate a "lessons learned" or "post-mortem" session after a project is completed.

```
Create a framework for a project "lessons learned" session.

Project Name: [Project Name]
Attendees: [The core project team]

The framework should be a structured agenda designed to encourage open and honest feedback:
1.  **Introduction (10 min):** [Set the ground rules: "This is a blame-free session focused on process, not people."]
2.  **What Went Well? (20 min):** [Brainstorming session where team members list things that should be repeated in future projects.]
3.  **What Could Be Improved? (20 min):** [Brainstorming session for things that did not go well.]
4.  **Root Cause Analysis (20 min):** [For the top 3 items in the "to be improved" list, discuss the root causes.]
5.  **Actionable Recommendations (20 min):** [For each root cause, create a specific, actionable recommendation for future projects.]
```

---

## 10. Change Request Form

**Use Case**: Creating a formal document to manage scope creep by requiring stakeholders to submit a formal change request.

```
Create a project change request form.

The form should include the following fields:
- **Project Name:**
- **Requestor Name:**
- **Date of Request:**
- **Change Description:** [A detailed description of the requested change.]
- **Reason for Change:** [The business justification for the change.]
- **Impact Assessment:** (To be filled out by the Project Manager)
    - **Impact on Scope:**
    - **Impact on Timeline:**
    - **Impact on Budget:**
    - **Impact on Resources:**
- **Approval Status:** (For the project sponsor to sign)
    - [ ] Approved
    - [ ] Rejected
    - **Sponsor Signature:**
    - **Date:**
```

---

## 11. Agile User Story Creator

**Use Case**: Writing user stories for an Agile development project.

```
Write a user story for a [Software Feature].

User Persona: [Who is the user?]
The Goal: [What is the user trying to achieve?]

Write the user story in the standard format:
"As a [User Persona], I want to [Action], so that [Benefit]."

Then, define the Acceptance Criteria for the story:
- **Given** [a precondition]
- **When** [I perform an action]
- **Then** [I should see a result]
```

---

## 12. Kanban Board Designer

**Use Case**: Designing a Kanban board to visualize and manage a team's workflow.

```
Design a Kanban board for a [Team Name, e.g., "Content Marketing Team"].

The board should include columns that represent the stages of the team's workflow. Suggest columns and for each column, define:
- **Work in Progress (WIP) Limit:** [The maximum number of tasks allowed in that stage at one time.]

Also, define different "swimlanes" (horizontal rows) for different types of work.
```

---

## 13. Project Communication Update for Non-Technical Stakeholders

**Use Case**: Translating a complex, technical project update into a simple, business-focused summary for executives.

```
Summarize a technical project update for a non-technical audience.

Technical Update:
- [Paste the detailed, technical update from the engineering team here. e.g., "We refactored the authentication service to use JWTs, which required a database schema migration..."]

The summary should:
- Avoid jargon.
- Focus on the business impact and benefits.
- Explain the "why" behind the technical work.
- Provide a clear, high-level status.
```

---

## 14. Resource Allocation Plan

**Use Case**: Planning and allocating team members' time across multiple projects.

```
Create a resource allocation plan for a [Team Name] for the next [Time Period, e.g., month, quarter].

Team Members:
- [Name 1], [Role 1]
- [Name 2], [Role 2]
- [Name 3], [Role 3]

Projects:
- [Project A] (Estimated hours: [X])
- [Project B] (Estimated hours: [Y])
- [Project C] (Estimated hours: [Z])

Create a table showing how many hours each team member will be allocated to each project. The plan should also account for non-project time (e.g., meetings, admin, PTO). Identify any overallocation or underallocation of resources.
```

---

## 15. "Definition of Done" Creator

**Use Case**: Creating a clear, agreed-upon checklist that a task or user story must meet before it can be considered complete.

```
Create a "Definition of Done" for a [Type of Team, e.g., "Software Development Team", "Content Creation Team"].

The checklist should include criteria for different levels of "done":
- **For a User Story:**
    - [e.g., "Code is written and peer-reviewed."]
    - [e.g., "Unit tests are written and passing."]
    - [e.g., "QA testing is complete."]
    - [e.g., "Product owner has accepted the story."]
- **For a Sprint:**
    - [e.g., "All stories in the sprint are 'done'."]
    - [e.g., "The code has been deployed to the staging environment."]
    - [e.g., "A sprint demo has been given to stakeholders."]
- **For a Release:**
    - [e.g., "All sprints for the release are 'done'."]
    - [e.g., "Regression testing is complete."]
    - [e.g., "Release notes have been written."]
```
