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

---

*Continue with 12 more automation workflow prompts...*

---

**💡 Pro Tip**: These automation prompts work best when integrated with tools like Zapier, Make.com, or custom APIs. Start with simple workflows and gradually add complexity.

---

*Part of Professional Business AI Prompts 2025 - Automation Specialized Collection*  
*Created by Nosyt LLC*