

const projData = [
    {
        title: "Implementasi Jaringan Kantor",
        desc: "Comprehensive enterprise office network topology implementation with 13 VLANs, OSPF routing, VoIP, security ACLs, and dedicated servers.",
        desc_id: "Implementasi topologi jaringan kantor enterprise komprehensif dengan 13 VLAN, routing OSPF, VoIP, keamanan ACL, dan server khusus.",
        full_desc: "Full enterprise network implementation built in Cisco Packet Tracer. Features end-to-end network routing, voice services, security controls, and dual-stack IPv6 connectivity across all departmental VLANs.",
        full_desc_id: "Implementasi jaringan kantor enterprise penuh pada Cisco Packet Tracer. Menyediakan routing jaringan end-to-end, layanan suara VoIP, kontrol keamanan ACL, dan konektivitas Dual-Stack IPv6 di seluruh VLAN departemen.",
        category: "Network Engineering",
        category_id: "Rekayasa Jaringan",
        year: "2026",
        img: "/src/assets/project/implementasi_jaringan_kantor.webp",
        thumb: "/src/assets/project/implementasi_jaringan_kantor.webp",
        imgHighRes: "/src/assets/project/implementasi_jaringan_kantor.webp",
        tech: ["Cisco Packet Tracer", "L3 Switch (SVI)", "OSPF", "CallManager Express (VoIP)", "NAT/PAT", "ACL", "IPv6 Dual-Stack", "STP", "DHCP Snooping"],
        contributions: [
            "VLAN & Trunking: 13 VLAN configured across switches with 802.1Q trunking.",
            "Inter-VLAN Routing: Switch Virtual Interfaces (SVI) on Layer 3 Switch.",
            "DHCP Services: 12 dedicated DHCP pools configured for automated IP assignment.",
            "Dynamic Routing: OSPF protocol running between Edge Router ↔ L3 Switch ↔ CME Router.",
            "NAT/PAT Translation: Port Address Translation configured for internal to public internet traffic.",
            "Access Control Lists: Fully tested security ACLs restricting unauthorized inter-VLAN access.",
            "VoIP Telephony: Cisco CallManager Express (CME) powering IP Phone voice communication.",
            "Wireless Security: Dedicated isolated Guest Wireless network.",
            "Port Security & DHCP Snooping: Hardened switch access ports against unauthorized devices.",
            "IPv6 Dual-Stack: Concurrent IPv4 and IPv6 addressing enabled across devices.",
            "Device Management: Encrypted SSH access and strong password policies on all network hardware.",
            "Spanning Tree Protocol: Verified STP topology to prevent switching loops.",
            "Internal Servers: 3 dedicated servers (FTP Server, Internal DNS, and Web Server)."
        ],
        contributions_id: [
            "VLAN & Trunking: 13 VLAN dikonfigurasi pada switch dengan trunking 802.1Q.",
            "Inter-VLAN Routing: Switch Virtual Interfaces (SVI) pada Layer 3 Switch.",
            "Layanan DHCP: 12 pool DHCP khusus untuk pengalokasian IP otomatis.",
            "Routing Dinamis: Protokol OSPF berjalan antara Edge Router ↔ L3 Switch ↔ CME Router.",
            "Translasi NAT/PAT: Port Address Translation untuk lalu lintas internet publik.",
            "Access Control List: ACL keamanan teruji membatasi akses antar-VLAN.",
            "Telefoni VoIP: Cisco CallManager Express (CME) melayani komunikasi suara IP Phone.",
            "Wireless Security: Jaringan Wi-Fi Tamu khusus terisolasi.",
            "Port Security & DHCP Snooping: Proteksi port switch dari perangkat tidak dikenal.",
            "IPv6 Dual-Stack: Pengalamatan IPv4 dan IPv6 bersamaan di seluruh perangkat.",
            "Manajemen Perangkat: Akses SSH terenkripsi dan sandi kuat pada seluruh perangkat jaringan.",
            "Spanning Tree Protocol: Verifikasi topologi STP untuk mencegah looping switch.",
            "Server Internal: 3 server dengan peran jelas (FTP, DNS Internal, Web Server)."
        ],
        implementation: [
            "Network Simulator: Cisco Packet Tracer v8.x",
            "Core Hardware: Cisco 3560 L3 Switch, 2960 L2 Switches, 2911 Routers",
            "Voice Engine: Cisco CME IP Telephony",
            "Topology File: implementasi jaringan kantor.pkt"
        ],
        implementation_id: [
            "Simulator Jaringan: Cisco Packet Tracer v8.x",
            "Perangkat Keras Inti: Cisco 3560 L3 Switch, 2960 L2 Switches, 2911 Routers",
            "Engine Suara: Telefoni IP Cisco CME",
            "File Topologi: implementasi jaringan kantor.pkt"
        ],
        links: {
            pkt: "/src/assets/project/implementasi jaringan kantor.pkt",
            demo: "/src/assets/project/implementasi_jaringan_kantor.webp"
        },
        type: "project"
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
        img: "/src/assets/certs/CCNASRWEUpdate20260515-32-vbdfrd.webp",
        thumb: "/src/assets/certs/CCNASRWEUpdate20260515-32-vbdfrd.webp",
        imgHighRes: "/src/assets/certs/CCNASRWEUpdate20260515-32-vbdfrd.webp",
        links: { demo: "/src/docs/CCNASRWEUpdate20260515-32-vbdfrd.pdf" },
        type: "certification"
    },
    {
        title: "Network Addressing & Troubleshooting",
        desc: "Network addressing fundamentals, IPv4/IPv6 subnetting, and basic troubleshooting.",
        desc_id: "Konsep dasar pengalamatan jaringan, IPv4/IPv6, serta pemecahan masalah (troubleshooting) jaringan.",
        full_desc: "A Cisco Networking Academy course certificate validating proficiency in IP addressing schemes, subnetting, IPv4 & IPv6 configuration, and network connectivity troubleshooting.",
        full_desc_id: "Sertifikat kursus Cisco Networking Academy yang memvalidasi kemahiran dalam pengalamatan IP, subnetting, konfigurasi IPv4 & IPv6, serta pemecahan masalah jaringan.",
        credential_id: "-",
        provider: "Cisco",
        date: "2026",
        img: "/src/assets/certs/NetworkAddressingandBasicTroubleshootingUpdate20260808-21-8gyt9p.webp",
        thumb: "/src/assets/certs/NetworkAddressingandBasicTroubleshootingUpdate20260808-21-8gyt9p.webp",
        imgHighRes: "/src/assets/certs/NetworkAddressingandBasicTroubleshootingUpdate20260808-21-8gyt9p.webp",
        links: { demo: "/src/docs/NetworkAddressingandBasicTroubleshootingUpdate20260808-21-8gyt9p.pdf" },
        type: "certification"
    },
    {
        title: "Network Defense",
        desc: "Network defense principles, threat management, access control, and security monitoring.",
        desc_id: "Prinsip pertahanan jaringan, manajemen ancaman, kontrol akses, dan pemantauan keamanan jaringan.",
        full_desc: "A Cisco Networking Academy course certificate validating knowledge in securing network perimeters, analyzing vulnerabilities, implementing defense mechanisms, and operational network security.",
        full_desc_id: "Sertifikat kursus Cisco Networking Academy yang memvalidasi pengetahuan dalam mengamankan perimeter jaringan, menganalisis kerentanan, menerapkan mekanisme pertahanan, dan keamanan operasi jaringan.",
        credential_id: "-",
        provider: "Cisco",
        date: "2026",
        img: "/src/assets/certs/NetworkDefenseUpdate20260822-8-i9wxx7.webp",
        thumb: "/src/assets/certs/NetworkDefenseUpdate20260822-8-i9wxx7.webp",
        imgHighRes: "/src/assets/certs/NetworkDefenseUpdate20260822-8-i9wxx7.webp",
        links: { demo: "/src/docs/NetworkDefenseUpdate20260822-8-i9wxx7.pdf" },
        type: "certification"
    },
    {
        title: "Networking Basics",
        desc: "Fundamental networking concepts and protocols.",
        full_desc: "A Cisco certification validating core networking fundamentals including IP addressing, LAN switching, and network troubleshooting.",
        credential_id: "-",
        provider: "Cisco",
        date: "2026",
        img: "/src/assets/certs/NetworkingBasicsUpdate20260518-31-jlp2pd.webp",
        thumb: "/src/assets/certs/NetworkingBasicsUpdate20260518-31-jlp2pd.webp",
        imgHighRes: "/src/assets/certs/NetworkingBasicsUpdate20260518-31-jlp2pd.webp",
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
        img: "/src/assets/certs/I2CSUpdate20260518-31-n803g9.webp",
        thumb: "/src/assets/certs/I2CSUpdate20260518-31-n803g9.webp",
        imgHighRes: "/src/assets/certs/I2CSUpdate20260518-31-n803g9.webp",
        links: { demo: "/src/docs/I2CSUpdate20260518-31-n803g9.pdf" },
        type: "certification"
    }
];
