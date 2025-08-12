# 🤖 AI Automation Workflow Prompts

**20 prompts for automating business processes with AI**

---

## 1. Smart Email Auto-Responder

**Use Case**: Automatically categorize and respond to incoming emails

```
Create an automated email response system:

Email Category: [CUSTOMER SUPPORT/SALES/GENERAL]
Incoming Email: [EMAIL CONTENT]
Sender Information: [CUSTOMER DATA IF AVAILABLE]
Urgency Level: [HIGH/MEDIUM/LOW]
Response Requirements: [WHAT NEEDS TO BE ADDRESSED]

Analyze the email for:
- Intent classification
- Sentiment analysis
- Priority level
- Required information
- Response type needed

Generate response that:
- Acknowledges their message
- Addresses their specific needs
- Provides relevant information
- Sets appropriate expectations
- Includes next steps
- Maintains brand voice

If automation cannot fully resolve:
- Flag for human review
- Provide context summary
- Suggest response approach
- Escalate appropriately

Response should be: [IMMEDIATE/WITHIN 4 HOURS/NEXT BUSINESS DAY]
```

**Example Output**:
```
**Analysis of incoming email:** "Hi, I bought your software last week and I can't figure out how to add a new user. My account is user@email.com. I'm getting frustrated."

**Generated Automation:**
- **Intent:** How-to Question
- **Sentiment:** Negative
- **Priority:** High (due to negative sentiment)
- **Action:**
    1. Immediately send an auto-response: "Hi there, thanks for reaching out. We've received your message and will get back to you within 2 hours. Here is a link to our 'Adding a New User' guide which might help in the meantime: [Link]."
    2. Create a high-priority ticket in the support system.
    3. Assign the ticket to a Tier 1 support agent.
    4. Provide the agent with a summary: "Customer is frustrated and needs help adding a new user."
```

---

## 2. Content Calendar Automation

**Use Case**: Automatically generate and schedule social media content

```
Automate content calendar for:

Brand: [YOUR BRAND]
Industry: [YOUR SECTOR]
Target Audience: [DEMOGRAPHICS]
Content Pillars: [KEY THEMES]
Posting Frequency: [DAILY/WEEKLY SCHEDULE]
Platforms: [SOCIAL MEDIA CHANNELS]

Generate 30 days of content including:

CONTENT MIX:
- Educational posts (40%)
- Behind-the-scenes (20%)
- Product/service highlights (20%)
- User-generated content (10%)
- Industry news/trends (10%)

FOR EACH POST CREATE:
- Platform-optimized copy
- Relevant hashtags
- Visual description/requirements
- Best posting time
- Engagement hooks
- Call-to-action

CONTENT CALENDAR FORMAT:
- Date and time
- Platform
- Content type
- Copy text
- Visual requirements
- Performance predictions

ENSURE:
- Brand voice consistency
- Platform best practices
- Engagement optimization
- Trend incorporation
- Seasonal relevance
```

**Example Output**:
```
**Generated Content Calendar Entry for August 1st:**

- **Date and time:** 2025-08-01 09:30 AM EST
- **Platform:** LinkedIn
- **Content type:** Educational Post
- **Copy text:** "Did you know that 75% of businesses struggle with data silos? Our platform integrates all your data sources into one dashboard, giving you a single source of truth. #DataManagement #BusinessIntelligence"
- **Visual requirements:** A clean infographic showing data from multiple sources flowing into a single, unified dashboard.
- **Performance predictions:** Expected reach: 5,000, Expected engagement rate: 3.5%.
```

---

## 3. Lead Scoring & Qualification Bot

**Use Case**: Automatically score and qualify sales leads

