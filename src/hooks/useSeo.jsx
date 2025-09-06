import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useSEO({ title, description, url }) {
  const location = useLocation();

  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let metaDescription = document.querySelector("meta[name='description']");
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    if (url) {
      const ogTags = [
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ];

      ogTags.forEach(({ property, content }) => {
        let tag = document.querySelector(`meta[property='${property}']`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("property", property);
          document.head.appendChild(tag);
        }
        tag.content = content;
      });
    }
  }, [title, description, url, location.pathname]); 
}
