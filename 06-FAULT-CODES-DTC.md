# Module 06 — Fault Codes (DTC)

## 6.1 What Are Diagnostic Trouble Codes?

A **Diagnostic Trouble Code (DTC)** is a standardised code stored in your vehicle's computer when it detects a problem. When something goes wrong — a sensor reads out of range, an emission component fails, or an electrical circuit malfunctions — the ECU records a DTC and may illuminate your dashboard's **Check Engine Light (CEL)** or **Malfunction Indicator Lamp (MIL)**.

Think of DTCs as your car's error log — a record of every problem the computer has detected.

## 6.2 How DTC Codes Are Structured

Every DTC follows the **SAE J2012** standard format — a 5-character code:

```
P 0 1 7 1
│ │ │ │ └── Specific fault number
│ │ │ └──── Sub-system
│ │ └────── Fault category
│ └──────── 0 = SAE standard, 1 = Manufacturer-specific
└────────── System: P = Powertrain, C = Chassis, B = Body, U = Network
```

### System Categories

| Prefix | System | Examples |
|--------|--------|----------|
| **P** — Powertrain | Engine, transmission, drivetrain | P0171 (System Too Lean), P0300 (Random Misfire) |
| **C** — Chassis | ABS, brakes, suspension, steering | C0035 (Left Front Wheel Speed Circuit) |
| **B** — Body | Airbag, central locking, HVAC, windows | B1000 (SRS Warning Lamp Circuit) |
| **U** — Network | CAN bus, module communication | U0100 (Lost Communication with ECM/PCM) |

### Standard vs Manufacturer-Specific

- **P0xxx** — Generic/SAE standard codes. Same meaning across all vehicle manufacturers.
- **P1xxx** — Manufacturer-specific codes. Meaning varies by brand. A P1456 in a Honda means something different than a P1456 in a Toyota.

## 6.3 BYKI's DTC Database

BYKI contains a comprehensive database of **4,565 diagnostic trouble codes** covering:

| Category | Count | Coverage |
|----------|-------|----------|
| **Powertrain (P)** | 3,593 | Engine, fuel, ignition, emission, transmission |
| **Chassis (C)** | 499 | ABS, suspension, stability control |
| **Network (U)** | 382 | CAN bus, module communication, data errors |
| **Body (B)** | 86 | Central locking, windows, climate control |
| **Total** | **4,565** | |

For each code, BYKI provides:

- **Code & Name** — e.g., P0171 "System Too Lean (Bank 1)"
- **Description** — what the code means in plain language
- **Severity** — Critical, Warning, or Informational
- **Common Causes** — the most likely reasons for this code
- **Estimated Repair Cost** — approximate cost in RM for Malaysian workshops
- **Related Components** — which parts are typically involved
- **Recommended Actions** — what to do next

## 6.4 Types of Fault Codes

Your vehicle stores DTCs in different categories based on their status:

### Stored (Confirmed) DTCs — Mode 03

Codes that have been **confirmed** by the ECU. A code becomes "stored" when the ECU detects the same fault across multiple drive cycles. These codes typically trigger the Check Engine Light.

### Pending DTCs — Mode 07

Codes that have been **detected once** but not yet confirmed. The ECU is watching to see if the fault recurs during the next drive cycle. Pending codes do **not** trigger the Check Engine Light.

> **Tip:** Pending codes are extremely valuable for catching problems early — before they become confirmed faults. A pending code today may become a Check Engine Light tomorrow.

### Permanent DTCs — Mode 0A

Codes that have been confirmed AND **cannot be cleared manually**. Even if you clear codes with a scan tool, permanent codes remain until the ECU itself verifies that the problem has been fixed. Introduced to prevent people from clearing codes before vehicle inspections.

## 6.5 Reading Fault Codes with BYKI

1. **Connect** to your vehicle (engine running or ignition ON)
2. Navigate to the **Fault Codes** screen
3. Tap **Read Codes**
4. BYKI reads all three code types (stored, pending, permanent) in a single operation

### Understanding the Results

For each detected code, BYKI shows:

