
import {
  ProjectsSection,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectButton,
  ProjectsGrid,
  ProjectNumber,
  ProjectNumberText,
  LerMais
} from './styles'

import Project1 from '../../assets/images/NewTwitter-Feed.png'
import Project2 from '../../assets/images/loja-part1.png'
import Project3 from '../../assets/images/restaurante-part1.png'
import Project4 from '../../assets/images/agenda-part1.png'
import Project5 from '../../assets/images/Disney-clone.png'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      image: Project1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      link: 'http://18.118.173.210/entrar'
    },
    {
      id: 2,
      image: Project2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      link: 'https://projeto-6-loja-games.vercel.app/'
    },
    {
      id: 3,
      image: Project3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      link: 'https://projeto-al-khubz.vercel.app/'
    },
    {
      id: 4,
      image: Project4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      link: 'https://minhas-tarefas-projeto5.vercel.app/'
    },
    {
      id: 5,
      image: Project5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      link: 'https://ebac-projeto-clone-disney-plus.vercel.app/'
    }
  ]

  const [descriptionExpanded, setDescriptionExpanded] = useState<{[key:number]:boolean}>({})

  const toggleDescription = (id:number) => {
    setDescriptionExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const getDescription = (text:string, id: number) => {
    const isExpanded = descriptionExpanded[id] || false;

    if(!isExpanded && text.length > 250) {
      return (
        <>
          {text.slice(0,250)}...{' '}
          <LerMais type="button" onClick={() => toggleDescription(id)}>
            {t('projects.readMore')}
          </LerMais>
        </>
      )
    }
    return (
      <>
        {text}{' '}
        <LerMais type="button" onClick={() => toggleDescription(id)}>
          {t('projects.readLess')}
        </LerMais>
      </>
    )
  }

  return (
    <ProjectsSection id="portfolio">
      <h2>{t('projects.topFive')}</h2>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectNumber>
              <ProjectNumberText>{project.id}</ProjectNumberText>
            </ProjectNumber>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{getDescription(project.description, project.id)}</ProjectDescription>
            <ProjectButton href={project.link} target="_blank" rel="noopener noreferrer">
              {t('projects.viewProject')}
            </ProjectButton>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}

export default Projects
