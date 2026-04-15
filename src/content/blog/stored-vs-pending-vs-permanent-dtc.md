# Stored vs Pending vs Permanent DTC — What's the Difference?

> **Quick Answer:** **Stored (confirmed)** codes mean the ECU verified a recurring fault — your check engine light is on. **Pending** codes mean the ECU detected a fault once but hasn't confirmed it yet — the CEL may not be on. **Permanent** codes are confirmed faults that can't be cleared with a scanner — only the ECU can remove them after verifying the repair. Understanding these three types prevents unnecessary repairs and helps you know when a fix actually worked.

## Why Three Types Exist

Your car's ECU doesn't trigger a check engine light on the first sign of trouble. It uses a **confirmation process** to avoid false alarms. A sensor might send one bad reading due to a momentary glitch — that shouldn't light up the dashboard. The three DTC types represent different stages of this confirmation process.

Think of it like a school discipline system:
- **Pending** = First warning. The teacher noticed something but is watching to see if it happens again.
- **Stored/Confirmed** = Official record. It happened enough times to be documented. Parents notified (CEL on).
- **Permanent** = School record. Even if the student's behaviour improves, the record stays until the principal (ECU) formally reviews and clears it.

---

## Stored (Confirmed) DTCs

### What they are:
The most common type of DTC you'll encounter. A stored code means the ECU detected the same fault across **two consecutive drive cycles** (or in some cases, during a single drive cycle for critical faults).

### Key characteristics:

| Property | Detail |
|----------|--------|
| **Check engine light** | ON (illuminated) |
| **Can be cleared with scanner** | Yes |
| **Stays after clearing** | No — but if the fault persists, it'll come back |
| **Freeze frame data** | Yes — saved with the code |
| **How many can be stored** | Typically up to 10–20 codes (varies by vehicle) |

### How they're created:
1. **First drive cycle:** ECU detects abnormal sensor reading (e.g., O2 sensor shows lean condition)
2. ECU stores a **pending** code
3. **Second drive cycle:** ECU detects the same abnormal reading again
4. ECU upgrades the pending code to **stored/confirmed**
5. **Check engine light turns ON**

### What to do with stored codes:
- **Read the code** — use BYKI or an OBD-II scanner
- **Diagnose the root cause** — the code tells you what the ECU detected, not necessarily why
- **Fix the problem** — replace the faulty part or address the underlying issue
- **Clear the code** — after repair, clear the code with a scanner
- **Drive and verify** — if the code doesn't return after several drive cycles, the fix worked

---

## Pending DTCs

### What they are:
A pending code is a **one-time fault** that the ECU recorded but hasn't confirmed yet. It's the ECU's way of saying "I saw something unusual, but I'm waiting to see if it happens again."

### Key characteristics:

| Property | Detail |
|----------|--------|
| **Check engine light** | Usually OFF (not yet triggered) |
| **Can be cleared with scanner** | Yes (but unnecessary — they clear themselves) |
| **Visible in scanner** | Yes — but only if the scanner reads pending codes (BYKI does) |
| **Becomes stored if** | The fault recurs in the next drive cycle |
| **Clears automatically if** | The fault doesn't recur in the next 1–3 drive cycles |

### Why pending codes matter:

**1. Early warning system:**
A pending code can alert you to a developing problem before the check engine light turns on. If you scan regularly with BYKI (e.g., once a month), you might catch a pending P0171 (lean condition) before it becomes a confirmed code — giving you time to inspect the air intake for loose connections or vacuum leaks.

**2. Post-repair verification:**
After fixing a confirmed code and clearing it, the same code might reappear as **pending** during the first drive cycle. This is normal — the ECU is re-testing the system. If the pending code doesn't become confirmed (i.e., the fault doesn't persist), the repair was successful.

**3. Intermittent problems:**
Some issues only appear under specific conditions (e.g., misfire only on cold mornings, lean condition only during highway driving). These may show as recurring pending codes that never quite become confirmed. This pattern itself is diagnostic — it tells the mechanic the fault is intermittent.

### Common scenario in Malaysia:
You fuel up at a petrol station and don't tighten the fuel cap properly. The EVAP system detects a leak and stores a **pending** P0442. You drive normally for a few days. On the next drive cycle, the ECU tests the EVAP system again — the cap was tightened during normal driving — and the pending code clears on its own. No check engine light, no repair needed.

---

## Permanent DTCs

### What they are:
Permanent DTCs were introduced with **OBD-II regulations from 2010 onwards** (newer Malaysian cars, especially 2012+). They're designed to prevent fraudulent emission test cheating — you can't just clear codes before a Puspakom inspection.

### Key characteristics:

| Property | Detail |
|----------|--------|
| **Check engine light** | ON (or was recently on) |
| **Can be cleared with scanner** | NO — scanner cannot erase permanent codes |
| **How they're created** | Automatically when a stored code reaches confirmed status |
| **How they're removed** | Only the ECU removes them after verifying the fix through specific drive cycles |
| **Visible in scanner** | Yes — appears in a separate "permanent codes" section |

### How permanent codes clear:

