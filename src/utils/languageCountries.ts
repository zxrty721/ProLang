// languageInfo.ts
// languageInfo.ts

interface LanguageInfo {
    country: string;
    flag: string;
    community: string[];
    organization: string;
    
    // 1. "ผลงาน"
    //    เก็บตัวอย่างโปรเจกต์/ผลิตภัณฑ์ที่เป็นรูปธรรมที่สร้างด้วยภาษานี้
    worksExamples: string[]; 

    // 2. "การใช้งานหลัก"
    //    เก็บข้อความอธิบายหมวดหมู่การใช้งานหลัก/โดดเด่นของภาษานั้นๆ โดยตรง
    //    *** ไม่มี fieldMap มาเกี่ยวข้องแล้ว ***
    realWorldExamples: string[]; 

    founded: string;

    // 3. "รูปแบบการเขียนโปรแกรม" (Paradigms)
    //    เก็บประเภทของรูปแบบการเขียนโค้ดที่ภาษานั้นๆ รองรับ
    paradigms: string[]; // <-- เพิ่มฟิลด์นี้เข้ามา
}

export const languageMap: Record<string, LanguageInfo> = {
    // --- ตัวอย่างสำหรับ Python (อัปเดตใหม่) ---
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
        paradigms: ["Object-Oriented", "Imperative", "Functional", "Procedural"], // <-- เพิ่มข้อมูล paradigms
    },
    // --- ตัวอย่างสำหรับ Java (อัปเดตใหม่) ---
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
        paradigms: ["Object-Oriented", "Imperative", "Functional", "Procedural"], // <-- เพิ่มข้อมูล paradigms
    },
    // ... (คุณจะต้องอัปเดตข้อมูลของภาษาอื่นๆ ใน languageMap ให้มีฟิลด์ paradigms และ realWorldExamples เก็บข้อความโดยตรง) ...
    c: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🗣️ comp.lang.c (Usenet)", "📚 Stack Overflow C tag", "🏛️ The C Standard Committee"],
        organization: "ISO/IEC JTC1/SC22/WG14",
        worksExamples: ["💻 ระบบปฏิบัติการ (Linux Kernel, Windows Kernel)", "🔌 Embedded Systems", "🗄️ Database Systems (PostgreSQL, SQLite)", "🎮 Gaming Engines (Unreal Engine)"],
        realWorldExamples: ["💻 ระบบปฏิบัติการ", "🔌 ระบบสมองกลฝังตัว", "🗄️ ระบบฐานข้อมูล", "🎮 การพัฒนาเกม"],
        founded: "1972",
        paradigms: ["Procedural", "Imperative"],
    },
    cpp: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📚 cppreference.com", "💬 C++ Slack", "👥 comunitiez/cpp Reddit r/cpp", "🏛️ ISO C++ Standards Committee"],
        organization: "ISO/IEC JTC1/SC22/WG21",
        worksExamples: ["💻 ระบบปฏิบัติการ (Windows, macOS)", "🌐 Web Browsers (Chrome, Firefox)", "🎮 Gaming Engines (Unreal Engine, Unity)", "🎨 Adobe Creative Suite"],
        realWorldExamples: ["💻 ระบบปฏิบัติการ", "🖥️ แอปพลิเคชันเดสก์ท็อป", "🎮 การพัฒนาเกม", "🎨 กราฟิก/มัลติมีเดีย"],
        founded: "1979",
        paradigms: ["Object-Oriented", "Imperative", "Procedural", "Functional"],
    },
    csharp: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🏛️.NET Foundation", "📚 Stack Overflow C# tag", "💬 Reddit r/csharp"],
        organization: "Microsoft",
        worksExamples: ["🎮 เกม (Unity Engine)", "🖥️ แอปพลิเคชันเดสก์ท็อป (Microsoft Office)", "🌐 เว็บแอป (ASP.NET Core)", "☁️ ระบบคลาวด์ (Azure)"],
        realWorldExamples: ["🎮 การพัฒนาเกม", "🖥️ แอปพลิเคชันเดสก์ท็อป", "⚙️ Web Backend (ส่วนหลังเว็บ)", "☁️ Cloud Computing"],
        founded: "2000",
        paradigms: ["Object-Oriented", "Imperative", "Functional", "Procedural"],
    },
    javascript: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🌐 ECMA International", "📚 MDN Web Docs", "💬 Stack Overflow JavaScript tag", "👥 Frontend/Backend Communities"],
        organization: "ECMA International",
        worksExamples: ["🌐 เว็บแอป (Facebook, Netflix - frontend)", "📱 Mobile Apps (React Native)", "🖥️ Desktop Apps (Electron - VS Code, Slack)", "☁️ Backend (Node.js - PayPal, LinkedIn)"],
        realWorldExamples: ["🌐 Web Frontend (ส่วนหน้าเว็บ)", "⚙️ Web Backend (ส่วนหลังเว็บ)", "📱 การพัฒนาแอปมือถือ", "🖥️ แอปพลิเคชันเดสก์ท็อป"],
        founded: "December 4, 1995",
        paradigms: ["Imperative", "Functional", "Object-Oriented", "Event-Driven"],
    },
    go: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🤝 Go Community", "💬 Gophers Slack", "📝 Go Forum", "👥 comunitiez/golang Reddit r/golang"],
        organization: "Google",
        worksExamples: ["☁️ ระบบคลาวด์ (Docker, Kubernetes)", "📡 Network Services (Uber, Twitch)", "🛠️ CLI Tools", "🌐 Web Servers"],
        realWorldExamples: ["☁️ Cloud Computing", "📡 บริการเครือข่าย", "⚙️ Web Backend (ส่วนหลังเว็บ)", "🛠️ Command Line Tools"],
        founded: "November 10, 2009",
        paradigms: ["Imperative", "Procedural"],
    },
    rust: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🦀 Rust Foundation", "💬 Rust Lang Community Forum", "👥 comunitiez/rust Reddit r/rust"],
        organization: "Rust Foundation (formerly Mozilla)",
        worksExamples: ["💻 ระบบปฏิบัติการ (Redox OS, Fuchsia OS - บางส่วน)", "🕸️ WebAssembly", "🔗 Blockchain (Polkadot, Solana)", "⚡ Performance-critical services (Dropbox, Cloudflare)"],
        realWorldExamples: ["💻 การเขียนโปรแกรมระบบ", "🔗 Blockchain", "⚡ ระบบประสิทธิภาพสูง", "🕸️ WebAssembly"],
        founded: "2010",
        paradigms: ["Imperative", "Functional"],
    },
    typescript: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🤝 TypeScript Community", "📚 DefinitelyTyped", "💬 Reddit r/typescript"],
        organization: "Microsoft",
        worksExamples: ["🌐 เว็บแอปขนาดใหญ่ (Asana, Slack - frontend)", "🏗️ Frontend Frameworks (Angular, NestJS)", "🖥️ Desktop Apps (VS Code)", "☁️ Backend (Node.js projects)"],
        realWorldExamples: ["🌐 Web Frontend (ส่วนหน้าเว็บ)", "⚙️ Web Backend (ส่วนหลังเว็บ)", "🖥️ แอปพลิเคชันเดสก์ท็อป", "☁️ Cloud Computing"],
        founded: "October 1, 2012",
        paradigms: ["Object-Oriented", "Imperative", "Functional"], // Inherits from JS but often used with strong OOP/Functional patterns
    },
    php: {
        country: "แคนาดา (CA)",
        flag: "ca.png",
        community: ["🐘 PHP Foundation", "📚 PHP.net", "💬 Stack Overflow PHP tag", "👥 comunitiez/php Reddit r/php"],
        organization: "The PHP Group (community-driven)",
        worksExamples: ["🌐 เว็บเซิร์ฟเวอร์ (WordPress, Facebook - initial version, Wikipedia)", "📝 CMS (Drupal, Joomla)", "🛒 E-commerce (Magento)"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "🌐 การพัฒนาเว็บไซต์", "🛒 E-commerce"],
        founded: "1994",
        paradigms: ["Imperative", "Object-Oriented", "Procedural", "Functional"],
    },
    ruby: {
        country: "ญี่ปุ่น (JP)",
        flag: "jp.png",
        community: ["💎 Ruby Association", "📚 Ruby-Lang.org", "👥 comunitiez/ruby Reddit r/ruby"],
        organization: "Ruby Association",
        worksExamples: ["🌐 เว็บแอป (Ruby on Rails - Shopify, Airbnb, GitHub)", "⚙️ DevOps Tools (Chef, Puppet)", "📜 Scripting"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "🛠️ DevOps", "📜 Scripting"],
        founded: "December 21, 1995",
        paradigms: ["Object-Oriented", "Imperative", "Functional", "Procedural"],
    },
    swift: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🍎 Swift.org", "💬 Apple Developer Forums", "👥 comunitiez/swift Reddit r/swift"],
        organization: "Apple",
        worksExamples: ["📱 iOS/macOS Apps (ส่วนใหญ่ใน App Store)", "⌚ watchOS", "📺 tvOS Apps"],
        realWorldExamples: ["📱 การพัฒนาแอปมือถือ (iOS)", "🖥️ แอปพลิเคชันเดสก์ท็อป (macOS)", "💻 ระบบปฏิบัติการ"],
        founded: "June 2, 2014",
        paradigms: ["Object-Oriented", "Functional", "Imperative"],
    },
    kotlin: {
        country: "รัสเซีย (RU)",
        flag: "ru.png",
        community: ["🤝 Kotlin Foundation", "💬 Kotlin Slack", "👥 comunitiez/kotlin Reddit r/kotlin"],
        organization: "JetBrains",
        worksExamples: ["📱 Android Apps (Google Maps, Netflix)", "☁️ Backend Services (Spring Boot with Kotlin)", "🌐 Web (Ktor, Vert.x)"],
        realWorldExamples: ["📱 การพัฒนาแอปมือถือ (Android)", "⚙️ Web Backend (ส่วนหลังเว็บ)", "☁️ Cloud Computing"],
        founded: "July 2011",
        paradigms: ["Object-Oriented", "Functional", "Imperative"],
    },
    r: {
        country: "นิวซีแลนด์ (NZ)",
        flag: "nz.png",
        community: ["📊 R Foundation for Statistical Computing", "📚 R-project.org", "👥 comunitiez/rstats Reddit r/rstats"],
        organization: "R Foundation",
        worksExamples: ["📈 สถิติ (สำหรับนักสถิติและนักวิจัย)", "🔬 Data Analysis", "🎨 Data Visualization (ggplot2)", "🧠 Machine Learning"],
        realWorldExamples: ["📊 วิทยาศาสตร์ข้อมูล", "🔬 การวิเคราะห์ข้อมูล", "🎨 การสร้างภาพข้อมูล", "🧠 Machine Learning"],
        founded: "1993",
        paradigms: ["Functional", "Imperative"],
    },
    sql: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🏛️ ISO/IEC JTC 1/SC 32", "🗄️ Database-specific communities (MySQL, PostgreSQL, SQL Server)"],
        organization: "ISO/IEC",
        worksExamples: ["🗄️ ฐานข้อมูลเชิงสัมพันธ์ (Oracle Database, MySQL, PostgreSQL, SQL Server)", "🗄️ จัดการข้อมูล"],
        realWorldExamples: ["🗄️ การจัดการฐานข้อมูล", "📊 การจัดการข้อมูล"],
        founded: "1974",
        paradigms: ["Declarative"], // SQL is primarily declarative
    },
    dart: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🎯 Dart Community", "🦋 Flutter Community", "👥 comunitiez/dartlang Reddit r/dartlang"],
        organization: "Google",
        worksExamples: ["📱 Mobile Apps (Flutter - Google Ads, Alibaba, BMW)", "🌐 Web Apps (Flutter web)", "🖥️ Desktop Apps (Flutter desktop)"],
        realWorldExamples: ["📱 การพัฒนาแอปมือถือ (Cross-platform)", "🌐 Web Frontend (ส่วนหน้าเว็บ)", "🖥️ แอปพลิเคชันเดสก์ท็อป"],
        founded: "October 10, 2011",
        paradigms: ["Object-Oriented", "Imperative", "Functional"],
    },
    scala: {
        country: "สวิตเซอร์แลนด์ (CH)",
        flag: "ch.png",
        community: ["🎓 Scala Center (EPFL)", "💬 Scala Community Forum", "👥 comunitiez/scala Reddit r/scala"],
        organization: "EPFL (École Polytechnique Fédérale de Lausanne)",
        worksExamples: ["📊 Big Data (Apache Spark, Kafka)", "⚡ Reactive Systems (Akka)", "☁️ Backend Services (Twitter, LinkedIn - บางส่วน)"],
        realWorldExamples: ["📊 Big Data", "⚙️ Web Backend (ส่วนหลังเว็บ)", "☁️ Cloud Computing", "⚡ ระบบกระจาย (Distributed Systems)"],
        founded: "2003",
        paradigms: ["Functional", "Object-Oriented"],
    },
    perl: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🐪 Perl Foundation", "📚 Perl Monk", "👥 comunitiez/perl Reddit r/perl"],
        organization: "The Perl Foundation",
        worksExamples: ["📜 สคริปต์ระบบ (System Administration)", "🌐 Web (Mojolicious, Catalyst)", "📄 Text Processing (BioPerl)"],
        realWorldExamples: ["📜 Scripting", "⚙️ Web Backend (ส่วนหลังเว็บ)", "📄 การประมวลผลข้อความ"],
        founded: "December 18, 1987",
        paradigms: ["Imperative", "Procedural", "Object-Oriented", "Functional"],
    },
    objectivec: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📚 CocoaDev", "💬 Stack Overflow Objective-C tag"],
        organization: "Apple",
        worksExamples: ["📱 Legacy iOS/macOS Apps (ก่อน Swift เป็นหลัก)", "🎨 Core Graphics", "🎬 Core Animation"],
        realWorldExamples: ["📱 การพัฒนาแอปมือถือ (iOS เดิม)", "🖥️ แอปพลิเคชันเดสก์ท็อป (macOS เดิม)", "🎨 กราฟิกและมัลติมีเดีย"],
        founded: "1984",
        paradigms: ["Object-Oriented", "Imperative"],
    },
    assembly: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["⚙️ Assembly Language Forums", "🔍 Reverse Engineering Communities"],
        organization: "ไม่มีองค์กรกลาง",
        worksExamples: ["💻 Kernel ของระบบปฏิบัติการ", "🔌 Embedded Systems (ควบคุมฮาร์ดแวร์โดยตรง)", "💽 Drivers บูทโหลดเดอร์", "👾 Malware Development"],
        realWorldExamples: ["💻 การเขียนโปรแกรมระบบ", "🔌 ระบบสมองกลฝังตัว", "🛡️ ความปลอดภัยไซเบอร์ (Malware)"],
        founded: "1940s",
        paradigms: ["Imperative", "Procedural"],
    },
    matlab: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🔢 MathWorks Community", "📚 MATLAB Central", "👥 comunitiez/matlab Reddit r/matlab"],
        organization: "MathWorks",
        worksExamples: ["➕ คณิตศาสตร์", "🔬 วิศวกรรมศาสตร์", "🧪 วิทยาศาสตร์ (Simulink, Signal Processing Toolbox)", "🔬 Simulation ทางวิทยาศาสตร์"],
        realWorldExamples: ["➕ การคำนวณทางคณิตศาสตร์", "🔬 วิทยาศาสตร์และวิศวกรรม", "📊 การวิเคราะห์ข้อมูล"],
        founded: "1984",
        paradigms: ["Imperative", "Procedural", "Functional", "Object-Oriented"], // Can be used in various styles
    },
    cobol: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🖥️ Open Mainframe Project", "💬 COBOL Forum"],
        organization: "Open Mainframe Project (Linux Foundation)",
        worksExamples: ["🏦 ระบบธุรกิจดั้งเดิม (ธนาคาร, ประกันภัย, รัฐบาล) ที่รันบน Mainframe"],
        realWorldExamples: ["🏦 ระบบการเงิน/ธนาคาร", "🛠️ Mainframe Systems"],
        founded: "1959",
        paradigms: ["Imperative", "Procedural"],
    },
    fortran: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["⚛️ Fortran Forum", "👥 comunitiez/fortran Reddit r/fortran"],
        organization: "ISO/IEC JTC1/SC22/WG5",
        worksExamples: ["🔬 การคำนวณทางวิทยาศาสตร์และวิศวกรรม (พยากรณ์อากาศ, ฟิสิกส์อนุภาค, CFD)", "🚀 High-Performance Computing (HPC)"],
        realWorldExamples: ["🔬 การคำนวณทางวิทยาศาสตร์", "🚀 High-Performance Computing (HPC)", "➕ คณิตศาสตร์"],
        founded: "1957",
        paradigms: ["Imperative", "Procedural"],
    },
    lisp: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🧠 Common Lisp Forum", "📚 Lisp Community", "👥 comunitiez/lisp Reddit r/lisp"],
        organization: "Association for Lisp, Common Lisp Standard Committee",
        worksExamples: ["🤖 ปัญญาประดิษฐ์ (ยุคแรก)", "📝 Emacs (แก้ไขข้อความ)", "🔗 Symbol Processing"],
        realWorldExamples: ["🧠 ปัญญาประดิษฐ์ (AI)", "📄 การประมวลผลข้อความ", "📚 การวิจัยทางคอมพิวเตอร์"],
        founded: "1958",
        paradigms: ["Functional", "Imperative"],
    },
    haskell: {
        country: "ออสเตรเลีย (AU)",
        flag: "au.png",
        community: ["λ Haskell.org", "🤝 Haskell Foundation", "👥 comunitiez/haskell Reddit r/haskell"],
        organization: "Haskell.org",
        worksExamples: ["🔬 การวิจัยทางวิทยาการคอมพิวเตอร์", "🔒 ระบบที่ต้องการความถูกต้องสูง (Financial Systems)", "🌐 Web Servers (Yesod, Servant)"],
        realWorldExamples: ["🔬 การวิจัยทางวิทยาการคอมพิวเตอร์", "💰 ระบบการเงิน", "⚙️ Web Backend (ส่วนหลังเว็บ)"],
        founded: "1990",
        paradigms: ["Functional", "Declarative"],
    },
    prolog: {
        country: "ฝรั่งเศส (FR)",
        flag: "fr.png",
        community: ["🧠 Prolog Community", "💬 SWI-Prolog Forum"],
        organization: "ISO/IEC JTC1/SC22/WG17",
        worksExamples: ["🤖 ปัญญาประดิษฐ์ (Expert Systems, Natural Language Processing)", "📚 ระบบฐานความรู้"],
        realWorldExamples: ["🧠 ปัญญาประดิษฐ์ (AI)", "📚 ระบบฐานความรู้"],
        founded: "1972",
        paradigms: ["Logic Programming", "Declarative"],
    },
    lua: {
        country: "บราซิล (BR)",
        flag: "br.png",
        community: ["🌙 Lua.org", "📧 Lua User Mailing List", "👥 comunitiez/lua Reddit r/lua"],
        organization: "Lua.org (PUC-Rio)",
        worksExamples: ["🎮 เกม (Roblox - ใช้ Luau, World of Warcraft Addons, Angry Birds)", "🔌 Embedded Systems", "📜 Scripting (Nginx, Adobe Lightroom)"],
        realWorldExamples: ["🎮 การพัฒนาเกม", "🔌 ระบบสมองกลฝังตัว", "📜 Scripting"],
        founded: "1993",
        paradigms: ["Imperative", "Procedural", "Functional", "Event-Driven"],
    },
    luau: { // Based on Lua
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🧱 Roblox Developer Forum", "💬 Luau Discord"],
        organization: "Roblox Corporation",
        worksExamples: ["🎮 เกมบนแพลตฟอร์ม Roblox (สำหรับการสร้างเกมโดยผู้ใช้)"],
        realWorldExamples: ["🎮 การพัฒนาเกม", "🎓 การศึกษา (เครื่องมือสร้างเกม)"],
        founded: "2020",
        paradigms: ["Imperative", "Procedural", "Functional"],
    },
    elixir: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🧪 Elixir Forum", "💬 Elixir Slack", "👥 comunitiez/elixir Reddit r/elixir"],
        organization: "Elixir-lang.org",
        worksExamples: ["🌐 เว็บแอป (Phoenix Framework - Discord, Pinterest - บางส่วน)", "⚡ ระบบ Concurrent", "⏱️ ระบบ Real-time"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "⚡ ระบบ Concurrent", "🌐 ระบบกระจาย (Distributed Systems)"],
        founded: "2012",
        paradigms: ["Functional", "Declarative"],
    },
    clojure: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🍀 Clojure.org", "💬 Clojureverse", "👥 comunitiez/clojure Reddit r/clojure"],
        organization: "Clojure.org",
        worksExamples: ["🌐 เว็บแอป (Reagent, Om)", "📊 Data Processing (Data Science)", "🧩 Microservices", "💰 Financial Systems"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "📊 Data Processing", "💰 ระบบการเงิน"],
        founded: "2007",
        paradigms: ["Functional", "Imperative"], // Has an imperative host language (Java) but idiomatic Clojure is functional
    },
    ada: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🛡️ Ada-Europe", "🤝 Ada-Core Community"],
        organization: "Ada-Europe, Ada-Core",
        worksExamples: ["🚀 ระบบฝังตัวที่ต้องการความปลอดภัยสูง (การบิน, อวกาศ, การทหาร, รถไฟ)", "⏱️ Real-time Systems"],
        realWorldExamples: ["🔌 ระบบสมองกลฝังตัว", "🚀 ระบบการบินและอวกาศ", "🛡️ ระบบความปลอดภัยสูง"],
        founded: "1980",
        paradigms: ["Imperative", "Object-Oriented", "Procedural"],
    },
    scheme: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📚 Scheme Community", "🌐 Racket-lang.org (Racket based on Scheme)"],
        organization: "Racket Foundation (สำหรับ Racket)",
        worksExamples: ["🎓 การศึกษา (SICP - Structure and Interpretation of Computer Programs)", "🔬 การวิจัย", "📖 Lisp Dialects"],
        realWorldExamples: ["🎓 การศึกษา", "🔬 การวิจัยทางคอมพิวเตอร์", "📚 ภาษาโปรแกรม"],
        founded: "1975",
        paradigms: ["Functional", "Imperative"],
    },
    smalltalk: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🗨️ SmalltalkHub", "🐥 Squeak Community", "🟣 Pharo Community"],
        organization: "Squeak Foundation, Pharo Consortium",
        worksExamples: ["🎓 การศึกษา (OLPC - One Laptop Per Child)", "✨ ระบบที่ปรับแต่งได้สูง", "💻 IDEs (VisualWorks)", "💰 Financial Modeling"],
        realWorldExamples: ["🎓 การศึกษา", "💰 ระบบการเงิน", "🖥️ การพัฒนาระบบ"],
        founded: "1970s",
        paradigms: ["Object-Oriented"],
    },
    julia: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["⚛️ JuliaLang.org", "💬 Julia Discourse", "👥 comunitiez/julia Reddit r/julia"],
        organization: "Julia Computing",
        worksExamples: ["📊 วิทยาศาสตร์ข้อมูล", "🧮 การคำนวณเชิงตัวเลข (Scientific Computing)", "🧠 Machine Learning", "📈 Optimization"],
        realWorldExamples: ["📊 วิทยาศาสตร์ข้อมูล", "🧮 การคำนวณเชิงตัวเลข", "🧠 Machine Learning", "📈 การวิเคราะห์เชิงปริมาณ"],
        founded: "2012",
        paradigms: ["Imperative", "Functional", "Object-Oriented"],
    },
    solidity: {
        country: "เยอรมนี (DE)",
        flag: "de.png",
        community: ["🔗 Ethereum Community", "💬 Solidity Forum", "👥 comunitiez/solidity Reddit r/solidity"],
        organization: "Ethereum Foundation",
        worksExamples: ["✍️ Smart Contracts บน Ethereum Blockchain", "🌐 Decentralized Applications (dApps)"],
        realWorldExamples: ["🔗 Blockchain", "✍️ Smart Contracts", "🌐 Decentralized Applications"],
        founded: "2014",
        paradigms: ["Object-Oriented", "Imperative"],
    },
    bash: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🐧 GNU Project", "💻 Linux/Unix Communities", "📚 Stack Overflow Bash tag"],
        organization: "GNU Project",
        worksExamples: ["📜 สคริปต์เชลล์ (Automation, System Administration)", "⚙️ การจัดการระบบ Unix/Linux", "🚀 DevOps Pipelines"],
        realWorldExamples: ["📜 Scripting", "🛠️ การดูแลระบบ", "🚀 DevOps"],
        founded: "1989",
        paradigms: ["Procedural", "Imperative"],
    },
    powershell: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["💻 PowerShell Community", "🤝 Microsoft Tech Community"],
        organization: "Microsoft",
        worksExamples: ["🖥️ การจัดการระบบ Windows (Server Management, Azure Automation)", "📜 สคริปต์งานอัตโนมัติ"],
        realWorldExamples: ["📜 Scripting", "🛠️ การดูแลระบบ (Windows)", "☁️ Cloud Automation"],
        founded: "2006",
        paradigms: ["Imperative", "Procedural", "Object-Oriented", "Functional"],
    },
    graphql: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🌐 GraphQL.org", "🤝 GraphQL Foundation", "🚀 Apollo GraphQL Community"],
        organization: "Linux Foundation (via GraphQL Foundation)",
        worksExamples: ["⚙️ APIs (Facebook, GitHub, Yelp)", "📦 Data Fetching for Web/Mobile Apps"],
        realWorldExamples: ["⚙️ API Development", "📦 การดึงข้อมูล", "🌐 Web Services"],
        founded: "2012",
        paradigms: ["Declarative"], // GraphQL is a query language, inherently declarative
    },
    plsql: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🗄️ Oracle Community", "📚 Stack Overflow PL/SQL tag"],
        organization: "Oracle",
        worksExamples: ["📊 ฐานข้อมูล Oracle (Stored Procedures, Triggers, Functions)", "🗄️ จัดการข้อมูลใน Oracle DB"],
        realWorldExamples: ["🗄️ การจัดการฐานข้อมูล (Oracle)", "📊 การประมวลผลข้อมูล"],
        founded: "1980s",
        paradigms: ["Procedural", "Imperative", "Declarative"],
    },
    tsql: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🗄️ Microsoft SQL Server Community", "📚 Stack Overflow T-SQL tag"],
        organization: "Microsoft",
        worksExamples: ["📊 ฐานข้อมูล Microsoft SQL Server (Stored Procedures, Triggers)", "🗄️ จัดการข้อมูลใน SQL Server"],
        realWorldExamples: ["🗄️ การจัดการฐานข้อมูล (SQL Server)", "📊 การประมวลผลข้อมูล"],
        founded: "1980s",
        paradigms: ["Procedural", "Imperative", "Declarative"],
    },
    awk: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📄 AWK Community (Unix/Linux)", "📚 GNU Awk User Manual"],
        organization: "Bell Labs (original), GNU Project (gawk)",
        worksExamples: ["📝 การประมวลผลข้อความและข้อมูล (การวิเคราะห์ Log Files, การจัดรูปแบบรายงาน)", "📜 Scripting ใน Unix/Linux"],
        realWorldExamples: ["📄 การประมวลผลข้อความ", "📊 การวิเคราะห์ข้อมูล", "📜 Scripting"],
        founded: "1977",
        paradigms: ["Procedural", "Imperative"],
    },
    pony: {
        country: "สหราชอาณาจักร (GB)",
        flag: "gb.png",
        community: ["🐎 Pony Language Forum", "💬 Pony Lang Slack"],
        organization: "Pony Language Foundation",
        worksExamples: ["⚡ ระบบ Concurrent", "🌐 ระบบกระจาย (Distributed Systems)", "📡 High-Performance Networking"],
        realWorldExamples: ["⚡ ระบบ Concurrent", "🌐 ระบบกระจาย (Distributed Systems)", "📡 เครือข่ายประสิทธิภาพสูง"],
        founded: "2010",
        paradigms: ["Object-Oriented", "Imperative"],
    },
    rescript: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["🔄 ReScript Community Discord", "💬 ReScript Forum"],
        organization: "ReScript Association",
        worksExamples: ["🌐 เว็บแอปพลิเคชัน (Frontend Development)", "🛡️ Type-safe JavaScript applications"],
        realWorldExamples: ["🌐 Web Frontend (ส่วนหน้าเว็บ)", "🛡️ การเขียนโค้ดที่ปลอดภัย (Type-safe)"],
        founded: "2020",
        paradigms: ["Functional"],
    },
    racket: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["📝 Racket Community", "💬 Racket Discourse"],
        organization: "Racket Foundation",
        worksExamples: ["🎓 การศึกษา (สอนหลักการเขียนโปรแกรม)", "🔬 การวิจัยภาษาโปรแกรม", "🛠️ DSLs (Domain-Specific Languages)"],
        realWorldExamples: ["🎓 การศึกษา", "🔬 การวิจัยทางคอมพิวเตอร์", "🛠️ การสร้างภาษาเฉพาะทาง (DSLs)"],
        founded: "1999",
        paradigms: ["Functional", "Imperative"], // Supports multiple paradigms within its framework
    },
    nim: {
        country: "เยอรมนี (DE)",
        flag: "de.png",
        community: ["🐱 Nim Community Forum", "💬 Nim Discord", "👥 comunitiez/nim Reddit r/nim"],
        organization: "Nim Foundation",
        worksExamples: ["🚀 ระบบประสิทธิภาพสูง (Games, Web Servers)", "🔌 Embedded Systems", "📜 Scripting"],
        realWorldExamples: ["🚀 ระบบประสิทธิภาพสูง", "🔌 ระบบสมองกลฝังตัว", "📜 Scripting", "⚙️ Web Backend (ส่วนหลังเว็บ)"],
        founded: "2008",
        paradigms: ["Imperative", "Procedural", "Object-Oriented", "Functional"],
    },
    crystal: {
        country: "อาร์เจนตินา (AR)",
        flag: "ar.png",
        community: ["💎 Crystal Community Forum", "💬 Crystal Lang Discord", "👥 comunitiez/crystal_lang Reddit r/crystal_lang"],
        organization: "Crystal Lang",
        worksExamples: ["🌐 เว็บแอปพลิเคชัน (คล้าย Ruby on Rails แต่ประสิทธิภาพสูงกว่า)", "🛠️ CLI Tools", "⚙️ APIs"],
        realWorldExamples: ["⚙️ Web Backend (ส่วนหลังเว็บ)", "🛠️ Command Line Tools", "🚀 ระบบประสิทธิภาพสูง"],
        founded: "2012",
        paradigms: ["Object-Oriented", "Imperative", "Functional"],
    },
    zig: {
        country: "สหรัฐอเมริกา (US)",
        flag: "us.png",
        community: ["⚡ Zig Community", "💬 Zig Discord", "👥 comunitiez/zig Reddit r/zig"],
        organization: "Zig Software Foundation",
        worksExamples: ["💻 การเขียน System Programming (คล้าย C/C++ แต่ปลอดภัยกว่า)", "🔌 Embedded Systems", "🔄 Cross-compilation"],
        realWorldExamples: ["💻 การเขียนโปรแกรมระบบ", "🔌 ระบบสมองกลฝังตัว", "🔄 Cross-compilation"],
        founded: "2016",
        paradigms: ["Imperative", "Procedural"],
    },
    fsharp: {
        country: "สหราชอาณาจักร (GB)",
        flag: "gb.png",
        community: ["#️⃣ F# Software Foundation", "💬 F# Community Slack", "👥 comunitiez/fsharp Reddit r/fsharp"],
        organization: "F# Software Foundation",
        worksExamples: ["💰 การเงิน (Trading Systems, Risk Analysis)", "📊 Data Science (DataFrame)", "🌐 Web (SAFE Stack)", "☁️ Cloud (Azure Functions)"],
        realWorldExamples: ["💰 ระบบการเงิน", "📊 วิทยาศาสตร์ข้อมูล", "⚙️ Web Backend (ส่วนหลังเว็บ)", "☁️ Cloud Computing"],
        founded: "2002",
        paradigms: ["Functional", "Imperative", "Object-Oriented"],
    },
    ocaml: {
        country: "ฝรั่งเศส (FR)",
        flag: "fr.png",
        community: ["🐪 OCaml Community", "💬 OCaml Discuss Forum"],
        organization: "INRIA (original), OCaml Labs (ปัจจุบัน)",
        worksExamples: ["🎓 การศึกษา", "🔬 การวิจัยภาษาโปรแกรม", "💰 Financial Systems (Jane Street)", "⚙️ Compiler Development (Coq)", "🌐 Web (ReasonML)"],
        realWorldExamples: ["🎓 การศึกษา", "🔬 การวิจัยทางคอมพิวเตอร์", "💰 ระบบการเงิน", "⚙️ การพัฒนา Compiler"],
        founded: "1996",
        paradigms: ["Functional", "Imperative", "Object-Oriented"],
    },
    vala: {
        country: "เยอรมนี (DE)",
        flag: "de.png",
        community: ["⚙️ Vala Community (GNOME)", "💬 Vala Forum"],
        organization: "GNOME Foundation",
        worksExamples: ["🖥️ แอปพลิเคชันเดสก์ท็อปบน Linux (GNOME applications)", "🛠️ System Utilities"],
        realWorldExamples: ["🖥️ แอปพลิเคชันเดสก์ท็อป (Linux)", "🛠️ System Utilities"],
        founded: "2006",
        paradigms: ["Object-Oriented", "Imperative"],
    },
};
export function getCountryflag(slug: string): string {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return "/none";
    const BASE_URL = import.meta.env.BASE_URL;
    return BASE_URL + 'images/flags/' + info.flag;
}

/** คืน community เป็น array ของ strings พร้อม Emoji */
export function getCommunity(slug: string): string[] {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return [];
    return info.community;
}

// ฟังก์ชันสำหรับดึง "รูปแบบการเขียนโปรแกรม" (Paradigms)
export function getParadigms(slug: string): string[] {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return [];
    return info.paradigms;
}

/** คืนองค์กร (organization) */
export function getOrganization(slug: string): string {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return "ไม่ทราบองค์กร";
    return info.organization;
}

// ฟังก์ชันสำหรับดึง "ผลงาน" (worksExamples)
export function getWorksExamples(slug: string): string[] {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return [];
    return info.worksExamples;
}

// ฟังก์ชันสำหรับดึง "การใช้งานหลัก" (realWorldExamples)
export function getRealWorldExamples(slug: string): string[] {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return [];
    return info.realWorldExamples;
}
// ฟังก์ชันสำหรับดึงชื่อประเทศ (ตอนนี้จะรวมตัวย่อแล้ว)
export function getCountryname(slug: string): string {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return "ไม่ทราบชื่อประเทศ";
    return info.country;
}
/** คืนปีที่ก่อตั้ง */
export function getFoundedYear(slug: string): string {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return "ไม่ทราบปี";
    return info.founded;
}

