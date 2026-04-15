import ch00 from '../00-TABLE-OF-CONTENTS.md?raw'
import ch01 from '../01-WHAT-IS-BYKI.md?raw'
import ch02 from '../02-GETTING-STARTED.md?raw'
import ch03 from '../03-HARDWARE-ADAPTERS.md?raw'
import ch04 from '../04-HOW-OBD2-WORKS.md?raw'
import ch05 from '../05-LIVE-SENSOR-DATA.md?raw'
import ch06 from '../06-FAULT-CODES-DTC.md?raw'
import ch07 from '../07-HEALTH-SCAN.md?raw'
import ch08 from '../08-HEALTH-REPORT.md?raw'
import ch09 from '../09-SEVEN-SYSTEMS.md?raw'
import ch10 from '../10-ENGINE-OIL-GUIDE.md?raw'
import ch11 from '../11-PETRONAS-SYNTIUM.md?raw'
import ch12 from '../12-VEHICLE-OIL-MATCH.md?raw'
import ch13 from '../13-UI-GUIDE.md?raw'
import ch14 from '../14-WORKSHOP-BOOKING.md?raw'
import ch15 from '../15-TROUBLESHOOTING.md?raw'
import ch16 from '../16-GLOSSARY.md?raw'

export const chapters = [
  { id: '00', title: 'Table of Contents', content: ch00, group: 'getting-started' },
  { id: '01', title: 'What Is BYKI', content: ch01, group: 'getting-started' },
  { id: '02', title: 'Getting Started', content: ch02, group: 'getting-started' },
  { id: '03', title: 'Hardware & Adapters', content: ch03, group: 'getting-started' },
  { id: '04', title: 'How OBD-II Works', content: ch04, group: 'your-vehicle' },
  { id: '05', title: 'Live Sensor Data', content: ch05, group: 'your-vehicle' },
  { id: '06', title: 'Fault Codes (DTC)', content: ch06, group: 'your-vehicle' },
  { id: '07', title: 'The Health Scan', content: ch07, group: 'health-scan' },
  { id: '08', title: 'Your Health Report', content: ch08, group: 'health-scan' },
  { id: '09', title: 'The Seven Systems', content: ch09, group: 'health-scan' },
  { id: '10', title: 'Engine Oil Guide', content: ch10, group: 'oil-service' },
  { id: '11', title: 'Petronas Syntium', content: ch11, group: 'oil-service' },
  { id: '12', title: 'Vehicle Oil Matching', content: ch12, group: 'oil-service' },
  { id: '13', title: 'User Interface Guide', content: ch13, group: 'using-byki' },
  { id: '14', title: 'Workshop & Booking', content: ch14, group: 'using-byki' },
  { id: '15', title: 'Troubleshooting', content: ch15, group: 'using-byki' },
  { id: '16', title: 'Glossary', content: ch16, group: 'using-byki' },
]

export const FILENAME_MAP = {
  '00-TABLE-OF-CONTENTS': 0,
  '01-WHAT-IS-BYKI': 1,
  '02-GETTING-STARTED': 2,
  '03-HARDWARE-ADAPTERS': 3,
  '04-HOW-OBD2-WORKS': 4,
  '05-LIVE-SENSOR-DATA': 5,
  '06-FAULT-CODES-DTC': 6,
  '07-HEALTH-SCAN': 7,
  '08-HEALTH-REPORT': 8,
  '09-SEVEN-SYSTEMS': 9,
  '10-ENGINE-OIL-GUIDE': 10,
  '11-PETRONAS-SYNTIUM': 11,
  '12-VEHICLE-OIL-MATCH': 12,
  '13-UI-GUIDE': 13,
  '14-WORKSHOP-BOOKING': 14,
  '15-TROUBLESHOOTING': 15,
  '16-GLOSSARY': 16,
}
