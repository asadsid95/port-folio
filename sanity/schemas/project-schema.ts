// define project schema
const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
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
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "listOfTechnologies",
      title: "List of Technologies",
      type: "array",
      of: [{ type: "block" }],
    },

    {
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "lessonsLearned",
      title: "Lessons Learned",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
