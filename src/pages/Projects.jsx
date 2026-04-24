import React from "react";
import "../assets/styles.css";

function Projects() {
  const renderMedia = (src, alt, type = "vertical") => {
    const isFigma = src.includes("figma.com");
    const isVideo = src.toLowerCase().endsWith(".mp4") || src.toLowerCase().endsWith(".mov");
    const itemClass = type === "landscape" ? "landscape-item" : "gallery-item";

    if (isFigma) {
      return (
        <iframe 
          className={itemClass}
          src={src}
          allowFullScreen
          loading="lazy"
          title={alt}
          style={{ border: "none" }}
        />
      );
    }

    if (isVideo) {
      return (
        <video src={src} className={itemClass} autoPlay loop muted playsInline />
      );
    }

    return <img src={src} alt={alt} className={itemClass} />;
  };

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        
        <div className="projects-header">
          <h1 className="projects-main-title">
            social media <span className="title-accent">creation</span>
          </h1>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-info">
              <span className="project-label">Bridge To Life</span>
              <span className="project-tag">#Graphic_Posts</span>
            </div>
            <div className="project-media-gallery">
              {renderMedia("/Portfolio/projects/B2L 1.png", "B2L 1")}
              {renderMedia("/Portfolio/projects/B2L 2.png", "B2L 2")}
              {renderMedia("/Portfolio/projects/B2L 3.png", "B2L 3")}
              {renderMedia("/Portfolio/projects/B2L 4.png", "B2L 4")}
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <span className="project-label">Appily</span>
              <span className="project-tag">#Trend_Videos #Study_Vlogs</span>
            </div>
            <div className="project-media-gallery">
              {renderMedia("/Portfolio/projects/APPILY 1.mp4", "APPILY 1")}
              {renderMedia("/Portfolio/projects/APPILY 2.mov", "APPILY 2")}
              {renderMedia("/Portfolio/projects/APPILY 3.mp4", "APPILY 3")}
              {renderMedia("/Portfolio/projects/APPILY 4.mp4", "APPILY 4")}
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <span className="project-label">Help Us Grow</span>
              <span className="project-tag">#Graphic_Posts #Testimonial_Videos</span>
            </div>
            <div className="project-media-gallery">
              {renderMedia("/Portfolio/projects/HUG 1.mp4", "HUG 1")}
              {renderMedia("/Portfolio/projects/HUG 2.mp4", "HUG 2")}
              {renderMedia("/Portfolio/projects/HUG 3.png", "HUG 3")}
              {renderMedia("/Portfolio/projects/HUG 4.png", "HUG 4")}
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <span className="project-label">Philippine Health Initiative</span>
              <span className="project-tag">#Graphic_Posts</span>
            </div>
            <div className="project-media-gallery">
              {renderMedia("/Portfolio/projects/PHI 1.png", "PHI 1")}
              {renderMedia("/Portfolio/projects/PHI 2.png", "PHI 2")}
              {renderMedia("/Portfolio/projects/PHI 3.png", "PHI 3")}
              {renderMedia("/Portfolio/projects/PHI 4.png", "PHI 4")}
            </div>
          </div>
        </div>

        <div className="projects-header section-divider">
          <h1 className="projects-main-title">
            ui/ux <span className="title-accent">projects</span>
          </h1>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-info">
              <span className="project-label">Lumia: AR Experience</span>
              <span className="project-tag">#University #Group_Project #Case_Study</span>
            </div>
            <div className="project-media-single">
              {renderMedia("https://embed.figma.com/proto/ltlT1UVgPjMppr9lJKsAme/LUMIA--AR-Experience?node-id=1-152&p=f&viewport=351%2C508%2C0.1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A152&page-id=0%3A1&embed-host=share", 
                "Lumia Figma Design", 
                "landscape")}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;