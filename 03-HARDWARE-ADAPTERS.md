# Module 03 — Hardware & Adapters

## 3.1 What Is an OBD-II Adapter?

An OBD-II adapter is a small device that plugs into your vehicle's diagnostic port and communicates wirelessly with your smartphone. It acts as a bridge between your car's internal computer network (the CAN bus) and BYKI running in your browser.

The adapter translates the vehicle's raw diagnostic protocol into data that BYKI can read — engine RPM, coolant temperature, fuel trims, sensor voltages, fault codes, and more.

## 3.2 Choosing the Right Adapter

### Bluetooth Type Matters

BYKI uses **Web Bluetooth**, which only supports **Bluetooth Low Energy (BLE)**. This is critical:

| Bluetooth Type | Compatible with BYKI? |
|----------------|----------------------|
| **Bluetooth Low Energy (BLE / 4.0+)** | ✅ Yes |
| **Classic Bluetooth (2.0 / 3.0)** | ❌ No — will not appear in browser |
| **Wi-Fi OBD adapters** | ❌ No — Web Bluetooth only |
| **USB OBD adapters** | ❌ No — requires Bluetooth |

> **Important:** Many cheap OBD-II adapters on Shopee and Lazada are classic Bluetooth only. Always confirm the listing says "Bluetooth 4.0", "BLE", or "Bluetooth Low Energy" before purchasing.

### Recommended Adapters

| Adapter | Chip | Price (RM) | Rating | Notes |
|---------|------|-----------|--------|-------|
| **Veepeak OBDCheck BLE+** | STN2120 | RM 90–130 | ⭐⭐⭐⭐⭐ | Best overall. Fast, reliable, genuine OBDLink-class chip. |
| **Vgate iCar Pro BLE** | ELM327 v2.1 | RM 60–90 | ⭐⭐⭐⭐ | Good mid-range. Genuine ELM327 chip with solid BLE connection. |
| **OBDII BLE Generic** | ELM327 clone | RM 30–50 | ⭐⭐⭐ | Budget option. Works but slower. Some clones have quirks. |
| **OBDLink MX+** | STN1170 | RM 200+ | ⭐⭐⭐⭐⭐ | Premium professional-grade. Fastest response time. |
| **Veepeak Mini BLE** | ELM327 v1.5 | RM 50–70 | ⭐⭐⭐½ | Compact form factor. Decent performance. |

### Adapter Chip Types

The chip inside the adapter determines its capabilities and performance:

| Chip Type | Speed | Reliability | Notes |
|-----------|-------|------------|-------|
| **STN/OBDLink** (STN1170, STN2120) | Fastest | Excellent | Professional-grade. Best PID response time. Genuine firmware. |
| **Genuine ELM327** (v1.5, v2.1) | Good | Good | Original Microchip design. Reliable but slower than STN. |
| **ELM327 Clone** | Variable | Variable | Counterfeit chips. Most work, but some have firmware bugs, slower responses, or missing features. |

> **Tip for Malaysian buyers:** On Shopee/Lazada, search for "OBD2 Bluetooth BLE" and check reviews for mentions of "Chrome", "web browser", or "BLE" compatibility. Avoid listings that only mention Android/iOS app compatibility.

## 3.3 Adapter LED Indicators

Most adapters have LED lights that indicate status:

| LED Behaviour | Meaning |
|---------------|---------|
| **Solid light** | Adapter is powered (connected to OBD-II port) |
| **Blinking light** | Adapter is communicating with vehicle or Bluetooth device |
| **No light** | Adapter is not receiving power — check OBD-II port connection |
| **Rapid flash** | Data transfer in progress (during scan) |

## 3.4 Installation Tips

### Positioning

- The adapter should be **firmly seated** in the OBD-II port — push until you feel it click
- Some ports are recessed or angled — don't force the adapter at an awkward angle
- If the adapter sticks out too far below the dashboard, ensure it doesn't interfere with your knees or pedals while driving

### Leaving the Adapter Plugged In

- Most BLE adapters draw minimal current (5–15 mA) and can be left plugged in
- For vehicles parked for extended periods (>2 weeks), consider unplugging to avoid minor battery drain
- Some adapters have auto-sleep features that cut power consumption when the ignition is off

### Multiple Vehicles

- You can use the same adapter across different vehicles — simply move it between OBD-II ports
- BYKI detects the vehicle's protocol automatically each time you connect
- Each vehicle will have its own set of supported parameters

## 3.5 Adapter Troubleshooting

| Problem | Solution |
|---------|----------|
| Adapter not appearing in Bluetooth picker | Confirm it's BLE (not classic Bluetooth). Try unplugging and reinserting. Toggle Bluetooth off/on on your phone. |
| Adapter appears but won't connect | Close other OBD apps that might be holding the BLE connection. Restart the adapter by unplugging for 10 seconds. |
| Connected but no data | Engine must be running (not just ignition on). Some parameters only available when engine is warm. |
| Slow response | Clone adapters are slower. Reduce ambient BLE interference (other Bluetooth devices). |
| Adapter disconnects during scan | Weak Bluetooth signal — move phone closer. Check adapter is firmly seated. |

For detailed troubleshooting, see [Module 15 — Troubleshooting](./15-TROUBLESHOOTING.md).

## 3.6 Where to Buy in Malaysia

| Source | Notes |
|--------|-------|
| **Shopee** | Search "OBD2 BLE Bluetooth 4.0". Many options RM30–150. Read reviews carefully. |
| **Lazada** | Similar range. Look for "Veepeak" or "Vgate" brands for reliability. |
| **Mr. DIY / ACE Hardware** | Limited selection but available in some outlets. |
| **Automotive shops** | Workshop supply stores in Klang Valley stock professional-grade adapters. |
| **Amazon (ship to MY)** | For premium brands like OBDLink MX+. Higher price but guaranteed genuine. |

---

*Previous: [← Getting Started](./02-GETTING-STARTED.md) · Next: [How OBD-II Works →](./04-HOW-OBD2-WORKS.md)*
