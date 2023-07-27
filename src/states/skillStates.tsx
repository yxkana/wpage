
import { create } from 'zustand'

 export interface SkillState {
    skill: number
    isInView: boolean
    skills: Array<string>,
    setSkill: (newSkill: number) => void
    setIsInView: (bool: boolean)=> void
}

export const useShowFrontEndSkill = create<SkillState>((set) => ({
    skill: 0,
    isInView: false,
    skills: [
        "react",
        "tailwindcss",
        "chakraUI",
        "daisyUI",
        "framer motion",
        "figma"
    ],
    setSkill: (newSkill: number) => set(() => ({ skill: newSkill })),
    setIsInView: (bool: boolean ) => set(() => ({ isInView: bool })),
}))

export const useShowBackEndSkill = create<SkillState>((set) => ({
    skill: 0,
    isInView: false,
    skills: [
        "nextJS",
        "prisma",
        "superbase",
        "tRPC",
        "expressJS",
        "mongoDB",
    ],
    setSkill: (newSkill: number) => set(() => ({ skill: newSkill })),
    setIsInView: (bool: boolean ) => set(() => ({ isInView: bool })),
}))




