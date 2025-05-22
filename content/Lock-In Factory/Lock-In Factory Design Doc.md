---
title: Lock-In Factory Design Doc
publish: "true"
tags:
  - Documentation
---
## Front-End:
* ~~All screens have a lock-in logo in the top left, which redirects to the lock-in page (this also can be accessed by pressing the lock-in button that is always in the bottom center)~~
1. Initial Log-In:
	1. Handled using Firebase, authentication either through a native username/password or through a Google account
	2. If login has been saved through the app/Apple keychain/etc, this screen doesn't appear (unless manual logout occurs)
2. Three Pages
	1. Archive
		1. Has three main pages: 
			1. Monthly Calendar
				1. This holds all of the lock-ins engaged with on a daily basis (also includes failed lock-ins)
				2. A failed lock-in is populated if a day (+ grace period) has passed without a lock-in being recorded, this is automatically stored in the calendar
			2. Lock-Ins
				1. This holds each instance of a lock-in in a folder that has every instance of the lock-in, organized by date
				2. Also includes failed lock-ins, once again categorized by dates
			3. Failed Lock-Ins (Punishments)
				1. All failed lock-ins are organized here
					1. First categorization is by individual lock-in (e.g. gym), then by date
	2. Lock-In (default)
		1. This is the main page that is opened when the user opens the app after logging in
		2. The top center of this page is a button to add new lock-ins
			1. Name of lock-in
			2. Optional description
			3. Frequency (once/week? twice/week? everyday? every other week?)
			4. Scheduled reminder times (default will be once every six hours on the day lock-in occurs)
		3. Below this will be filters that show three sections:
			1. Active
				1. Within this, the user can sort by lock-ins today, tomorrow, next week or next month
			2. Planned
				1. This will hold all lock-ins that don't have a set date to begin
			3. On Hold
				1. This will hold all lock-ins with the property "on hold"
	3. Feed:
		1. Populates as people that the user has added post their lock-ins
		2. Posts remain on the lock-in feed for 24 hours before disappearing from the screen
		3. Posts consist of a profile picture in the top left corner, a date on the top right corner, the name of the lock-in, the number of times this lock-in has occurred consecutively (with the total number in parentheses), an attachment of the lock-in occurring, and an optional caption
		4. Feed allows for accessing profiles:
			1. Each user profile has their profile picture, their name, when they joined Lock-In, and the lock-ins they're publicly tracking
			2. If a lock-in hasn't been engaged in by the allotted time, a "LOCK-IN!" button will appear, which a user (if mutually added) can press to send a push notification to the other user to remind them to engage in their lock-in
		5. If a lock-in hasn't been engaged in a day (+ grace period), the app will automatically post a failed lock-in message that will include:
			1. pfp
			2. name
			3. date
			4. FAILED {habit name}
			5. Text that says: "Sorry! I didn't lock-in today because I was busy being a bum. Please suggest punishments so this doesn't happen in the future"
			6. A punishment suggestion button
				1. This will redirect to a simple text field where users can suggest punishments
					1. This will populate in the original users post, where they will be prompted to select a punishment from the suggested list
					2. Once a punishment has been confirmed, this will create an apology form
			7. An apology form includes:
				1. pfp/name/date
				2. APOLOGY: FAILED {habit name}
				3. a MANDATORY caption, where the user will explain why they failed and what they're going to do to prevent this from occurring in the future
				4. An attachment of them doing the punishment
		6. Search bar
			1. Users can be searched by username, where their real name and date that they joined will appear, alongside an "add" button
			2. Clicking on this add button will send an add request to the other user
				1. This will appear in the requesting users "outgoing requests" page and the requested users "incoming requests" page
				2. If approved, the added user will appear in the original user's "friends" list
	4. Right sidebar:
		1. On every screen, there will be a small circular profile button that has the profile picture of the user. When clicked, this will open up a sidebar that has access to settings, options to change username, password, and customize the appearance of the application
## Screens

![[IMG_0624.jpeg]]

![[IMG_0625.jpeg]]