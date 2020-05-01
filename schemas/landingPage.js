export default {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      name: "page",
      title: "Page",
      type: "string",
      options: {
        list: [
          {
            title: "Home",
            value: "home"
          },
          {
            title: "Store",
            value: "store"
          },
          {
            title: "Collections",
            value: "collections"
          },
          {
            title: "About",
            value: "about"
          }
        ],
        layout: "radio"
      }
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "subtitle",
      title: "Sub Title",
      type: "string"
    },
    {
      title: "Color List",
      description: "Pick a color",
      name: "textColor",
      type: "colors", // required
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%"
        },
        list: [
          { title: "Yellow", value: "rgba(245, 199, 1, 0.5)" },
          { title: "Pink", value: { r: 246, g: 206, b: 219 } },
          { title: "Red", value: "#f16d70" },
          { title: "Teal", value: "#88c6db" },
          { title: "Purple", value: "#aca0cc" },
          { title: "Green", value: "#bdcdcb" },
          { title: "White", value: "white" }
        ]
      }
    },
    {
      name: "contentLocation",
      type: "string",
      title: "Content Location",
      description: "Location of content inside Main Image (Hero)",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Center", value: "center" }
        ]
      }
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "mainImage"
    },
    {
      name: "cta",
      title: "Calls to Action",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "cta" }]
        }
      ]
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ],
  preview: {
    select: {
      title: "page",
      image: "mainImage"
    },
    prepare({ title = "No title", image }) {
      return {
        title,
        media: image
      };
    }
  }
};
