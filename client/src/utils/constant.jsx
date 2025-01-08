import { NotepadTextDashed, SquareUserIcon, SquarePlus } from "lucide-react";

export const sidebarLinks = [
    {
        icon: <NotepadTextDashed  className='w-5 h-5 stroke-slate-700 group-hover:stroke-slate-900' />,
        name: 'Informasi',
        path: '/user'
    },
    {
        icon: <SquarePlus  className='w-5 h-5 stroke-slate-700 group-hover:stroke-slate-900' />,
        name: 'Pengajuan',
        path: 'pengajuan'
    },
    {
        icon: <SquareUserIcon  className='w-5 h-5 stroke-slate-700 group-hover:stroke-slate-900' />,
        name: 'Profil',
        path: 'profil'
    },
]

export const baubauData = [
    {
      kecamatan: "Batupoaro",
      kelurahan: [
        "Bonebone",
        "Kaobula",
        "Lanto",
        "Nganganaumala",
        "Tarafu",
        "Wameo"
      ],
    },
    {
      kecamatan: "Betoambari",
      kelurahan: [
        "Sulaa",
        "Waborobo",
        "Lipu",
        "Katobengke",
        "Labalawa",
      ],
    },
    {
      kecamatan: "Kokalukuna",
      kelurahan: [
        "Kadolomoko",
        "Kadolo",
        "Waruruma",
        "Lakologou",
        "Liwuto",
        "Sukanaeyo",
      ],
    },
    {
      kecamatan: "Lea-Lea",
      kelurahan: [
        "Kalia-Lia",
        "Kantalai",
        "Kolese",
        "Lowu-Lowu",
        "Palabusa"
      ],
    },
    {
      kecamatan: "Murhum",
      kelurahan: [
        "Badia",
        "Lamangga",
        "Tanganapada",
        "Melai",
        "Wajo",
      ],
    },
    {
      kecamatan: "Sorawolio",
      kelurahan: [
        "Kaisabu Baru",
        "Karya Baru",
        "Bugi",
        "Gonda Baru",
      ],
    },
    {
      kecamatan: "Wolio",
      kelurahan: [
        "Bataraguru",
        "Batulo",
        "Bukit Wolio Indah",
        "Kadolokatapi",
        "Tomba",
        "Wale",
        "Wangkanapi",
      ],
    },
  ];
  