```
Automate lead qualification for:

Lead Information: [CONTACT DETAILS/FORM DATA]
Lead Source: [WHERE THEY CAME FROM]
Behavioral Data: [WEBSITE ACTIVITY/ENGAGEMENT]
Company Information: [FIRMOGRAPHICS]
Timing Indicators: [BUYING SIGNALS]

SCORING CRITERIA:
- Company size/revenue (0-25 points)
- Industry fit (0-20 points)
- Job title/authority (0-20 points)
- Engagement level (0-15 points)
- Timing indicators (0-20 points)

QUALIFICATION QUESTIONS:
- Budget authority assessment
- Timeline evaluation
- Need identification
- Decision process understanding
- Competition analysis

AUTOMATED ACTIONS:
High Score (80-100):
- Immediate sales alert
- Priority follow-up sequence
- Account research trigger
- Meeting booking automation

Medium Score (60-79):
- Nurture sequence enrollment
- Educational content delivery
- Regular check-in schedule
- Behavior monitoring

Low Score (0-59):
- General newsletter subscription
- Long-term nurture track
- Periodic re-evaluation
- Content personalization

OUTPUT:
- Lead score with explanation
- Qualification status
- Recommended next actions
- Automated workflow triggers
- Human intervention flags
```

**Example Output**:
```
**Analysis of incoming lead:**
- **Source:** "Contact Us" form
- **Company Size:** 250 employees
- **Industry:** Manufacturing
- **Job Title:** VP of Operations
- **Website Activity:** Visited the pricing page 3 times.

**Generated Automation:**
- **Lead Score:** 95/100 (High company size, ideal job title, high engagement).
- **Qualification Status:** Hot Lead.
- **Recommended Next Actions:**
    1. Send an immediate alert to the assigned Account Executive, [AE Name].
    2. Enroll the lead in the "Hot Lead" email sequence.
    3. Automatically generate a new record in the CRM and populate it with the lead's information.
- **Human Intervention Flag:** None. Fully automated qualification.
```

---

## 4. Invoice Processing Automation

**Use Case**: Automatically process and manage invoices

```
Automate invoice processing for:

Invoice Data: [SUPPLIER/AMOUNT/DETAILS]
Purchase Order: [PO NUMBER IF APPLICABLE]
Approval Workflow: [WHO NEEDS TO APPROVE]
Payment Terms: [WHEN TO PAY]
Budget Categories: [EXPENSE CLASSIFICATION]

AUTOMATED EXTRACTION:
- Vendor information
- Invoice number and date
- Line items and quantities
- Tax calculations
- Payment terms
- Total amounts

VALIDATION CHECKS:
- PO matching (if applicable)
- Pricing verification
- Budget availability
- Duplicate detection
- Approval requirements
- Tax compliance

APPROVAL ROUTING:
Auto-approve if:
- Under threshold amount
- Matches PO exactly
- Pre-approved vendor
- Budget available

Route for approval if:
- Over approval limit
- New vendor
- Budget variance
- No PO match

FLAG FOR REVIEW:
- Suspicious patterns
- Duplicate invoices
- Pricing discrepancies
- Missing information

AUTOMATED ACTIONS:
- Approval workflow initiation
- Payment scheduling
- Expense categorization
- Reporting updates
- Vendor communication

STATUS TRACKING:
- Processing stage
- Approval status
- Payment schedule
- Exception handling
```

**Example Output**:
```
**Analysis of incoming invoice PDF:**
- **Vendor:** "Office Supplies Co."
- **Invoice Number:** "INV-5678"
- **Amount:** "$250"
- **PO Number:** "PO-1234"

**Generated Automation:**
- **Validation:**
    - PO match: SUCCESSFUL.
    - Budget availability: CHECKING... SUCCESSFUL.
    - Duplicate check: SUCCESSFUL.
- **Approval Routing:**
    - Amount ($250) is under the auto-approval threshold of $500.
    - PO match is exact.
    - **Action:** Auto-approve the invoice.
- **Automated Actions:**
    1. Schedule payment for "INV-5678" according to Net 30 terms.
    2. Categorize the expense under "Office Supplies" in the accounting software.
    3. Mark PO-1234 as "Fulfilled".
```

---

## 5. Customer Support Ticket Router

**Use Case**: Automatically categorize and route support tickets