1. **Fix the root cause** of the fault
2. **Clear the stored code** with a scanner (this clears the stored code but NOT the permanent code)
3. **Drive normally** — the ECU will automatically run the relevant monitor test
4. **The monitor passes** — the ECU detects that the system is now working correctly
5. **Permanent code clears** — the ECU removes the permanent code after the monitor passes

This process typically takes **2–5 drive cycles** (each drive cycle may be 20–30 minutes of driving that includes city and highway conditions).

### Why permanent codes exist:
Before permanent codes, someone could:
1. Have a bad catalytic converter (P0420)
2. Clear the code 5 minutes before a Puspakom inspection
3. The check engine light would be off, and the car would "pass"
4. The problem still existed — just hidden

With permanent codes, even after clearing, the code remains in a separate register that inspectors (and BYKI) can read. The code only disappears after the ECU genuinely confirms the repair is done.

---

## Comparison Table

| Feature | Stored (Confirmed) | Pending | Permanent |
|---------|-------------------|---------|-----------|
| **CEL on?** | Yes | No (usually) | Yes (or recently was) |
| **Clearable with scanner?** | Yes | Yes (but auto-clears) | No |
| **Requires repair?** | Yes | Maybe (monitor it) | Yes |
| **Freeze frame saved?** | Yes | Sometimes | Yes |
| **Visible in BYKI?** | Yes | Yes | Yes |
| **When to worry** | Address soon | Watch if it recurs | Fix before it'll clear |
| **Auto-clears if fixed?** | After ~40–80 drive cycles | After 1–3 drive cycles | After monitor passes |

---

## How BYKI Shows These Code Types

When you run a **Health Scan** with [BYKI](https://www.bykiofficial.com/login), the results show:

1. **Stored / Confirmed Codes** — the main codes causing your check engine light
2. **Pending Codes** — early warnings that may or may not become confirmed
3. **Permanent Codes** (if supported by your car) — codes that can't be scanner-cleared

### Pro tips for using BYKI with code types:

**Monthly scan habit:**
Scan your car once a month even if the check engine light is off. BYKI can detect pending codes before they become confirmed — catching problems early.

**After a repair:**
1. Fix the problem
2. Clear codes with BYKI
3. Drive normally for 2–3 days
4. Scan again with BYKI
5. If the code is gone (no stored, no pending), the repair was successful
6. If a pending code reappears, the repair may not have fully addressed the issue

**Before buying a used car:**
Scan with BYKI and check ALL three code types. A dishonest seller might clear stored codes, but permanent codes can't be erased. No stored codes + permanent codes present = recently cleared codes = the seller is hiding something.

---

## Real-World Scenarios

### Scenario 1: Loose petrol cap
- Day 1: EVAP test fails → **Pending P0442**
- Day 2–3: EVAP test passes (cap was properly tightened during driving) → Pending P0442 **auto-clears**
- Result: No CEL, no stored code, no action needed

### Scenario 2: Failing O2 sensor
- Day 1: O2 sensor reading erratic → **Pending P0130**
- Day 2: O2 sensor reading erratic again → Pending becomes **Stored P0130** + **Permanent P0130**
- CEL turns on
- Mechanic replaces O2 sensor
- Clears with scanner → **Stored P0130 cleared**, but **Permanent P0130 remains**
- Drive for 3–5 days → ECU runs O2 monitor, sensor passes → **Permanent P0130 auto-clears**

### Scenario 3: Intermittent misfire
- Monday morning (cold start): Cylinder 2 misfires → **Pending P0302**
- Rest of the week: No misfire → **Pending P0302 auto-clears**
- Next Monday morning: Misfire again → **Pending P0302** (new)
- Pattern repeats weekly → Indicates a cold-start-specific issue (e.g., aged spark plug that struggles when cold)
- With BYKI's regular scanning, you spot this pattern before it becomes a confirmed code

---

## Frequently Asked Questions

### Q: Can I pass Puspakom with pending codes?
A: Yes — pending codes don't illuminate the check engine light, and Puspakom primarily checks for the MIL status. However, if the pending code becomes confirmed before your inspection, you'll fail.

### Q: My mechanic cleared the codes but the CEL came back the next day. Why?
A: Clearing codes only erases the stored record — it doesn't fix the problem. If the underlying fault persists, the ECU will detect it again during the next drive cycle and re-store the code. Clearing is a diagnostic step (to see if the code returns), not a repair.

### Q: Do all cars have permanent codes?
A: No. Permanent codes are an OBD-II feature introduced around 2010. Older Malaysian cars (pre-2012) may not support permanent code storage. Newer models (especially 2015+) generally do.

### Q: How many pending codes can be stored?
A: Most ECUs can store 3–5 pending codes simultaneously. If more faults are detected, the ECU prioritises the most severe ones.

### Q: Should I clear pending codes?
A: There's no need to — they clear themselves automatically if the fault doesn't recur. Clearing them manually doesn't help or hurt. Save your scanner-clearing for confirmed stored codes after a repair.

---

*Scanned with BYKI — Malaysia's browser-based vehicle diagnostic platform. [Scan your car's codes now](https://www.bykiofficial.com/login)*
