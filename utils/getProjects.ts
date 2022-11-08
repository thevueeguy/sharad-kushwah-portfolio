import { Project } from "../typings";

export const getProjects = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchProjects`);
    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects;
}