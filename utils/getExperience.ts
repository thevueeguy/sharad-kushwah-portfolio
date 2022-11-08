import { Experience } from "../typings";

export const getExperience = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchExperience`);
    const data = await res.json();
    const experience: Experience[] = data.experience;
    return experience;
}