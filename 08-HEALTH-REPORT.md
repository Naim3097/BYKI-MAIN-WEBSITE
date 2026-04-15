# Module 08 — Understanding Your Health Report

## 8.1 The Health Report Screen

After a health scan completes, BYKI presents your results on the **Health Report** screen. This module explains every element of the report so you can understand exactly what your vehicle is telling you.

## 8.2 Overall Health Score

The most prominent element is your **Overall Health Score** — a single number from **0 to 100** that represents your engine's overall condition.

The score is calculated by combining the individual scores of all 7 engine systems, weighted by the relative importance of each system to overall vehicle health.

### Risk Tiers

| Score Range | Risk Tier | Colour | What It Means |
|-------------|-----------|--------|---------------|
| **85–100** | Healthy | 🟢 Green | Engine is in good condition. No significant issues detected. Continue normal maintenance schedule. |
| **70–84** | Monitor | 🟡 Yellow | Engine is functional but showing minor deviations. Not urgent, but worth monitoring. Rescan in 2–4 weeks. |
| **50–69** | Warning | 🟠 Orange | Engine has notable issues. One or more systems are underperforming. Service recommended within the next 1–2 weeks. |
| **0–49** | Critical | 🔴 Red | Engine has significant problems. Immediate attention recommended. Visit a workshop as soon as possible. |

> **What's a "good" score?** Most well-maintained vehicles score between 78 and 95. A brand-new car might score 92–98. A vehicle due for service might score 70–80. Scores below 65 typically indicate specific issues that need attention.

## 8.3 The 7 Engine Systems

BYKI evaluates your engine across **7 independent systems**. Each system receives its own score (0–100) and its own set of findings.

### System 1 — Combustion

**What it measures:** The fundamental ability of your engine to burn fuel efficiently.

Key indicators: fuel trim balance, O2 sensor switching, misfire detection, timing stability, air-fuel ratio consistency.

**Common findings:**
- Lean or rich fuel conditions
- Misfire patterns
- O2 sensor slow response
- Ignition timing irregularities

### System 2 — Fuel

**What it measures:** The fuel delivery system's health — from the tank to the injectors.

Key indicators: short-term fuel trim, long-term fuel trim, fuel pressure (if supported), fuel system status, inter-bank fuel trim imbalance.

**Common findings:**
- Persistent lean condition (possible vacuum leak or weak pump)
- Rich running condition (possible leaking injector)
- Fuel trim imbalance between banks
- Fuel pressure anomalies

### System 3 — Cooling

**What it measures:** The engine's thermal management system.

Key indicators: coolant temperature trajectory, warm-up rate, operating temperature stability, intake air temperature, thermal efficiency.

