# 💍 Digital Love Story Timeline – Project Guidelines 

This document defines the **complete execution framework** for building a **3-page emotional storytelling website** designed specifically for **laptop presentation** and deployed using **Vercel**.

---

# 1. PROJECT CONTEXT

## Viewing Environment
- Primary device: **Laptop**
- Screen size target: **13–15 inch**
- Aspect ratio: **16:9**
- Controlled lighting & audio environment
- Single-session viewing (not casual browsing)

## Deployment Platform
- **Vercel**

---

# 2. DESIGN PHILOSOPHY (IMPORTANT)

This is **not a general-purpose website**.  
This is a **private digital cinematic experience**.

### Core Focus:
- Emotional pacing
- Visual clarity
- Cinematic animations
- Story-driven navigation

### Design Bias:
- Desktop-first UI
- Cinematic layouts
- High-resolution imagery
- Smooth transitions

---

# 3. FINAL PAGE ARCHITECTURE

```

/           → Home (Hero + Emotional intro)
/story      → Love story + Timeline + Milestones
/tribute    → Gallery + Video Messages + Final Letter

````

---

# 4. UI/UX RULES (LAPTOP OPTIMIZED)

## Layout
- Max container width: **1200px – 1300px**
- Hero sections: **min-height: 100vh**
- Timeline container: **900px width**

## Typography
- Heading size: **clamp(48px, 6vw, 72px)**
- Body text: **18px – 20px**
- Line height: **1.7 – 1.9**

---

# 5. VIDEO PRESENTATION RULES (CRITICAL)

## Video Specs
- Resolution: **1080p**
- Aspect ratio: **16:9**
- Codec: **H.264**
- Container: **MP4**
- Duration: **≤ 60 sec**

## Playback Rules
- Manual play only
- Fullscreen modal overlay
- Fade out background audio on play
- Dim background UI

---

# 6. IMAGE QUALITY RULES

## Hero Images
- Resolution: **2560px wide**
- Aspect: **16:9**

## Timeline Images
- Resolution: **1600px wide**

## Gallery Images
- Resolution: **1200px wide**

---

# 7. MEDIA PREPARATION WORKFLOW

## Image Pipeline
1. Select photos
2. Crop & color-correct
3. Resize appropriately
4. Compress using TinyPNG or Squoosh
5. Convert to WebP where possible

## Video Pipeline
1. Record in 1080p
2. Trim to ≤ 60s
3. Compress using HandBrake
4. Export MP4 H.264

---

# 8. TECH STACK

## Frontend
- Next.js 14+
- Tailwind CSS
- Framer Motion

## Deployment
- Vercel

---

# 9. IMPORTANT COMMANDS

## Create Project
```bash
npx create-next-app@latest anniversary-site
````

## Install Dependencies

```bash
npm install tailwindcss framer-motion
```

## Run Development Server

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

---

# 10. DEVELOPMENT WORKFLOW

## Phase 1 — Content

* Collect images
* Record videos
* Write timeline content

## Phase 2 — Layout

* Build page skeletons
* Navigation flow
* Component placeholders

## Phase 3 — Animation

* Page transitions
* Timeline scroll animations
* Gallery modal animations

## Phase 4 — Polish

* Desktop spacing
* Visual rhythm
* Micro-interactions

## Phase 5 — Deployment

* Vercel deploy
* Preload test
* Offline fallback test

---

# 11. VERCEL DEPLOYMENT FLOW

```bash
npm i -g vercel
vercel login
vercel
```

Follow prompts → deploy.

---

# 12. PERFORMANCE TARGETS (LAPTOP OPTIMIZED)

* First load: **< 2 seconds**
* No jank during scroll
* Smooth video playback
* Zero layout shift

---

# 13. OFFLINE BACKUP STRATEGY (IMPORTANT)

In case internet fails:

```bash
npm run build
npm run start
```



---

# 14. DO-NOT LIST (STRICT)

❌ Do not autoplay videos
❌ Do not autoplay background music
❌ Do not show loading spinners
❌ Do not use stock images
❌ Do not compress videos excessively
❌ Do not reduce image quality for speed

---



## Flow

Home → Story → Tribute

---

# 16. QUALITY BAR

This project is **done only if**:

✅ Emotionally impactful
✅ Cinematic
✅ Smooth
✅ Clean
✅ Professional

---

# END OF GUIDELINES