| Field | Description |
|-------|-------------|
| **Code** | The 5-character DTC (e.g., P0420) |
| **Status** | Stored, Pending, or Permanent |
| **Name** | Plain-language name of the fault |
| **Severity** | 🔴 Critical / 🟡 Warning / 🔵 Info |
| **Description** | What the code means and what's happening |
| **Causes** | Most common reasons for this fault |
| **Cost Estimate** | Approximate repair cost in RM |

## 6.6 Common Fault Codes in Malaysia

These are the DTCs most frequently seen in Malaysian vehicles:

### Engine & Fuel

| Code | Name | Common Cause | Severity |
|------|------|-------------|----------|
| **P0171** | System Too Lean (Bank 1) | Vacuum leak, weak fuel pump, dirty MAF sensor | Warning |
| **P0172** | System Too Rich (Bank 1) | Leaking injector, faulty O2 sensor, clogged air filter | Warning |
| **P0300** | Random/Multiple Cylinder Misfire | Worn spark plugs, ignition coil failure, low compression | Critical |
| **P0301–P0304** | Cylinder X Misfire Detected | Specific cylinder spark plug, coil, or injector | Warning |
| **P0420** | Catalyst System Efficiency Below Threshold | Worn catalytic converter, O2 sensor degradation | Warning |
| **P0442** | Evaporative Emission System Leak (Small) | Loose fuel cap, EVAP canister crack | Info |
| **P0455** | Evaporative Emission System Leak (Large) | Missing fuel cap, EVAP hose disconnected | Warning |

### Cooling & Temperature

| Code | Name | Common Cause | Severity |
|------|------|-------------|----------|
| **P0115** | Engine Coolant Temperature Circuit | Faulty ECT sensor or wiring | Warning |
| **P0125** | Insufficient Coolant Temperature for Fuel Control | Thermostat stuck open (common in tropical climate) | Info |
| **P0128** | Coolant Thermostat Below Regulating Temperature | Thermostat needs replacement | Warning |

### O2 Sensors

| Code | Name | Common Cause | Severity |
|------|------|-------------|----------|
| **P0130** | O2 Sensor Circuit (Bank 1, Sensor 1) | O2 sensor failure, wiring damage | Warning |
| **P0133** | O2 Sensor Slow Response (B1S1) | Aging O2 sensor, contamination | Warning |
| **P0136** | O2 Sensor Circuit (Bank 1, Sensor 2) | Downstream O2 sensor failure | Info |

### Transmission

| Code | Name | Common Cause | Severity |
|------|------|-------------|----------|
| **P0700** | Transmission Control System | General transmission fault — read sub-codes | Warning |
| **P0715** | Input/Turbine Speed Sensor Circuit | Speed sensor failure, wiring issue | Critical |

## 6.7 Clearing Fault Codes

BYKI can clear stored and pending fault codes using OBD-II **Mode 04**:

1. Navigate to **Fault Codes** screen
2. Tap **Clear Codes**
3. Confirm the action
4. BYKI sends the clear command to the ECU

### Important Notes About Clearing

- Clearing codes **resets the Check Engine Light**
- Clearing codes **does not fix the underlying problem** — if the fault is real, the code will return
- Clearing codes **resets emission readiness monitors** — this may affect Puspakom/JPJ vehicle inspections
- **Permanent codes (Mode 0A) cannot be cleared** by any scan tool — only the ECU can clear them after verifying the repair
- We recommend **reading and recording** all codes before clearing, in case you need to share them with a workshop

## 6.8 When To Be Concerned

| Situation | Action |
|-----------|--------|
| **No codes detected** | Normal operation — no action needed |
| **Pending code only, no CEL** | Monitor — recheck in 1–2 weeks. May self-resolve. |
| **Single stored code, CEL on** | Schedule a workshop visit. Not urgent unless the code is misfire or overheating related. |
| **Multiple stored codes** | Visit a workshop. Multiple codes often indicate a root cause that's affecting several systems. |
| **Flashing CEL** | **Stop driving immediately.** A flashing CEL means active misfire that can damage the catalytic converter. Pull over safely and seek assistance. |

---

*Previous: [← Live Sensor Data](./05-LIVE-SENSOR-DATA.md) · Next: [How the Health Scan Works →](./07-HEALTH-SCAN.md)*
