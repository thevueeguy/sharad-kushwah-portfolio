export default {
    name: "certificate",
    title: "Certificate",
    type: "document",
    fields: [
      {
        name: "title",
        title: "title",
        description:"Title of the certificate",
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
        name: "summary",
        title: "Summary",
        type: "text",
      },
      {
        name:"technologies",
        title:"Technologies",
        type:"array",
        of: [{ type: "reference", to: { type: "skill" } }],
      }
    ],
  };
  