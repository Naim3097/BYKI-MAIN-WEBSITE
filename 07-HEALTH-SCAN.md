# Module 07 — How the Health Scan Works

## 7.1 Overview

The **Health Scan** is BYKI's flagship feature — a comprehensive assessment of your engine's condition that goes far beyond reading fault codes. While a basic code reader tells you *what went wrong*, BYKI's health scan tells you *how your engine is actually performing right now*.

The scan takes approximately **2 minutes** and produces a scored health report covering 7 engine systems.

## 7.2 What Makes BYKI's Scan Different

Most OBD-II apps simply read fault codes (DTCs) — a binary check for stored errors. BYKI does something fundamentally different:

| Traditional Code Reader | BYKI Health Scan |
|------------------------|-----------------|
| Reads stored DTCs only | Reads 38 live parameters across multiple sampling cycles |
| Pass/fail — either there's a code or there isn't | Continuous scoring — detects gradual degradation before a fault code triggers |
| No context about severity | Severity classification and confidence assessment |
| No oil or service recommendations | Data-qualified Petronas Syntium recommendation |
| Single snapshot in time | Multi-cycle statistical analysis with averaging |

The key difference: **BYKI analyses live sensor behaviour, not just stored errors.** An engine can be developing problems — running lean, overheating slightly, showing voltage instability — long before any fault code is triggered. BYKI catches these patterns.

## 7.3 The Scanning Process

When you tap "Start Scan", BYKI performs a multi-phase process:

### Phase 1 — Connection Verification

BYKI confirms the Bluetooth connection is stable and the adapter is responding. The vehicle's supported parameters are verified.

### Phase 2 — Data Collection

This is the core of the scan. BYKI reads **38 live parameters** from your engine's sensors across **multiple sampling cycles**. Each cycle captures a complete snapshot of all supported sensor values.

Multiple cycles are necessary because:
- Engine sensors fluctuate naturally — a single reading is unreliable
- Some conditions only appear intermittently
- Statistical averaging produces more accurate results
- Unusual readings can be identified and weighted appropriately

### Phase 3 — Fault Code Check

While collecting live data, BYKI also reads:
- Stored (confirmed) fault codes
- Pending fault codes
- Permanent fault codes

These are incorporated into the analysis alongside the live data.

### Phase 4 — Analysis

BYKI's analysis engine processes the collected data:
- **Sensor data is averaged** across cycles to eliminate noise
- **Derived metrics** are calculated from raw data (combined fuel trims, thermal efficiency, oil stress indicators)
- **System-level evaluation** assesses each of the 7 engine systems independently
- **Cross-parameter validation** checks whether sensor readings are consistent with each other
- **Workshop-grade diagnostics** match patterns against known fault signatures

### Phase 5 — Scoring & Report

The analysis produces:
- An **overall health score** (0–100)
- Individual **system scores** for each of the 7 engine systems
- A **risk tier** classification (Healthy, Monitor, Warning, Critical)
- Specific **findings** with severity levels and recommended actions
- A **Petronas Syntium recommendation** based on your vehicle and engine condition

## 7.4 Data Scale

Each BYKI health scan draws on a substantial data foundation:

| Component | Scale |
|-----------|-------|
| **Live Parameters** | 38 PIDs read per cycle |
| **Sampling Cycles** | Multiple cycles for statistical reliability |
| **System Rules** | Hundreds of physics-based health evaluation rules |
| **Workshop Diagnostics** | Hundreds of repair-oriented pattern matching rules |
| **Parameter Cross-Checks** | Hundreds of physics-based correlations |
| **DTC Database** | 4,565 standardised diagnostic trouble codes |
| **Derived Metrics** | 11 composite indicators calculated from raw data |

This depth is what separates BYKI from a simple code reader. The system doesn't just check for error codes — it analyses the **actual behaviour** of your engine's sensors against expected patterns.

## 7.5 What the Scan Cannot Do

Being transparent about limitations:

| Limitation | Explanation |
|------------|-------------|
| **Mechanical inspection** | BYKI reads electronic sensor data. It cannot detect physical problems not visible to sensors — e.g., a worn serpentine belt, fluid leaks, or rust. |
| **Non-OBD systems** | ABS, airbag, power steering, and body electronics use manufacturer-specific protocols beyond OBD-II. |
| **Future prediction** | BYKI assesses current condition. It cannot predict when a part will fail — only identify when it's showing signs of degradation. |
| **Accuracy depends on sensors** | If a sensor itself is faulty, it may report incorrect values. BYKI's cross-validation helps detect some sensor faults, but not all. |
| **Vehicle support varies** | Older vehicles may support fewer parameters, resulting in less comprehensive analysis. |

## 7.6 Tips for the Best Scan

1. **Warm up the engine** — let it idle for 2–3 minutes before scanning. Cold-start data is different from normal operating data.

2. **Scan at idle** — unless otherwise instructed, scan with the engine idling in Park/Neutral. This provides the baseline condition.

3. **Turn off accessories** — A/C, rear defogger, heated seats, and high-powered audio can affect engine load and voltage readings. Turn them off for a cleaner baseline.

4. **Scan in a ventilated area** — never run the engine in a closed garage. Park outdoors or in a well-ventilated space.

5. **Don't clear codes before scanning** — if you have a Check Engine Light, let BYKI read the codes first. Clearing codes before scanning removes valuable diagnostic information.

6. **Regular scanning** — scanning every 5,000–10,000 km (or every oil change) helps track your engine's health over time. Gradual changes are easier to spot with historical comparison.

---

*Previous: [← Fault Codes (DTC)](./06-FAULT-CODES-DTC.md) · Next: [Understanding Your Health Report →](./08-HEALTH-REPORT.md)*
