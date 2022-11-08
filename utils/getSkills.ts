import { Skill } from "../typings";

export const getSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchSkills`);
    const data = await res.json();
    const skills: Skill[] = data.skills;
    return skills;
}