# PURPLE Awareness

![PURPLE Awareness Campaign](/frontend/public/hero.png)

## The Reality & Why This Exists
Between April and June of 2026 alone, 569 women were murdered in South Africa. In that same single quarter, 8,814 women and children were victims of reported rape. 

On September 14, 2026, the severity of this crisis was underscored again with the tragic discoveries in Kempton Park and across Ekurhuleni, including the loss of Elizabeth "Tsontso" Moselakgomo, Itumeleng Kekana, and six other unidentified women.

This platform was originally conceptualized as a student council campaign, but a political pitch felt entirely irrelevant in the wake of these events. Instead, the project was pivoted into an awareness and accountability tool. This is not about passive hashtags; it’s an active refusal to accept gender-based violence and femicide as our normal. 

The site features a live count-up stopwatch tracking the continuous time we've lived in the wake of the September 14th tragedy, alongside a globally synchronized pledge counter representing individuals who are actively standing against this crisis.

## The Mechanism
To ensure the integrity of the campaign, the pledge counter does not use padded or simulated numbers. Every tick of the counter represents a real device interaction. 

The platform utilizes **Firebase Firestore** to handle real-time synchronization. When a user clicks the pledge button, the database updates atomically, and the UI reflects the change live across all connected devices globally. LocalStorage is used to prevent duplicate pledges from the same device, ensuring the count remains an honest representation of the community taking a stand.

## Tech Stack
* **Frontend:** React, Vite, JavaScript
* **Styling:** Vanilla CSS (Brutalist, high-contrast, editorial grid)
* **Database / Backend:** Firebase Firestore (Real-time NoSQL)
* **Deployment:** Vercel (Configured via `vite.config.js`)

## Local Development Setup

### 1. Install Dependencies
Ensure you have Node.js installed, then run:
```bash
npm install

```

### 2. Firebase Configuration

You need to connect your own Firebase project to run the database locally.

1. Create a Firebase project and enable **Firestore Database**.
2. Start the database in **Test Mode**.
3. Create a collection named `campaign` and a document inside it named `stats`. Add a field called `count` (type: `number`, value: `0`).
4. Update the `firebaseConfig` object in `src/firebase.js` with your specific API keys.

### 3. Run the Development Server

```bash
npm run dev

```

The site will be available at `http://localhost:5173/`.

To view the site on your mobile device (on the same Wi-Fi network) with Hot Module Replacement:

```bash
npm run dev -- --host

```

## Social Sharing & Meta Tags

The `index.html` is fully configured with Open Graph and Twitter Card meta tags for rich link previews on WhatsApp, iMessage, Instagram, and Twitter.

**Note on deployment:** Before pushing to production, ensure the `og:url` and `og:image` meta tags in `index.html` are updated to reflect the live absolute URL of the deployed site (e.g., `https://purple.yourdomain.com/hero.png`) so the preview card renders correctly.

---

**A Digital Studio Project by [BVLTRA](https://bvltra.com) / Tshedza Mosehane**

