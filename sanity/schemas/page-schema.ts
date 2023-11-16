const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "history",
      title: "Quick run down",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "excites",
      title: "What excites me about building",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
    },
  ],
};

export default page;
