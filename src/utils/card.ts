export function getDifficultyClass(diff: string): string {
  const levelDictionary: { [key: string]: string } = {
    "1": 'Machine-Level',
    "2": 'Low-Level',
    "3": 'Mid-Level',
    "4": 'High-Level',
    "5": 'Very-High-Level',
  };
  return levelDictionary[diff.toLowerCase()] || 'Unknown';
}

export function getDescLevel(diff: string): string {
  const levelDescriptions: { [key: string]: string} = {
    "1": 'นี่คือภาษาระดับ Machine-Level ที่ใกล้เคียงฮาร์ดแวร์มากที่สุด',
    "2": 'นี่คือภาษาระดับ Low-Level ที่ยังคงใกล้เคียงฮาร์ดแวร์ แต่พออ่านเข้าใจได้',
    "3": 'นี่คือภาษาระดับ Mid-Level ที่อยู่กึ่งกลางระหว่าง Low-Level และ High-Level',
    "4": 'นี่คือภาษาระดับ High-Level ที่เขียนและอ่านง่าย พัฒนาได้รวดเร็ว',
    "5": 'นี่คือภาษาระดับ Very-High-Level ที่ออกแบบมาสำหรับงานเฉพาะทางและ Abstract สูงมาก',
  }
  return levelDescriptions[diff.toLowerCase()] || 'ไม่ทราบระดับของภาษา';
};

export const getParadiamsShow: Record<string, string> = {
  "Object-Oriented": "🧩 Object-Oriented",
  "Functional": "➡️ Functional",
  "Procedural": "⚙️ Procedural",
  "Declarative": "📝 Declarative",
  "Imperative": "✍️ Imperative",
  "Logic Programming": "🧠 Logic Programming",
  "Event-Driven": "⚡ Event-Driven",
};

export const fieldMap: Record<string, string> = {
  Game: "🎮 Game Development (การพัฒนาเกม)",
  Embedded: "🔌 Embedded Systems (ระบบสมองกลฝังตัว)",
  OS: "💻 Operating Systems (ระบบปฏิบัติการ)",
  Mobile: "📱 Mobile Apps (แอปพลิเคชันมือถือ)",
  Desktop: "🖥️ Desktop Applications (แอปพลิเคชันเดสก์ท็อป)",
  Frontend: "🌐 Web Frontend (ส่วนหน้าเว็บ)",
  Backend: "⚙️ Web Backend (ส่วนหลังเว็บ)",
  AI: "🧠 AI / Machine Learning (AI / การเรียนรู้ของเครื่อง)",
  Data: "📊 Data Science / Analytics (วิทยาการข้อมูล / การวิเคราะห์)",
  Cloud: "☁️ Cloud Infrastructure (โครงสร้างพื้นฐานคลาวด์)",
  API: "🔌 API Development (การพัฒนา API)",
  System: "🔧 System Programming (การเขียนโปรแกรมระบบ)",
  Script: "📜 Scripting / Automation (การเขียนสคริปต์ / ระบบอัตโนมัติ)",
  DB: "🛢️ Database / SQL (ฐานข้อมูล / SQL)",
  Security: "🛡️ Cybersecurity (ความปลอดภัยทางไซเบอร์)",
  Compiler: "🔍 Compiler / Language Design (คอมไพเลอร์ / การออกแบบภาษา)",
  Robot: "🤖 Robotics / IoT (หุ่นยนต์ / IoT)",
  Network: "📶 Network Programming (การเขียนโปรแกรมเครือข่าย)",
  Admin: "🖥️ System Administration (การบริหารระบบ)",
  Text: "📝 Text Manipulation (การจัดการข้อความ)",
  VR: "👓 AR / VR Development (การพัฒนา AR / VR)",
  Finance: "💰 Finance / Trading Systems (การเงิน / ระบบซื้อขาย)",
  Scientific: "🧪 Scientific Computing (การคำนวณทางวิทยาศาสตร์)",
  Edu: "📚 Education / Teaching Tools (การศึกษา / เครื่องมือการสอน)",
  Testing: "▶️ Testing / QA Automation (การทดสอบ / QA อัตโนมัติ)",
  Plugin: "🧩 Plugin / Extension Development (การพัฒนาปลั๊กอิน / ส่วนเสริม)",
  Hardware: "🧱 Hardware Design (การออกแบบฮาร์ดแวร์)",
  Digital: "💡 Digital / Electronics (ดิจิทัล / อิเล็กทรอนิกส์)",
  Math: "➗ Mathematical Computing (การคำนวณทางคณิตศาสตร์)",
  Tele: "📡 Telecommunications (โทรคมนาคม)",
  Distributed: "🌍 Distributed Systems (ระบบแบบกระจาย)",
  HPC: "⚡ High-Performance Computing (การประมวลผลประสิทธิภาพสูง)",
  Graphics: "🎨 Graphics Programming (การเขียนโปรแกรมกราฟิก)",
  Render: "🎬 Real-time / Rendering (การเรนเดอร์แบบเรียลไทม์)",
  Aero: "✈️ Aerospace / Defense (อวกาศ / การป้องกัน)",
  Blockchain: "⛓️ Blockchain Technology (เทคโนโลยีบล็อกเชน)",
};