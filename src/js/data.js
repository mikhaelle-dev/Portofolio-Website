const projData = [
    {
        title: "TaxPoint - AI Tax Solution",
        desc: "Modern interface design for seamless AI tax filing experience.",
        desc_id: "Desain antarmuka modern untuk pengalaman pelaporan pajak berbasis AI yang lancar.",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        category: "Fintech & AI",
        category_id: "Fintech & AI",
        year: "2024",
        tech: ["React", "TensorFlow", "Node.js", "Tailwind CSS"],
        contributions: [
            "Designed the AI-driven tax calculation engine.",
            "Built a secure dashboard for financial data visualization.",
            "Integrated real-time OCR for automatic document processing."
        ],
        contributions_id: [
            "Merancang mesin perhitungan pajak berbasis AI.",
            "Membangun dasbor aman untuk visualisasi data keuangan.",
            "Mengintegrasikan OCR real-time untuk pemrosesan dokumen otomatis."
        ],
        implementation: [
            "Platform: Web Desktop & Mobile",
            "Backend: Python Flask with AI endpoints",
            "Frontend: Next.js with Matcha design system"
        ],
        implementation_id: [
            "Platform: Web Desktop & Mobile",
            "Backend: Python Flask dengan endpoint AI",
            "Frontend: Next.js dengan sistem desain Matcha"
        ]
    },
    {
        title: "Kazoo Kids - Educational App",
        desc: "Interactive educational platform for modern learning.",
        desc_id: "Platform pendidikan interaktif untuk pembelajaran modern.",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        category: "Education & Gaming",
        category_id: "Pendidikan & Game",
        year: "2024",
        tech: ["Unity", "C#", "Firebase", "WebRTC"],
        contributions: [
            "Developed the core gamification logic and reward system.",
            "Implemented secure parent-child communication channels.",
            "Optimized 3D assets for smooth mobile performance."
        ],
        contributions_id: [
            "Mengembangkan logika gamifikasi inti dan sistem hadiah.",
            "Mengimplementasikan saluran komunikasi orang tua-anak yang aman.",
            "Mengoptimalkan aset 3D untuk performa seluler yang lancar."
        ],
        implementation: [
            "Platform: iOS / iPadOS & Web Dashboard",
            "Architecture: Backend API & Dynamic Content Delivery",
            "Monetization: Apple StoreKit & Subscription models"
        ],
        implementation_id: [
            "Platform: iOS / iPadOS & Dasbor Web",
            "Arsitektur: API Backend & Pengiriman Konten Dinamis",
            "Monetisasi: Apple StoreKit & Model Langganan"
        ]
    },
    {
        title: "VotelySign - Blockchain Voting",
        desc: "Secure, transparent e-voting platform with web3.",
        desc_id: "Platform e-voting yang aman dan transparan dengan web3.",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        category: "Web3 & Security",
        category_id: "Web3 & Keamanan",
        year: "2023",
        tech: ["Solidity", "Ether.js", "Vue.js", "IPFS"],
        contributions: [
            "Wrote and audited secure smart contracts for voting.",
            "Implemented decentralised storage for encrypted ballots.",
            "Built a user-friendly wallet integration for voters."
        ],
        contributions_id: [
            "Menulis dan mengaudit smart contract yang aman untuk pemungutan suara.",
            "Mengimplementasikan penyimpanan terdesentralisasi untuk surat suara terenkripsi.",
            "Membangun integrasi dompet (wallet) yang mudah digunakan bagi pemilih."
        ]
    },
    {
        title: "SIKEBAT - Campus System",
        desc: "Lost and found reporting system for academic environments.",
        desc_id: "Sistem pelaporan kehilangan dan temuan barang untuk lingkungan kampus.",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        category: "Internal Tooling",
        category_id: "Alat Internal",
        year: "2023",
        tech: ["PHP", "Laravel", "MySQL", "Bootstrap"]
    },
    {
        title: "Academic Paper Search",
        desc: "Vector Space Model implementation for document retrieval.",
        desc_id: "Implementasi Vector Space Model untuk temu kembali dokumen.",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        category: "Information Retrieval",
        category_id: "Pencarian Informasi",
        year: "2022",
        tech: ["Python", "NLTK", "Scikit-learn", "React"]
    },
    {
        title: "IoT Water Quality Dashboard",
        desc: "Real-time water monitoring system with IoT integration.",
        desc_id: "Sistem pemantauan kualitas air real-time dengan integrasi IoT.",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        category: "IoT & Hardware",
        category_id: "IoT & Perangkat Keras",
        year: "2022",
        tech: ["Arduino", "ESP32", "MQTT", "Grafana"]
    },
    {
        title: "HealthSync - Telemedicine App",
        desc: "Virtual consultation and patient management platform.",
        desc_id: "Platform konsultasi virtual dan manajemen pasien.",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        category: "Healthcare",
        category_id: "Kesehatan",
        year: "2023",
        tech: ["React Native", "Node.js", "WebRTC", "PostgreSQL"],
        contributions: [
            "Built secure video consultation pipelines.",
            "Integrated seamless payment gateways.",
            "Designed accessible UI for elderly patients."
        ],
        contributions_id: [
            "Membangun jalur konsultasi video yang aman.",
            "Mengintegrasikan gerbang pembayaran yang mulus.",
            "Merancang UI yang dapat diakses untuk pasien lansia."
        ]
    },
    {
        title: "EcoTrack - Carbon Footprint",
        desc: "Personal and enterprise carbon emission tracking tool.",
        desc_id: "Alat pelacakan emisi karbon untuk pribadi dan perusahaan.",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        category: "Sustainability",
        category_id: "Keberlanjutan",
        year: "2024",
        tech: ["Vue.js", "Python", "Data Studio", "Tailwind CSS"],
        contributions: [
            "Developed the emission calculation algorithms.",
            "Created beautiful data visualization dashboards.",
            "Implemented exportable automated reports."
        ],
        contributions_id: [
            "Mengembangkan algoritma perhitungan emisi.",
            "Membuat dasbor visualisasi data yang indah.",
            "Mengimplementasikan laporan otomatis yang dapat diekspor."
        ]
    },
    {
        title: "Nexus VR - Virtual Workspace",
        desc: "Immersive VR collaboration environment for remote teams.",
        desc_id: "Lingkungan kolaborasi VR imersif untuk tim jarak jauh.",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        category: "Virtual Reality",
        category_id: "Realitas Virtual",
        year: "2025",
        tech: ["Three.js", "WebGL", "Socket.io", "React"],
        contributions: [
            "Architected real-time multi-user synchronization.",
            "Optimized 3D rendering for web browsers.",
            "Designed spatial audio integration."
        ],
        contributions_id: [
            "Merancang sinkronisasi multi-pengguna real-time.",
            "Mengoptimalkan rendering 3D untuk browser web.",
            "Merancang integrasi audio spasial."
        ]
    }
];

