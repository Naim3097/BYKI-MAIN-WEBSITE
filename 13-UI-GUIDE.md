# Module 13 — User Interface Guide

## 13.1 Overview

BYKI is a single-page web application that runs entirely in your browser. The interface is designed for mobile-first use — optimised for smartphones in portrait orientation — but works on tablets and desktops too.

## 13.2 Home Screen

The home screen is your dashboard and launchpad:

| Element | Function |
|---------|----------|
| **Connection Status** | Shows Bluetooth connection state — disconnected (grey), connecting (amber), connected (green) |
| **Connect Button** | Opens the browser Bluetooth picker to pair with your OBD-II adapter |
| **Health Scan** | Launches the comprehensive health scan (requires connection) |
| **Live Data** | Opens real-time sensor monitoring (requires connection) |
| **Fault Codes** | Opens the DTC reader to check for stored/pending fault codes |
| **Shop** | Browse products, parts, and service items |
| **User Profile** | Account settings, sign out |

## 13.3 Health Scan Screen

### During the Scan

- **Progress Bar** — shows overall scan completion percentage
- **Phase Indicator** — which phase of the scan is currently running
- **Live Preview** — real-time sensor readings as they're being collected
- **Cancel Button** — stops the scan (you'll lose progress)

### After the Scan

- **Score Ring** — large circular gauge showing your overall health score (0–100) with risk tier colour
- **System Cards** — 7 individual system scores displayed as cards with mini gauges
- **Findings Feed** — scrollable list of specific findings with severity icons
- **Oil Recommendation** — the matched Petronas Syntium product card
- **Book Workshop** — button to find and book a BYKI Partner workshop

## 13.4 Live Data Screen

- **Hero Gauges** — large gauges for RPM and Vehicle Speed at the top
- **Parameter Grid** — all supported parameters in a compact grid layout
- **Value Colour Coding** — green (normal), amber (caution), red (concern)
- **Trend View** — tap any parameter to see its recent trend over time
- **Pause/Resume** — pause data streaming while keeping the connection alive
- **Session Stats** — min/max/average values tracked for the current session

## 13.5 Fault Codes Screen

- **Read Codes** button — reads all stored, pending, and permanent DTCs
- **Code Cards** — each detected DTC displayed as an expandable card showing:
  - Code (e.g., P0171)
  - Status (Stored / Pending / Permanent)
  - Severity badge (Critical / Warning / Info)
  - Description, causes, repair cost estimate
- **Clear Codes** button — sends Mode 04 clear command (with confirmation prompt)
- **Empty State** — "No fault codes detected" when the vehicle has no stored DTCs

## 13.6 Shop Screen

Browse Petronas Syntium oils, transmission fluids, parts, and service items. Products are organised by:
- **Category** — engine oil, transmission fluid, coolant, brake fluid, parts
- **Vehicle Match** — products recommended for your vehicle (after a scan)
- **System** — products related to specific engine systems

## 13.7 Navigation

| Gesture / Action | Function |
|-----------------|----------|
| **Bottom tabs** | Switch between Home, Live Data, Fault Codes, Shop, Profile |
| **Back arrow** | Return to previous screen |
| **Pull to refresh** | Refresh current screen data |
| **Swipe cards** | Navigate between system score cards |

## 13.8 Connection Indicators

The connection status bar appears at the top of every screen:

| State | Indicator | Meaning |
|-------|-----------|---------|
| 🔴 Disconnected | Grey bar | No Bluetooth connection |
| 🟡 Connecting | Amber pulsing | Bluetooth handshake in progress |
| 🟢 Connected | Green bar | Ready for scanning and live data |
| ⚠️ Error | Red badge | Connection lost or adapter error |

## 13.9 Settings & Account

| Setting | Description |
|---------|-------------|
| **Account** | Email, display name, sign-in method |
| **Vehicle Profile** | Save your vehicle make/model for faster oil matching |
| **Units** | Metric (default for Malaysia) or Imperial |
| **Theme** | Light / Dark / System |
| **About** | App version, credits, privacy policy |
| **Sign Out** | End session and return to sign-in screen |

## 13.10 Print / Export

From the Health Scan results screen:
- **Share** — generate a shareable link or screenshot of your health report
- **Print** — produce a print-friendly PDF of the full scan report

---

*Previous: [← Vehicle Oil Matching](./12-VEHICLE-OIL-MATCH.md) · Next: [Workshop & Booking →](./14-WORKSHOP-BOOKING.md)*
