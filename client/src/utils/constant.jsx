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
        "Baadia",
        "Lamangga",
        "Melai",
        "Tanganapada",
        "Wajo",
      ],
    },
    {
      kecamatan: "Betoambari",
      kelurahan: [
        "Betoambari",
        "Katobengke",
        "Sulaa",
        "Nganganaumala",
        "Tanganapada",
      ],
    },
    {
      kecamatan: "Bungi",
      kelurahan: [
        "Bungi",
        "Karing-Karing",
        "Waborobo",
        "Wabula",
      ],
    },
    {
      kecamatan: "Kokalukuna",
      kelurahan: [
        "Kokalukuna",
        "Liwuto",
        "Sukanayo",
        "Wale",
        "Tomba",
        "Wangkanapi",
      ],
    },
    {
      kecamatan: "Lea-Lea",
      kelurahan: [
        "Lea-Lea",
        "Kantalai",
        "Gonda Baru",
        "Waborobo",
      ],
    },
    {
      kecamatan: "Murhum",
      kelurahan: [
        "Melai",
        "Nganganaumala",
        "Tanganapada",
        "Wajo",
        "Ngkaring-Ngkaring",
      ],
    },
    {
      kecamatan: "Sorawolio",
      kelurahan: [
        "Sorawolio",
        "Karing-Karing",
        "Waborobo",
        "Wabula",
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
  