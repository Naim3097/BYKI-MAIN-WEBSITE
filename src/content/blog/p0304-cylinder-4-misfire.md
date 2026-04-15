# P0304 — Cylinder 4 Misfire Detected: Diagnosis Guide

> **Quick Answer:** P0304 means cylinder 4 is misfiring — the last cylinder (closest to the gearbox) in most inline 4-cylinder Malaysian cars. The usual suspects are a worn spark plug, failing ignition coil, or faulty fuel injector for cylinder 4. Use the swap test to isolate which component is faulty before replacing parts.

## What Does P0304 Mean?

P0304 identifies **cylinder 4** as the source of misfires detected by the ECU's crankshaft monitoring system. On inline 4-cylinder engines, cylinder 4 is the rearmost cylinder — closest to the gearbox and furthest from the timing belt/chain end.

### Locating cylinder 4
- **Inline 4-cylinder engines:** Cylinder 4 is at the gearbox/flywheel end — the back of the engine as you face it from the front of the car
- This applies to Perodua Myvi, Proton Saga, Honda City, Toyota Vios, and virtually all common Malaysian 4-cylinder cars

---

## Why Cylinder 4 Position Matters

Cylinder 4 has some unique characteristics:

- **Closest to the firewall/dashboard** — access for plug and coil replacement can be tighter, and some workshops may not properly seat components in this position
- **Exhaust routing:** In some engine designs, cylinder 4's exhaust runner is the longest, which can affect heat cycling and carbon buildup patterns
- **Oil splash patterns:** Being nearest to the gearbox, cylinder 4 can be affected by oil mist from the timing chain/gear system in some engines

These factors don't make cylinder 4 inherently more failure-prone, but they can contribute in specific vehicle models.

---

## Common Causes

### 1. Spark plug (cylinder 4)
The most likely culprit. If the car has high mileage and original spark plugs, cylinder 4's plug may have reached end-of-life first due to variations in combustion temperature and mixture distribution. Inspect and compare against the other three plugs.

### 2. Ignition coil (cylinder 4)
Coil-on-plug failure. The cylinder 4 coil is often the hardest to access (closest to the firewall), which means mechanics sometimes don't fully seat the connector after other work — causing an intermittent connection that triggers P0304.

**Check first:** Before assuming the coil is bad, remove and reseat the electrical connector. Clean any corrosion and ensure a firm click.

### 3. Fuel injector (cylinder 4)
A clogged or electrically failing injector. Carbon deposits from low-quality fuel accumulate over time, reducing spray quality.

### 4. Vacuum leak (cylinder 4 runner)
A crack in the intake manifold runner serving cylinder 4, or a loose/cracked gasket at the rear of the intake manifold. Because cylinder 4 is at the back, leaks in this area are harder to spot visually.

### 5. Compression loss
Worn piston rings, a burnt valve, or a head gasket leak specific to cylinder 4. A compression test (RM 80–200) confirms this definitively.

---

## Swap Test for P0304

Same approach as other cylinder-specific codes:

1. **Clear P0304** with BYKI
2. **Swap cylinder 4 coil** with cylinder 1 coil
3. **Drive and re-scan:**
   - P0301 now → Coil was bad
   - P0304 still → Coil is good, swap plugs next
4. **Swap cylinder 4 plug** with cylinder 2 plug
5. **Drive and re-scan:**
   - P0302 now → Plug was bad (replace all four)
   - P0304 still → Injector, wiring, or compression issue — workshop required

**Tip:** Cylinder 4 is often tight to reach. Use a proper spark plug socket with a rubber insert to avoid dropping the plug into the engine bay.

---

## Estimated Repair Costs in Malaysia

| Repair | Parts (RM) | Labour (RM) | Total |
|---|---|---|---|
| Spark plugs (set of 4) | RM 40–200 | RM 40–80 | RM 80–280 |
| Ignition coil (single) | RM 80–250 | RM 50–100 | RM 130–350 |
| Fuel injector cleaning (all) | — | RM 80–200 | RM 80–200 |
| Fuel injector (single) | RM 80–300 | RM 40–80 | RM 120–380 |
| Intake manifold gasket | RM 50–150 | RM 100–250 | RM 150–400 |
| Compression test | — | RM 80–200 | RM 80–200 |

*Prices for common Malaysian vehicles at independent workshops.*

---

## How to Diagnose With BYKI

1. **Connect** your Bluetooth OBD-II adapter
2. **Open** [BYKI](https://www.bykiofficial.com/login)
3. **Health Scan** — confirm P0304 and check companions:
   - P0304 alone → Isolated cylinder 4 problem
   - P0300 + P0304 → Cylinder 4 is severely misfiring
   - Multiple cylinder codes → System-wide issue (see P0300 guide)
4. **Live Data** — monitor misfire count for cylinder 4 against others
5. **Freeze Frame** — check if the misfire occurs primarily at idle, under load, or during cold start — this narrows the cause
6. **Clear codes** between swap test steps for quick confirmation

---

## Frequently Asked Questions

### Q: P0304 on a Perodua Myvi — what should I check first?
A: On the Perodua Myvi (K3-VE or 3SZ-VE engine), the most common cause is spark plug wear followed by ignition coil failure. Myvi coils are affordable (RM 80–150 for aftermarket). Replace all four spark plugs first (RM 60–120 for iridium set). If P0304 persists, swap the cylinder 4 coil with cylinder 1 to confirm coil failure.

### Q: Can P0304 be caused by a timing problem?
A: If the timing chain has stretched or jumped a tooth, it affects all cylinders — you'd typically see P0300 (random misfire) rather than P0304 alone. A single-cylinder code like P0304 with no other codes almost always points to a cylinder-specific component (plug, coil, injector) rather than a timing issue.

### Q: Is the repair urgent?
A: If the check engine light is steady, you have a few days to diagnose. If it's flashing, stop driving — active misfires are damaging the catalytic converter. Even with a steady light, don't delay beyond 1–2 weeks. The RM 80–350 for a plug/coil fix is far cheaper than the RM 700–2,500 catalytic converter replacement that follows prolonged misfires.

### Q: P0304 after engine wash — related?
A: Possibly. Water can enter the ignition coil connector on cylinder 4 during engine bay washing, especially if the car was sprayed with a pressure washer. Water causes a short circuit, preventing the spark. Dry the connector thoroughly, apply dielectric grease, and reseat it. The code should clear after the connector dries completely.

---

*Scanned with BYKI — Malaysia's browser-based vehicle diagnostic platform. [Scan your car now](https://www.bykiofficial.com/login)*
