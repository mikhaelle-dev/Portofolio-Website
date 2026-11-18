/* Portfolio content and local asset paths. Text can be provided in Indonesian and English. */
window.SITE = {
  defaultLang: "id",

  name: "Mikhael Rakarenzo Mahendra",
  heroName: "Mikhael Rakarenzo",
  roles: ["Network Administration", "Network Security", "Network Design"],
  tagline: {
    en: "Exploring network administration, security, and practical network design.",
    id: "Mendalami administrasi jaringan, keamanan, dan perancangan jaringan."
  },
  location: "",

  photo: "assets/images/hero/hero-avatar-cutout.png",
  aboutImage: "assets/images/about.jpg",

  email: "mikhaelrakarenzo@gmail.com",
  socials: [
    { label: "GitHub", image: "assets/images/social/github.svg", url: "https://github.com/mikhaelle-dev" },
    { label: "Instagram", image: "assets/images/social/instagram.svg", url: "https://www.instagram.com/mikhaelle._?igsh=MW5vOGl2MDZwcHRhcQ==" },
    { label: "LinkedIn", image: "assets/images/social/linkedin.svg", url: "https://www.linkedin.com/in/mikhael-rakarenzo-mahendra-a699632b9" },
    { label: "Gmail", image: "assets/images/social/gmail.svg", url: "https://mail.google.com/mail/u/0/?fs=1&to=mikhaelrakarenzo@gmail.com&tf=cm" }
  ],

  skills: [
    { name: "Cisco Packet Tracer", image: "assets/images/badges/packet-tracer.png" },
    { name: "GNS3", image: "assets/images/badges/gns3.png" },
    { name: "Wireshark", image: "assets/images/badges/wireshark.svg" },
    { name: "Python", image: "assets/images/badges/python.svg" },
    { name: "Cisco", image: "assets/images/badges/cisco.svg" },
    { name: "Fortinet", image: "assets/images/badges/fortinet.svg" },
    { name: "HTML5", image: "assets/images/badges/html5.svg" },
    { name: "CSS", image: "assets/images/badges/css.svg" },
    { name: "JavaScript", image: "assets/images/badges/javascript.svg" }
  ],

  projects: [
    {
      name: "Topologi Jaringan Kantor",
      description: {
        en: "An enterprise office LAN plan with 12 VLANs, five access switches, and segmented departments.",
        id: "Rancangan LAN kantor dengan 12 VLAN, lima switch akses, dan segmentasi antar departemen."
      },
      role: { en: "Network design and simulation", id: "Perancangan dan simulasi jaringan" },
      source: { en: "Project files", id: "Berkas proyek" },
      image: "assets/images/projects/office-network.webp",
      imageLight: "assets/images/projects/office-network-light.webp",
      images: ["assets/images/projects/office-network.webp"],
      imagesLight: ["assets/images/projects/office-network-light.webp"],
      content: {
        en: "## Overview\nA multi-department office LAN topology with dedicated network segments.\n\n- 12 VLANs across five access switches\n- Separate office, voice, CCTV, and guest Wi-Fi segments\n- Topology diagram and Cisco Packet Tracer project file",
        id: "## Ringkasan\nTopologi LAN kantor multi-departemen dengan segmentasi jaringan.\n\n- 12 VLAN pada lima switch akses\n- Segmentasi untuk kantor, voice, CCTV, dan Wi-Fi tamu\n- Diagram topologi dan berkas proyek Cisco Packet Tracer"
      },
      tech: ["Cisco Packet Tracer", "VLAN", "Routing & Switching", "LAN"],
      buttons: [
        { label: { en: "Open topology", id: "Buka topologi" }, url: "assets/projects/office-network-topology.html" },
        { label: { en: "Packet Tracer file", id: "Berkas Packet Tracer" }, url: "assets/projects/office-network.pkt" }
      ]
    }
  ],

  certificates: [
    {
      name: "Intermediate Associate Network Administrator",
      issuer: "Komdigi",
      date: "02/11/2026",
      image: "assets/images/certificates/komdigi-intermediate.webp",
      images: ["assets/images/certificates/komdigi-intermediate.webp", "assets/images/certificates/komdigi-intermediate-transcript.webp"],
      description: {
        en: "National-level intermediate network administrator training certificate.",
        id: "Sertifikat pelatihan intermediate administrator jaringan tingkat nasional."
      },
      content: {
        en: "## Training\nThe certificate includes a 12-hour training transcript.",
        id: "## Pelatihan\nSertifikat ini dilengkapi transkrip pelatihan selama 12 jam."
      },
      skills: ["Network Administration", "Networking"],
      buttons: [{ label: { en: "View certificate PDF", id: "Lihat PDF sertifikat" }, url: "assets/docs/intermediate-network-administrator.pdf" }]
    },
    {
      name: "Fundamental of Associate Network Administrator",
      issuer: "Komdigi",
      date: "28/08/2026",
      image: "assets/images/certificates/komdigi-fundamental.webp",
      images: ["assets/images/certificates/komdigi-fundamental.webp", "assets/images/certificates/komdigi-fundamental-transcript.webp"],
      description: {
        en: "National-level fundamental network administrator training certificate.",
        id: "Sertifikat pelatihan fundamental administrator jaringan tingkat nasional."
      },
      content: {
        en: "## Training\nThe certificate includes a 12-hour training transcript.",
        id: "## Pelatihan\nSertifikat ini dilengkapi transkrip pelatihan selama 12 jam."
      },
      skills: ["Network Administration", "Networking"],
      buttons: [{ label: { en: "View certificate PDF", id: "Lihat PDF sertifikat" }, url: "assets/docs/fundamental-network-administrator.pdf" }]
    },
    {
      name: "Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "28/04/2025",
      image: "assets/images/certificates/switching-routing-wireless.webp",
      images: ["assets/images/certificates/switching-routing-wireless.webp"],
      description: {
        en: "Cisco Networking Academy course covering switching, routing, and wireless essentials.",
        id: "Kursus Cisco Networking Academy tentang dasar switching, routing, dan jaringan nirkabel."
      },
      content: {
        en: "## Course focus\nSwitching, routing, and wireless networking fundamentals.",
        id: "## Fokus kursus\nDasar switching, routing, dan jaringan nirkabel."
      },
      skills: ["Switching", "Routing", "Wireless Networking"],
      buttons: [{ label: { en: "View certificate PDF", id: "Lihat PDF sertifikat" }, url: "assets/docs/switching-routing-wireless-essentials.pdf" }]
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "07/01/2025",
      image: "assets/images/certificates/introduction-cybersecurity.webp",
      images: ["assets/images/certificates/introduction-cybersecurity.webp"],
      description: {
        en: "Cisco Networking Academy introductory cybersecurity course.",
        id: "Kursus pengantar keamanan siber dari Cisco Networking Academy."
      },
      content: {
        en: "## Course focus\nAn introduction to cybersecurity concepts and online threats.",
        id: "## Fokus kursus\nPengenalan konsep keamanan siber dan ancaman daring."
      },
      skills: ["Cybersecurity", "Security Awareness"],
      buttons: [{ label: { en: "View certificate PDF", id: "Lihat PDF sertifikat" }, url: "assets/docs/introduction-to-cybersecurity.pdf" }]
    },
    {
      name: "Network Addressing and Basic Troubleshooting",
      issuer: "Cisco Networking Academy",
      date: "13/01/2026",
      image: "assets/images/certificates/network-addressing-troubleshooting.webp",
      images: ["assets/images/certificates/network-addressing-troubleshooting.webp"],
      description: {
        en: "Cisco Networking Academy course on network addressing and basic troubleshooting.",
        id: "Kursus Cisco Networking Academy tentang pengalamatan jaringan dan troubleshooting dasar."
      },
      content: {
        en: "## Course focus\nNetwork addressing and basic troubleshooting.",
        id: "## Fokus kursus\nPengalamatan jaringan dan troubleshooting dasar."
      },
      skills: ["Network Addressing", "Troubleshooting"],
      buttons: [{ label: { en: "View certificate PDF", id: "Lihat PDF sertifikat" }, url: "assets/docs/network-addressing-troubleshooting.pdf" }]
    },
    {
      name: "Network Defense",
      issuer: "Cisco Networking Academy",
      date: "13/08/2026",
      image: "assets/images/certificates/network-defense.webp",
      images: ["assets/images/certificates/network-defense.webp"],
      description: {
        en: "Cisco Networking Academy course focused on network defense.",
        id: "Kursus Cisco Networking Academy yang berfokus pada pertahanan jaringan."
      },
      content: {
        en: "## Course focus\nNetwork defense fundamentals.",
        id: "## Fokus kursus\nDasar pertahanan jaringan."
      },
      skills: ["Network Security", "Network Defense"],
      buttons: [{ label: { en: "View certificate PDF", id: "Lihat PDF sertifikat" }, url: "assets/docs/network-defense.pdf" }]
    },
    {
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "04/05/2026",
      image: "assets/images/certificates/networking-basics.webp",
      images: ["assets/images/certificates/networking-basics.webp"],
      description: {
        en: "Cisco Networking Academy course covering networking fundamentals.",
        id: "Kursus Cisco Networking Academy tentang dasar-dasar jaringan."
      },
      content: {
        en: "## Course focus\nFoundational networking concepts.",
        id: "## Fokus kursus\nKonsep dasar jaringan komputer."
      },
      skills: ["Networking", "Network Fundamentals"],
      buttons: [{ label: { en: "View certificate PDF", id: "Lihat PDF sertifikat" }, url: "assets/docs/networking-basics.pdf" }]
    }
  ],

  about: {
    heading: { en: "About me", id: "Tentang saya" },
    paragraphs: [
      {
        en: "Hello 👋! My name is Mikhael Rakarenzo Mahendra, usually called Mikhael. I’m an Informatics student from Indonesia, aiming to become a Network Engineer. I have a high interest in the world of networking, and I really like exploring how networks and cloud infrastructure work.",
        id: "Halo 👋! Nama saya Mikhael Rakarenzo Mahendra, biasa dipanggil Mikhael. Saya mahasiswa Informatika dari Indonesia yang bercita-cita menjadi Network Engineer. Saya sangat tertarik dengan dunia jaringan dan suka mengeksplorasi cara kerja jaringan serta infrastruktur cloud."
      }
    ],
    cv: {
      en: "assets/docs/CV_Mikhael_Rakarenzo_Mahendra_EN.pdf",
      id: "assets/docs/CV_Mikhael_Rakarenzo_Mahendra_ID.pdf"
    },
    shortBio: {
      heading: { en: "Short Bio", id: "Bio Singkat" },
      text: {
        en: "Aspiring network engineer 🌐 with a strong focus on routing, switching, and network infrastructure. I enjoy designing and troubleshooting networks, from VLAN, OSPF, and BGP labs in Cisco Packet Tracer to migrating 12 Indomaret sites to SD-WAN with Fortinet in the field. I learn best by hands-on practice and prefer working in the CLI. Currently exploring cloud networking and network security (CCNA path, AWS Cloud Essentials) as my next area of growth, with a long-term goal of working in data center infrastructure.",
        id: "Calon network engineer 🌐 dengan fokus kuat pada routing, switching, dan infrastruktur jaringan. Saya senang merancang dan memecahkan masalah jaringan, mulai dari lab VLAN, OSPF, dan BGP di Cisco Packet Tracer hingga migrasi 12 lokasi Indomaret ke SD-WAN dengan Fortinet di lapangan. Saya belajar paling baik melalui praktik langsung dan lebih nyaman bekerja melalui CLI. Saat ini saya mendalami cloud networking dan network security (jalur CCNA, AWS Cloud Essentials) sebagai bidang pengembangan berikutnya, dengan tujuan jangka panjang bekerja di infrastruktur data center."
      }
    }
  },

  education: [
    {
      date: { en: "2025 - PRESENT", id: "2025 - SEKARANG" },
      title: { en: "Informatics", id: "Informatika" },
      org: "Universitas Kristen Satya Wacana",
      desc: {
        en: "Pursuing a Bachelor's degree in Informatics, building a path toward network engineering and cloud infrastructure. GPA 4.00.",
        id: "Sedang menempuh pendidikan S1 Informatika, membangun jalur karier di bidang rekayasa jaringan dan infrastruktur cloud. IPK 4,00."
      },
      logo: "assets/images/logos/uksw.png",
      initials: "UKSW"
    },
    {
      date: "2022 - 2025",
      title: { en: "Computer and Network Engineering", id: "Teknik Komputer dan Jaringan" },
      org: "SMK Telekomunikasi Tunas Harapan",
      desc: {
        en: "Completed a 3-year vocational program in computer and network engineering. Ranked 5th and named Best Graduate of the class of 2025.",
        id: "Menyelesaikan pendidikan vokasi 3 tahun di bidang Teknik Komputer dan Jaringan. Meraih peringkat ke-5 dan dinobatkan sebagai lulusan terbaik angkatan 2025."
      },
      logo: "assets/images/logos/smk tth.png",
      initials: "TTH"
    }
  ],
  experience: [
    {
      date: { en: "SEP 2026 - NOV 2026 · 3 MONTHS", id: "SEP 2026 - NOV 2026 · 3 BULAN" },
      title: { en: "IT Field Engineer", id: "Teknisi Lapangan TI" },
      org: { en: "PT HGT Services Indonesia · Freelance", id: "PT HGT Services Indonesia · Pekerja Lepas" },
      desc: {
        en: "Installed routers and modems and activated SD-WAN for Indomaret sites, migrating 12 sites in the Salatiga area from MikroTik to Fortinet 40F, with SOP-based documentation before and after each migration.",
        id: "Memasang router dan modem serta mengaktifkan SD-WAN di gerai Indomaret, memigrasikan 12 lokasi di area Salatiga dari MikroTik ke Fortinet 40F, dengan dokumentasi sesuai SOP sebelum dan sesudah setiap migrasi."
      },
      logo: "assets/images/logos/hgt-service.png",
      initials: "HGT"
    },
    {
      date: { en: "AUG 2024 - DEC 2024 · 4 MONTHS", id: "AGU 2024 - DES 2024 · 4 BULAN" },
      title: { en: "IT Support", id: "Staf Dukungan TI" },
      org: { en: "Polres Salatiga · Internship", id: "Polres Salatiga · Magang" },
      desc: {
        en: "Troubleshot computers and network devices, handled IT and connectivity issues, and provided technical support to users for daily operations.",
        id: "Melakukan troubleshooting komputer dan perangkat jaringan, menangani masalah TI dan konektivitas, serta memberikan dukungan teknis kepada pengguna dalam operasional sehari-hari."
      },
      logo: "assets/images/logos/polres.png",
      initials: "PS"
    }
  ],
  connect: {
    linkLabel: "Instagram",
    linkUrl: "https://www.instagram.com/mikhaelle._?igsh=MW5vOGl2MDZwcHRhcQ==",
    before: {
      en: "If you'd like to connect or get to know me better, feel free to reach out on",
      id: "Jika ingin terhubung atau mengenal saya lebih dekat, silakan hubungi saya melalui"
    },
    middle: {
      en: ", or send me an",
      id: ", atau kirim"
    },
    after: {
      en: "and I'll be sure to get back to you.",
      id: "dan saya akan membalasnya."
    }
  }
};
