import { Certificate } from "../typings";

export const getExperiences = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchCertificates`);
    const data = await res.json();
    const certificates: Certificate[] = data.certificates;
    return certificates;
}