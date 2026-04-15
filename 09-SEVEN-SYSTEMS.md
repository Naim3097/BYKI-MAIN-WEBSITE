# Module 09 — The 7 Engine Systems

## 9.1 Why 7 Systems?

Rather than giving you a single pass/fail result, BYKI scores **7 independent engine systems** to pinpoint exactly where your vehicle's strengths and weaknesses are. A vehicle might have a perfect fuel system but an aging cooling system — understanding which systems are healthy and which need attention helps you and your workshop prioritise.

The 7 systems cover every major functional area of the powertrain that is accessible through OBD-II diagnostics.

## 9.2 Combustion System

### What It Is

The combustion system is the engine's core function — the controlled explosion of fuel and air inside each cylinder that produces the power to move your vehicle.

### What BYKI Evaluates

- **Air-fuel mixture quality** — is the engine burning fuel at the correct ratio?
- **Misfire detection** — are any cylinders failing to fire properly?
- **O2 sensor feedback** — are the oxygen sensors reporting clean, consistent combustion?
- **Ignition timing behaviour** — is ignition timing stable and appropriate for the operating conditions?
- **Inter-cylinder balance** — are all cylinders contributing equally?

### What Problems Mean

| Finding | What's Happening | Why It Matters |
|---------|-----------------|----------------|
| Lean combustion | Too much air relative to fuel | Increased engine temperature, potential damage, loss of power |
| Rich combustion | Too much fuel relative to air | Wasted fuel, carbon buildup, catalytic converter damage |
| Misfire detected | Cylinder(s) not firing | Loss of power, increased emissions, potential catalyst damage |
| O2 sensor slow switching | Aging oxygen sensor | Poor fuel economy, increased emissions |

### Typical Score Ranges

| Score | Condition |
|-------|-----------|
| 90–100 | Excellent combustion — clean, efficient burn |
| 75–89 | Good — minor deviations within tolerance |
| 60–74 | Moderate issues — fuel trim drift, early sensor aging |
| <60 | Significant issues — misfire, O2 failure, or major fuel imbalance |

---

## 9.3 Fuel System

### What It Is

The fuel system delivers the correct amount of fuel to the engine — from the fuel tank, through the pump and filter, into the injectors, and ultimately into the cylinders.

### What BYKI Evaluates

- **Short-term fuel trim (STFT)** — real-time corrections the ECU makes to fuel delivery
- **Long-term fuel trim (LTFT)** — learned corrections indicating persistent conditions
- **Fuel pressure** — whether the fuel system maintains correct pressure (DI vehicles)
- **Cross-bank comparison** — whether both cylinder banks receive equal fuel (V-engines)
- **Fuel system status transitions** — proper switching between open-loop and closed-loop operation

### What the Fuel Trims Tell You

Fuel trims are one of the most powerful diagnostic indicators available through OBD-II:

| LTFT Value | Meaning |
|-----------|---------|
| **0% ± 5%** | Perfect — ECU needs minimal correction |
| **+5% to +10%** | Slight lean tendency — vacuum leak or minor sensor drift |
| **+10% to +20%** | Significant lean — investigate vacuum leaks, MAF sensor, fuel delivery |
| **>+20%** | Severe lean — major air leak, fuel pump failure, or clogged injectors |
| **-5% to -10%** | Slight rich — possible injector leak or O2 sensor bias |
| **< -10%** | Significant rich — leaking injector, failed sensor, or fuel pressure issue |

---

## 9.4 Cooling System

### What It Is

The cooling system maintains your engine at the optimal operating temperature — typically 82–100°C. It includes the radiator, water pump, thermostat, coolant, and cooling fans.

### What BYKI Evaluates

- **Warm-up rate** — how quickly the engine reaches operating temperature
- **Operating temperature stability** — does the temperature stay consistent or fluctuate?
- **Peak temperature monitoring** — has the engine exceeded safe temperature limits?
- **Thermostat behaviour** — is the thermostat opening at the correct temperature?
- **Coolant temperature relative to ambient** — is the cooling system maintaining appropriate differential?

### Malaysian Climate Considerations

Malaysia's tropical climate (ambient 28–38°C year-round) affects engine cooling:

- Higher ambient temperatures mean the cooling system works harder
- Air conditioning load adds heat to the engine bay
- Traffic congestion (common in KL) reduces airflow through the radiator
- BYKI applies **tropical climate adjustments** to its cooling system thresholds to account for these conditions

### Common Cooling Issues in Malaysia

| Issue | Symptom | Common Cause |
|-------|---------|-------------|
| Slow warm-up | Coolant stays below 80°C for >10 minutes | Thermostat stuck open |
| Overheating | Coolant exceeds 105°C | Low coolant, failed fan, blocked radiator |
| Temperature fluctuation | Temperature swings 10°C+ during driving | Thermostat intermittent, air in coolant system |
| High cooling load | Normal temp but high fan activity | Clogged radiator fins (dust, insects, debris) |

---

## 9.5 Emission System

### What It Is

The emission control system reduces harmful exhaust gases — converting pollutants (CO, HC, NOx) into less harmful substances using the catalytic converter, O2 sensors, EGR valve, and EVAP system.

### What BYKI Evaluates

