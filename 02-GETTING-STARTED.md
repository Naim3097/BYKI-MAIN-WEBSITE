# Module 02 — Getting Started

## 2.1 What You Need

Before using BYKI, make sure you have:

### Hardware

| Item | Details |
|------|---------|
| **Smartphone or Tablet** | Any device with Bluetooth Low Energy (BLE) support. Android 8+ or iOS 15+ recommended. |
| **OBD-II Bluetooth Adapter** | An ELM327-compatible Bluetooth Low Energy (BLE) adapter. Available online and at automotive shops for RM30–150. See [Module 03 — Hardware & Adapters](./03-HARDWARE-ADAPTERS.md) for detailed recommendations. |
| **Vehicle** | Any car, truck, or SUV with a standard OBD-II diagnostic port (16-pin connector, usually located under the dashboard on the driver's side). |

### Software

| Requirement | Details |
|-------------|---------|
| **Browser** | Google Chrome 89+, Microsoft Edge 89+, or Samsung Internet 15+. Safari and Firefox do **not** support Web Bluetooth. |
| **Bluetooth** | Device Bluetooth must be turned on. Location services must be enabled (required by Android for BLE scanning). |
| **Internet** | Required for initial page load and authentication. Scanning itself works with limited connectivity. |

> **Important:** BYKI uses **Bluetooth Low Energy (BLE)**, not classic Bluetooth. If your adapter only supports classic Bluetooth (non-BLE), it will not appear in the browser's Bluetooth picker. Make sure you purchase a **BLE** adapter.

## 2.2 Finding Your OBD-II Port

Every OBD-II compliant vehicle has a standardised 16-pin diagnostic connector. In most vehicles, it is located:

- **Under the dashboard**, on the driver's side
- **Below the steering column**, often behind a small plastic cover
- Within **arm's reach** of the driver's seat (required by regulation)

Common locations by brand:

| Brand | Typical Location |
|-------|-----------------|
| **Perodua** | Below steering column, slightly left of centre |
| **Proton** | Under dashboard, left of steering column |
| **Toyota / Honda** | Below dashboard, driver's side, sometimes behind a pull-down panel |
| **BMW / Mercedes** | Below dashboard, near the OBD-II sticker or behind a small flap |
| **Nissan** | Under dashboard, left side, near fuse box |

> **Tip:** If you can't find the port, search "[your car model] OBD-II port location" — there are images and videos available for virtually every vehicle.

## 2.3 Plugging In the Adapter

1. **Turn off the engine** (ignition can be ON or ACC, but engine should not be running during initial setup)
2. **Locate the OBD-II port** under your dashboard
3. **Insert the adapter** firmly into the 16-pin port — it should click into place
4. **Check the adapter's LED** — most adapters have a power light that turns on when connected to the vehicle's power

The adapter draws power from the vehicle's OBD-II port (Pin 16 = battery positive, Pin 4/5 = ground). No batteries required.

## 2.4 Connecting BYKI

### Step 1 — Open BYKI

Navigate to **byki.my** in Chrome (or a supported browser) on your smartphone.

### Step 2 — Sign In

Create an account or sign in with:
- **Email + Password** — standard registration
- **Google Sign-In** — one-tap authentication

### Step 3 — Start Connection

Tap the **Connect** button on the home screen. Your browser will display a Bluetooth device picker showing nearby BLE devices.

### Step 4 — Select Your Adapter

Look for your adapter in the list. Common adapter names include:
- `OBDII` or `OBD2`
- `VEEPEAK` or `VP`
- `Vgate iCar`
- `ELM327`
- `V-LINK` or `Vlink`

Tap your adapter name to pair.

### Step 5 — Wait for Initialisation

BYKI will:
1. Establish the Bluetooth connection
2. Detect the adapter type and capabilities
3. Send initialisation commands to configure the OBD-II protocol
4. Discover which data parameters your vehicle supports

This takes 5–15 seconds. The connection status indicator will turn green when ready.

> **If the adapter doesn't appear:** Make sure Bluetooth and Location are both enabled. Try refreshing the page. If using Android, ensure Chrome has Bluetooth permission. See [Module 15 — Troubleshooting](./15-TROUBLESHOOTING.md) for detailed help.

## 2.5 Your First Scan

Once connected:

1. **Start the engine** — BYKI needs the engine running to read live sensor data
2. Let the engine **idle for 30 seconds** — this allows sensors to stabilise
3. Tap **Health Scan** on the home screen
4. BYKI will automatically read data across **multiple sampling cycles** and analyse the results
5. The scan completes in approximately **2 minutes**

### What Happens During a Scan

During the scan, BYKI:
- Reads **38 live parameters** from your engine's sensors
- Samples data across **multiple cycles** to ensure statistical reliability
- Checks for active and pending fault codes
- Produces a scored health assessment across 7 engine systems

You'll see a progress indicator showing the current scan phase.

### Reading Your Results

After the scan completes, you'll see:

- **Overall Health Score** — a 0 to 100 rating of your engine's condition
- **Risk Tier** — Healthy (≥85), Monitor (70–84), Warning (50–69), or Critical (<50)
- **System Scores** — individual scores for each of the 7 engine systems
- **Findings** — specific issues detected, with severity levels and recommended actions
- **Oil Recommendation** — the correct Petronas Syntium grade for your vehicle

See [Module 08 — Understanding Your Health Report](./08-HEALTH-REPORT.md) for a detailed guide on interpreting your results.

## 2.6 After Your First Scan

With your results in hand, you can:

| Action | When |
|--------|------|
| **No action needed** | Score is 85+ (Healthy), no critical findings |
| **Monitor** | Score is 70–84, minor findings flagged — rescan in 2–4 weeks |
| **Service recommended** | Score is 50–69 or oil-related findings detected — book a workshop |
| **Urgent attention** | Score below 50 or critical findings — visit a workshop promptly |

If an oil change is recommended, BYKI will show you the correct Petronas Syntium product and allow you to book a BYKI Partner workshop directly from the app.

---

*Previous: [← What Is BYKI?](./01-WHAT-IS-BYKI.md) · Next: [Hardware & Adapters →](./03-HARDWARE-ADAPTERS.md)*
