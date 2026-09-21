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
  Avatar,
  Skeleton,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Star as StarIcon,
  ForkRight as ForkIcon,
} from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  const projects = t('projects');

  const featuredNames = ['portfolio-website', 'e-commerce-brasil', 'task-manager-app'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setRepos([
        {
          id: 1,
          name: 'portfolio-website',
          description: 'Personal portfolio website built with React and Material-UI showcasing my work and skills',
          html_url: 'https://github.com/WilliamSimonelli/MyPortfolio',
          homepage: 'https://williamsimonelli.com',
          stargazers_count: 12,
          forks_count: 3,
          language: 'JavaScript',
          topics: ['react', 'material-ui', 'portfolio', 'responsive'],
        },
        {
          id: 2,
          name: 'e-commerce-brasil',
          description: 'E-commerce platform for Brazilian market with payment integration',
          html_url: 'https://github.com/WilliamSimonelli/e-commerce-brasil',
          homepage: '',
          stargazers_count: 18,
          forks_count: 5,
          language: 'TypeScript',
          topics: ['react', 'fastapi', 'aws', 'stripe'],
        },
        {
          id: 3,
          name: 'task-manager-app',
          description: 'Collaborative task management application with real-time updates',
          html_url: 'https://github.com/WilliamSimonelli/task-manager-app',
          homepage: '',
          stargazers_count: 15,
          forks_count: 4,
          language: 'Python',
          topics: ['fastapi', 'aws', 'dynamodb', 'react-native'],
        },
        {
          id: 4,
          name: 'aws-automation-toolkit',
          description: 'Automation toolkit for AWS services using Lambda, S3, and EventBridge',
          html_url: 'https://github.com/WilliamSimonelli/aws-automation-toolkit',
          homepage: '',
          stargazers_count: 8,
          forks_count: 2,
          language: 'Python',
          topics: ['aws', 'lambda', 'automation', 'serverless'],
        },
      ]);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      'React Native': '#61dafb',
    };
    return colors[language] || '#888888';
  };

  const ProjectCard = ({ repo }) => {
    const featured = featuredNames.includes(repo.name);
    return (
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(26,26,26,0.8)',
          backdropFilter: 'blur(10px)',
          border: featured ? '2px solid rgba(0,212,255,0.5)' : '1px solid rgba(255,255,255,0.1)',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: featured ? '0 20px 40px rgba(0,212,255,0.3)' : '0 20px 40px rgba(0,212,255,0.1)',
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
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: 'text.primary' }}>
              {repo.name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </Typography>
          </Box>

          <Typography variant="body2" paragraph sx={{ color: 'text.secondary', mb: 3, minHeight: '3rem' }}>
            {repo.description}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
            {repo.language && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 12, height: 12, borderRadius: '50%',
                    backgroundColor: getLanguageColor(repo.language), mr: 1,
                  }}
                />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{repo.language}</Typography>
              </Box>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <StarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{repo.stargazers_count}</Typography>
              <ForkIcon sx={{ fontSize: 16, color: 'text.secondary', ml: 1 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{repo.forks_count}</Typography>
            </Box>
          </Box>

          {repo.topics && repo.topics.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {repo.topics.slice(0, 3).map((topic) => (
                <Chip
                  key={topic}
                  label={topic}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(0,212,255,0.1)',
                    color: 'primary.main',
                    border: '1px solid rgba(0,212,255,0.3)',
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
            {projects.viewCode}
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
              {projects.liveDemo}
            </Button>
          )}
        </CardActions>
      </Card>
    );
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(0,212,255,0.05) 0%, rgba(0,0,0,0) 50%, rgba(255,107,53,0.05) 100%)',
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
            {projects.sectionTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            {projects.sectionSubtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {loading
            ? Array.from(new Array(4)).map((_, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Card sx={{ height: '100%', backgroundColor: 'rgba(26,26,26,0.8)' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
                      <Skeleton variant="text" sx={{ mb: 1 }} />
                      <Skeleton variant="text" width="80%" sx={{ mb: 2 }} />
                      <Skeleton variant="rectangular" height={60} sx={{ mb: 2 }} />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : repos.map((repo) => (
                <Grid size={{ xs: 12, sm: 6 }} key={repo.id}>
                  <ProjectCard repo={repo} />
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
              '&:hover': { borderColor: 'primary.light', backgroundColor: 'rgba(0,212,255,0.1)' },
            }}
          >
            {projects.viewAll}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
