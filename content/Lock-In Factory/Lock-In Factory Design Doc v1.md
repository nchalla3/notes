---
title: Old Lock-In Factory Design Doc
publish: "true"
tags:
  - Documentation
---
# Accountability App Design Framework

## Individual Use Case

### Authentication
- Prompt user to log in or create an account on first launch.
- Store usernames and passwords in a database.
- Ensure uniqueness of usernames.

### User Profile
- Stores data on user’s app usage and habits.

### Habits ("Lock-ins")
- Users can create new habits with:
  - Name
  - Optional description
  - Optional category
  - Frequency (e.g. daily, weekly)
  - Optional scheduled times

### Habit Tracking
- Periodic prompts (e.g. every 4 hours + 1 hour before end of period):
  - Delivered via push notification.
  - Clicking the notification opens a dated instance of the habit.
  - Users upload photographic proof + optional caption.
- Data storage:
  - **Calendar view**: Tracks completions by date.
  - **Habit folder**: Contains all proof for a specific habit.
- Streaks:
  - Each consecutive completion increments the streak.
  - One-week grace period allows backdating with proof + caption.
  - Failure to complete within the period → instance deleted and streak reset.
    - Custom grace periods allowed (e.g. 3am completion windows).
    - No enforcement against overly generous grace periods (user responsibility).

### Apology Form
- Triggered when habit instance is missed:
  - Explain why task wasn’t completed.
  - Describe steps to avoid recurrence.
  - Add a **punishment** (self-imposed or suggested by friends).
- Punishment instance includes:
  - Photo proof + optional caption.
  - Saved in calendar and "Punishments" folder.
  - May serve as a **streak freeze** (TBD).

---

## Social Use Case

### Connections
- Users can search for others and send friend requests.
- Upon approval, friends can view each other’s lock-in habits.
  - *Private* habits are hidden.
- Users can unfriend others at any time.

### Social Feed
- Displays successful habit completions with photos + captions.
- Friends can comment and interact (like **BeReal**).

### Reminders
- Friends can "poke" others as reminders.
  - Users can block others to prevent spam.

### Accountability + Punishments
- Apology forms are visible on the social feed.
- Friends can suggest punishments:
  - Punishments are multi-select and writable by all friends.
  - Confirmed punishments are saved and enforced.
  - Original user can delete suggestions if desired.