```
Automate support ticket routing:

Ticket Content: [CUSTOMER MESSAGE]
Customer Information: [ACCOUNT/HISTORY]
Product/Service: [WHAT THEY USE]
Urgency Indicators: [PRIORITY SIGNALS]
Channel: [EMAIL/CHAT/PHONE]

TICKET ANALYSIS:
- Issue categorization
- Complexity assessment
- Urgency determination
- Required expertise
- Resolution time estimate

CATEGORIZATION:
Technical Issues:
- Product bugs
- Integration problems
- Performance issues
- Feature requests

Account Issues:
- Billing inquiries
- Access problems
- Subscription changes
- Account setup

General Inquiries:
- How-to questions
- Information requests
- Feedback/suggestions
- Partnership inquiries

ROUTING LOGIC:
High Priority → Senior agent (immediate)
Technical → Tech support team (2 hours)
Billing → Finance team (4 hours)
General → General support (24 hours)

AUTO-RESOLUTION:
- FAQ matching
- Knowledge base articles
- Video tutorials
- Self-service options

ESCALATION TRIGGERS:
- VIP customer
- High monetary impact
- Compliance issues
- Repeat problems
- Negative sentiment

OUTPUT:
- Ticket category
- Priority level
- Assigned agent/team
- SLA commitment
- Auto-response sent
- Escalation flags
```

**Example Output**:
```
**Analysis of incoming support ticket:**
- **Customer:** "Jane Doe (VIP Account)"
- **Subject:** "Website is down!!!"
- **Urgency Indicators:** "down", "!!!", "urgent"

**Generated Automation:**
- **Ticket Category:** Technical Issue -> Outage
- **Priority Level:** Critical (due to VIP status and outage keywords)
- **Assigned Team:** Tier 3 Engineering On-Call
- **SLA Commitment:** 15-minute first response
- **Auto-response Sent:** "Hi Jane, we've received your critical alert about a potential outage. Our on-call engineering team has been paged and will investigate immediately. We will provide another update within 15 minutes. [Link to status page]"
- **Escalation Flags:** Paged the on-call engineer and created a temporary #outage-YYYY-MM-DD Slack channel with the support lead and engineering lead.
```

---

## 6. Expense Report Processor

**Use Case**: Automatically process employee expense reports

```
Automate expense report processing:

Expense Data: [RECEIPTS/AMOUNTS/DESCRIPTIONS]
Employee Information: [SUBMITTER DETAILS]
Company Policies: [EXPENSE GUIDELINES]
Approval Matrix: [WHO APPROVES WHAT]
Reimbursement Schedule: [PAYMENT TIMING]

RECEIPT ANALYSIS:
- Vendor identification
- Amount extraction
- Date verification
- Category classification
- Tax calculation
- Currency conversion

POLICY VALIDATION:
Check against:
- Per-meal limits
- Hotel rate caps
- Mileage rates
- Approval requirements
- Receipt requirements
- Prohibited expenses

COMPLIANCE CHECKS:
- Business purpose
- Receipt quality
- Date validity
- Amount reasonableness
- Tax compliance
- Documentation completeness

AUTO-APPROVAL:
Approve if:
- Under threshold
- Policy compliant
- Complete documentation
- Pre-approved categories

FLAG FOR REVIEW:
- Policy violations
- Missing receipts
- Unusual amounts
- Duplicate submissions
- Incomplete information

WORKFLOW AUTOMATION:
- Approval routing
- Reimbursement scheduling
- Tax reporting
- Expense categorization
- Budget tracking
- Compliance reporting

NOTIFICATIONS:
- Approval confirmations
- Rejection reasons
- Payment notifications
- Policy reminders
```

**Example Output**:
```
**Analysis of submitted expense report:**
- **Employee:** "John Smith"
- **Total Amount:** "$350"
- **Line Item:** "Hotel Stay - $300" (Policy limit is $250/night)
- **Line Item:** "Meal - $50" (Policy compliant)
- **Receipts:** All present.

**Generated Automation:**
- **Line Item "Meal":** Auto-approved.
- **Line Item "Hotel Stay":** Flagged for review.
- **Workflow:**
    1. Partially approve the report for $50.
    2. Route the single non-compliant line item to John's manager for manual review.
    3. Send an automated notification to John: "Your expense report has been partially approved. The hotel charge of $300 exceeds the policy limit of $250/night and has been sent to your manager for review."
```

---

## 7. Inventory Reorder Automation

**Use Case**: Automatically trigger inventory replenishment

