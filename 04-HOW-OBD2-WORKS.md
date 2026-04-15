# Module 04 — How OBD-II Works

## 4.1 What Is OBD-II?

**OBD-II** (On-Board Diagnostics, version 2) is a standardised system built into every petrol and diesel vehicle sold worldwide since the mid-1990s. It provides a universal interface for reading diagnostic data from the vehicle's **Engine Control Unit (ECU)** — the computer that manages your engine.

In Malaysia, most vehicles from **2005 onward** fully support OBD-II. Newer vehicles (2015+) typically have excellent support with comprehensive sensor coverage.

### Why OBD-II Exists

OBD-II was originally mandated by environmental regulations — governments needed a way to verify that vehicles met emission standards. The system monitors engine performance, exhaust emissions, and component health. If something goes wrong, the ECU stores a **Diagnostic Trouble Code (DTC)** and illuminates the Check Engine Light (CEL) on your dashboard.

Over time, OBD-II has become much more than an emission monitor. It provides real-time access to dozens of engine sensors, making it invaluable for diagnostics, performance monitoring, and preventive maintenance.

## 4.2 The OBD-II Port

Every OBD-II vehicle has a standardised **16-pin diagnostic connector** (also called the DLC — Diagnostic Link Connector). The port provides:

- **Power** — the adapter draws power directly from the vehicle battery (no external power needed)
- **Ground** — electrical ground reference
- **CAN bus** — the communication network connecting the ECU and other control modules

### Pin Functions

| Pin | Function |
|-----|----------|
| 2 | Bus positive (J1850, if applicable) |
| 4 | Chassis ground |
| 5 | Signal ground |
| 6 | CAN High (ISO 15765) |
| 7 | K-Line (ISO 9141 / ISO 14230) |
| 10 | Bus negative (J1850, if applicable) |
| 14 | CAN Low (ISO 15765) |
| 15 | L-Line (ISO 9141 / ISO 14230) |
| 16 | Battery positive (+12V) |

> **Note:** Not all pins are used in every vehicle. Modern Malaysian vehicles primarily use **CAN (pins 6 & 14)**, which is the fastest and most reliable protocol.

## 4.3 Communication Protocols

OBD-II supports several communication protocols. The adapter and BYKI automatically detect which protocol your vehicle uses:

| Protocol | Standard | Speed | Common In |
|----------|----------|-------|-----------|
| **CAN 11-bit** (ISO 15765-4) | 500 kbps | Fastest | Most modern vehicles (2008+) |
| **CAN 29-bit** (ISO 15765-4) | 500/250 kbps | Fast | Some commercial vehicles, trucks |
| **ISO 9141-2** | 10.4 kbps | Slow | Older Asian vehicles (pre-2008) |
| **ISO 14230 (KWP2000)** | 10.4 kbps | Slow | Older European/Asian vehicles |
| **SAE J1850 PWM** | 41.6 kbps | Medium | Older Ford vehicles |
| **SAE J1850 VPW** | 10.4 kbps | Slow | Older GM vehicles |

The vast majority of vehicles currently on Malaysian roads use **CAN 11-bit** — the fastest and most reliable protocol. BYKI handles protocol detection automatically.

## 4.4 OBD-II Modes

The OBD-II standard defines several **diagnostic modes** — different types of data requests that the ECU responds to:

| Mode | Name | What It Does |
|------|------|-------------|
| **Mode 01** | Current Data | Read live sensor values (RPM, temperature, speed, etc.) |
| **Mode 02** | Freeze Frame | Read sensor values captured at the moment a fault was stored |
| **Mode 03** | Stored DTCs | Read confirmed fault codes stored in ECU memory |
| **Mode 04** | Clear DTCs | Clear fault codes and turn off the Check Engine Light |
| **Mode 07** | Pending DTCs | Read pending faults (detected but not yet confirmed) |
| **Mode 09** | Vehicle Info | Read VIN, calibration IDs, and ECU information |
| **Mode 0A** | Permanent DTCs | Read permanent fault codes that cannot be cleared manually |

BYKI uses **Modes 01, 03, 04, 07, 09, and 0A** to provide comprehensive diagnostic coverage. Mode 01 (live data) is the foundation of the health scan.

