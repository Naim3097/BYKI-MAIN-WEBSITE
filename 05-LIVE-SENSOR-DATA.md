# Module 05 — Live Sensor Data

## 5.1 What Is Live Data?

Live data is the real-time stream of sensor readings from your vehicle's engine control unit (ECU). When BYKI is connected and the engine is running, it continuously reads these values — updating multiple times per second.

Think of it as your engine's vital signs, similar to a hospital heart monitor but for your car.

## 5.2 The 38 Parameters BYKI Reads

BYKI reads up to **38 distinct parameters** from your vehicle. Not every vehicle supports all 38 — BYKI automatically detects which ones are available.

### Engine Core

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **Engine RPM** | rpm | How fast the crankshaft is spinning. Idle is typically 650–850 rpm. |
| **Vehicle Speed** | km/h | Current vehicle speed from the ECU (may differ slightly from speedometer). |
| **Engine Load** | % | How hard the engine is working. 0% = no load, 100% = maximum output. Idle is 15–35%. |
| **Throttle Position** | % | How far open the throttle is. 0% = fully closed (idle), 100% = wide-open throttle (WOT). |
| **Absolute Throttle B** | % | Secondary throttle sensor — backup or electronic throttle body position. |
| **Relative Throttle** | % | Throttle opening relative to the learned closed position. |

### Temperature

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **Coolant Temperature** | °C | Engine coolant temperature. Normal operating range: 82–100°C. Overheating: >105°C. |
| **Intake Air Temperature** | °C | Temperature of air entering the engine. Affected by ambient temperature and under-hood heat soak. Typical: 25–55°C. |
| **Oil Temperature** | °C | Engine oil temperature (not available on all vehicles). Normal: 90–120°C. |
| **Catalyst Temperature** | °C | Exhaust catalytic converter temperature. Normal: 300–600°C at operating temp. |
| **Ambient Air Temperature** | °C | Outside air temperature as reported by vehicle sensor. |

### Fuel System

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **Short-Term Fuel Trim Bank 1** | % | Real-time fuel correction. Positive = ECU adding fuel (lean condition). Negative = reducing fuel (rich). Normal: ±5%. |
| **Long-Term Fuel Trim Bank 1** | % | Learned fuel correction over time. If consistently >10% or <-10%, there may be an air leak or fuel delivery issue. |
| **Short-Term Fuel Trim Bank 2** | % | Same as Bank 1 but for the other cylinder bank (V-engines only). |
| **Long-Term Fuel Trim Bank 2** | % | Learned correction for Bank 2. |
| **Fuel Pressure** | kPa | Fuel rail pressure. DI engines: 3,000–20,000+ kPa. Port injection: 250–400 kPa. |
| **Fuel System Status** | — | Open loop (cold start, WOT) or Closed loop (normal O2-feedback operation). |
| **Fuel Level** | % | Fuel tank level as a percentage. |
| **Ethanol Fuel %** | % | Ethanol content in fuel (flex-fuel vehicles only). |

### Oxygen / Lambda Sensors

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **O2 Sensor B1S1 Voltage** | V | Upstream O2 sensor (before catalyst). Should oscillate between 0.1–0.9V in closed loop. |
| **O2 Sensor B1S2 Voltage** | V | Downstream O2 sensor (after catalyst). Should be relatively steady around 0.4–0.6V if catalyst is healthy. |
| **O2 Sensor B1S1 Current** | mA | Wideband O2 sensor current (modern vehicles). |

### Intake & Airflow

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **Mass Air Flow (MAF)** | g/s | Mass of air entering the engine per second. Higher values = more air = more load. |
| **Manifold Absolute Pressure (MAP)** | kPa | Intake manifold pressure. At idle: ~30–45 kPa (vacuum). At WOT: ~95–100 kPa (atmospheric). Turbocharged: >100 kPa (boost). |
| **Barometric Pressure** | kPa | Atmospheric pressure. Sea level ≈ 101 kPa. Higher altitude = lower value. |

### Ignition & Timing

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **Timing Advance** | ° BTDC | Ignition timing relative to top dead centre. Higher advance = more aggressive timing. Knock detection may reduce this. |

