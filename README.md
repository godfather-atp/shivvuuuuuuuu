# 💌 Digital Love Letter & Romantic Apology Website

A beautiful, romantic, interactive apology website crafted with a soft baby-pink aesthetic, delicate typography, smooth animations, and an emotional storytelling experience.

---

## ✨ Features

- 🌸 **Soft Baby-Pink Aesthetic**: Uses `#FADADD` with blush, pastel rose, and subtle crimson accents.
- 💌 **5-Page Romantic Storytelling Flow**:
  - **Page 1 (The Opening Letter)**: Interactive 3D envelope with a heart wax seal that unseals and reveals the letter.
  - **Page 2 (My Feelings)**: Apology message presented on letter-style paper with a gentle typewriter animation and blinking quill cursor (includes a quick "Show all" toggle).
  - **Page 3 (One Last Thing)**: Heartfelt emotional message with a beating heart animation and pulsing aura rings.
  - **Page 4 (The Big Question)**: Centered interactive card with two independent choices: **YES 💗** and **NO 🥺**.
  - **Page 5 (YES - Celebration)**: Joyful pastel confetti shower, sweet message, and a "Read Your Special Note 💌" button that unfolds a handwritten letter with your personal promise.
  - **Page 5 (NO - Respect & Care)**: Zero-pressure, gentle, understanding message respecting her boundaries, with a "Read My Note 💗" button revealing a comforting handwritten note.
- 🎵 **Soft Romantic Music Player**: Floating audio toggle (OFF by default) featuring a built-in soothing music-box lullaby synthesized via Web Audio API (zero external download dependencies or broken links), with support for custom MP3s.
- ✨ **Floating Background Effects**: Drifting pastel hearts, twinkling sparkles, soft ambient glow, and an interactive bloom of hearts wherever she clicks on the screen.
- 📱 **Mobile First & Centered**: Perfectly centered layout, responsive on phones, tablets, and desktops.
- 🧭 **Navigation**: Heart-shaped progress dots ("Page X of 4"), back button, and a replay option to read from the beginning.
- ⚙️ **Single Config File**: All text, her name, your personal notes, and music settings can be changed in one file: `src/config/letterConfig.js`.

---

## 🛠️ How to Customize

Open `src/config/letterConfig.js` in your editor. You can easily change:

1. **Her Name & Signatures**:
   ```javascript
   recipientName: "Shivuu", // Change to her name or pet name
   senderName: "Yours Always",
   ```

2. **Personalized Notes**:
   - Customize the **YES** note in `yesExperience.personalNote`
   - Customize the **NO** note in `noExperience.personalNote`

3. **Page Texts**:
   - Edit paragraphs for Page 1, Page 2, Page 3, and Page 4 questions.

4. **Custom Song (Optional)**:
   - Place an audio file (e.g. `song.mp3`) in the `public/` folder.
   - Set `customAudioUrl: "/song.mp3"` in `letterConfig.js`.

---

## 🚀 Running the Project Locally

```bash
# Install dependencies (already installed)
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deploying Online (Free & Easy)

You can share this live with her via:
- **Vercel**: Run `npx vercel` or link your GitHub repo.
- **Netlify**: Drag and drop the `dist` folder generated after running `npm run build`.
- **GitHub Pages**: Build with `npm run build` and deploy the `dist/` directory.
