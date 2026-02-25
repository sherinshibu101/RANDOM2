# 🎡 Ferris Wheel Birthday Experience – Project Guidelines

This document defines the **complete execution framework** for building a **2-page cinematic emotional storytelling website** for a **19th birthday surprise**, centered around an **interactive animated Ferris Wheel experience**.

This is a **desktop-first emotional product**, not a general-purpose website.

---

# 1. PROJECT CONTEXT

## Viewing Environment

* Primary device: **Laptop**
* Screen size target: **13–15 inch**
* Aspect ratio: **16:9**
* Single-session viewing
* Calm lighting & audio-controlled environment

## Deployment Platform

* **Vercel**

---

# 2. DESIGN PHILOSOPHY (CORE)

This is a **private digital gift experience**.

### Core Goals

* Emotional pacing
* Cinematic storytelling
* Visual elegance
* Interactive intimacy

### Design Bias

* Desktop-first UI
* Smooth cinematic motion
* Story-driven navigation
* Minimal UI clutter

---

# 3. FINAL PAGE ARCHITECTURE

```
/            → Home (Hero + Emotional Intro + Story Setup)
/ferris      → Animated Ferris Wheel + Interactive Cabins
```

---

# 4. CORE EXPERIENCE FLOW

```
Landing → Emotional Intro → Ferris Wheel Journey → Emotional Closure
```

Each page must **flow emotionally into the next**.

---

# 5. UI / UX RULES (LAPTOP OPTIMIZED)

## Layout

* Max container width: **1200px – 1300px**
* Hero sections: **min-height: 100vh**
* Ferris wheel stage: **900px – 1000px**

## Typography

* Heading: **clamp(48px, 6vw, 72px)**
* Body text: **18px – 20px**
* Line height: **1.7 – 1.9**

---

# 6. PAGE-WISE FUNCTIONAL SPEC

## HOME PAGE (/)

### Purpose

Set emotional tone + anticipation.

### Sections

* Hero emotional statement
* Soft cinematic background
* Intro text
* "Begin The Ride" CTA

### Animations

* Fade in hero
* Slow parallax background
* Smooth text reveal

---

## FERRIS PAGE (/ferris)

### Purpose

Core emotional experience

### Components

* Large animated ferris wheel
* 10–14 interactive cabins

### Interaction Rules

* Continuous slow rotation
* Hover glow effect
* Click → modal popup

### Cabin Content Types

* Memories
* Photos
* Letters
* Inside jokes
* Compliments
* Emotional notes

### Emotional Closure Section

At the bottom of the ferris page:

* Final handwritten-style letter
* Soft fade-in animation
* Gentle closing message

---

# 7. VIDEO PRESENTATION RULES (CRITICAL)

## Video Specs

* Resolution: **1080p**
* Aspect ratio: **16:9**
* Codec: **H.264**
* Container: **MP4**
* Duration: **≤ 60 seconds**

## Playback Rules

* Manual play only
* Fullscreen modal overlay
* Fade background audio
* Dim background UI

---

# 8. IMAGE QUALITY RULES

## Hero

* 2560px width
* 16:9

## Ferris Wheel Graphics

* SVG preferred

## Popup Images

* 1200px width

---

# 9. MEDIA PREPARATION PIPELINE

## Image Workflow

1. Select
2. Crop
3. Color correct
4. Resize
5. Compress (Squoosh / TinyPNG)
6. Convert to WebP

## Video Workflow

1. Record 1080p
2. Trim ≤ 60s
3. HandBrake compression
4. MP4 export

---

# 10. RECOMMENDED TECH STACK (OPTIMAL)

## Core

```
Next.js 14+
Tailwind CSS
Framer Motion
GSAP
SVG Graphics
```

## Deployment

```
Vercel
```

## Why This Stack

* Perfect for cinematic UI
* High animation performance
* Excellent deployment speed
* Professional-grade interaction control

---

# 11. ANIMATION ARCHITECTURE

## Ferris Wheel Motion

* GSAP infinite rotation
* Cabin counter-rotation
* Smooth easing

## Modal Transitions

* Framer Motion
* Scale + fade

## Page Transitions

* Framer Motion page variants

---

# 12. PERFORMANCE TARGETS

* First load < 2 seconds
* No scroll jank
* Zero layout shift
* 60fps animations

---

# 13. OFFLINE BACKUP STRATEGY

```
npm run build
npm run start
```

---

# 14. STRICT DO-NOT RULES

❌ No autoplay audio
❌ No autoplay video
❌ No stock photos
❌ No excessive compression

---

# 15. EMOTIONAL QUALITY BAR

This project is complete **only if**:

✅ Emotionally impactful
✅ Cinematic
✅ Smooth
✅ Clean
✅ Professional

