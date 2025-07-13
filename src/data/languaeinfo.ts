import type { info } from '../utils/language'

export const languageMap: Record<string, info> = {
    // --- ตัวอย่างสำหรับ Python ---
    python: {
        country: "เนเธอร์แลนด์ (NL)",
        flag: "nl.png",
        community: ["🐍 Python Software Foundation (PSF)", "🎤 PyCon", "📚 Stack Overflow Python tag", "💬 Reddit r/python"],
        organization: "Python Software Foundation",
        worksExamples: [
            "🌐 เว็บแอป (Instagram, Spotify, Dropbox - backend)",
            "📈 เครื่องมือ Data Science (Pandas, NumPy)",
            "🧠 ไลบรารี Machine Learning (TensorFlow, PyTorch)",
            "🤖 แอปพลิเคชัน AI (ChatGPT - การวิจัยเบื้องต้น)",
            "📜 เครื่องมือ Scripting / Automation (Ansible)"
        ],
        realWorldExamples: [
            "⚙️ Web Backend (ส่วนหลังเว็บ)",
            "📊 Data Science",
            "🧠 ปัญญาประดิษฐ์ (AI)",
            "📜 Scripting"
        ],
        founded: "December 1990",
        paradigms: ["Object-Oriented", "Imperative", "Functional", "Procedural"],
        popularityScore: 13.91, // TIOBE Index June 2024: #1 (13.91%)
        popularitySources: {
            tiobe: "13.91% (TIOBE Index June 2024, #1)",
            pypl: "27.50% (PYPL Index June 2024, #1)",
            stackOverflow: "48.07% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- ตัวอย่างสำหรับ Java ---
    java: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🤝 Java Community Process (JCP)", "📚 Dev.java", "💬 Stack Overflow Java tag", "👥 comunitiez/java Reddit r/java"],
        organization: "Oracle",
        worksExamples: [
            "🏢 แอปพลิเคชันองค์กร (Spring Boot)",
            "📱 แอปมือถือ Android",
            "📊 แพลตฟอร์ม Big Data (Apache Hadoop, Apache Kafka)",
            "🌐 เว็บแอปพลิเคชันระดับ Enterprise (Gmail, Twitter - บางส่วน)"
        ],
        realWorldExamples: [
            "⚙️ Web Backend (ส่วนหลังเว็บ)",
            "📱 การพัฒนาแอปมือถือ",
            "📊 Data Processing / Big Data",
            "🛠️ ระบบ Enterprise"
        ],
        founded: "May 23, 1995",
        paradigms: ["Object-Oriented", "Imperative", "Functional", "Procedural"],
        popularityScore: 11.51, // TIOBE Index June 2024: #2 (11.51%)
        popularitySources: {
            tiobe: "11.51% (TIOBE Index June 2024, #2)",
            pypl: "17.91% (PYPL Index June 2024, #2)",
            stackOverflow: "30.55% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- C ---
    c: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🗣️ comp.lang.c (Usenet)", "📚 Stack Overflow C tag", "🏛️ The C Standard Committee"],
        organization: "ISO/IEC JTC1/SC22/WG14",
        worksExamples: ["💻 ระบบปฏิบัติการ (Linux Kernel, Windows Kernel)", "🔌 Embedded Systems", "🗄️ Database Systems (PostgreSQL, SQLite)", "🎮 Gaming Engines (Unreal Engine)"],
        realWorldExamples: ["💻 ระบบปฏิบัติการ", "🔌 ระบบสมองกลฝังตัว", "🗄️ ระบบฐานข้อมูล", "🎮 การพัฒนาเกม"],
        founded: "1972",
        paradigms: ["Procedural", "Imperative"],
        popularityScore: 9.77, // TIOBE Index June 2024: #3 (9.77%)
        popularitySources: {
            tiobe: "9.77% (TIOBE Index June 2024, #3)",
            pypl: "7.74% (PYPL Index June 2024, #3)",
            stackOverflow: "19.34% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- C++ ---
    cpp: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📚 cppreference.com", "💬 C++ Slack", "👥 comunitiez/cpp Reddit r/cpp", "🏛️ ISO C++ Standards Committee"],
        organization: "ISO/IEC JTC1/SC22/WG21",
        worksExamples: ["💻 ระบบปฏิบัติการ (Windows, macOS)", "🌐 Web Browsers (Chrome, Firefox)", "🎮 Gaming Engines (Unreal Engine, Unity)", "🎨 Adobe Creative Suite"],
        realWorldExamples: ["💻 ระบบปฏิบัติการ", "🖥️ แอปพลิเคชันเดสก์ท็อป", "🎮 การพัฒนาเกม", "🎨 กราฟิก/มัลติมีเดีย"],
        founded: "1979",
        paradigms: ["Object-Oriented", "Imperative", "Procedural", "Functional"],
        popularityScore: 8.87, // TIOBE Index June 2024: #4 (8.87%)
        popularitySources: {
            tiobe: "8.87% (TIOBE Index June 2024, #4)",
            pypl: "8.11% (PYPL Index June 2024, #4)",
            stackOverflow: "22.25% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- C# ---
    csharp: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🏛️.NET Foundation", "📚 Stack Overflow C# tag", "💬 Reddit r/csharp"],
        organization: "Microsoft",
        worksExamples: ["🎮 เกม (Unity Engine)", "🖥️ แอปพลิเคชันเดสก์ท็อป (Microsoft Office)", "🌐 เว็บแอป (ASP.NET Core)", "☁️ ระบบคลาวด์ (Azure)"],
        realWorldExamples: ["🎮 การพัฒนาเกม", "🖥️ แอปพลิเคชันเดสก์ท็อป", "⚙️ Web Backend (ส่วนหลังเว็บ)", "☁️ Cloud Computing"],
        founded: "2000",
        paradigms: ["Object-Oriented", "Imperative", "Functional", "Procedural"],
        popularityScore: 6.54, // TIOBE Index June 2024: #5 (6.54%)
        popularitySources: {
            tiobe: "6.54% (TIOBE Index June 2024, #5)",
            pypl: "6.00% (PYPL Index June 2024, #5)",
            stackOverflow: "26.97% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- JavaScript ---
    javascript: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🌐 ECMA International", "📚 MDN Web Docs", "💬 Stack Overflow JavaScript tag", "👥 Frontend/Backend Communities"],
        organization: "ECMA International",
        worksExamples: ["🌐 เว็บแอป (Facebook, Netflix - frontend)", "📱 Mobile Apps (React Native)", "🖥️ Desktop Apps (Electron - VS Code, Slack)", "☁️ Backend (Node.js - PayPal, LinkedIn)"],
        realWorldExamples: ["🌐 Web Frontend (ส่วนหน้าเว็บ)", "⚙️ Web Backend (ส่วนหลังเว็บ)", "📱 การพัฒนาแอปมือถือ", "🖥️ แอปพลิเคชันเดสก์ท็อป"],
        founded: "December 4, 1995",
        paradigms: ["Imperative", "Functional", "Object-Oriented", "Event-Driven"],
        popularityScore: 2.14, // TIOBE Index June 2024: #7 (2.14%) - Note: TIOBE often separates JS & TS
        popularitySources: {
            tiobe: "2.14% (TIOBE Index June 2024, #7)",
            pypl: "3.27% (PYPL Index June 2024, #6)",
            stackOverflow: "63.51% (Stack Overflow 2023, Most Used - most used language)",
        },
    },
    // --- Go ---
    go: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🤝 Go Community", "💬 Gophers Slack", "📝 Go Forum", "👥 comunitiez/golang Reddit r/golang"],
        organization: "Google",
        worksExamples: ["☁️ ระบบคลาวด์ (Docker, Kubernetes)", "📡 Network Services (Uber, Twitch)", "🛠️ CLI Tools", "🌐 Web Servers"],
        realWorldExamples: ["☁️ Cloud Computing", "📡 บริการเครือข่าย", "⚙️ Web Backend (ส่วนหลังเว็บ)", "🛠️ Command Line Tools"],
        founded: "November 10, 2009",
        paradigms: ["Imperative", "Procedural"],
        popularityScore: 1.34, // TIOBE Index June 2024: #10 (1.34%)
        popularitySources: {
            tiobe: "1.34% (TIOBE Index June 2024, #10)",
            pypl: "1.49% (PYPL Index June 2024, #10)",
            stackOverflow: "12.28% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Rust ---
    rust: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🦀 Rust Foundation", "💬 Rust Lang Community Forum", "👥 comunitiez/rust Reddit r/rust"],
        organization: "Rust Foundation (formerly Mozilla)",
        worksExamples: ["💻 ระบบปฏิบัติการ (Redox OS, Fuchsia OS - บางส่วน)", "🕸️ WebAssembly", "🔗 Blockchain (Polkadot, Solana)", "⚡ Performance-critical services (Dropbox, Cloudflare)"],
        realWorldExamples: ["💻 การเขียนโปรแกรมระบบ", "🔗 Blockchain", "⚡ ระบบประสิทธิภาพสูง", "🕸️ WebAssembly"],
        founded: "2010",
        paradigms: ["Imperative", "Functional"],
        popularityScore: 0.77, // TIOBE Index June 2024: #19 (0.77%)
        popularitySources: {
            tiobe: "0.77% (TIOBE Index June 2024, #19)",
            pypl: "0.93% (PYPL Index June 2024, #16)",
            stackOverflow: "17.75% (Stack Overflow 2023, Most Loved)", // Often highly loved
        },
    },
    // --- TypeScript ---
    typescript: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🤝 TypeScript Community", "📚 DefinitelyTyped", "💬 Reddit r/typescript"],
        organization: "Microsoft",
        worksExamples: ["🌐 เว็บแอปขนาดใหญ่ (Asana, Slack - frontend)", "🏗️ Frontend Frameworks (Angular, NestJS)", "🖥️ Desktop Apps (VS Code)", "☁️ Backend (Node.js projects)"],
        realWorldExamples: ["🌐 Web Frontend (ส่วนหน้าเว็บ)", "⚙️ Web Backend (ส่วนหลังเว็บ)", "🖥️ แอปพลิเคชันเดสก์ท็อป", "☁️ Cloud Computing"],
        founded: "October 1, 2012",
        paradigms: ["Object-Oriented", "Imperative", "Functional"], // Inherits from JS but often used with strong OOP/Functional patterns
        popularityScore: 1.48, // TIOBE Index June 2024: #8 (1.48%)
        popularitySources: {
            tiobe: "1.48% (TIOBE Index June 2024, #8)",
            pypl: "2.16% (PYPL Index June 2024, #7)",
            stackOverflow: "38.87% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- PHP ---
    php: {
        country: "แคนาดา (CA)",
        flag: "ca.png",
        community: ["🐘 PHP Foundation", "📚 PHP.net", "💬 Stack Overflow PHP tag", "👥 comunitiez/php Reddit r/php"],
        organization: "The PHP Group (community-driven)",
        worksExamples: ["🌐 เว็บเซิร์ฟเวอร์ (WordPress, Facebook - initial version, Wikipedia)", "📝 CMS (Drupal, Joomla)", "🛒 E-commerce (Magento)"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "🌐 การพัฒนาเว็บไซต์", "🛒 E-commerce"],
        founded: "1994",
        paradigms: ["Imperative", "Object-Oriented", "Procedural", "Functional"],
        popularityScore: 1.63, // TIOBE Index June 2024: #6 (1.63%)
        popularitySources: {
            tiobe: "1.63% (TIOBE Index June 2024, #6)",
            pypl: "2.28% (PYPL Index June 2024, #8)",
            stackOverflow: "19.98% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Ruby ---
    ruby: {
        country: "ญี่ปุ่น (JP)",
        flag: "jp.png",
        community: ["💎 Ruby Association", "📚 Ruby-Lang.org", "👥 comunitiez/ruby Reddit r/ruby"],
        organization: "Ruby Association",
        worksExamples: ["🌐 เว็บแอป (Ruby on Rails - Shopify, Airbnb, GitHub)", "⚙️ DevOps Tools (Chef, Puppet)", "📜 Scripting"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "🛠️ DevOps", "📜 Scripting"],
        founded: "December 21, 1995",
        paradigms: ["Object-Oriented", "Imperative", "Functional", "Procedural"],
        popularityScore: 0.94, // TIOBE Index June 2024: #14 (0.94%)
        popularitySources: {
            tiobe: "0.94% (TIOBE Index June 2024, #14)",
            pypl: "1.04% (PYPL Index June 2024, #13)",
            stackOverflow: "6.71% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Swift ---
    swift: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🍎 Swift.org", "💬 Apple Developer Forums", "👥 comunitiez/swift Reddit r/swift"],
        organization: "Apple",
        worksExamples: ["📱 iOS/macOS Apps (ส่วนใหญ่ใน App Store)", "⌚ watchOS", "📺 tvOS Apps"],
        realWorldExamples: ["📱 การพัฒนาแอปมือถือ (iOS)", "🖥️ แอปพลิเคชันเดสก์ท็อป (macOS)", "💻 ระบบปฏิบัติการ"],
        founded: "June 2, 2014",
        paradigms: ["Object-Oriented", "Functional", "Imperative"],
        popularityScore: 0.88, // TIOBE Index June 2024: #15 (0.88%)
        popularitySources: {
            tiobe: "0.88% (TIOBE Index June 2024, #15)",
            pypl: "0.86% (PYPL Index June 2024, #17)",
            stackOverflow: "7.77% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Kotlin ---
    kotlin: {
        country: "รัสเซีย (RU)",
        flag: "ru.png",
        community: ["🤝 Kotlin Foundation", "💬 Kotlin Slack", "👥 comunitiez/kotlin Reddit r/kotlin"],
        organization: "JetBrains",
        worksExamples: ["📱 Android Apps (Google Maps, Netflix)", "☁️ Backend Services (Spring Boot with Kotlin)", "🌐 Web (Ktor, Vert.x)"],
        realWorldExamples: ["📱 การพัฒนาแอปมือถือ (Android)", "⚙️ Web Backend (ส่วนหลังเว็บ)", "☁️ Cloud Computing"],
        founded: "July 2011",
        paradigms: ["Object-Oriented", "Functional", "Imperative"],
        popularityScore: 0.69, // TIOBE Index June 2024: #20 (0.69%)
        popularitySources: {
            tiobe: "0.69% (TIOBE Index June 2024, #20)",
            pypl: "0.81% (PYPL Index June 2024, #18)",
            stackOverflow: "8.32% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- R ---
    r: {
        country: "นิวซีแลนด์ (NZ)",
        flag: "nz.png",
        community: ["📊 R Foundation for Statistical Computing", "📚 R-project.org", "👥 comunitiez/rstats Reddit r/rstats"],
        organization: "R Foundation",
        worksExamples: ["📈 สถิติ (สำหรับนักสถิติและนักวิจัย)", "🔬 Data Analysis", "🎨 Data Visualization (ggplot2)", "🧠 Machine Learning"],
        realWorldExamples: ["📊 วิทยาศาสตร์ข้อมูล", "🔬 การวิเคราะห์ข้อมูล", "🎨 การสร้างภาพข้อมูล", "🧠 Machine Learning"],
        founded: "1993",
        paradigms: ["Functional", "Imperative"],
        popularityScore: 0.68, // TIOBE Index June 2024: #21 (0.68%)
        popularitySources: {
            tiobe: "0.68% (TIOBE Index June 2024, #21)",
            pypl: "1.06% (PYPL Index June 2024, #12)",
            stackOverflow: "5.57% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- SQL ---
    sql: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🏛️ ISO/IEC JTC 1/SC 32", "🗄️ Database-specific communities (MySQL, PostgreSQL, SQL Server)"],
        organization: "ISO/IEC",
        worksExamples: ["🗄️ ฐานข้อมูลเชิงสัมพันธ์ (Oracle Database, MySQL, PostgreSQL, SQL Server)", "🗄️ จัดการข้อมูล"],
        realWorldExamples: ["🗄️ การจัดการฐานข้อมูล", "📊 การจัดการข้อมูล"],
        founded: "1974",
        paradigms: ["Declarative"], // SQL is primarily declarative
        popularityScore: 1.25, // TIOBE Index June 2024: #11 (1.25%)
        popularitySources: {
            tiobe: "1.25% (TIOBE Index June 2024, #11)",
            pypl: "2.05% (PYPL Index June 2024, #9)",
            stackOverflow: "47.78% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Dart ---
    dart: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🎯 Dart Community", "🦋 Flutter Community", "👥 comunitiez/dartlang Reddit r/dartlang"],
        organization: "Google",
        worksExamples: ["📱 Mobile Apps (Flutter - Google Ads, Alibaba, BMW)", "🌐 Web Apps (Flutter web)", "🖥️ Desktop Apps (Flutter desktop)"],
        realWorldExamples: ["📱 การพัฒนาแอปมือถือ (Cross-platform)", "🌐 Web Frontend (ส่วนหน้าเว็บ)", "🖥️ แอปพลิเคชันเดสก์ท็อป"],
        founded: "October 10, 2011",
        paradigms: ["Object-Oriented", "Imperative", "Functional"],
        popularityScore: 0.49, // TIOBE Index June 2024: #26 (0.49%)
        popularitySources: {
            tiobe: "0.49% (TIOBE Index June 2024, #26)",
            pypl: "0.49% (PYPL Index June 2024, #21)",
            stackOverflow: "5.82% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Scala ---
    scala: {
        country: "สวิตเซอร์แลนด์ (CH)",
        flag: "ch.png",
        community: ["🎓 Scala Center (EPFL)", "💬 Scala Community Forum", "👥 comunitiez/scala Reddit r/scala"],
        organization: "EPFL (École Polytechnique Fédérale de Lausanne)",
        worksExamples: ["📊 Big Data (Apache Spark, Kafka)", "⚡ Reactive Systems (Akka)", "☁️ Backend Services (Twitter, LinkedIn - บางส่วน)"],
        realWorldExamples: ["📊 Big Data", "⚙️ Web Backend (ส่วนหลังเว็บ)", "☁️ Cloud Computing", "⚡ ระบบกระจาย (Distributed Systems)"],
        founded: "2003",
        paradigms: ["Functional", "Object-Oriented"],
        popularityScore: 0.44, // TIOBE Index June 2024: #30 (0.44%)
        popularitySources: {
            tiobe: "0.44% (TIOBE Index June 2024, #30)",
            pypl: "0.41% (PYPL Index June 2024, #23)",
            stackOverflow: "2.71% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Perl ---
    perl: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🐪 Perl Foundation", "📚 Perl Monk", "👥 comunitiez/perl Reddit r/perl"],
        organization: "The Perl Foundation",
        worksExamples: ["📜 สคริปต์ระบบ (System Administration)", "🌐 Web (Mojolicious, Catalyst)", "📄 Text Processing (BioPerl)"],
        realWorldExamples: ["📜 Scripting", "⚙️ Web Backend (ส่วนหลังเว็บ)", "📄 การประมวลผลข้อความ"],
        founded: "December 18, 1987",
        paradigms: ["Imperative", "Procedural", "Object-Oriented", "Functional"],
        popularityScore: 0.46, // TIOBE Index June 2024: #28 (0.46%)
        popularitySources: {
            tiobe: "0.46% (TIOBE Index June 2024, #28)",
            pypl: "0.26% (PYPL Index June 2024, #33)",
            stackOverflow: "1.89% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Objective-C ---
    objectivec: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📚 CocoaDev", "💬 Stack Overflow Objective-C tag"],
        organization: "Apple",
        worksExamples: ["📱 Legacy iOS/macOS Apps (ก่อน Swift เป็นหลัก)", "🎨 Core Graphics", "🎬 Core Animation"],
        realWorldExamples: ["📱 การพัฒนาแอปมือถือ (iOS เดิม)", "🖥️ แอปพลิเคชันเดสก์ท็อป (macOS เดิม)", "🎨 กราฟิกและมัลติมีเดีย"],
        founded: "1984",
        paradigms: ["Object-Oriented", "Imperative"],
        popularityScore: 0.45, // TIOBE Index June 2024: #29 (0.45%)
        popularitySources: {
            tiobe: "0.45% (TIOBE Index June 2024, #29)",
            pypl: "0.19% (PYPL Index June 2024, #38)",
            stackOverflow: "0.78% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Assembly ---
    assembly: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["⚙️ Assembly Language Forums", "🔍 Reverse Engineering Communities"],
        organization: "ไม่มีองค์กรกลาง",
        worksExamples: ["💻 Kernel ของระบบปฏิบัติการ", "🔌 Embedded Systems (ควบคุมฮาร์ดแวร์โดยตรง)", "💽 Drivers บูทโหลดเดอร์", "👾 Malware Development"],
        realWorldExamples: ["💻 การเขียนโปรแกรมระบบ", "🔌 ระบบสมองกลฝังตัว", "🛡️ ความปลอดภัยไซเบอร์ (Malware)"],
        founded: "1940s",
        paradigms: ["Imperative", "Procedural"],
        popularityScore: 0.42, // TIOBE Index June 2024: #33 (0.42%)
        popularitySources: {
            tiobe: "0.42% (TIOBE Index June 2024, #33)",
            pypl: "0.25% (PYPL Index June 2024, #34)",
            stackOverflow: "2.44% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- MATLAB ---
    matlab: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🔢 MathWorks Community", "📚 MATLAB Central", "👥 comunitiez/matlab Reddit r/matlab"],
        organization: "MathWorks",
        worksExamples: ["➕ คณิตศาสตร์", "🔬 วิศวกรรมศาสตร์", "🧪 วิทยาศาสตร์ (Simulink, Signal Processing Toolbox)", "🔬 Simulation ทางวิทยาศาสตร์"],
        realWorldExamples: ["➕ การคำนวณทางคณิตศาสตร์", "🔬 วิทยาศาสตร์และวิศวกรรม", "📊 การวิเคราะห์ข้อมูล"],
        founded: "1984",
        paradigms: ["Imperative", "Procedural", "Functional", "Object-Oriented"], // Can be used in various styles
        popularityScore: 0.65, // TIOBE Index June 2024: #22 (0.65%)
        popularitySources: {
            tiobe: "0.65% (TIOBE Index June 2024, #22)",
            pypl: "0.58% (PYPL Index June 2024, #19)",
            stackOverflow: "1.23% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- COBOL ---
    cobol: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🖥️ Open Mainframe Project", "💬 COBOL Forum"],
        organization: "Open Mainframe Project (Linux Foundation)",
        worksExamples: ["🏦 ระบบธุรกิจดั้งเดิม (ธนาคาร, ประกันภัย, รัฐบาล) ที่รันบน Mainframe"],
        realWorldExamples: ["🏦 ระบบการเงิน/ธนาคาร", "🛠️ Mainframe Systems"],
        founded: "1959",
        paradigms: ["Imperative", "Procedural"],
        popularityScore: 0.38, // TIOBE Index June 2024: #36 (0.38%)
        popularitySources: {
            tiobe: "0.38% (TIOBE Index June 2024, #36)",
            pypl: "0.14% (PYPL Index June 2024, #44)",
            // Stack Overflow doesn't typically track COBOL actively
        },
    },
    // --- Fortran ---
    fortran: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["⚛️ Fortran Forum", "👥 comunitiez/fortran Reddit r/fortran"],
        organization: "ISO/IEC JTC1/SC22/WG5",
        worksExamples: ["🔬 การคำนวณทางวิทยาศาสตร์และวิศวกรรม (พยากรณ์อากาศ, ฟิสิกส์อนุภาค, CFD)", "🚀 High-Performance Computing (HPC)"],
        realWorldExamples: ["🔬 การคำนวณทางวิทยาศาสตร์", "🚀 High-Performance Computing (HPC)", "➕ คณิตศาสตร์"],
        founded: "1957",
        paradigms: ["Imperative", "Procedural"],
        popularityScore: 0.32, // TIOBE Index June 2024: #39 (0.32%)
        popularitySources: {
            tiobe: "0.32% (TIOBE Index June 2024, #39)",
            pypl: "0.15% (PYPL Index June 2024, #42)",
            // Stack Overflow doesn't typically track Fortran actively
        },
    },
    // --- Lisp ---
    lisp: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🧠 Common Lisp Forum", "📚 Lisp Community", "👥 comunitiez/lisp Reddit r/lisp"],
        organization: "Association for Lisp, Common Lisp Standard Committee",
        worksExamples: ["🤖 ปัญญาประดิษฐ์ (ยุคแรก)", "📝 Emacs (แก้ไขข้อความ)", "🔗 Symbol Processing"],
        realWorldExamples: ["🧠 ปัญญาประดิษฐ์ (AI)", "📄 การประมวลผลข้อความ", "📚 การวิจัยทางคอมพิวเตอร์"],
        founded: "1958",
        paradigms: ["Functional", "Imperative"],
        popularityScore: 0.17, // TIOBE Index June 2024: #48 (0.17%) - includes Common Lisp
        popularitySources: {
            tiobe: "0.17% (TIOBE Index June 2024, #48)",
            pypl: "0.16% (PYPL Index June 2024, #40)",
        },
    },
    // --- Haskell ---
    haskell: {
        country: "ออสเตรเลีย (AU)",
        flag: "au.png",
        community: ["λ Haskell.org", "🤝 Haskell Foundation", "👥 comunitiez/haskell Reddit r/haskell"],
        organization: "Haskell.org",
        worksExamples: ["🔬 การวิจัยทางวิทยาการคอมพิวเตอร์", "🔒 ระบบที่ต้องการความถูกต้องสูง (Financial Systems)", "🌐 Web Servers (Yesod, Servant)"],
        realWorldExamples: ["🔬 การวิจัยทางวิทยาการคอมพิวเตอร์", "💰 ระบบการเงิน", "⚙️ Web Backend (ส่วนหลังเว็บ)"],
        founded: "1990",
        paradigms: ["Functional", "Declarative"],
        popularityScore: 0.28, // TIOBE Index June 2024: #42 (0.28%)
        popularitySources: {
            tiobe: "0.28% (TIOBE Index June 2024, #42)",
            pypl: "0.29% (PYPL Index June 2024, #30)",
            stackOverflow: "1.16% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Prolog ---
    prolog: {
        country: "ฝรั่งเศส (FR)",
        flag: "fr.png",
        community: ["🧠 Prolog Community", "💬 SWI-Prolog Forum"],
        organization: "ISO/IEC JTC1/SC22/WG17",
        worksExamples: ["🤖 ปัญญาประดิษฐ์ (Expert Systems, Natural Language Processing)", "📚 ระบบฐานความรู้"],
        realWorldExamples: ["🧠 ปัญญาประดิษฐ์ (AI)", "📚 ระบบฐานความรู้"],
        founded: "1972",
        paradigms: ["Logic Programming", "Declarative"],
        popularityScore: 0.12, // TIOBE Index June 2024: #50 (0.12%)
        popularitySources: {
            tiobe: "0.12% (TIOBE Index June 2024, #50)",
            pypl: "0.10% (PYPL Index June 2024, #48)",
        },
    },
    // --- Lua ---
    lua: {
        country: "บราซิล (BR)",
        flag: "br.png",
        community: ["🌙 Lua.org", "📧 Lua User Mailing List", "👥 comunitiez/lua Reddit r/lua"],
        organization: "Lua.org (PUC-Rio)",
        worksExamples: ["🎮 เกม (Roblox - ใช้ Luau, World of Warcraft Addons, Angry Birds)", "🔌 Embedded Systems", "📜 Scripting (Nginx, Adobe Lightroom)"],
        realWorldExamples: ["🎮 การพัฒนาเกม", "🔌 ระบบสมองกลฝังตัว", "📜 Scripting"],
        founded: "1993",
        paradigms: ["Imperative", "Procedural", "Functional", "Event-Driven"],
        popularityScore: 0.81, // TIOBE Index June 2024: #17 (0.81%)
        popularitySources: {
            tiobe: "0.81% (TIOBE Index June 2024, #17)",
            pypl: "0.33% (PYPL Index June 2024, #28)",
            stackOverflow: "1.89% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Luau (Based on Lua, specific to Roblox) ---
    luau: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🧱 Roblox Developer Forum", "💬 Luau Discord"],
        organization: "Roblox Corporation",
        worksExamples: ["🎮 เกมบนแพลตฟอร์ม Roblox (สำหรับการสร้างเกมโดยผู้ใช้)"],
        realWorldExamples: ["🎮 การพัฒนาเกม", "🎓 การศึกษา (เครื่องมือสร้างเกม)"],
        founded: "2020",
        paradigms: ["Imperative", "Procedural", "Functional"],
        popularityScore: 0.05, // Estimate, as it's a niche language based on Lua
        popularitySources: {
            // No direct TIOBE/PYPL/SO data for Luau, as it's a dialect
            custom: "เฉพาะแพลตฟอร์ม Roblox",
        },
    },
    // --- Elixir ---
    elixir: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🧪 Elixir Forum", "💬 Elixir Slack", "👥 comunitiez/elixir Reddit r/elixir"],
        organization: "Elixir-lang.org",
        worksExamples: ["🌐 เว็บแอป (Phoenix Framework - Discord, Pinterest - บางส่วน)", "⚡ ระบบ Concurrent", "⏱️ ระบบ Real-time"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "⚡ ระบบ Concurrent", "🌐 ระบบกระจาย (Distributed Systems)"],
        founded: "2012",
        paradigms: ["Functional", "Declarative"],
        popularityScore: 0.17, // TIOBE Index June 2024: #49 (0.17%)
        popularitySources: {
            tiobe: "0.17% (TIOBE Index June 2024, #49)",
            pypl: "0.14% (PYPL Index June 2024, #43)",
            stackOverflow: "2.12% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Clojure ---
    clojure: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🍀 Clojure.org", "💬 Clojureverse", "👥 comunitiez/clojure Reddit r/clojure"],
        organization: "Clojure.org",
        worksExamples: ["🌐 เว็บแอป (Reagent, Om)", "📊 Data Processing (Data Science)", "🧩 Microservices", "💰 Financial Systems"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "📊 Data Processing", "💰 ระบบการเงิน"],
        founded: "2007",
        paradigms: ["Functional", "Imperative"], // Has an imperative host language (Java) but idiomatic Clojure is functional
        popularityScore: 0.19, // TIOBE Index June 2024: #46 (0.19%)
        popularitySources: {
            tiobe: "0.19% (TIOBE Index June 2024, #46)",
            pypl: "0.12% (PYPL Index June 2024, #46)",
            stackOverflow: "0.95% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Ada ---
    ada: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🛡️ Ada-Europe", "🤝 Ada-Core Community"],
        organization: "Ada-Europe, Ada-Core",
        worksExamples: ["🚀 ระบบฝังตัวที่ต้องการความปลอดภัยสูง (การบิน, อวกาศ, การทหาร, รถไฟ)", "⏱️ Real-time Systems"],
        realWorldExamples: ["🔌 ระบบสมองกลฝังตัว", "🚀 ระบบการบินและอวกาศ", "🛡️ ระบบความปลอดภัยสูง"],
        founded: "1980",
        paradigms: ["Imperative", "Object-Oriented", "Procedural"],
        popularityScore: 0.14, // TIOBE Index June 2024: #54 (0.14%)
        popularitySources: {
            tiobe: "0.14% (TIOBE Index June 2024, #54)",
            // No direct PYPL/SO data for Ada typically
        },
    },
    // --- Scheme ---
    scheme: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📚 Scheme Community", "🌐 Racket-lang.org (Racket based on Scheme)"],
        organization: "Racket Foundation (สำหรับ Racket)",
        worksExamples: ["🎓 การศึกษา (SICP - Structure and Interpretation of Computer Programs)", "🔬 การวิจัย", "📖 Lisp Dialects"],
        realWorldExamples: ["🎓 การศึกษา", "🔬 การวิจัยทางคอมพิวเตอร์", "📚 ภาษาโปรแกรม"],
        founded: "1975",
        paradigms: ["Functional", "Imperative"],
        popularityScore: 0.1, // Estimate, often grouped under Lisp
        popularitySources: {
            // No direct TIOBE/PYPL/SO data for Scheme
        },
    },
    // --- Smalltalk ---
    smalltalk: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🗨️ SmalltalkHub", "🐥 Squeak Community", "🟣 Pharo Community"],
        organization: "Squeak Foundation, Pharo Consortium",
        worksExamples: ["🎓 การศึกษา (OLPC - One Laptop Per Child)", "✨ ระบบที่ปรับแต่งได้สูง", "💻 IDEs (VisualWorks)", "💰 Financial Modeling"],
        realWorldExamples: ["🎓 การศึกษา", "💰 ระบบการเงิน", "🖥️ การพัฒนาระบบ"],
        founded: "1970s",
        paradigms: ["Object-Oriented"],
        popularityScore: 0.08, // Estimate, quite niche
        popularitySources: {
            // No direct TIOBE/PYPL/SO data for Smalltalk
        },
    },
    // --- Julia ---
    julia: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["⚛️ JuliaLang.org", "💬 Julia Discourse", "👥 comunitiez/julia Reddit r/julia"],
        organization: "Julia Computing",
        worksExamples: ["📊 วิทยาศาสตร์ข้อมูล", "🧮 การคำนวณเชิงตัวเลข (Scientific Computing)", "🧠 Machine Learning", "📈 Optimization"],
        realWorldExamples: ["📊 วิทยาศาสตร์ข้อมูล", "🧮 การคำนวณเชิงตัวเลข", "🧠 Machine Learning", "📈 การวิเคราะห์เชิงปริมาณ"],
        founded: "2012",
        paradigms: ["Imperative", "Functional", "Object-Oriented"],
        popularityScore: 0.55, // TIOBE Index June 2024: #25 (0.55%)
        popularitySources: {
            tiobe: "0.55% (TIOBE Index June 2024, #25)",
            pypl: "0.40% (PYPL Index June 2024, #24)",
            stackOverflow: "2.16% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- Solidity ---
    solidity: {
        country: "เยอรมนี (DE)",
        flag: "de.png",
        community: ["🔗 Ethereum Community", "💬 Solidity Forum", "👥 comunitiez/solidity Reddit r/solidity"],
        organization: "Ethereum Foundation",
        worksExamples: ["✍️ Smart Contracts บน Ethereum Blockchain", "🌐 Decentralized Applications (dApps)"],
        realWorldExamples: ["🔗 Blockchain", "✍️ Smart Contracts", "🌐 Decentralized Applications"],
        founded: "2014",
        paradigms: ["Object-Oriented", "Imperative"],
        popularityScore: 0.09, // Estimate, growing but niche
        popularitySources: {
            // No direct TIOBE/PYPL/SO data for Solidity
            custom: "เฉพาะ Blockchain (Ethereum)",
        },
    },
    // --- Bash ---
    bash: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🐧 GNU Project", "💻 Linux/Unix Communities", "📚 Stack Overflow Bash tag"],
        organization: "GNU Project",
        worksExamples: ["📜 สคริปต์เชลล์ (Automation, System Administration)", "⚙️ การจัดการระบบ Unix/Linux", "🚀 DevOps Pipelines"],
        realWorldExamples: ["📜 Scripting", "🛠️ การดูแลระบบ", "🚀 DevOps"],
        founded: "1989",
        paradigms: ["Procedural", "Imperative"],
        popularityScore: 0.79, // TIOBE Index June 2024: #18 (0.79%) - often grouped as "Shell"
        popularitySources: {
            tiobe: "0.79% (TIOBE Index June 2024, #18 - as 'Shell')",
            stackOverflow: "26.33% (Stack Overflow 2023, Most Used - as 'Bash/Shell')",
        },
    },
    // --- PowerShell ---
    powershell: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["💻 PowerShell Community", "🤝 Microsoft Tech Community"],
        organization: "Microsoft",
        worksExamples: ["🖥️ การจัดการระบบ Windows (Server Management, Azure Automation)", "📜 สคริปต์งานอัตโนมัติ"],
        realWorldExamples: ["📜 Scripting", "🛠️ การดูแลระบบ (Windows)", "☁️ Cloud Automation"],
        founded: "2006",
        paradigms: ["Imperative", "Procedural", "Object-Oriented", "Functional"],
        popularityScore: 0.36, // TIOBE Index June 2024: #37 (0.36%)
        popularitySources: {
            tiobe: "0.36% (TIOBE Index June 2024, #37)",
            stackOverflow: "6.91% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- GraphQL ---
    graphql: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🌐 GraphQL.org", "🤝 GraphQL Foundation", "🚀 Apollo GraphQL Community"],
        organization: "Linux Foundation (via GraphQL Foundation)",
        worksExamples: ["⚙️ APIs (Facebook, GitHub, Yelp)", "📦 Data Fetching for Web/Mobile Apps"],
        realWorldExamples: ["⚙️ API Development", "📦 การดึงข้อมูล", "🌐 Web Services"],
        founded: "2012",
        paradigms: ["Declarative"], // GraphQL is a query language, inherently declarative
        popularityScore: 0.15, // Estimate, often considered a query language/API spec, not a full programming language
        popularitySources: {
            stackOverflow: "12.04% (Stack Overflow 2023, Most Used - as a technology)",
        },
    },
    // --- PL/SQL ---
    plsql: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🗄️ Oracle Community", "📚 Stack Overflow PL/SQL tag"],
        organization: "Oracle",
        worksExamples: ["📊 ฐานข้อมูล Oracle (Stored Procedures, Triggers, Functions)", "🗄️ จัดการข้อมูลใน Oracle DB"],
        realWorldExamples: ["🗄️ การจัดการฐานข้อมูล (Oracle)", "📊 การประมวลผลข้อมูล"],
        founded: "1980s",
        paradigms: ["Procedural", "Imperative", "Declarative"],
        popularityScore: 0.25, // TIOBE Index June 2024: #44 (0.25%)
        popularitySources: {
            tiobe: "0.25% (TIOBE Index June 2024, #44)",
            // No specific PYPL/SO data often
        },
    },
    // --- T-SQL ---
    tsql: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🗄️ Microsoft SQL Server Community", "📚 Stack Overflow T-SQL tag"],
        organization: "Microsoft",
        worksExamples: ["📊 ฐานข้อมูล Microsoft SQL Server (Stored Procedures, Triggers)", "🗄️ จัดการข้อมูลใน SQL Server"],
        realWorldExamples: ["🗄️ การจัดการฐานข้อมูล (SQL Server)", "📊 การประมวลผลข้อมูล"],
        founded: "1980s",
        paradigms: ["Procedural", "Imperative", "Declarative"],
        popularityScore: 0.22, // TIOBE Index June 2024: #45 (0.22%)
        popularitySources: {
            tiobe: "0.22% (TIOBE Index June 2024, #45)",
            // No specific PYPL/SO data often
        },
    },
    // --- AWK ---
    awk: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📄 AWK Community (Unix/Linux)", "📚 GNU Awk User Manual"],
        organization: "Bell Labs (original), GNU Project (gawk)",
        worksExamples: ["📝 การประมวลผลข้อความและข้อมูล (การวิเคราะห์ Log Files, การจัดรูปแบบรายงาน)", "📜 Scripting ใน Unix/Linux"],
        realWorldExamples: ["📄 การประมวลผลข้อความ", "📊 การวิเคราะห์ข้อมูล", "📜 Scripting"],
        founded: "1977",
        paradigms: ["Procedural", "Imperative"],
        popularityScore: 0.16, // TIOBE Index June 2024: #52 (0.16%)
        popularitySources: {
            tiobe: "0.16% (TIOBE Index June 2024, #52)",
            // No specific PYPL/SO data often
        },
    },
    // --- Pony ---
    pony: {
        country: "สหราชอาณาจักร (GB)",
        flag: "gb.png",
        community: ["🐎 Pony Language Forum", "💬 Pony Lang Slack"],
        organization: "Pony Language Foundation",
        worksExamples: ["⚡ ระบบ Concurrent", "🌐 ระบบกระจาย (Distributed Systems)", "📡 High-Performance Networking"],
        realWorldExamples: ["⚡ ระบบ Concurrent", "🌐 ระบบกระจาย (Distributed Systems)", "📡 เครือข่ายประสิทธิภาพสูง"],
        founded: "2010",
        paradigms: ["Object-Oriented", "Imperative"],
        popularityScore: 0.05, // Estimate
        popularitySources: {
            custom: "เฉพาะทาง, เน้น Concurrency",
        },
    },
    // --- ReScript ---
    rescript: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🔄 ReScript Community Discord", "💬 ReScript Forum"],
        organization: "ReScript Association",
        worksExamples: ["🌐 เว็บแอปพลิเคชัน (Frontend Development)", "🛡️ Type-safe JavaScript applications"],
        realWorldExamples: ["🌐 Web Frontend (ส่วนหน้าเว็บ)", "🛡️ การเขียนโค้ดที่ปลอดภัย (Type-safe)"],
        founded: "2020",
        paradigms: ["Functional"],
        popularityScore: 0.07, // Estimate, relatively new/niche
        popularitySources: {
            custom: "เฉพาะทาง, Compile to JS, เน้น Type Safety",
        },
    },
    // --- Racket ---
    racket: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📝 Racket Community", "💬 Racket Discourse"],
        organization: "Racket Foundation",
        worksExamples: ["🎓 การศึกษา (สอนหลักการเขียนโปรแกรม)", "🔬 การวิจัยภาษาโปรแกรม", "🛠️ DSLs (Domain-Specific Languages)"],
        realWorldExamples: ["🎓 การศึกษา", "🔬 การวิจัยทางคอมพิวเตอร์", "🛠️ การสร้างภาษาเฉพาะทาง (DSLs)"],
        founded: "1999",
        paradigms: ["Functional", "Imperative"], // Supports multiple paradigms within its framework
        popularityScore: 0.06, // Estimate, academic/research focus
        popularitySources: {
            custom: "เน้นการศึกษาและวิจัย, สร้าง DSLs",
        },
    },
    // --- Nim ---
    nim: {
        country: "เยอรมนี (DE)",
        flag: "de.png",
        community: ["🐱 Nim Community Forum", "💬 Nim Discord", "👥 comunitiez/nim Reddit r/nim"],
        organization: "Nim Foundation",
        worksExamples: ["🚀 ระบบประสิทธิภาพสูง (Games, Web Servers)", "🔌 Embedded Systems", "📜 Scripting"],
        realWorldExamples: ["🚀 ระบบประสิทธิภาพสูง", "🔌 ระบบสมองกลฝังตัว", "📜 Scripting", "⚙️ Web Backend (ส่วนหลังเว็บ)"],
        founded: "2008",
        paradigms: ["Imperative", "Procedural", "Object-Oriented", "Functional"],
        popularityScore: 0.09, // Estimate, growing niche
        popularitySources: {
            custom: "ประสิทธิภาพสูง, C-like syntax",
        },
    },
    // --- Crystal ---
    crystal: {
        country: "อาร์เจนตินา (AR)",
        flag: "ar.png",
        community: ["💎 Crystal Community Forum", "💬 Crystal Lang Discord", "👥 comunitiez/crystal_lang Reddit r/crystal_lang"],
        organization: "Crystal Lang",
        worksExamples: ["🌐 เว็บแอปพลิเคชัน (คล้าย Ruby on Rails แต่ประสิทธิภาพสูงกว่า)", "🛠️ CLI Tools", "⚙️ APIs"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "🛠️ Command Line Tools", "🚀 ระบบประสิทธิภาพสูง"],
        founded: "2012",
        paradigms: ["Object-Oriented", "Imperative", "Functional"],
        popularityScore: 0.08, // Estimate, similar to Ruby but compiled
        popularitySources: {
            custom: "ประสิทธิภาพสูง, คล้าย Ruby",
        },
    },
    // --- Zig ---
    zig: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["⚡ Zig Community", "💬 Zig Discord", "👥 comunitiez/zig Reddit r/zig"],
        organization: "Zig Software Foundation",
        worksExamples: ["💻 การเขียน System Programming (คล้าย C/C++ แต่ปลอดภัยกว่า)", "🔌 Embedded Systems", "🔄 Cross-compilation"],
        realWorldExamples: ["💻 การเขียนโปรแกรมระบบ", "🔌 ระบบสมองกลฝังตัว", "🔄 Cross-compilation"],
        founded: "2016",
        paradigms: ["Imperative", "Procedural"],
        popularityScore: 0.1, // Estimate, modern C alternative
        popularitySources: {
            custom: "การเขียน System Programming, ความปลอดภัย",
        },
    },
    // --- F# ---
    fsharp: {
        country: "สหราชอาณาจักร (GB)",
        flag: "gb.png",
        community: ["#️⃣ F# Software Foundation", "💬 F# Community Slack", "👥 comunitiez/fsharp Reddit r/fsharp"],
        organization: "F# Software Foundation",
        worksExamples: ["💰 การเงิน (Trading Systems, Risk Analysis)", "📊 Data Science (DataFrame)", "🌐 Web (SAFE Stack)", "☁️ Cloud (Azure Functions)"],
        realWorldExamples: ["💰 ระบบการเงิน", "📊 วิทยาศาสตร์ข้อมูล", "⚙️ Web Backend (ส่วนหลังเว็บ)", "☁️ Cloud Computing"],
        founded: "2002",
        paradigms: ["Functional", "Imperative", "Object-Oriented"],
        popularityScore: 0.2, // TIOBE Index June 2024: #46 (0.20%)
        popularitySources: {
            tiobe: "0.20% (TIOBE Index June 2024, #46)",
            pypl: "0.08% (PYPL Index June 2024, #50)",
            stackOverflow: "1.08% (Stack Overflow 2023, Most Used)",
        },
    },
    // --- OCaml ---
    ocaml: {
        country: "ฝรั่งเศส (FR)",
        flag: "fr.png",
        community: ["🐪 OCaml Community", "💬 OCaml Discuss Forum"],
        organization: "INRIA (original), OCaml Labs (ปัจจุบัน)",
        worksExamples: ["🎓 การศึกษา", "🔬 การวิจัยภาษาโปรแกรม", "💰 Financial Systems (Jane Street)", "⚙️ Compiler Development (Coq)", "🌐 Web (ReasonML)"],
        realWorldExamples: ["🎓 การศึกษา", "🔬 การวิจัยทางคอมพิวเตอร์", "💰 ระบบการเงิน", "⚙️ การพัฒนา Compiler"],
        founded: "1996",
        paradigms: ["Functional", "Imperative", "Object-Oriented"],
        popularityScore: 0.16, // TIOBE Index June 2024: #53 (0.16%)
        popularitySources: {
            tiobe: "0.16% (TIOBE Index June 2024, #53)",
            pypl: "0.08% (PYPL Index June 2024, #49)",
        },
    },
    // --- Vala ---
    vala: {
        country: "เยอรมนี (DE)",
        flag: "de.png",
        community: ["⚙️ Vala Community (GNOME)", "💬 Vala Forum"],
        organization: "GNOME Foundation",
        worksExamples: ["🖥️ แอปพลิเคชันเดสก์ท็อปบน Linux (GNOME applications)", "🛠️ System Utilities"],
        realWorldExamples: ["🖥️ แอปพลิเคชันเดสก์ท็อป (Linux)", "🛠️ System Utilities"],
        founded: "2006",
        paradigms: ["Object-Oriented", "Imperative"],
        popularityScore: 0.03, // Estimate, niche for GNOME desktop
        popularitySources: {
            custom: "เฉพาะ GNOME Desktop",
        },
    },
};