```
Automate inventory reordering:

Product Information: [SKU/DESCRIPTION]
Current Stock Level: [ON-HAND QUANTITY]
Sales Velocity: [HISTORICAL USAGE]
Lead Times: [SUPPLIER TIMELINES]
Seasonal Factors: [DEMAND PATTERNS]
Budget Constraints: [PURCHASING LIMITS]

REORDER TRIGGERS:
- Stock level thresholds
- Sales velocity changes
- Seasonal adjustments
- Promotional planning
- Supplier minimums
- Budget availability

DEMAND FORECASTING:
- Historical analysis
- Trend identification
- Seasonal adjustments
- Promotional impact
- Market conditions
- Growth projections

ORDER OPTIMIZATION:
- Economic order quantities
- Volume discounts
- Shipping costs
- Storage constraints
- Cash flow impact
- Supplier relationships

AUTOMATED ACTIONS:
Generate PO if:
- Below reorder point
- Forecast indicates need
- Budget approved
- Supplier available

Alert for review if:
- Large order required
- New supplier needed
- Budget exceeded
- Quality concerns

SUPPLIER COMMUNICATION:
- PO transmission
- Delivery scheduling
- Quality requirements
- Pricing confirmation
- Terms verification

MONITORING:
- Order status tracking
- Delivery confirmation
- Quality inspection
- Payment processing
- Performance metrics
```

**Example Output**:
```
**Analysis of Product SKU #XYZ-123:**
- **Current Stock:** 45 units.
- **Reorder Point:** 50 units.
- **Sales Velocity:** 10 units/day.
- **Supplier Lead Time:** 7 days.
- **Economic Order Quantity:** 250 units.

**Generated Automation:**
- **Trigger:** Stock level (45) is below reorder point (50).
- **Demand Forecast:** Projects stock will be depleted in 4.5 days, which is less than the 7-day lead time.
- **Action:**
    1. Automatically generate a Purchase Order for 250 units of SKU #XYZ-123.
    2. Send the PO to the pre-approved supplier, "Global Supplies Inc."
    3. Create an entry in the "Incoming Stock" dashboard with an expected arrival date.
```

---

## 8. Meeting Scheduler & Coordinator

**Use Case**: Automatically schedule and manage meetings

```
Automate meeting coordination:

Meeting Request: [MEETING PURPOSE]
Participants: [ATTENDEE LIST]
Duration: [TIME NEEDED]
Preferences: [TIMING/LOCATION CONSTRAINTS]
Priority: [URGENCY LEVEL]
Recurring: [ONE-TIME/RECURRING]

AVAILABILITY ANALYSIS:
- Calendar integration
- Time zone coordination
- Conflict identification
- Preference matching
- Resource availability
- Travel time consideration

OPTIMAL SCHEDULING:
- Best time slots
- Participant convenience
- Resource efficiency
- Travel minimization
- Preparation time
- Follow-up scheduling

AUTOMATED TASKS:
Pre-meeting:
- Calendar invitations
- Agenda distribution
- Resource booking
- Reminder notifications
- Preparation materials
- Technical setup

During meeting:
- Check-in tracking
- Note-taking prompts
- Time monitoring
- Action item capture
- Decision recording

Post-meeting:
- Summary distribution
- Action item assignment
- Follow-up scheduling
- Resource cleanup
- Feedback collection
- Performance tracking

INTEGRATIONS:
- Calendar systems
- Video conferencing
- Room booking
- Document sharing
- Task management
- Communication tools

SMART FEATURES:
- Conflict resolution
- Alternative suggestions
- Buffer time inclusion
- Recurring optimization
- Cancellation handling
- Rescheduling automation
```

**Example Output**:
```
**Analysis of Meeting Request:**
- **Purpose:** "Project Alpha Kickoff"
- **Participants:** "jane@email.com, mark@email.com (External), team@email.com"
- **Duration:** 60 minutes
- **Preferences:** "Next week, preferably in the afternoon."

**Generated Automation:**
- **Availability Analysis:** Scans all internal calendars and sends an availability poll to the external participant (Mark).
- **Optimal Scheduling:** Identifies that next Wednesday at 2:00 PM EST is the best time for all participants.
- **Automated Tasks:**
    1. Sends a calendar invitation to all participants with a pre-populated agenda and a video conference link.
    2. Books the "Main Conference Room" resource.
    3. Schedules a 24-hour reminder notification for all attendees.
```

---

## 9. Social Media Mention Monitor & Responder

**Use Case**: Automatically track brand mentions and orchestrate responses.

