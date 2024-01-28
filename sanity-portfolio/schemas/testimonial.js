export default {
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
      {
        name: "name",
        title: "name",
        description:"Name",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "review",
        title: "Review",
        type: "text",
      },
      {
        name:"position",
        title:"Position",
        type:"string"
      },
      {
        name:"linkedin",
        title:"Linkedin",
        type:"url",
      }
    ],
  };
  