**Common findings:**
- Slow warm-up (thermostat stuck open — common in Malaysia's climate)
- Operating temperature above normal (cooling fan, coolant level, water pump)
- Temperature instability (thermostat erratic behaviour)
- Overheating indicators

> **Malaysian climate note:** BYKI applies a **tropical adjustment** to cooling system thresholds. In Malaysia's ambient temperatures (28–38°C), slightly higher coolant temperatures are expected and accounted for.

### System 4 — Emission

**What it measures:** The exhaust emission control system.

Key indicators: catalytic converter efficiency, O2 sensor upstream/downstream comparison, EGR function, EVAP system integrity.

**Common findings:**
- Catalyst efficiency below threshold (aging catalytic converter)
- O2 sensor degradation
- EGR flow anomalies
- EVAP system leaks

### System 5 — Charging

**What it measures:** The electrical charging system — alternator, voltage regulation, and battery health indicators.

Key indicators: control module voltage under various conditions, voltage stability, voltage during load changes.

**Common findings:**
- Low charging voltage (alternator wear)
- Voltage instability (loose belt, regulator fault)
- Overcharging (voltage regulator failure)
- Voltage drop under electrical load

### System 6 — Oil

**What it measures:** Engine oil system stress indicators based on available sensor data.

Key indicators: oil temperature (if supported), thermal stress patterns (derived from coolant temp, RPM, and load), engine load at operating temperature.

**Common findings:**
- High oil thermal stress (aggressive driving, heavy loads, hot climate)
- Oil temperature anomalies
- Indicators suggesting oil degradation or contamination

> **Note:** Most OBD-II vehicles do not have a dedicated oil pressure sensor accessible via standard OBD-II. BYKI's oil system assessment uses derived indicators from other sensors to estimate oil stress conditions.

### System 7 — Transmission

**What it measures:** Automatic transmission health indicators.

Key indicators: transmission fluid temperature (if supported), gear ratio consistency, torque converter efficiency indicators, transmission-related fault codes.

**Common findings:**
- Elevated transmission fluid temperature
- Gear ratio anomalies
- Torque converter slip indicators
- Transmission communication faults

## 8.4 System Sufficiency

For each system, BYKI determines whether your vehicle provides **enough data** to produce a reliable score. If your vehicle doesn't support the sensors needed for a particular system, that system will show as "Insufficient Data" rather than producing an unreliable score.

This is by design — BYKI will not guess. If there isn't enough data, it tells you honestly.

## 8.5 Findings

Below the system scores, the report lists specific **findings** — individual issues or observations detected during the scan.

Each finding includes:

| Field | Description |
|-------|-------------|
| **Title** | What was detected — e.g., "Persistent Lean Condition at Idle" |
| **System** | Which of the 7 systems this finding belongs to |
| **Severity** | 🔴 Critical / 🟡 Warning / 🔵 Info |
| **Description** | Technical explanation of the finding |
| **Possible Causes** | What might be causing this condition |
| **Recommendation** | What to do about it |

### Severity Levels

| Level | Meaning | Action |
|-------|---------|--------|
| 🔴 **Critical** | Significant problem that could cause damage or safety risk | Visit a workshop as soon as possible |
| 🟡 **Warning** | Notable issue that isn't urgent but needs attention | Schedule service within 1–2 weeks |
| 🔵 **Info** | Minor observation or early-stage trend | Monitor — rescan in 2–4 weeks to track progression |

## 8.6 Oil Recommendation

Based on your vehicle's make, model, engine type, and the scan results, BYKI recommends the correct **Petronas Syntium** engine oil grade.

The recommendation card shows:

| Field | Example |
|-------|---------|
| **Product** | Petronas Syntium 7000 0W-20 |
| **Specification** | API SP · ILSAC GF-6A · Full Synthetic |
| **Transmission Fluid** | Petronas Tutela CVTF Life |
| **Capacity** | 3.4L (with filter) |
| **Change Interval** | 10,000 km or 6 months |
| **Price** | ~RM 188 (4L) |

The recommendation considers:
- Your vehicle's OEM oil specification
- API and ILSAC grade requirements
- ACEA category (for European vehicles)
- OEM-specific approvals (MB, BMW, VW, Ford, etc.)
- Engine type (naturally aspirated, turbo, diesel, hybrid)

See [Module 11 — Petronas Syntium Products](./11-PETRONAS-SYNTIUM.md) and [Module 12 — Vehicle Oil Matching](./12-VEHICLE-OIL-MATCH.md) for the complete product and matching reference.

## 8.7 What To Do With Your Results

### Healthy Score (85–100)

Your engine is in good shape. Consider:
- Continuing your regular maintenance schedule
- Checking if an oil change is due based on mileage or time
- Rescanning at your next service interval for ongoing monitoring

### Monitor Score (70–84)

Your engine is running fine but showing minor deviations:
- Review the specific findings — are they minor (Info severity) or developing (Warning)?
- If oil-related findings are present, consider scheduling an oil change
- Rescan in 2–4 weeks to see if the scores are stable, improving, or declining

### Warning Score (50–69)

Your engine needs attention:
- Review all Warning and Critical findings carefully
- Share the report with your workshop technician
- Book a service — BYKI can connect you to a BYKI Partner workshop
- The Petronas Syntium recommendation becomes especially important here

### Critical Score (0–49)

Immediate attention recommended:
- **Do not ignore Critical findings** — they can lead to engine damage or unsafe conditions
- Visit a workshop as soon as possible
- Share the full BYKI report with your technician — it provides valuable pre-diagnosis data

---

*Previous: [← How the Health Scan Works](./07-HEALTH-SCAN.md) · Next: [The 7 Engine Systems →](./09-SEVEN-SYSTEMS.md)*
