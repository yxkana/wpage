import { create } from 'zustand'

interface SkillState {
    skill: number
    skills: Array<string>,
    setSkill: (newSkill: number) => void
}

export const useShowFrontEndSkill = create<SkillState>((set) => ({
    skill: 0,
    skills: [
        "react",
        "nextJS",
        "tailwindcss",
        "daisyUI",
        "framer motion",
        "and more.."
    ],
    setSkill: (newSkill: number) => set((state) => ({ skill: newSkill })),
}))

export const useShowBackEndSkill = create<SkillState>((set) => ({
    skill: 0,
    skills: [
        "tRPC",
        "prisma",
        "superbase",
        "expressJS",
        "mongoDB",
    ],
    setSkill: (newSkill: number) => set((state) => ({ skill: newSkill })),
}))