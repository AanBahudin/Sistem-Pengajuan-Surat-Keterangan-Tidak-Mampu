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