---
publish: "true"
title: Lock-In Factory Design Doc v3
tags:
  - Documentation
---
> [!tip] **Burning Questions**
> *Which technologies/platform should be used?*
> *How will development work with whatever tech stack is chosen?*
> *How will this be deployed?*

#### Priorities Going In:
1. Fast performance
2. Fast to get to a MVP
3. Scalable over time

**MVP**: 
- Users are able to create a lock-in that recurs at specified durations
When selecting my tech stack, I went into this at a very surface level understanding of the technologies available for the components I'd need for my app. I used ChatGPT to help with research, alongside looking into Reddit threads on the comparative values of certain technologies and the documentations of certain resources to gather more information. Here is a [link](https://chatgpt.com/c/683ce832-d864-8011-9073-c17d535a98f1) to my ChatGPT conversation
#### Front-End
##### Technologies: React vs Flutter
-  ReactNative:
	- Very large userbase with tons of libraries
	-  JavaScript
	- Easier integration with Firebase and JS-based tools
	- Hot Reload/Faster Refresh accelerate dev
- Flutter:
	- Best UI engine for animations/custom UIs
	- Faster performance (compiles to native code)

**Conclusion**:
- Initial thought is to go with ReactNative because Flutter has a much smaller community and usage, and I've coded in JavaScript before so should be easier to develop, but Flutter has advantages of more extensively reusable codebase
#### Framework

##### Technologies: Node + Express vs Django + DRF vs Golang
- Node+Express:
	- + Uses JavaScript for both front-end and back-end
	- + Huge community and package ecosystem w/npm
	- + Easy to integrate with Firebase SDK
	- + Pairs well with React
	-  - Doesn't perform that well
- Django + DRF
	- + Uses Python
	- + Rapid development
	- + Built-in admin panel
	- + Well-suited for data-heavy apps
	-  - Not great for real-time apps
- Golang
	- + Excellent performance
	- + Concurrency -> extremely reliable and efficient
	- - Go is different than Python/JS -> learning curve
	- - Integration is more complicated

**Conclusion:**
- I think learning Go would be fun and I'm inclined to believe that performance is one of the most important aspects of app development. I worry about its integration though, and wonder if going full JavaScript is the move.....
#### Authorization
- Firebase Auth
	- + UI is extremely simple, can sign in with pre-existing accounts
	- + Integrates super well with Firebase DB, Firebase Functions
	- + Handles notifications, session management, refresh tokens
	- - Vendor lock-in
	- - Hard to do fine-grained access control
		- **User** can see user's lock-ins
		- **Mutual Friends** can see user's lock-ins, suggest user's punishments
- Auth0
	- + Flexible roles/attribute-based access
	- + future-proof enterprise plans
	- + Good UIs APIs for login/signup/password resets
	- + Integrates well with most tech stacks
	- - Can be overkill for small apps/early-stage MVPs
	- - Pricing increases quickly at scale
- Custom Auth
	- + Full control
	- + Works well across microservices
	- + Will inherently integrate well
	- - MUCH more overhead cost

**Conclusion:**
**Firebase**, while lacking fine-grained access control capabilities intrinsically is free until usage is at a very high scale, and is easy to pick up, whilst auth0 requires a tremendous amount of overhead in time and cost for an app like this. But what if I used AWS..........
#### Caching
- Redis
	- + Industry standard
	- + Scales extremely well
	- + Integrates very easily with tech stack
	-  - Needs monitoring (memory limit)
- Memcached
	- + Very easy to set up
	-  - Less scalable with a lot of data
- Natively through Firebase
	- + Easiest to setup (automatically in Firebase SDK)
	- + Seamless integration with Firebase
	-  - Limited control
	-  - No true memory cache
- 
**Conclusion:**
While Firebase is easiest to get to a MVP, Redis is more applicable to industry and scales much better, so the initial decision is **Redis**.
#### Dev Environment
- React + Expo
	- + Zero native config
	- + Dev app to live-preview apps on physical devices
	- + Easy access to APIS
	- + CLI and cloud tools
	- + extremely easy setup
	- + built-in notif system
	- + updates are super simple
	- + 1-click integrations
- Flutter Dev (Dart)
	- + Firebase SDK integrates super well
	- + Full control (no abstraction)
	- - Xcode + Android Studio required for all changes
	- + Integrates well with most tech stacks
+ GitHub Actions + Firebase
	+ GitHub triggers build on main/dev/pull requests
	+ Actions runs a script that does testing, builds the app, and deploys to Firebase
	+ + Full customization
	+ + Works for all stacks
	+ - Takes time
	+ - More manual setup

**Conclusion:**
There really doesn't seem like a good reason to go with Flutter for an app like this.

#### Notifications
- This will be handled by Firebase Cloud Messaging, as in the initial stage of development Firebase > AWS; however, as development moves into more scalable/control-oriented design we may use more hybrid integrations to get the best of both technologies.