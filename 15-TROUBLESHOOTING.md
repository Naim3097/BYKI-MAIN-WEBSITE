# Module 15 — Troubleshooting

## 15.1 Bluetooth Connection Issues

### Adapter Not Found

| Possible Cause | Solution |
|---------------|----------|
| Adapter not powered | Ensure the OBD-II adapter LED is blinking (key must be in ON/RUN position) |
| Bluetooth off on phone | Enable Bluetooth in phone settings |
| Browser doesn't support Web Bluetooth | Use Google Chrome or Microsoft Edge (Safari/Firefox not supported) |
| Adapter already paired to another device | Disconnect adapter from other phone/tablet first |
| Adapter too far from phone | Keep phone within 3–5 metres of the OBD-II port area |

### Connection Drops During Use

| Possible Cause | Solution |
|---------------|----------|
| Phone screen turned off | Keep screen on during scans (disable auto-lock temporarily) |
| Battery saver mode | Disable battery optimisation for Chrome/Edge |
| Too many Bluetooth devices | Disconnect other BLE devices (smartwatch, earbuds) during scan |
| Adapter loose in port | Push adapter firmly into the OBD-II port until seated |
| Electrical interference | Move phone closer to adapter area |

### Paired But Not Communicating

| Possible Cause | Solution |
|---------------|----------|
| Wrong adapter type | Ensure adapter is BLE (Bluetooth Low Energy), not Classic Bluetooth |
| Vehicle key not in RUN | Turn ignition to ON/RUN without starting engine, then try again |
| Adapter firmware outdated | Check manufacturer's site for firmware updates |
| Multiple adapters nearby | Turn off or remove other OBD adapters from nearby vehicles |

## 15.2 Health Scan Issues

### Scan Fails to Start

- **Check connection** — ensure the green "Connected" indicator is showing
- **Turn key to RUN** — some vehicles need the engine running; others only need ignition ON
- **Wait 10 seconds** — give the ECU time to wake up after turning the key

### Scan Stalls or Takes Too Long

A normal health scan takes **45–90 seconds**. If it stalls:

1. **Check the vehicle** — engine must remain running (or key in RUN)
2. **Don't switch apps** — keep the browser in the foreground
3. **Cancel and retry** — tap Cancel, wait 5 seconds, then start again
4. **Try after driving** — some ECUs respond better after a short drive (2–3 minutes)

### Incomplete Results / Missing Systems

| Symptom | Cause | Solution |
|---------|-------|----------|
| Only 3–4 systems scored | Vehicle doesn't support all PIDs | Normal — BYKI scores only systems with sufficient data |
| "Insufficient Data" on a system | Too few parameters available | Some older vehicles support limited OBD-II |
| Score seems low despite no DTCs | Sub-optimal sensor readings | Scores reflect real-time data, not just fault codes |

## 15.3 Fault Code Issues

### No Codes Read

- **This is good** — your vehicle has no stored fault codes
- If you expected codes (MIL/check engine light is on), try:
  - Turn engine off, wait 30 seconds, start engine, wait 30 seconds, then read codes again
  - Drive for 5 minutes and re-read — some codes only appear after driving

### Codes Won't Clear

| Situation | Explanation |
|-----------|------------|
| **Permanent DTC** | Some codes (Mode 0A) can only be cleared by the ECU after the underlying problem is fixed and multiple drive cycles pass |
| **Code returns after clearing** | The fault is still present — clearing codes doesn't fix the problem. Address the root cause. |
| **"Clear failed" error** | Some vehicles restrict clearing to manufacturer tools. This is uncommon but normal for certain models. |

## 15.4 Live Data Issues

### No Data or Zero Values

- **Engine must be running** — most sensors only report when the engine is on
- **Some PIDs not supported** — not all vehicles report all 38 parameters. Missing PIDs show "N/A"
- **Check the adapter** — if all values are zero, disconnect and reconnect

### Values Look Wrong

| Parameter | Common Misconception |
|-----------|---------------------|
| **Coolant Temp** | 85–105°C is normal for Malaysian climate — this is NOT overheating |
| **Short-term Fuel Trim** | ±10% fluctuation is normal; ±25% is a concern |
| **RPM at idle** | 650–850 RPM varies by vehicle; some models idle at 600 or 900 |
| **Intake Air Temp** | 40–55°C is typical in Malaysia; higher than ambient is normal (heat soak) |
| **Battery Voltage** | 13.5–14.7V with engine running; 12.4–12.8V engine off |

## 15.5 Adapter-Specific Issues

### Vgate iCar Pro

