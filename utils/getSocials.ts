import { Social } from "../typings";

export const getSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchSocials`);
    const data = await res.json();
    const socials: Social[] = data.socials;
    return socials;
}