```
Automate social media monitoring for:

Keywords: [Brand Name, Product Names, Key Executives]
Platforms: [Twitter, Reddit, News Sites]
Sentiment Threshold: [e.g., Alert on any negative sentiment]
Influence Score: [e.g., Alert if mentioned by an account with >10k followers]

SENTIMENT & INFLUENCE ANALYSIS:
- Classify mention as Positive, Negative, or Neutral.
- Score the author's influence (e.g., follower count, engagement).
- Identify the topic of conversation.

ROUTING & RESPONSE LOGIC:
- **Positive Mention + High Influence:**
    - Action: Notify marketing team in #social-buzz Slack channel to engage.
    - Example: "Thanks for the shout-out, [Username]! So glad you're enjoying the new feature."
- **Negative Mention + High Influence:**
    - Action: Create a critical priority ticket in the support system and page the on-call PR person.
- **Negative Mention + Low Influence:**
    - Action: Create a medium priority support ticket.
    - Example: "Hi [Username], sorry to hear you're having trouble. Please DM us so we can help you resolve this."
- **Neutral/Question:**
    - Action: Route to the community management team for a standard response.
```

---

## 10. Employee Onboarding Workflow

**Use Case**: Automating the entire employee onboarding process from offer acceptance.

```
Automate the new hire onboarding process.

Trigger: [Candidate status in ATS changes to "Hired"]
New Hire Data: [Name, Start Date, Title, Manager, Department]

AUTOMATED WORKFLOW SEQUENCE:
1.  **Day -15 (Pre-Start):**
    - Send "Welcome to the Team" email with first-day logistics.
    - Trigger IT ticket to provision hardware (laptop, monitor).
    - Trigger Facilities ticket to assign a desk.
2.  **Day -7:**
    - Trigger HR ticket to create payroll and benefits accounts.
    - Trigger IT ticket to create email and software accounts.
3.  **Day 1 (Start Date):**
    - Send a welcome notification to the new hire's manager with an onboarding checklist.
    - Automatically enroll the new hire in the company's "Intro to Culture" online course.
    - Schedule a 30-minute "IT Setup" meeting and a "Welcome" meeting with their manager.
4.  **Day 7:**
    - Automatically schedule 1-on-1 meetings with key team members throughout the week.
5.  **Day 30:**
    - Send an automated survey to the new hire asking for feedback on the onboarding process.
```

---

## 11. Competitive Intelligence Reporter

**Use Case**: Automatically track competitors' activities and generate a weekly intelligence report.

```
Create a weekly competitive intelligence briefing.

Competitors to Track: [List 3-5 Competitors]
Information Sources: [Their blog, social media, news alerts, press releases, job boards]

DATA GATHERING (Automated Weekly):
- Scrape new blog post titles and summaries.
- Pull all social media posts.
- Monitor for new job postings, especially in key departments (e.g., R&D, Sales).
- Track any mentions in major news outlets.

REPORT GENERATION (Automated Weekly, sent via email):
- **Subject:** Competitive Intelligence Briefing - [Date]
- **Section 1: Key Highlights:** A bulleted summary of the most important competitor actions this week.
- **Section 2: Product & Strategy:** Any news about new features, acquisitions, or strategic shifts.
- **Section 3: Marketing & Content:** Links to their latest blog posts and a summary of their social media themes.
- **Section 4: Hiring & Growth:** A list of new, strategic job openings.
- **Section 5: Red Flags:** Any activity that suggests a direct threat to our business.
```

---

## 12. Customer Feedback & Sentiment Analysis

**Use Case**: Automatically analyze customer feedback from various sources to identify trends.

```
Create a system to analyze customer feedback from multiple channels.

Feedback Sources: [Support tickets, NPS surveys, social media mentions, app store reviews]

ANALYSIS & CLASSIFICATION:
- For each piece of feedback, perform:
    - **Sentiment Analysis:** (Positive, Negative, Neutral)
    - **Topic Modeling:** (e.g., "UI/UX", "Pricing", "Performance", "Customer Support")
    - **Feature Request Identification:** (Detect when a user is requesting a new feature).

AUTOMATED ACTIONS & REPORTING:
- **If Sentiment is "Very Negative":** Create a high-priority ticket in a "Customer Experience Issues" project for immediate review.
- **If a Feature Request is identified:** Add it to a product feedback database (e.g., Canny, Productboard), incrementing the count for that request.
- **Weekly Summary Report:** Generate a report showing:
    - Overall sentiment trend.
    - Top 5 most-discussed topics.
    - Top 3 most-requested features.
    - A summary of the most positive and most negative feedback of the week.
```