| Issue | Fix |
|-------|-----|
| LED not blinking | Ensure OBD-II port has power (key ON). Try a different port/vehicle to isolate. |
| Can't find in picker | Make sure it's the BLE version (not classic Bluetooth). Look for "Vgate" or "iCar" in the Chrome picker. |
| Slow response | Normal for first connection. Subsequent reads are faster. |

### OBDLink MX+

| Issue | Fix |
|-------|-----|
| No BLE broadcast | Update firmware using the OBDLink app on your phone. |
| Intermittent disconnection | Disable "auto-sleep" in OBDLink's configuration app. |

### Generic ELM327

| Issue | Fix |
|-------|-----|
| Very slow scan times | Generic adapters are slower. Scan may take 90–120 seconds vs 45–60 for premium adapters. |
| Some PIDs fail | Cheap ELM327 clones skip certain PIDs. Upgrade to a genuine adapter for full coverage. |
| Adapter overheats | Remove after use — don't leave plugged in while driving. |

## 15.6 Browser & Device Issues

### Supported Browsers

| Browser | Support |
|---------|---------|
| **Google Chrome** (Android, Windows, macOS, ChromeOS) | ✅ Full support |
| **Microsoft Edge** (Windows, macOS) | ✅ Full support |
| **Samsung Internet** (Android) | ✅ Supported |
| **Opera** (Android, Windows) | ✅ Supported |
| **Safari** (iOS, macOS) | ❌ Not supported (no Web Bluetooth API) |
| **Firefox** | ❌ Not supported (no Web Bluetooth API) |

### iOS Users

Web Bluetooth is not available on Safari. iOS users can:
- Use the **Bluefy** browser from the App Store (third-party Web Bluetooth browser)
- Use a laptop/desktop with Chrome and keep the phone nearby for Bluetooth range

### Page Won't Load

1. Clear browser cache and cookies for the BYKI site
2. Try incognito/private mode
3. Check your internet connection
4. Disable browser extensions that might block scripts
5. Try a different browser (Chrome recommended)

## 15.7 Frequently Asked Questions

### General

**Q: Is BYKI free to use?**  
A: The core features — health scan, live data, and fault code reading — are available at no cost.

**Q: Does BYKI work on all cars?**  
A: BYKI works on OBD-II compliant vehicles. In Malaysia, this covers petrol and diesel vehicles from approximately 2000 onwards. See Module 01 for the full supported vehicle list.

**Q: Can BYKI damage my car?**  
A: No. BYKI only reads data from your vehicle's ECU. It does not write to or modify any vehicle system. The only write operation is clearing fault codes, which you must explicitly confirm.

**Q: Do I need to install an app?**  
A: No. BYKI is a web application — open it in Chrome and you're ready to go. No download or installation needed.

### Scanning

**Q: How often should I scan?**  
A: We recommend scanning once a month or before/after long trips. Scan anytime you notice unusual behaviour (strange noises, warning lights, performance changes).

**Q: Why is my score different each time?**  
A: Health scores reflect real-time conditions. Temperature, driving style, fuel quality, and warm-up state all affect sensor readings. Scan after a 5–10 minute drive for the most consistent results.

**Q: The engine light is on but BYKI shows no critical codes. Why?**  
A: The MIL (Malfunction Indicator Lamp) can be triggered by manufacturer-specific codes that aren't in the standard OBD-II set. Visit a workshop for manufacturer-level diagnostics.

### Oil & Service

**Q: Can I use a different oil than what BYKI recommends?**  
A: The recommendation follows your manufacturer's specification requirements. You can use any oil that meets or exceeds the required specification grade (API, ILSAC, ACEA, or OEM approval). See Module 10 for specification details.

**Q: Where can I buy Petronas Syntium?**  
A: Through BYKI Partner Workshops, Petronas stations, authorised retailers, and select Shopee/Lazada sellers. See Module 11 for the full product range.

**Q: How do I know my oil change interval?**  
A: Standard intervals are 5,000–10,000 km depending on oil type and driving conditions. See Module 10 for detailed guidance. BYKI will remind you based on your service history.

### Privacy & Data

**Q: What data does BYKI collect?**  
A: BYKI reads standard OBD-II data (sensor values, fault codes) during scans. Vehicle data is stored in your account for history tracking. We do not access personal data, location (unless you opt in for workshop finding), or vehicle GPS.

**Q: Can I delete my data?**  
A: Yes. You can delete individual scan records or your entire account from the Settings screen.

---

*Previous: [← Workshop & Booking](./14-WORKSHOP-BOOKING.md) · Next: [Glossary →](./16-GLOSSARY.md)*