### Electrical System

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **Control Module Voltage** | V | Voltage supplied to the ECU. Should be 13.5–14.7V with engine running (alternator charging). Below 13V may indicate alternator issues. |

### Transmission

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **Transmission Fluid Temp** | °C | Automatic transmission fluid temperature. Normal: 70–100°C. Overheating: >120°C. |

### Emission Control

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **EGR Commanded** | % | Exhaust Gas Recirculation valve commanded position. |
| **EGR Error** | % | Difference between commanded and actual EGR position. High error = potential EGR fault. |
| **EVAP Purge** | % | Evaporative emission canister purge valve duty cycle. |

### Distance & Time

| Parameter | Unit | What It Tells You |
|-----------|------|-------------------|
| **Run Time Since Start** | s | How long the engine has been running this session. |
| **Distance with MIL** | km | Distance driven since the Check Engine Light was illuminated. |
| **Time with MIL** | min | Time elapsed since the Check Engine Light was illuminated. |
| **Warmup Cycles Since Clear** | count | Number of engine warm-up cycles since DTCs were last cleared. |
| **Distance Since Clear** | km | Distance driven since DTCs were last cleared. |

## 5.3 Understanding Normal Ranges

Knowing what "normal" looks like helps you spot problems:

### At Idle (Engine Warm, Stationary)

| Parameter | Normal Range | Concern If |
|-----------|-------------|------------|
| RPM | 650–850 | <550 (hunting), >1000 (high idle) |
| Coolant Temp | 82–100°C | <75°C after 10 min (thermostat), >105°C (overheating) |
| Engine Load | 15–35% | >50% at idle (excessive load) |
| STFT | ±5% | >±10% (fuel delivery issue) |
| LTFT | ±8% | >±15% (persistent air/fuel imbalance) |
| Voltage | 13.5–14.7V | <13.0V (alternator), >15.5V (overcharging) |
| MAP | 30–45 kPa | >55 kPa at idle (possible vacuum leak) |

### At Cruise (60–80 km/h, Flat Road)

| Parameter | Normal Range | Concern If |
|-----------|-------------|------------|
| RPM | 1,500–2,500 | Unusually high for speed (transmission slip) |
| Engine Load | 25–50% | >70% at steady cruise |
| Coolant Temp | 85–98°C | Creeping above 100°C consistently |
| Timing Advance | 15–35° | <5° under load (knock retard) |
| STFT | ±3% | Large swings under steady cruise |

## 5.4 Live Data Screen in BYKI

BYKI's Live Data screen provides multiple viewing modes:

### Hero Gauges

Large, prominent gauges for the two most important parameters:
- **RPM** — circular gauge with tachometer-style display
- **Vehicle Speed** — digital speed readout

### Compact Grid

All available parameters displayed in a compact grid layout. Each tile shows:
- Parameter name
- Current value with unit
- Colour coding (green = normal, amber = caution, red = concern)

### Trend Buffer

BYKI maintains a rolling buffer of recent readings for each parameter, allowing you to see trends — is coolant temperature rising? Are fuel trims drifting? Is voltage dropping under load?

## 5.5 Tips for Using Live Data

1. **Warm up first** — run the engine for at least 2–3 minutes before drawing conclusions from live data. Cold-start values are very different from normal operating values.

2. **Compare Bank 1 vs Bank 2** — on V-engines, large differences in fuel trims between banks can indicate bank-specific issues (injector, O2 sensor, vacuum leak).

3. **Watch fuel trims together** — STFT shows real-time correction, LTFT shows learned correction. If LTFT is high (+10%+), the ECU has learned a persistent lean condition.

4. **Monitor coolant during driving** — if coolant temperature climbs above 100°C during normal driving, check coolant level, thermostat, and radiator fan operation.

5. **Check voltage under load** — turn on headlights, A/C, and rear demister. Voltage should stay above 13.5V. If it drops below 13V, the alternator may be weak.

---

*Previous: [← How OBD-II Works](./04-HOW-OBD2-WORKS.md) · Next: [Fault Codes (DTC) →](./06-FAULT-CODES-DTC.md)*
