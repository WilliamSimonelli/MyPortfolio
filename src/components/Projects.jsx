import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  IconButton,
  Avatar,
  Skeleton,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Star as StarIcon,
  ForkRight as ForkIcon,
} from '@mui/icons-material';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Featured projects with additional metadata
  const featuredProjects = [
    {
      name: 'portfolio-website',
      description: 'Personal portfolio website built with React and Material-UI showcasing my work and skills',
      technologies: ['React', 'Material-UI', 'JavaScript', 'Vite'],
      featured: true,
    },
    {
      name: 'e-commerce-brasil',
      description: 'E-commerce platform for Brazilian market with payment integration',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      featured: true,
    },
    {
      name: 'task-manager-app',
      description: 'Collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI', 'PWA'],
      featured: true,
    },
  ];

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        // In a real implementation, you would fetch from GitHub API
        // For demo purposes, we'll simulate with timeout
        setTimeout(() => {
          const mockRepos = [
            {
              id: 1,
              name: 'portfolio-website',
              description: 'Personal portfolio website built with React and Material-UI showcasing my work and skills',
              html_url: 'https://github.com/WilliamSimonelli/portfolio-website',
              homepage: 'https://williamsimonelli.dev',
              stargazers_count: 12,
              forks_count: 3,
              language: 'JavaScript',
              topics: ['react', 'material-ui', 'portfolio', 'responsive'],
              updated_at: '2024-01-15',
            },
            {
              id: 2,
              name: 'e-commerce-brasil',
              description: 'E-commerce platform for Brazilian market with payment integration',
              html_url: 'https://github.com/WilliamSimonelli/e-commerce-brasil',
              homepage: 'https://ecommerce-brasil-demo.williamsimonelli.dev',
              stargazers_count: 18,
              forks_count: 5,
              language: 'JavaScript',
              topics: ['react', 'ecommerce', 'nodejs', 'stripe'],
              updated_at: '2024-01-20',
            },
            {
              id: 3,
              name: 'task-manager-app',
              description: 'Collaborative task management application with real-time updates',
              html_url: 'https://github.com/WilliamSimonelli/task-manager-app',
              homepage: 'https://taskmanager.williamsimonelli.dev',
              stargazers_count: 15,
              forks_count: 4,
              language: 'JavaScript',
              topics: ['react', 'firebase', 'pwa', 'realtime'],
              updated_at: '2024-01-10',
            },
            {
              id: 4,
              name: 'weather-app-brasil',
              description: 'Weather application for Brazilian cities with beautiful UI and forecasts',
              html_url: 'https://github.com/WilliamSimonelli/weather-app-brasil',
              homepage: 'https://weather-brasil.williamsimonelli.dev',
              stargazers_count: 8,
              forks_count: 2,
              language: 'JavaScript',
              topics: ['react', 'weather-api', 'brasil', 'responsive'],
              updated_at: '2024-01-05',
            },
          ];
          setRepos(mockRepos);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      React: '#61dafb',
      Vue: '#4fc08d',
      HTML: '#e34f26',
      CSS: '#1572b6',
    };
    return colors[language] || '#888888';
  };

  const ProjectCard = ({ repo, featured = false }) => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(10px)',
        border: featured 
          ? '2px solid rgba(0, 212, 255, 0.5)'
          : '1px solid rgba(255, 255, 255, 0.1)',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: featured
            ? '0 20px 40px rgba(0, 212, 255, 0.3)'
            : '0 20px 40px rgba(0, 212, 255, 0.1)',
        },
        transition: 'all 0.3s ease',
        position: 'relative',
      }}
    >
      {featured && (
        <Chip
          label="Featured"
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'primary.main',
            color: 'white',
            fontWeight: 600,
            zIndex: 1,
          }}
        />
      )}
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 40, height: 40 }}>
            <GitHubIcon />
          </Avatar>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: 600, color: 'text.primary' }}
          >
            {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          paragraph
          sx={{ color: 'text.secondary', mb: 3, minHeight: '3rem' }}
        >
          {repo.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
          {repo.language && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: getLanguageColor(repo.language),
                  mr: 1,
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {repo.language}
              </Typography>
            </Box>
          )}
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <StarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {repo.stargazers_count}
            </Typography>
            <ForkIcon sx={{ fontSize: 16, color: 'text.secondary', ml: 1 }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {repo.forks_count}
            </Typography>
          </Box>
        </Box>

        {repo.topics && repo.topics.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {repo.topics.slice(0, 3).map((topic) => (
              <Chip
                key={topic}
                label={topic}
                size="small"
                sx={{
                  backgroundColor: 'rgba(0, 212, 255, 0.1)',
                  color: 'primary.main',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ p: 3, pt: 0 }}>
        <Button
          size="small"
          startIcon={<GitHubIcon />}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
        >
          View Code
        </Button>
        {repo.homepage && (
          <Button
            size="small"
            startIcon={<LaunchIcon />}
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }}
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(0, 212, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(255, 107, 53, 0.05) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #00D4FF, #FF6B35)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            A selection of projects that showcase my skills and passion for creating innovative solutions.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {loading
            ? Array.from(new Array(4)).map((_, index) => (
                <Grid item xs={12} sm={6} lg={6} key={index}>
                  <Card sx={{ height: '100%', backgroundColor: 'rgba(26, 26, 26, 0.8)' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
                      <Skeleton variant="text" sx={{ mb: 1 }} />
                      <Skeleton variant="text" width="80%" sx={{ mb: 2 }} />
                      <Skeleton variant="rectangular" height={60} sx={{ mb: 2 }} />
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Skeleton variant="rounded" width={60} height={24} />
                        <Skeleton variant="rounded" width={80} height={24} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : repos.map((repo, index) => (
                <Grid item xs={12} sm={6} lg={6} key={repo.id}>
                  <ProjectCard 
                    repo={repo} 
                    featured={featuredProjects.some(fp => fp.name === repo.name)}
                  />
                </Grid>
              ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHubIcon />}
            href="https://github.com/WilliamSimonelli"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.light',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
              },
            }}
          >
            View All Projects on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
