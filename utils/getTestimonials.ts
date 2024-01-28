import { Testimonial } from "../typings";

export const getTestimonials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchTestimonials`);
    const data = await res.json();
    const testimonials: Testimonial[] = data.testimonials;
    return testimonials;
}