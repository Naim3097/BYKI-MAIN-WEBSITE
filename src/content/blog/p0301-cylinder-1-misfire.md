# P0301 — Cylinder 1 Misfire Detected: Spark Plug, Coil or Injector?

> **Quick Answer:** P0301 means cylinder 1 is misfiring — it's not producing power during some combustion cycles. The three most likely causes are a worn spark plug, a failing ignition coil, or a clogged fuel injector for cylinder 1. A simple swap test can identify which component is faulty without any special tools.

## What Does P0301 Mean?

P0301 is a cylinder-specific misfire code. The ECU monitors crankshaft speed and detects when cylinder 1 fails to contribute its expected power stroke. Unlike P0300 (random misfire across multiple cylinders), P0301 isolates the problem to **cylinder 1 only**.

### Finding cylinder 1
Cylinder numbering varies by engine:
- **Inline 4-cylinder** (most Malaysian cars): Cylinder 1 is at the front of the engine (closest to the accessory belt/timing belt end). Count from front to back: 1-2-3-4
- **Perodua Myvi 1.3/1.5** (K3/3SZ): Cylinder 1 is at the timing chain end
- **Proton Saga/Persona** (VVT): Cylinder 1 is at the timing belt end
- **Honda City** (L15): Cylinder 1 is at the timing chain end
- **Toyota Vios** (1NZ-FE): Cylinder 1 is at the timing chain end

Check your owner's manual or the intake manifold markings if unsure. Getting the cylinder number right is critical — replacing the wrong cylinder's components wastes money.

---

## Symptoms of P0301

- **Check engine light** — steady or flashing
- **Rough idle** — noticeable shaking at traffic lights
- **Loss of power** — one cylinder not contributing (25% power loss on a 4-cylinder engine)
- **Engine vibration** — unbalanced operation from one dead cylinder
- **Fuel smell from exhaust** — unburnt fuel from the misfiring cylinder exits through the exhaust
- **One spark plug fouled** — black, wet, or damaged compared to the others

### Severity: Medium–High
If the check engine light is **flashing**, catalytic converter damage is occurring. Stop driving. If steady, diagnose within a few days.

---

## 5 Common Causes of P0301

### 1. Worn or fouled spark plug (cylinder 1)
The most common and cheapest fix. The spark plug in cylinder 1 may be:
- **Worn out** — electrode eroded, gap too wide
- **Fouled** — coated with carbon (rich running), oil (valve seal or ring issue), or coolant (head gasket leak)
- **Cracked insulator** — physical damage causing spark to leak to ground

**Check:** Remove the cylinder 1 spark plug and compare it to the other three. If it looks significantly different (darker, wetter, more worn), this is your culprit.

### 2. Failing ignition coil (cylinder 1)
Modern engines use coil-on-plug (COP) — each cylinder has its own ignition coil sitting directly on top of the spark plug. When a coil weakens, it can't deliver consistent high-voltage spark.

**Characteristics:** The misfire may be intermittent — works fine when cold but fails when hot (heat increases electrical resistance in a failing coil), or works at idle but fails under load.

### 3. Clogged or leaking fuel injector (cylinder 1)
A partially clogged injector sprays less fuel than commanded. A leaking injector drips fuel when it shouldn't. Both cause misfires.

- **Clogged:** Lean misfire — not enough fuel. Check fuel trim
- **Leaking:** Rich misfire — too much fuel. Spark plug will be wet/black

### 4. Low compression (cylinder 1)
If cylinder 1 has significantly lower compression than the others (worn rings, leaking valve, head gasket breach), the fuel-air mixture can't be compressed enough for reliable ignition. This is more common in high-mileage engines (150,000+ km).

**Diagnosis:** Compression test. All cylinders should be within 10–15% of each other. If cylinder 1 is 20%+ lower, internal engine wear is the cause.

### 5. Vacuum leak near cylinder 1
A leak in the intake manifold runner or gasket near cylinder 1 allows extra air into that specific cylinder, creating a localized lean condition. Other cylinders closer to the leak may also be slightly affected.

---

## The Swap Test — DIY Diagnosis Without Special Tools

This is the most effective and free diagnostic technique for P0301:

### Ignition coil swap:
1. Clear the fault code with BYKI
2. Swap the ignition coil from **cylinder 1** with the coil from **cylinder 2**
3. Drive the car until the check engine light returns
4. Re-scan with BYKI:
   - **P0302 now?** → The coil you moved is faulty. Replace it
   - **P0301 still?** → The coil is fine. Move to the next test

