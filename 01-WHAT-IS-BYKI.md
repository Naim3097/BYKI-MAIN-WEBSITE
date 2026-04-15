# Module 01 — What Is BYKI?

## 1.1 Overview

**BYKI** is a browser-based vehicle diagnostic platform that turns any smartphone into a professional-grade OBD-II scan tool. Built in Malaysia, BYKI connects to your vehicle through a Bluetooth adapter and reads real-time engine data — the same data that professional workshops use to diagnose problems.

No app download required. No subscription. No proprietary hardware. Open **byki.my** in Chrome, Edge, or Samsung Internet, pair a standard Bluetooth adapter to your car's OBD-II port, and you have full diagnostic capability.

## 1.2 What BYKI Does

BYKI provides four core functions for vehicle owners and workshop technicians:

### Health Scan

A comprehensive assessment of your engine's condition. BYKI reads live sensor data from your vehicle's ECU (engine control unit), analyses it across **7 engine systems**, and produces a scored health report with a 0–100 rating. The scan takes approximately 2 minutes and identifies potential issues before they become expensive repairs.

### Live Data Streaming

Real-time monitoring of your engine's vital signs — RPM, coolant temperature, fuel trims, O2 sensor voltages, engine load, throttle position, and more. Data updates continuously as the engine runs, displayed in gauges, grids, and trend charts.

### Fault Code Reader

Read and clear **Diagnostic Trouble Codes (DTCs)** stored in your vehicle's computer. BYKI's database covers **4,565 standardised codes** with descriptions, severity levels, common causes, estimated repair costs in RM, and recommended actions. Supports stored, pending, and permanent fault codes.

### Oil Recommendation

Based on your vehicle's make, model, engine type, and diagnostic data, BYKI recommends the correct **Petronas Syntium** engine oil grade — matched to your engine's actual specifications and operating condition. The recommendation includes the correct transmission fluid (Petronas Tutela) and service booking at a BYKI Partner workshop.

## 1.3 Who BYKI Is For

| User | Use Case |
|------|----------|
| **Vehicle Owners** | Check your car's health before a service, road trip, or purchase. Understand what's happening inside your engine without paying for a workshop diagnostic. |
| **Workshop Technicians** | Quick pre-inspection scan for customer vehicles. Identify issues faster, build trust with data-backed findings, and recommend the correct service. |
| **Fleet Operators** | Monitor multiple vehicles. Track engine health trends across a fleet. Identify vehicles that need service before breakdowns occur. |
| **Car Buyers** | Scan a used car before purchase. Detect hidden problems that a test drive wouldn't reveal — pending fault codes, emission issues, sensor drift, or engine wear indicators. |

## 1.4 How It Works — The Simple Version

1. **Plug** a standard ELM327 Bluetooth adapter into the OBD-II port under your dashboard
2. **Open** byki.my in your mobile browser (Chrome recommended)
3. **Connect** via the Bluetooth picker that appears automatically
4. **Scan** — BYKI reads your engine data, analyses it, and produces a health report
5. **Act** — review findings, recommended oil, and book a workshop if needed

The entire process — from plugging in the adapter to reading your health report — takes under 3 minutes.

## 1.5 Key Platform Features

| Feature | Description |
|---------|-------------|
| **Zero Install** | Runs entirely in the browser — no app store, no download, no updates |
| **Universal Compatibility** | Works with any OBD-II vehicle (1996+ globally, most Malaysian cars 2005+) |
| **Affordable Hardware** | Uses standard ELM327 BLE adapters available from RM30–150 |
| **7-System Scoring** | Scores 7 engine systems independently: Combustion, Fuel, Cooling, Emission, Charging, Oil, Transmission |
| **Malaysian Market** | RM pricing, Malaysian vehicle calibrations, tropical climate adjustments, local workshop network |
| **Data Privacy** | Your vehicle data stays on your device. No cloud uploads required for basic scanning. |
| **Petronas Integration** | Oil recommendations use the Petronas Syntium product range exclusively |

## 1.6 Supported Vehicles

BYKI works with any vehicle that has an OBD-II port and supports standard OBD-II protocols. In Malaysia, this includes:

- **National:** Perodua (Axia, Bezza, Myvi, Ativa, Alza, Aruz), Proton (Saga, Persona, Iriz, X50, X70, X90, S70, Exora)
- **Japanese:** Toyota, Honda, Nissan, Mazda, Mitsubishi, Suzuki, Subaru
- **Korean:** Hyundai, Kia
- **European:** BMW, Mercedes-Benz, Volkswagen
- **Chinese:** Chery, GWM/Haval
- **American:** Ford

BYKI's oil matching database covers **85+ vehicle models across 18 makes** — representing over **95% of vehicles registered in Malaysia**.

> **Note:** Some very old vehicles (pre-2000) may have limited OBD-II support. Fully electric vehicles (EVs) without an internal combustion engine do not require engine oil diagnostics but may still support basic OBD-II communication for battery and drivetrain parameters.

## 1.7 Technology at a Glance

BYKI is a modern web application built with current technologies:

| Component | Technology |
|-----------|------------|
| **Platform** | Web-based (Progressive Web App) |
| **Browser Support** | Chrome 89+, Edge 89+, Samsung Internet 15+ |
| **Vehicle Connection** | Web Bluetooth API (W3C standard) |
| **OBD Protocol** | SAE J1979 (standard diagnostic protocol) |
| **DTC Standard** | SAE J2012 (5-character diagnostic trouble codes) |
| **Authentication** | Firebase Auth (email + Google sign-in) |
| **Hosting** | Firebase Hosting with global CDN |

---

*Next: [Getting Started →](./02-GETTING-STARTED.md)*