- **Catalytic converter efficiency** — is the catalyst still converting pollutants effectively?
- **O2 sensor health** — are upstream and downstream sensors functioning properly?
- **EGR (Exhaust Gas Recirculation)** — is the EGR valve operating correctly?
- **EVAP system** — is the fuel vapour recovery system sealed and functional?
- **Upstream vs downstream O2 comparison** — the key indicator of catalyst health

### Understanding Catalyst Efficiency

The catalytic converter is the most expensive emission component (RM 1,500–5,000+ to replace). BYKI monitors its health by comparing the upstream O2 sensor (before the catalyst) with the downstream O2 sensor (after the catalyst):

- **Healthy catalyst:** Upstream O2 switches rapidly (lean/rich). Downstream O2 stays relatively steady (catalyst is doing its job).
- **Failing catalyst:** Downstream O2 starts switching like upstream — the catalyst is no longer converting pollutants effectively.

---

## 9.6 Charging System

### What It Is

The charging system keeps your battery charged and provides electrical power to all vehicle systems. It consists of the alternator, voltage regulator, battery, and associated wiring.

### What BYKI Evaluates

- **Charging voltage** — is the alternator producing the correct voltage?
- **Voltage stability** — does voltage remain stable under different loads?
- **Load response** — does voltage hold up when electrical consumers are active?
- **Voltage at idle vs at RPM** — does the alternator produce adequate output across the RPM range?

### Healthy Voltage Ranges

| Condition | Expected Voltage |
|-----------|-----------------|
| Engine off, key on | 12.0–12.6V (battery voltage) |
| Engine running, idle | 13.5–14.7V (alternator charging) |
| Engine running, A/C + lights on | 13.2–14.5V (charging under load) |
| High RPM (3000+) | 13.8–14.7V (full alternator output) |

Below 13.0V with the engine running suggests the alternator is weak or failing. Above 15.5V suggests the voltage regulator has failed — this can damage electrical components and boil battery electrolyte.

---

## 9.7 Oil System

### What It Is

The oil system lubricates moving engine components, reduces friction, dissipates heat, and carries away contaminants. Healthy oil is critical to engine longevity.

### What BYKI Evaluates

- **Oil temperature** — if the vehicle provides oil temp via OBD-II
- **Thermal stress indicators** — derived from coolant temperature, RPM, and engine load patterns
- **Oil stress index** — a composite indicator of the conditions the oil is experiencing
- **High-load duration** — extended high-RPM, high-load operation accelerates oil degradation

### Why Oil Health Matters

| Condition | Impact |
|-----------|--------|
| **Normal oil stress** | Oil is performing within specification. Follow standard change interval. |
| **Elevated oil stress** | Oil is being worked harder than normal — hot climates, heavy loads, frequent stop-start. May benefit from earlier oil change or higher-spec oil. |
| **High oil stress** | Oil degradation is accelerated. Consider premium synthetic oil (e.g., Syntium 7000) and/or shortened change interval. |

The oil system score directly influences BYKI's **Petronas Syntium recommendation** — vehicles with higher oil stress may receive a recommendation for higher-tier synthetic oil.

---

## 9.8 Transmission System

### What It Is

The transmission transfers engine power to the wheels through a series of gear ratios. BYKI monitors the electronic aspects of automatic transmission health.

### What BYKI Evaluates

- **Transmission fluid temperature** — if available via OBD-II
- **Gear ratio analysis** — are gear ratios consistent with expected values?
- **Torque converter behaviour** — does the torque converter engage and disengage normally?
- **Transmission-related fault codes** — P07xx series codes specifically
- **ATF thermal stress** — is the transmission fluid being overheated?

### Transmission Fluid Temperature Guide

| Temperature | Status |
|-------------|--------|
| **70–95°C** | Normal operating range |
| **95–110°C** | Elevated — monitor during heavy towing or mountain driving |
| **110–120°C** | Warning — fluid degradation accelerates significantly |
| **>120°C** | Critical — stop and allow to cool. Fluid breakdown and damage risk. |

> **Tip:** Automatic transmission fluid (ATF) degradation doubles for every 10°C above the normal operating range. If your transmission regularly runs above 100°C, consider more frequent ATF changes and a BYKI Partner workshop inspection.

## 9.9 Score Summary

Here's what the 7 systems look like together on a typical well-maintained vehicle:

| System | Typical Score | Primary Indicators |
|--------|--------------|-------------------|
| Combustion | 85–95 | Fuel trims, O2 response, timing |
| Fuel | 88–96 | STFT/LTFT balance, fuel pressure |
| Cooling | 80–92 | Warmup rate, temp stability |
| Emission | 82–94 | Catalyst efficiency, O2 health |
| Charging | 90–98 | Voltage consistency |
| Oil | 78–92 | Thermal stress, oil temp |
| Transmission | 85–96 | Fluid temp, gear ratios |

A single low-scoring system doesn't mean your car is in danger — it means that specific area deserves attention. BYKI helps you focus your maintenance budget where it's needed most.

---

*Previous: [← Understanding Your Health Report](./08-HEALTH-REPORT.md) · Next: [Engine Oil Guide →](./10-ENGINE-OIL-GUIDE.md)*
