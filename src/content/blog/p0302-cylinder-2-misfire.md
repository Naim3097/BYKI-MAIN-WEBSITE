# P0302 — Cylinder 2 Misfire Detected: Diagnosis & Repair Cost

> **Quick Answer:** P0302 means cylinder 2 is misfiring — failing to produce power consistently. The most probable causes are a worn spark plug, failing ignition coil, or clogged fuel injector on cylinder 2. Use the coil/plug swap test to identify the faulty component before replacing anything. Repair costs range from RM 80 (spark plugs) to RM 380 (injector replacement).

## What Does P0302 Mean?

P0302 is a cylinder-specific misfire code indicating that **cylinder 2** is not firing correctly. The ECU detected a crankshaft deceleration pattern consistent with cylinder 2 failing to complete its power stroke.

This code works identically to P0301, P0303, and P0304 — only the cylinder number changes. The diagnosis approach is the same, but you target cylinder 2's components instead.

### Locating cylinder 2
On inline 4-cylinder engines (the vast majority of Malaysian cars):
- Cylinders are numbered **1-2-3-4** from the timing belt/chain end to the gearbox end
- **Cylinder 2 is the second from the front**

On Perodua, Proton, Honda, and Toyota 4-cylinder models, cylinder 2 is always adjacent to cylinder 1 at the front of the engine.

---

## Symptoms

- **Check engine light** — steady (moderate misfires) or flashing (severe/active misfires)
- **Rough idle** — engine vibrates unevenly as one cylinder isn't contributing
- **Loss of power** — approximately 25% power reduction on 4-cylinder engines
- **Vibration through the car** — the unbalanced power delivery creates noticeable vibration
- **Poor fuel economy** — unburnt fuel exits through the exhaust
- **Possible fuel smell** from the exhaust

---

## Common Causes

The causes of P0302 mirror other cylinder-specific misfire codes. In order of likelihood and cost:

### 1. Spark plug for cylinder 2
A worn, fouled, or damaged spark plug is the most common and cheapest cause. Inspect the cylinder 2 plug — look for:
- Wide electrode gap (worn)
- Black sooty deposits (rich/carbon fouling)
- Oil-wet deposits (oil entering the combustion chamber)
- Cracked porcelain insulator

### 2. Ignition coil for cylinder 2
A failing coil-on-plug unit for cylinder 2. Heat-related failure is common — the coil works when cold but loses output when hot. Malaysian under-bonnet temperatures (60–100°C in traffic) accelerate coil degradation.

### 3. Fuel injector for cylinder 2
A clogged injector sprays insufficient fuel; a leaking injector sprays too much. Either causes misfires in that specific cylinder.

### 4. Low compression in cylinder 2
Worn piston rings, a leaking valve, or a head gasket breach affecting cylinder 2. Less common than ignition/fuel causes but important to rule out in high-mileage engines.

### 5. Wiring or connector issue
The electrical connector for the cylinder 2 ignition coil or injector may be loose, corroded, or damaged. Vibration loosens connectors over time, and Malaysian humidity accelerates corrosion.

---

## Diagnosis: The Swap Test

The swap test is the fastest free DIY diagnosis for any cylinder-specific misfire:

### Step 1: Clear the code
Use BYKI to clear P0302.

### Step 2: Swap the ignition coil
Move coil 2 → coil 3 position, and coil 3 → coil 2 position.

### Step 3: Drive until the light returns
Normal driving for 15–30 minutes is usually enough.

### Step 4: Re-scan
- **P0303 now?** → The coil you moved from cylinder 2 is faulty. Replace it
- **P0302 still?** → Coil is fine. Continue to spark plug swap

### Step 5: Swap the spark plug
Move plug 2 → plug 4 position, plug 4 → plug 2 position. Clear codes, drive, re-scan.
- **P0304 now?** → That plug is faulty. Replace all four
- **P0302 still?** → Plug is fine. Problem is the injector, wiring, or compression

### If the misfire stays on cylinder 2 after swapping both coil and plug:
- **Check the wiring connector** for the cylinder 2 coil — wiggle it while monitoring live data for misfire changes
- **Check the fuel injector** — requires professional testing
- **Compression test** — if injector and wiring are fine, internal engine wear is the cause

---

## Estimated Repair Costs in Malaysia

| Repair | Parts (RM) | Labour (RM) | Total |
|---|---|---|---|
| Spark plugs (set of 4) | RM 40–200 | RM 40–80 | RM 80–280 |
| Ignition coil (single) | RM 80–250 | RM 50–100 | RM 130–350 |
| Coil connector repair | RM 10–30 | RM 30–60 | RM 40–90 |
| Fuel injector cleaning (all) | — | RM 80–200 | RM 80–200 |
| Fuel injector replacement (single) | RM 80–300 | RM 40–80 | RM 120–380 |
| Compression test | — | RM 80–200 | RM 80–200 |
| Valve repair | RM 50–150 | RM 200–600 | RM 250–750 |

*Prices for common Malaysian vehicles at independent workshops.*

---

## How to Diagnose P0302 With BYKI

### Steps:

1. **Connect** your Bluetooth OBD-II adapter
2. **Open** [BYKI](https://www.bykiofficial.com/login)
3. **Health Scan** — confirm P0302 and check for companion codes:
   - P0300 + P0302 → Cylinder 2 is misfiring badly enough to affect overall engine stability
   - P0302 alone → Isolated issue — plug, coil, injector, or compression
   - P0302 + P0171 → Lean misfire — possible vacuum leak or fuel delivery issue affecting cylinder 2 most
4. **Live Data** — monitor misfire counts per cylinder. Cylinder 2 should show elevated counts compared to others
5. **Freeze Frame** — check conditions when the code was set (RPM, temperature, load) to narrow the diagnosis

### Using BYKI for the swap test:
BYKI makes the swap test efficient — clear codes instantly after each swap, then re-scan within minutes to see which cylinder code appears. No need to drive to a workshop between steps.

---

## Frequently Asked Questions

### Q: Why does only cylinder 2 misfire?
A: Each cylinder has its own spark plug, ignition coil, and fuel injector. When one of these cylinder-specific components fails, only that cylinder is affected. The other cylinders continue working normally. Cylinder 2 doesn't fail more than others — it's simply this specific component that reached end-of-life first.

### Q: P0302 appeared after spark plug replacement. Why?
A: Possible causes: the new plug is defective (rare but possible with cheap plugs), the plug gap is incorrect, the plug wasn't tightened properly, or the ignition coil connector was disturbed during the plug change and wasn't fully reseated. Re-check the cylinder 2 plug installation and connector.

### Q: Can P0302 cause my car to fail Puspakom inspection?
A: An active check engine light may flag during Puspakom inspection for commercial vehicles. Fix the misfire and clear the code before your inspection date.

### Q: Should I replace all ignition coils if one fails?
A: Not necessarily, but it's a good idea. If one coil failed, the others are the same age and in the same heat environment. Replacing all four prevents a cascade of failures over the next few months. A full set costs RM 350–1,000 vs RM 130–350 for a single coil.

---

*Scanned with BYKI — Malaysia's browser-based vehicle diagnostic platform. [Scan your car now](https://www.bykiofficial.com/login)*