### Spark plug swap:
1. Clear the code again
2. Swap the spark plug from **cylinder 1** with **cylinder 3**
3. Drive until the light returns
4. Re-scan:
   - **P0303 now?** → That spark plug is faulty. Replace it (or replace all four — they're likely all due)
   - **P0301 still?** → Plug is fine. The issue is the injector or compression

### If the misfire stays on cylinder 1 after both swaps:
The problem is either the **fuel injector** (can't be swapped without tools) or **low compression**. At this point, a workshop visit is warranted for injector testing and a compression test.

---

## Estimated Repair Costs in Malaysia

| Repair | Parts (RM) | Labour (RM) | Total |
|---|---|---|---|
| Spark plug (single) | RM 10–50 | RM 20–40 | RM 30–90 |
| Spark plugs (set of 4) | RM 40–200 | RM 40–80 | RM 80–280 |
| Ignition coil (single) | RM 80–250 | RM 50–100 | RM 130–350 |
| Fuel injector cleaning | — | RM 80–200 | RM 80–200 |
| Fuel injector replacement (single) | RM 80–300 | RM 40–80 | RM 120–380 |
| Compression test | — | RM 80–200 | RM 80–200 |
| Valve repair (per valve) | RM 50–150 | RM 200–600 | RM 250–750 |
| Head gasket replacement | RM 200–500 | RM 800–2,000 | RM 1,000–2,500 |

*Prices for common Malaysian vehicles at independent workshops.*

---

## How to Diagnose P0301 With BYKI

### Steps:

1. **Connect** your Bluetooth OBD-II adapter
2. **Open** [BYKI](https://www.bykiofficial.com/login)
3. **Health Scan** — confirm P0301. Check for additional codes:
   - **P0300 also present?** → Multiple cylinders affected — may be a system-wide issue. See P0300 guide
   - **P0171 (lean)?** → Vacuum leak near cylinder 1
   - **P0172 (rich)?** → Injector for cylinder 1 may be leaking
   - **No other codes?** → Isolated cylinder 1 issue — plug, coil, or injector
4. **Live Data** — monitor:
   - **Misfire count for cylinder 1** vs other cylinders — confirms which cylinder is the problem
   - **STFT Bank 1** — if it's compensating, the misfire is affecting overall mixture
5. **Freeze Frame** — check conditions when P0301 was set:
   - Cold engine? → Cold-start related (plug or coil weakness)
   - High RPM / high load? → Load-related (coil or compression)
   - Idle? → Idle-specific (plug, vacuum leak)

### After repair:
Clear P0301 with BYKI. The code should not return. If it does within 1–3 drive cycles, the root cause wasn't fully addressed. Re-scan and check if the code changed (e.g., from P0301 to P0302 after a coil swap — confirming the original coil was bad).

---

## Why Cylinder 1 Specifically?

Cylinder 1 doesn't misfire more than others by design, but there are some factors:

- **Timing belt/chain end:** Cylinder 1 is typically closest to the timing drive. Timing chain stretch and sprocket wear affect cylinder 1's valve timing first
- **Coolant passage layout:** In some engines, cylinder 1 runs slightly hotter due to coolant flow patterns, causing faster plug and coil wear
- **Manifold runner length:** Intake manifold design can cause slightly uneven air distribution. Cylinder 1 sometimes gets a marginally different mixture
- **Physical location:** Cylinder 1 is often most exposed to road debris, water spray, and vibration, which can affect coil pack connectors

---

## Frequently Asked Questions

### Q: Can I drive with P0301?
A: Briefly, yes — if the check engine light is steady. But one cylinder not firing means 25% power loss on a 4-cylinder engine, increased vibration, and unburnt fuel entering the catalytic converter. Drive to a workshop or diagnose at home. If the check engine light is **flashing**, stop driving immediately.

### Q: Should I replace all spark plugs or just cylinder 1?
A: Replace all four. If one plug has worn enough to misfire, the others are the same age and likely close behind. Replacing all four costs only marginally more than replacing a single plug (RM 80–280 for a set vs RM 30–90 for one) and prevents P0302, P0303, P0304 from appearing next month.

### Q: P0301 keeps coming back after I replaced the spark plug. Why?
A: If the new spark plug didn't fix it, the cause is likely the ignition coil or fuel injector. Perform the swap test noted above to identify which one. If the misfire stays on cylinder 1 after swapping both plug and coil, the injector or compression is the issue.

### Q: Can a P0301 misfire damage the engine?
A: The misfire itself causes minimal engine damage. The real risk is to the catalytic converter — unburnt fuel from the misfiring cylinder combusts inside the converter, overheating it. A catalytic converter replacement costs RM 700–2,500. Fix the misfire before it reaches that point.

### Q: How do I know if it's the coil or the injector?
A: The swap test is the fastest method. Swap the cylinder 1 coil with cylinder 2. If the misfire moves to cylinder 2 (P0302), the coil is faulty. If it stays on cylinder 1, the coil is fine. Next, test the injector — this usually requires a workshop with injector testing equipment. BYKI's fuel trim data can also help: a lean fuel trim suggests a clogged injector, while a rich trim suggests a leaking one.

---

*Scanned with BYKI — Malaysia's browser-based vehicle diagnostic platform. [Scan your car now](https://www.bykiofficial.com/login)*