## 4.5 What Data Can Your Car Share?

When BYKI connects to your vehicle, it reads data from the ECU's sensors. These sensors are physical components installed throughout your engine:

### Engine Performance

- **RPM** — how fast the engine crankshaft is spinning
- **Engine Load** — how hard the engine is working (percentage of maximum capacity)
- **Throttle Position** — how far the accelerator pedal is pressed
- **Manifold Absolute Pressure (MAP)** — intake manifold vacuum/pressure

### Temperature

- **Coolant Temperature** — engine coolant (antifreeze) temperature
- **Intake Air Temperature** — temperature of air entering the engine
- **Catalytic Converter Temperature** — exhaust catalyst temperature
- **Oil Temperature** — engine oil temperature (if supported by vehicle)

### Fuel System

- **Short-Term Fuel Trim (STFT)** — real-time fuel adjustment by the ECU
- **Long-Term Fuel Trim (LTFT)** — learned fuel adjustment over time
- **Fuel Pressure** — fuel rail pressure (direct injection vehicles)
- **Fuel System Status** — open loop, closed loop, or fault condition

### Exhaust & Emissions

- **O2 Sensor Voltage** — oxygen sensor readings (upstream and downstream)
- **Catalyst Efficiency** — comparison of upstream vs downstream O2 sensors
- **EGR (Exhaust Gas Recirculation)** — recirculated exhaust gas flow

### Electrical

- **Battery Voltage** — vehicle electrical system voltage (from alternator)
- **Control Module Voltage** — ECU supply voltage

> **Not every vehicle supports every parameter.** BYKI automatically discovers which parameters your vehicle supports during the connection phase and only reads available data.

## 4.6 How BYKI Reads Data

The data flow from your vehicle to the BYKI screen follows this path:

```
Vehicle ECU  →  CAN Bus  →  OBD-II Port  →  BLE Adapter  →  Bluetooth  →  Browser  →  BYKI
```

1. **Vehicle ECU** — the engine computer continuously monitors all sensors
2. **CAN Bus** — sensor data travels on the vehicle's internal network
3. **OBD-II Port** — the adapter physically connects to the CAN bus
4. **BLE Adapter** — translates CAN messages into Bluetooth Low Energy packets
5. **Bluetooth** — wireless transmission to your smartphone
6. **Browser** — Chrome receives the data via the Web Bluetooth API
7. **BYKI** — processes, analyses, and displays the data

Each data request takes milliseconds. During a health scan, BYKI sends hundreds of requests to build a comprehensive picture of your engine's condition.

## 4.7 OBD-II Limitations

While OBD-II is powerful, it has boundaries:

| Limitation | Explanation |
|------------|-------------|
| **Sensor coverage varies** | Newer vehicles support more parameters. Older vehicles may only support basic PIDs. |
| **No body electronics** | OBD-II focuses on powertrain — it doesn't cover windows, door locks, infotainment, or body modules |
| **No ABS/airbag details** | ABS, SRS (airbag), and stability control systems use manufacturer-specific protocols beyond standard OBD-II |
| **Read-only** | OBD-II is a diagnostic interface. You cannot reprogram the ECU, change settings, or modify vehicle behaviour through standard OBD-II |
| **Ignition required** | The vehicle must be keyed on (at minimum) for OBD-II communication. Most parameters require the engine running. |

## 4.8 Is OBD-II Safe?

**Yes.** OBD-II is a read-only diagnostic interface designed for exactly this purpose. Reading data from your vehicle via OBD-II:

- Does **not** void your warranty
- Does **not** modify any engine settings
- Does **not** affect vehicle performance
- Does **not** risk damaging any components
- Is the **same interface** that professional workshops, Puspakom (vehicle inspection), and dealerships use

The only active command BYKI sends is **Mode 04 (Clear DTCs)** — and this only happens when you explicitly tap the "Clear Codes" button. All other operations are passive data reading.

---

*Previous: [← Hardware & Adapters](./03-HARDWARE-ADAPTERS.md) · Next: [Live Sensor Data →](./05-LIVE-SENSOR-DATA.md)*
