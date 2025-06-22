export function getDifficultyClass(diff: string): string {
  switch (diff.toLowerCase()) {
    case "1":
      return 'Machine-Level';
    case "2":
      return 'Low-Level';
    case "3":
      return 'Mid-Level';
    case "4":
      return 'High-Level';
    case "5":
      return 'Very-High-Level';
    default:
      return 'unknown';
  }
}


// ระดับภาษา (level) แบบ string number → แปลงเป็นชื่อระดับ
export const levelMapping: Record<string, string> = {
  "0": "Machine-Level",
  "1": "Low-Level",
  "2": "Medium-Level",
  "3": "High-Level",
  "4": "Very High-Level",
};

// แปลง par ในข้อมูล เป็น fields ที่ละเอียด
export const parToFieldMap: Record<string, string> = {
  "Game": "Game Development",
  "Embedded": "Embedded Systems",
  "OS": "Operating Systems",
  "Mobile": "Mobile Apps",
  "Desktop": "Desktop Applications",
  "Frontend": "Web Frontend",
  "Backend": "Web Backend",
  "AI": "AI / Machine Learning",
  "Data": "Data Science / Analytics",
  "Cloud": "Cloud Infrastructure",
  "System": "System Programming",
  "Script": "Scripting / Automation",
  "DB": "Database / SQL",
  "Security": "Cybersecurity",
  "Compiler": "Compiler / Language Design",
  "Robot": "Robotics / IoT",
  "Network": "Network Programming",
  "VR": "AR / VR Development",
  "Finance": "Finance / Trading Systems",
  "Science": "Scientific Computing",
  "Edu": "Education / Teaching Tools",
  "Test": "Testing / QA Automation",
  "Plugin": "Plugin / Extension Development",
};
