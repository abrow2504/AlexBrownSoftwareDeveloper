import { useEffect, useState } from 'react'
import './ProjectDetail.css'
import { useNavigation } from '../../NavigationContext'
import NavBar from '../../components/NavBar'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

interface GalleryImage {
    original: string
    thumbnail: string
    description?: string
    originalWidth?: number
    originalHeight?: number
}

interface ProjectPageProps {
    projectTitle: string
    projectOverview: string
    techStack: string[]
    context: {
        forWho: string
        problemToSolve: string
    }
    solution: {
        approach: string
        keyFeatures: string[]
    }
    challenges: {
        difficulties: string
        resolutions: string
        lessonsLearned: string[]
    }
    impact: {
        results: string;
        measurableOutcomes: string[]
    }
    includeGallery?: boolean
    images?: GalleryImage[]
}

export default function ProjectPage({ projectTitle, projectOverview, techStack, context, solution, challenges, impact, includeGallery = false, images = [] }: ProjectPageProps) {
  const { navigateToProjects } = useNavigation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  console.log('Gallery Debug:', { includeGallery, imageCount: images.length, images })
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const handleSlide = (currentIndex: number) => {
    setCurrentImageIndex(currentIndex)
  }
  
  return (
    <>
      <NavBar />
      <div className="project-detail">
        <div className="container">
          <h1>{projectTitle}</h1>
          
          <div className="two-column-layout">
            <div className="left-column">
              <div className="project-overview">
                <h2>Project Overview</h2>
                <p>
                  {projectOverview}
                </p>
              </div>

              <div className="project-context">
                <h2>Context</h2>
                <h3>For Who?</h3>
                <p>
                  {context.forWho}
                </p>
                <h3>What's the Problem to Solve?</h3>
                <p>
                  {context.problemToSolve}
                </p>
              </div>

              <div className="project-solution">
                <h2>Solution</h2>

                <h3>Plan/Approach</h3>
                <p>{solution.approach}</p>

                <h3>Key Features</h3> 
                <ul>
                  {solution.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="right-column">
              <div className="project-tech-stack">
                <h2>Technology</h2>
                <div className="tech-tags">
                  {techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  
                </div>
                            <h3>Measurable Outcomes</h3>
            <ul>{impact.measurableOutcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}</ul>
              </div>
            </div>
          </div>

          {includeGallery && images.length > 0 && (
            <div className="project-gallery">
              <h2>Gallery</h2>
              {images[currentImageIndex]?.description && (
                <div className="image-description">
                  <p>{images[currentImageIndex].description}</p>
                </div>
              )}
              <ImageGallery 
                items={images.map(image => ({
                  original: image.original,
                  thumbnail: image.thumbnail,
                  originalWidth: image.originalWidth,
                  originalHeight: image.originalHeight
                }))} 
                showFullscreenButton={false}
                onSlide={handleSlide}
              />
            </div>
          )}

          <div className="project-challenges">
            <h2>Challenges & Skills Learned</h2>

            <h3>What Was Difficult</h3>
            <p>
              {challenges.difficulties}
            </p>

            <h3>How I Figured It Out</h3>
            <p>
              {challenges.resolutions}
            </p>

            <h3>What I Learned</h3>
            <ul>{challenges.lessonsLearned.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}</ul>
          </div>

          <div className="project-impact">
            <h2>Impact & Results</h2>
            <p>
             {impact.results}
            </p>

          </div>

          <div className="project-links">
            <button onClick={navigateToProjects} className="btn">← Back to Projects</button>
          </div>
        </div>
      </div>
    </>
  )
}