---

## 13. Personalized Content Recommendation Engine

**Use Case**: Automatically suggest relevant content (articles, products) to users based on their behavior.

```
Design a content recommendation workflow for a user on our [Website/Platform].

User Data:
- User ID: [User's unique ID]
- Historical Behavior: [e.g., Articles read, products viewed, features used]
- Stated Interests: [Topics they selected during onboarding]
- Current Action: [The page they are currently viewing]

RECOMMENDATION LOGIC:
1.  **Content-Based Filtering:** Find content similar to what the user has previously engaged with. (e.g., "Because you read about 'SEO', you might like...")
2.  **Collaborative Filtering:** Find content that similar users have liked. (e.g., "Users who read this article also read...")
3.  **Popularity-Based:** Recommend the most popular content on the site right now.

AUTOMATED DELIVERY:
- **On-Page Widget:** Display "Recommended for You" in the sidebar.
- **Email Digest:** Send a weekly personalized email with the top 3 recommended articles.
- **In-App Notification:** If they complete a key task, show a notification suggesting the next logical piece of content to consume.
```

---

## 14. Data Anomaly Detection & Alerting

**Use Case**: Automatically monitor key business metrics and alert the team to unusual changes.

```
Create a data anomaly detection system for a [Key Business Metric].

Metric to Monitor: [e.g., Website Conversion Rate, Daily Active Users, App Error Rate]
Data Source: [e.g., Google Analytics, Amplitude, Datadog]
Time Window for Analysis: [e.g., Hourly, Daily]

ANOMALY DETECTION MODEL:
- **Baseline:** Calculate the expected range for the metric based on historical data (e.g., the average of the last 4 weeks for that day of the week).
- **Threshold:** Define what constitutes an anomaly (e.g., a deviation of more than 3 standard deviations from the baseline).
- **Seasonality:** Account for predictable weekly or seasonal patterns.

ALERTING WORKFLOW:
- **If an anomaly is detected:**
    1.  **Trigger an alert** in a specific Slack channel (e.g., #alerts-conversions).
    2.  **Provide Context:** The alert message should include:
        - The metric name.
        - The current value.
        - The expected range.
        - The percentage of deviation.
        - A link to the live dashboard.
    3.  **Assign Ownership:** Automatically @-mention the person or team responsible for investigating (e.g., @marketing-team).
```

---

## 15. Employee Performance & Goal Tracking Automation

**Use Case**: Automating reminders and reporting for employee performance management.

```
Automate the performance and goal tracking process for a team.

Data Sources:
- HRIS for employee data.
- Project management tool (e.g., Jira, Asana) for task completion.
- Goal setting software (e.g., Lattice, 15Five) for OKRs.

AUTOMATED WORKFLOWS:
1.  **Quarterly Goal Setting:**
    - **Trigger:** 2 weeks before the start of a new quarter.
    - **Action:** Send a reminder email to all managers and employees to set their goals for the upcoming quarter.
2.  **Monthly Check-in Reminders:**
    - **Trigger:** The last week of every month.
    - **Action:** Send a notification to managers to schedule their monthly 1-on-1 check-ins with their direct reports. The notification should include a link to the employee's goal progress.
3.  **Weekly Progress Reporting:**
    - **Trigger:** Every Friday at 3 PM.
    - **Action:** Automatically pull data on completed tasks and goal progress for each employee and generate a summary report for their manager.
4.  **Performance Review Kick-off:**
    - **Trigger:** 1 month before the end of the performance cycle.
    - **Action:** Automatically initiate the performance review cycle in the HR software, including self-assessments and peer feedback requests.
```

---

**💡 Pro Tip**: These automation prompts work best when integrated with tools like Zapier, Make.com, or custom APIs. Start with simple workflows and gradually add complexity.

---

*Part of Professional Business AI Prompts 2025 - Automation Specialized Collection*  
*Created by Nosyt LLC*