const certData = [
    {
        title: "CCNA SRWE",
        desc: "Cisco Certified Network Associate - Switching, Routing, and Wireless Essentials.",
        full_desc: "This certificate was awarded after passing the competency assessment and being officially declared Competent by BNSP (Badan Nasional Sertifikasi Profesi) for the Junior Web Programmer scheme.",
        credential_id: "-",
        provider: "Cisco",
        date: "2025",
        img: "/src/assets/cert_thumbnail.png",
        links: { demo: "/src/docs/CCNASRWEUpdate20260515-32-vbdfrd.pdf" },
        type: "certification"
    },
    {
        title: "Networking Basics",
        desc: "Fundamental networking concepts and protocols.",
        full_desc: "A Cisco certification validating core networking fundamentals including IP addressing, LAN switching, and network troubleshooting.",
        credential_id: "-",
        provider: "Cisco",
        date: "2026",
        img: "/src/assets/cert2_thumbnail.png",
        links: { demo: "/src/docs/NetworkingBasicsUpdate20260518-31-jlp2pd.pdf" },
        type: "certification"
    },
    {
        title: "Introduction to Cybersecurity",
        desc: "Foundational knowledge of cybersecurity principles and concepts.",
        full_desc: "A certificate demonstrating mastery of basic cyber defense concepts, threat awareness, and secure online practices.",
        credential_id: "-",
        provider: "Cisco",
        date: "2025",
        img: "/src/assets/cert3_thumbnail.png",
        links: { demo: "/src/docs/I2CSUpdate20260518-31-n803g9.pdf" },
        type: "certification"
    },
    {
        title: "Fullstack MEVN",
        desc: "Fullstack MEVN Stack development mastery.",
        full_desc: "A professional certificate for end-to-end MEVN stack development, including MongoDB, Express, Vue, and Node.js.",
        credential_id: "MEVN-2024-0018",
        provider: "Codepolitan",
        date: "2024",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        type: "certification"
    },
    {
        title: "Redhat Academy",
        desc: "System administration and open-source mastery.",
        full_desc: "A certificate recognizing practical skills in Linux system administration and open-source tooling.",
        credential_id: "RHA-2024-0097",
        provider: "Red Hat Academy",
        date: "2024",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        type: "certification"
    },
    {
        title: "AWS Cloud Foundations",
        desc: "Cloud computing and architecture fundamentals.",
        full_desc: "A foundation-level cloud certification covering core AWS services and architecture best practices.",
        credential_id: "AWS-2023-0142",
        provider: "Dicoding",
        date: "2023",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        type: "certification"
    },
    {
        title: "Google UX Design",
        desc: "Foundations of UX design and user research.",
        full_desc: "A certificate validating skills in user research, prototyping, and accessible UX design practices.",
        credential_id: "UXD-2023-0075",
        provider: "Google Coursera",
        date: "2023",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        type: "certification"
    },
    {
        title: "React Native Specialist",
        desc: "Advanced cross-platform mobile development.",
        full_desc: "A certification focused on building performant mobile apps using React Native and modern design patterns.",
        credential_id: "RN-2024-0026",
        provider: "Udacity",
        date: "2024",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        type: "certification"
    },
    {
        title: "Certified Kubernetes Admin",
        desc: "Container orchestration and cluster management.",
        full_desc: "A certificate confirming skills in Kubernetes administration, cluster operations, and container orchestration best practices.",
        credential_id: "CKA-2025-0081",
        provider: "Linux Foundation",
        date: "2025",
        img: "/src/assets/Screenshot 2026-05-26 145350.png",
        type: "certification"
    }
];
