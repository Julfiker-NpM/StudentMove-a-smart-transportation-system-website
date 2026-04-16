# StudentMove SRS Implementation Tracker

This tracker maps current implementation status against core SRS functional requirements.

## Authentication & Profile

- [x] FR-1 basic user signup (name, email, password)
- [x] FR-4 login with email/password
- [x] FR-5 forgot password page scaffold
- [x] FR-7 password hashing (bcrypt)
- [ ] FR-2 student ID + university validation
- [ ] FR-3 email verification/OTP
- [ ] FR-6 full profile management
- [ ] FR-8 session timeout/token policy

## Route Planning & Tracking

- [x] FR-9 active routes view scaffold
- [x] FR-13 route suggestion page
- [x] FR-16 next bus display page
- [ ] FR-10 interactive map integration
- [ ] FR-11 GPS pull every 10 seconds
- [ ] FR-12 ETA by stop (real data)
- [ ] FR-14 ranked route logic (backend scoring)
- [ ] FR-15 delay/suspension auto alerts
- [ ] FR-17 save favorite routes

## Subscription & Payment

- [x] FR-18 plan display with required pricing
- [x] FR-24 invoice/history direction in UI structure
- [ ] FR-19 full plan benefits page
- [ ] FR-20 payment gateway integration
- [ ] FR-21 invoice generation automation
- [ ] FR-22 payment confirmation email/SMS
- [ ] FR-23 real-time subscription state
- [ ] FR-25 transaction audit storage

## Notification & Communication

- [x] FR-29 notifications list page
- [ ] FR-26 real-time delay notification pipeline
- [ ] FR-27 push + email delivery integration
- [ ] FR-28 user notification preference controls
- [ ] FR-30 30-day retention policy enforcement
- [ ] FR-31 admin bulk announcements

## Feedback & Support

- [x] FR-32 feedback endpoint and page path
- [ ] FR-33 confirmation email on feedback
- [ ] FR-34 admin response + resolve workflow
- [ ] FR-35 auto archive at 60 days

## Admin & Driver

- [x] FR-36 admin dashboard/login surface
- [x] FR-42 driver login surface
- [ ] FR-37 route/bus/driver CRUD
- [ ] FR-38 manual GPS override
- [ ] FR-39 report generation
- [ ] FR-40 user/subscription deactivation
- [ ] FR-41 activity log auditing
- [ ] FR-43 GPS update API every 10 seconds
- [ ] FR-44 driver trip status transitions
- [ ] FR-45 admin override driver status

